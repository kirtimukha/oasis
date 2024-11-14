import React from 'react';
import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';
import { unstable_noStore as noStore } from 'next/cache';

export default async function CabinList() {
	noStore(); // 아무것도 캐시하지 않도록 함 , 동적으로 전체 경로를 다시 함생성함
	const cabins = await getCabins();

	if (!cabins.length) return null;

	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
			{ cabins.map(item => (
				<CabinCard cabin={ item } key={ item.id } />
			)) }
		</div>
	);
}
