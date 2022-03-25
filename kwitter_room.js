// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ_RGEJB3myx_MyL2QU8YpAiII9KDHifY",
    authDomain: "kwitter-projecti.firebaseapp.com",
    projectId: "kwitter-projecti",
    storageBucket: "kwitter-projecti.appspot.com",
    messagingSenderId: "911582933393",
    appId: "1:911582933393:web:8cb8db1b60d1ff7ea8aa30"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child("room_name").update({
          purpose:"adding room_name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    console.log("room name:" + Room_names);
    row = "<div class='room_name' id="+ Room_names + " onclick = 'redirectToRoomname(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row; 
});});}
getData();

function redirectToRoomname(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
    window.location = "index.html"
} 