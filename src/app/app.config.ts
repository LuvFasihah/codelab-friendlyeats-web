import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-d0f26","appId":"1:9078663734:web:fdbb869f3bda5279dac697","storageBucket":"friendlychat-d0f26.firebasestorage.app","apiKey":"AIzaSyA_13aQCnkHf3h9kX4QqjJVxCtxUT9BXBM","authDomain":"friendlychat-d0f26.firebaseapp.com","messagingSenderId":"9078663734"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-d0f26","appId":"1:9078663734:web:fdbb869f3bda5279dac697","storageBucket":"friendlychat-d0f26.firebasestorage.app","apiKey":"AIzaSyA_13aQCnkHf3h9kX4QqjJVxCtxUT9BXBM","authDomain":"friendlychat-d0f26.firebaseapp.com","messagingSenderId":"9078663734"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-d0f26","appId":"1:9078663734:web:fdbb869f3bda5279dac697","storageBucket":"friendlychat-d0f26.firebasestorage.app","apiKey":"AIzaSyA_13aQCnkHf3h9kX4QqjJVxCtxUT9BXBM","authDomain":"friendlychat-d0f26.firebaseapp.com","messagingSenderId":"9078663734"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())  ],
};