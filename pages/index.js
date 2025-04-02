import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/NextJS-is-great-Framework">NextJS is great Framework</Link>
        </li>
        <li>
          <Link href="/news/Something-Else">Something Else</Link>
        </li>
      </ul>
    </>
  );
}
