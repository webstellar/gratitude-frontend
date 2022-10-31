// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAtji_Qvv2NKawJNT2ClqnAd2ZUSRLhlmA",
  authDomain: "gratitude-385c2.firebaseapp.com",
  projectId: "gratitude-385c2",
  storageBucket: "gratitude-385c2.appspot.com",
  messagingSenderId: "792259688334",
  appId: "1:792259688334:web:9d7b7ebdd9dad2594e96df",
  measurementId: "G-W5Y7GGM8P1"
  };

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const VAPID_KEY = process.env.REACT_APP_VAPID_KEY;

export const requestForToken = async () => {
    return await getToken(messaging, { vapidKey: VAPID_KEY})
      .then( async (token) => {
        if (token) {
          let currentToken = document.cookie.split(';').filter(ele => ele.includes('FCM'));
          if(currentToken && currentToken.length!==0)
            currentToken = currentToken[0].split("=")[1]
          else { document.cookie = `FCMToken=${token}` };
          if(!currentToken || currentToken !== token) {
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };
            await axios.post("/api/v1/updateToken", {FCMToken: token}, config);
          }
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload)
      resolve(payload);
    });
  });

  