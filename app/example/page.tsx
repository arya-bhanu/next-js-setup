import nextAuthOptions from '@/config/nextAuthOptions';
import { getServerSession } from 'next-auth';
import React from 'react';
import ProtectedExample from './components/protected-example';

const Example = async () => {
	const session = await getServerSession(nextAuthOptions);
	return <div>{session && <ProtectedExample {...session} />}</div>;
};

export default Example;
