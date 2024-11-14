import { Suspense } from 'react';
import CabinList from '@/app/_components/CabinList';
import Spinner from '@/app/_components/Spinner';

export const revalidate = 3600; // 밀리세컨 아니고 기준이 초임.  60*60: 1 시간에 한번. revalidate 에는 computed 값(ex 5*12)을 넣을 수 없다. 처음에는 완전한 수를 넣어야 한다.

export const metadata = {
	title: 'Cabins',
	description: 'Cabins detail, look at precisely',
	keywords: 'Cabins, details',
};
export default function Page() {
	// CHANGE

	return (
		<div>
			<h1 className='text-4xl mb-5 text-accent-400 font-medium'>
				Our Luxury Cabins
			</h1>
			<p className='text-primary-200 text-lg mb-10'>
				Cozy yet luxurious cabins, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>
			<Suspense fallback={ <Spinner /> }>
				<CabinList /> { /*  noSotre때문에 이 부분만 동적이 된다. */ }
			</Suspense>
		</div>
	);
}
