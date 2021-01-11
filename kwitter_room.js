var firebaseConfig = {
  apiKey: "AIzaSyCutoqk67ZYInsKVsOxgjh2yxs02r3l0AM",
  authDomain: "class-project-93.firebaseapp.com",
  databaseURL: "https://class-project-93-default-rtdb.firebaseio.com",
  projectId: "class-project-93",
  storageBucket: "class-project-93.appspot.com",
  messagingSenderId: "407807535193",
  appId: "1:407807535193:web:dfb53facd379093ef8a948",
  measurementId: "G-65SSY7CXV1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();