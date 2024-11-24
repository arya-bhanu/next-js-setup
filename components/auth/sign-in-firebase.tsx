'use client';
import { signInGoogle } from '@/action/firebase';
import { GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignInFirebase = () => {
	const router = useRouter();
	async function handleSiginGoogleFirebase() {
		signInGoogle()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				console.log(token);
				const user = result.user;
				console.log(user);
				router.push('/firebase');
			})
			.catch((error) => {
				console.log(error);
			});
	}
	return (
		<div>
			<button onClick={handleSiginGoogleFirebase}>
				Google Firebase Signin
			</button>
		</div>
	);
};

export default SignInFirebase;
