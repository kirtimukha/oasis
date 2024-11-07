import React from 'react';

export const metadata = {
  title: 'Profile',
};

function Page() {
  return (
    <h2 className={ 'font-semibold text-2sl text-accent-400 mb-7' }>
      Welcome,&nbsp;
      <a href={ '/account/reservations' }>Stella!</a>
      <br />
      <a href={ '/account/profile' } className={ 'text-2l text-gray-50 mt-3' }>
        checkout!
      </a>
    </h2>
  );
}

export default Page;
