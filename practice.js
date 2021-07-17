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
function addUser() {
    var user_name= document.getElementById("user_name").value ;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding User"
    });
}