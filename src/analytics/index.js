var firebase = require("firebase/app")
require("firebase/auth")
require("firebase/database")

export default () => {
  const session = Date.now(),
  updateSessionLength = (db, uid) => {
    const update = {}
    update[session] = {
      lengthS: (Date.now() - session) / 1000,
    }
    db.child(uid).update(update)
  },
  config = {
    apiKey: "AIzaSyAoxSJsNbaUwQtI4VL4eDtMHByL_o_XJlU",
    authDomain: "upside-down-drawing.firebaseapp.com",
    databaseURL: "https://upside-down-drawing.firebaseio.com",
    projectId: "upside-down-drawing",
    storageBucket: "",
    messagingSenderId: "479252829276"
  }

  firebase.initializeApp(config)

  const db = firebase.database().ref('analytics'),
  auth = firebase.auth()

  auth.signInAnonymously()
  auth.onAuthStateChanged((user) => {
    if (user) {
      updateSessionLength(db, user.uid)
      setInterval(() => updateSessionLength(db, user.uid), 10 * 1000)
    }
  })
}
