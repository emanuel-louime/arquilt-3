import { initializeApp} from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { 
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MSG_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} from '$env/static/private';

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectID: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MSG_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);