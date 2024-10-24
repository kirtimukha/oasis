import React from 'react';

export default async function Page () {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
 return (
  <>
    <h1>cabins</h1>
    {data.length>0 &&
      (<ul>
        {data?.map((user) =>
          <li key={user.id}>{user.name}</li>
        )}
      </ul>)
    }
  </>
 );
}