'use client';
import { signOutGoogle } from '@/action/firebase';
import auth from '@/utils/firebase/firebaseAuth.util';
import React from 'react';

const FirebasePage = () => {
	console.log(auth?.currentUser)
	return (
		<div>
			FirebasePage
			<button onClick={() => signOutGoogle()}>Sign Out</button>
		</div>
	);
};

export default FirebasePage;
