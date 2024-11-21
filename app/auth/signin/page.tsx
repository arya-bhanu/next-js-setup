import SignIn from '@/components/auth/sign-in';
import React from 'react';

const SignInPage = async () => {
	const resJSON = await fetch('http://localhost:3000/api/jwt');
	console.log(await resJSON.json());
	return (
		<div>
			<SignIn />
		</div>
	);
};

export default SignInPage;
