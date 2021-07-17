
var firebaseConfig = {
      apiKey: "AIzaSyBnJ15tYJowe8sxQFWuNB_Ka8uvq1EA3tQ",
      authDomain: "kwitter-8ab80.firebaseapp.com",
      databaseURL: "https://kwitter-8ab80-default-rtdb.firebaseio.com",
      projectId: "kwitter-8ab80",
      storageBucket: "kwitter-8ab80.appspot.com",
      messagingSenderId: "889181032449",
      appId: "1:889181032449:web:94a8f69211cd6c9f50f000"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User's Name");
    document.getElementById("user_name").innerHTML="welcome"+" "+user_name+"!";
    function addRoom(){
      var Room_names=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(Room_names).update({
            purpose : "adding room name"
      });
      localStorage.setItem("Room Name",Room_names)
      window.location="kwitter_page.html";
    }

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
          console.log("Room_names" + Room_names );
          var row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
          document.getElementById("output").innerHTML+=row;
          
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
