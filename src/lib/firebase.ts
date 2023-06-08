import { initializeApp, type FirebaseOptions} from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { FIREBASE_CONFIG } from '$env/static/private';

const app = initializeApp(FIREBASE_CONFIG);
export const database = getDatabase(app, )