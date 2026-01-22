import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import './style.css'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpo6EzmIORwPu0Lxqs0UcM8glt_FkvNTY",
    authDomain: "midnight-cafe-e0b0e.firebaseapp.com",
    projectId: "midnight-cafe-e0b0e",
    storageBucket: "midnight-cafe-e0b0e.firebasestorage.app",
    messagingSenderId: "730643370993",
    appId: "1:730643370993:web:5f65c9d81f659016b2aa50",
    measurementId: "G-ZP9P4GCSGW"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const app = createApp(App)
const head = createHead()

app.use(head)
app.mount('#app')