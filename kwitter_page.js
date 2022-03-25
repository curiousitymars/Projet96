const firebaseConfig = {
    apiKey: "AIzaSyAZ_RGEJB3myx_MyL2QU8YpAiII9KDHifY",
    authDomain: "kwitter-projecti.firebaseapp.com",
    databaseURL: "https://kwitter-projecti-default-rtdb.firebaseio.com",
    projectId: "kwitter-projecti",
    storageBucket: "kwitter-projecti.appspot.com",
    messagingSenderId: "911582933393",
    appId: "1:911582933393:web:8cb8db1b60d1ff7ea8aa30"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();
function send() {
  msg = document.getElementById("msg").value;  
  firebase.database().ref(room_name).push({
        name:user_name, 
        message: msg, 
        like:0
  });
  document.getElementById("msg").value = "";
}
function logout() {
    window.location = "index.html"
}