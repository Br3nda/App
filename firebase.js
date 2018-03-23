import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyC9cQqCdDXyjjAmtK7MkZpU3617vixnL44',
  authDomain: 'whare-hauora-app-64525.firebaseapp.com',
  databaseURL: 'https://whare-hauora-app-64525.firebaseio.com',
  projectId: 'whare-hauora-app-64525',
  storageBucket: 'whare-hauora-app-64525.appspot.com',
  messagingSenderId: '608987462417'
}
console.log('firebase apps', firebase.apps)
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase
