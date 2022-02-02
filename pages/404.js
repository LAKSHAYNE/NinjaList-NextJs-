import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>OOOOoooooppppssssss.........</h1>
      <h2>The page you are searching for is not found</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
