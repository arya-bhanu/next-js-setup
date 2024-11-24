import { getAuth } from 'firebase/auth';
import { app } from './firebaseApp.util';

const auth = getAuth(app);

export default auth;
