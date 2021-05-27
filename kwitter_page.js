//YOUR FIRE BASE LINKS
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
  
      user_name = localStorage.getItem("username");
      room_name = localStorage.getItem("roomname");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
    }
  
 
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("kwitter.html");
  }
  