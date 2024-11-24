import { initializeApp } from 'firebase/app';
import firebaseConfig from '@/config/firebaseConfig';

const app = initializeApp(firebaseConfig);

export { app };
