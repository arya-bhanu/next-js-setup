'use client';
import auth from '@/utils/firebase/firebaseAuth.util';
import { onAuthStateChanged } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

const FirebaseGuard = ({
	children,
	redirectTo = '/auth/signin',
}: {
	children: ReactNode;
	redirectTo?: string;
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLoading(false);
			} else {
				router.push(redirectTo);
			}
		});
	}, [redirectTo, router]);
	return (
		<>
			{isLoading ? (
				<div className='fixed inset-0 z-50'>
					<div className='relative bg-black/50 min-h-screen flex items-center justify-center'>
						<div className='w-fit h-fit'>
							<Image
								alt='loading'
								src={'tube-spinner.svg'}
								width={50}
								height={50}
							/>
						</div>
					</div>
				</div>
			) : (
				children
			)}
		</>
	);
};

export default FirebaseGuard;
