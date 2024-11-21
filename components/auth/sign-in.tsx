'use client';
import { signIn } from 'next-auth/react';
import React from 'react';

const SignIn = () => {
	return (
		<div>
			<button
				onClick={() =>
					signIn('google', {
						callbackUrl: `${process.env.NEXT_PUBLIC_URL}/example`,
					})
				}
			>
				Sign In Google
			</button>
		</div>
	);
};

export default SignIn;
