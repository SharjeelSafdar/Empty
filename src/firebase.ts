import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAIHHrZB-JRqq0XVCp8NicXCE_wZ1CW8Qw",
    authDomain: "expense-tracker-project7-3ff82.firebaseapp.com",
    databaseURL: "https://expense-tracker-project7-3ff82.firebaseio.com",
    projectId: "expense-tracker-project7-3ff82",
    storageBucket: "expense-tracker-project7-3ff82.appspot.com",
    messagingSenderId: "164630845172",
    appId: "1:164630845172:web:ef83173cfccff9e926b0a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;