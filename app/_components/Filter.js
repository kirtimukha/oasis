'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Filter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const activeFilter = searchParams.get('capacity') ?? 'all';

	function handleFilter(filter) {
		const params = new URLSearchParams(searchParams); //web api urlSearchParams
		params.set('capacity', filter); //set, delete 등등의 메서드가 있음

		//router.replace nextjs에 의해 url이 클라이언트 상태에서 변경되며, 동적 페이지 렌더가 다시 일어나지 않는다.
		router.replace(`${pathname}?${params.toString()}`, { scroll: false }); // scroll 이 탑으로 가지 않도록 해준다.
	}

	return (
		<div className='border border-primary-800 inline-flex'>
			<Button
				filter={ 'all' }
				handleFilter={ handleFilter }
				activeFilter={ activeFilter }
			>
				All Cabins
			</Button>
			<Button
				filter={ 'small' }
				handleFilter={ handleFilter }
				activeFilter={ activeFilter }
			>
				1~2 guests
			</Button>
			<Button
				filter={ 'medium' }
				handleFilter={ handleFilter }
				activeFilter={ activeFilter }
			>
				3~7 guests
			</Button>
			<Button
				filter={ 'large' }
				handleFilter={ handleFilter }
				activeFilter={ activeFilter }
			>
				8 more guests
			</Button>
		</div>
	);
}

function Button({ filter, handleFilter, activeFilter, children }) {
	return (
		<button
			className={ `px-5 py-2 hover:bg-primary-600 ${filter === activeFilter ? 'bg-primary-600 text-primary-50' : ''}` }
			onClick={ () => handleFilter(filter) }
		>
			{ children }
		</button>
	);
}

export default Filter;
