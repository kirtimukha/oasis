import { Suspense } from 'react';
import CabinList from '@/app/_components/CabinList';
import Spinner from '@/app/_components/Spinner';
import Filter from '@/app/_components/Filter';

// 결국 cabins 페이지는 필터를 통해서 렌더되므로 항상 동적으로 렌더된다. 그래서 revalidate 가 불필요하다. - 이 revalidate 는 정적페이지에서만 필요하니까!
//  하지만 필터 파람 없이 열릴 수도 있으니까 일단 주석하지 않고 둔다.
export const revalidate = 3600; // 밀리세컨 아니고 기준이 초임.  60*60: 1 시간에 한번. revalidate 에는 computed 값(ex 5*12)을 넣을 수 없다. 처음에는 완전한 수를 넣어야 한다.

export const metadata = {
	title: 'Cabins',
	description: 'Cabins detail, look at precisely',
	keywords: 'Cabins, details',
};
export default function Page({ searchParams }) {
	// CHANGE
	//searchParams이 변경되면 cabins 페이지 전제 구성요소가 다시 리 렌더 된다.
	// 즉 페치도 다시 일어나니까 서스펜스의 로딩도 다시 보이게 된다.
	const filter = searchParams?.capacity ?? 'all';

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
			<div className='flex justify-end mb-8'>
				<Filter />
			</div>
			<Suspense fallback={ <Spinner /> } key={ filter }>
				{ ' ' }
				{ /* }// key를 추가로 넣으니까 필터를 누를 때도 다시 로딩이 표시된다. 리스트가 필터를 타니까 각 필터가 아니면 다시 서스펜스를 부른다. */ }
				<CabinList filter={ filter } />{ ' ' }
				{ /*  noSotre때문에 이 부분만 동적이 된다. */ }
			</Suspense>
		</div>
	);
}
