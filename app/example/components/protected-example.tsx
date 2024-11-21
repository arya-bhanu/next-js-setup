'use client';
import SignOut from '@/components/auth/sign-out';
import { Session } from 'next-auth';
import React from 'react';

const ProtectedExample = (session: Session | null) => {
	return (
		<div>
			ProtectedExample
			<p>Hello {session?.user.name}</p>
			<SignOut />
		</div>
	);
};

export default ProtectedExample;
