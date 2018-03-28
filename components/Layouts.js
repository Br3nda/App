import style from "./styles/style";

class Layouts extends React.Component {
  componentDidMount() {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(registration => {
            console.log("SW registered: ", registration);
            Notification.requestPermission()
              .then(function(result) {
                console.log(result);
                navigator.serviceWorker.ready.then(registration => {
                  if (!registration.pushManager) {
                    alert("Push Unsupported");
                    return;
                  }
                  const vapidPublicKey =
                    "BPCnADjDVFsexLnj6ESRHuu9YlDwg7P8b8k4_mi48LB8UDAYvTpAWYfBofUD8F9LWkh6U0dJqX0kCoF-yWb-tbM";
                  const convertedVapidKey = urlBase64ToUint8Array(
                    vapidPublicKey
                  );
                  function urlBase64ToUint8Array(base64String) {
                    const padding = "=".repeat(
                      (4 - base64String.length % 4) % 4
                    );
                    const base64 = (base64String + padding)
                      .replace(/\-/g, "+")
                      .replace(/_/g, "/");
                    const rawData = window.atob(base64);
                    const outputArray = new Uint8Array(rawData.length);
                    for (let i = 0; i < rawData.length; ++i) {
                      outputArray[i] = rawData.charCodeAt(i);
                    }
                    return outputArray;
                  }
                  registration.pushManager
                    .subscribe({
                      userVisibleOnly: true, // Always display notifications
                      applicationServerKey: convertedVapidKey
                    })
                    .then(subscription =>
                      fetch("/register", {
                        body: subscription,
                        method: "POST"
                      })
                    )
                    .catch(err =>
                      console.error("Push subscription error: ", err)
                    );
                });
              })
              .catch(registrationError => {
                console.log("SW registration failed: ", registrationError);
              });
          });
      });
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
      </div>
    );
  }
}

export default Layouts;
