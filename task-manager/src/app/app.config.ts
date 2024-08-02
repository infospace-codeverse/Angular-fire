import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
// import { getFunctions, provideFunctions } from '@angular/fire/functions';
// import { getMessaging, provideMessaging } from '@angular/fire/messaging';
// import {
//   getRemoteConfig,
//   provideRemoteConfig,
// } from '@angular/fire/remote-config';

const firebaseConfig = {
  projectId: 'taskmanager-dca1f',
  appId: '1:1004540403281:web:8552d4bad4a0a18feb6270',
  storageBucket: 'taskmanager-dca1f.appspot.com',
  apiKey: 'AIzaSyBZChDjaLTcu4IJIHvhh-njuzYP0aAjgn8',
  authDomain: 'taskmanager-dca1f.firebaseapp.com',
  messagingSenderId: '1004540403281',
  measurementId: 'G-PHSQP45XN5',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    // provideAuth(() => getAuth()),
    // provideDatabase(() => getDatabase()),
    // provideFunctions(() => getFunctions()),
    // provideMessaging(() => getMessaging()),
    // provideRemoteConfig(() => getRemoteConfig()),
  ],
};
