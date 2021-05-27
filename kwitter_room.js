var firebaseConfig = {
  apiKey: "AIzaSyCGm9B6ZEp1cO_5ojtEjujjF1QdOhxLcHI",
  authDomain: "kwitter-87fed.firebaseapp.com",
  databaseURL: "https://kwitter-87fed.firebaseio.com",
  projectId: "kwitter-87fed",
  storageBucket: "kwitter-87fed.appspot.com",
  messagingSenderId: "150109639188",
  appId: "1:150109639188:web:e4e14169dc3a8d0da00d01"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("Username_input");
document.getElementById("user_name").innerHTML = "Welcome" + username + "!";

function addroom(){
  roomname = document.getElementById("room_name").value
  firebase.database().ref("/").child(roomname).update({
        purpose : "Add Room name"
  })
  localStorage.setItem("roomname", roomname)
  window.location = "kwitter_page.html";

}

function getData() {
  firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {
    childKey =childSnapshot.key;
 Room_names = childKey;
 
 });});}
getData();
function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("roomname" , name)
  window.location = "kwitter.html";

}
function logout(){
  localStorage.removeItem("roomname")
  localStorage.removeItem("username")
  window.location = "kwitter.html";
}


