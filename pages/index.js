import Link from 'next/link'
import Layouts from '../components/Layouts'
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC9cQqCdDXyjjAmtK7MkZpU3617vixnL44",
  authDomain: "whare-hauora-app-64525.firebaseapp.com",
  databaseURL: "https://whare-hauora-app-64525.firebaseio.com",
  projectId: "whare-hauora-app-64525",
  storageBucket: "whare-hauora-app-64525.appspot.com",
  messagingSenderId: "608987462417"
};
firebase.initializeApp(config)



const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('Have permission')
})
.catch(function(err){
  console.log('Error happened')
})


const Index = () => (
  <Layouts>
    <p>Welcome to our awesome app</p>
  </Layouts>
)

export default Index
