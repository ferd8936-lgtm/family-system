importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC4wyLWlZSDwNN8pqMSxiebB9z5CWrc93E",
  projectId: "family-systems-4d19c",
  messagingSenderId: "670976286244",
  appId: "1:670976286244:web:84ae3450cbfc6823ec82b1"
});

const messaging = firebase.messaging();