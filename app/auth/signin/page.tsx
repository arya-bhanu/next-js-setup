import SignIn from '@/components/auth/sign-in';
import SignInFirebase from '@/components/auth/sign-in-firebase';
import React from 'react';

const SignInPage = async () => {
	const resJSON = await fetch('http://localhost:3000/api/jwt');
	console.log(await resJSON.json());
	return (
		<div>
			<SignIn />
			<SignInFirebase />
		</div>
	);
};

export default SignInPage;
