import googleProvider from '@/utils/firebase/firebase-auth-provider/googleAuth.provider';
import auth from '@/utils/firebase/firebaseAuth.util';
import { signInWithPopup, signOut } from 'firebase/auth';

export const signInGoogle = async () => {
	return await signInWithPopup(auth, googleProvider);
};

export const signOutGoogle = async () => {
	return await signOut(auth);
};
