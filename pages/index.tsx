import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>WAM Mockups — Preview</title>
      </Head>

      <main style={{ maxWidth: 900, margin: '32px auto', padding: 16 }}>
        <h1>WAM Mockups</h1>
        <p>Choose a variant to preview:</p>
        <ul>
          <li>
            <Link href='/mockup1'>Mockup 1 — Product grid</Link>
          </li>
          <li>
            <Link href='/mockup2'>Mockup 2 — Technical detail</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
