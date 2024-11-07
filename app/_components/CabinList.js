import React from 'react';
import CabinCard from '@/app/_components/CabinCard';
import { getCabins } from '@/app/_lib/data-service';

export default async function CabinList() {
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
