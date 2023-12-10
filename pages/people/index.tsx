import { useState } from 'react';
import Head from 'next/head';

import style from '@/styles/Home.module.scss';

export async function getStaticProps() {
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
}

export default function People({ data }: { data: any }) {
  const [people, setPeople] = useState(data.results);

  return (
    <>
      <Head>
        <title>StarWars :: People</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.container}>
        <h1 className={style['work-progress']}>PEOPLE</h1>
        <ul>
          {people.map((person: any) => (
            <li key={person.name}>
              <p>{person.name}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}