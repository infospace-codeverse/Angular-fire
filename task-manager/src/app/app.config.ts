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
  apiKey: "AIzaSyBRqO9xpx7BO0gaJLBQp_LYa-S8RqYQWTo",
  authDomain: "gdsc-kabarak-codelab.firebaseapp.com",
  databaseURL: "https://gdsc-kabarak-codelab-default-rtdb.firebaseio.com",
  projectId: "gdsc-kabarak-codelab",
  storageBucket: "gdsc-kabarak-codelab.appspot.com",
  messagingSenderId: "830944198842",
  appId: "1:830944198842:web:fd361f51486a7716518283"
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
