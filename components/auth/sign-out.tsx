import { signOut } from 'next-auth/react';
import React from 'react';

const SignOut = () => {
	return (
		<button
			onClick={() =>
				signOut({
					callbackUrl: `${process.env.NEXT_PUBLIC_URL}/`,
				})
			}
		>
			Sign Out
		</button>
	);
};

export default SignOut;
