importScripts("https://www.gstatic.com/firebasejs/11.5.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.5.0/firebase-messaging-compat.js");

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDCIwiDBlwlkNj7WST1iXdel9Eh9mNKcx0",
  authDomain: "tests-abe52.firebaseapp.com",
  projectId: "tests-abe52",
  storageBucket: "tests-abe52.firebasestorage.app",
  messagingSenderId: "1087795231875",
  appId: "1:1087795231875:web:d93439cf46dee27e726fb6",
  measurementId: "G-13BD2P5V8L"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Manejar notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log("📩 Notificación en segundo plano:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
