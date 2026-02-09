const firebaseConfig = {
  apiKey: "AIzaSyCJOhgSgI6cfFcreWGXGBqDdTmEv757H2A",
  authDomain: "asmo-yangi.firebaseapp.com",
  projectId: "asmo-yangi",
  storageBucket: "asmo-yangi.firebasestorage.app",
  messagingSenderId: "485426782460",
  appId: "1:485426782460:web:5d2c7d1420c288371f7779",
  measurementId: "G-SKKGPEEEXM",
  databaseURL: "https://asmo-yangi-default-rtdb.firebaseio.com/",
};

// Firebase-ni ishga tushirish
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Global o'zgaruvchilar (Barcha sahifalar uchun)
const db = firebase.database();
const auth = firebase.auth();
