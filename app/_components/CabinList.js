import React from 'react';
import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';
import { unstable_noStore as noStore } from 'next/cache';

export default async function CabinList({ filter }) {
	noStore(); // 아무것도 캐시하지 않도록 함 , 동적으로 전체 경로를 다시 함생성함
	const cabins = await getCabins();
	if (!cabins.length) return null;

	let displayedCabins;

	switch (filter) {
		case 'all':
			displayedCabins = cabins;
			break;
		case 'small':
			displayedCabins = cabins.filter(cabin => cabin.maxCapacity <= 3);
			break;
		case 'medium':
			displayedCabins = cabins.filter(
				cabin => cabin.maxCapacity >= 4 && cabin.maxCapacity < 8,
			);
			break;
		case 'large':
			displayedCabins = cabins.filter(cabin => cabin.maxCapacity >= 8);
			break;
		default:
			displayedCabins = cabins;
			break;
	}

	return (
		<div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
			{ displayedCabins?.map(item => (
				<CabinCard cabin={ item } key={ item.id } />
			)) }
		</div>
	);
}
