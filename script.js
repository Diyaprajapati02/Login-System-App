//Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAxi8wnpfLlm0_jE5TiFqYKzY6x9hljhP0",
    authDomain: "login-app-81323.firebaseapp.com",
    projectId: "login-app-81323",
    storageBucket: "login-app-81323.firebasestorage.app",
    messagingSenderId: "753061912170",
    appId: "1:753061912170:web:a179c5775db50f77fdf413"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Auth reference
const auth= firebase.auth();

//Sign up
function signup() {
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email,password).then(() =>
    {
        alert("Signup successful !");
    })
    .catch((error) => {
        alert(error.message);
    });
}

//Login
function login() {
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email,password).then(() =>
    {
        alert("Login successful !");
    })
    .catch(error => {
        alert(error.message);
    });
}
