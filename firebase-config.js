/* firebase-config.js — Shared Firebase initialization
   Loaded via <script> on suggest, admin, and things pages.
   Exposes window.__db (Firestore) and window.__auth (Auth). */
(function() {
    'use strict';

    var firebaseConfig = {
        apiKey: "AIzaSyDcvU9sPX-H5hcW_5ckihrq_F-0ymD-SPc",
        authDomain: "cemi-ai-100.firebaseapp.com",
        projectId: "cemi-ai-100",
        storageBucket: "cemi-ai-100.firebasestorage.app",
        messagingSenderId: "97325080848",
        appId: "1:97325080848:web:d8ad9f77a6784fc9ee8595",
        measurementId: "G-5BQ9VNWRX5"
    };

    // Initialize Firebase (compat SDK)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Expose Firestore and Auth globally
    window.__db = firebase.firestore();
    if (typeof firebase.auth === 'function') {
        window.__auth = firebase.auth();
    }
})();
