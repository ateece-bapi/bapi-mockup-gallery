import { GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

interface Props {
  content: string;
  lastUpdated: string;
}

export default function Todo({ content, lastUpdated }:  Props) {
  return (
    <div className='mockupHub'>
      <Head>
        <title>TODO - BAPI Headless Project</title>
      </Head>

      <main className='hubMain'>
        <Link href='/' className='backButton'>
          ← Back to Gallery
        </Link>
        
        <div className='markdownContainer'>
          <div className='updateBadge'>Last updated: {lastUpdated}</div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://raw.githubusercontent.com/ateece-bapi/bapi-headless/main/docs/TODO.md'
  );
  const content = await res.text();
  
  return {
    props: {
      content,
      lastUpdated: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    },
    revalidate: 3600, // Revalidate every hour
  };
};