import FirebaseGuard from '@/components/utils/firebase-guard';
import React, { ReactNode } from 'react';

const FirebaseLayout = ({ children }: { children: ReactNode }) => {
	return <FirebaseGuard>{children}</FirebaseGuard>;
};

export default FirebaseLayout;
