// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBe9vnUw4Ok-WXYQcS50e0vkYp7kxahpWI",
    authDomain: "contactform-d9534.firebaseapp.com",
    databaseURL: "https://contactform-d9534.firebaseio.com",
    projectId: "contactform-d9534",
    storageBucket: "contactform-d9534.appspot.com",
    messagingSenderId: "616578905505"
  };
  firebase.initializeApp(config);

//Reference message collection
var messagesRef=firebase.database().ref('messages');
//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',submitForm);
//submit form
function submitForm(e){
	e.preventDefault();
//get values
var name=getInputVal('name');
var last=getInputVal('last');
var email=getInputVal('email');
var subject=getInputVal('subject');
var message=getInputVal('message');
if(name!="" && last!="" && email!="" && subject!="" && message!=""){
	saveMessage(name,last,email,subject,message);
}



}
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}
//Save message to firebase
function saveMessage(name,last,email,subject,message){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		name:name,
		last:last,
		email:email,
		subject,subject,
		message:message
	});
	//Show Alert
document.querySelector('#success').style.display='block';

//Hide alert after 3 sec
setTimeout(function(){
document.querySelector('#success').style.display='none';

},3000);

document.getElementById('contactForm').reset();
}