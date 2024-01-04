import Loader from '@/components/common/Loader';
import Navbar from '@/components/common/Navbar';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <>
    {
      !session ? (
        <Loader />
      ) : (
        <main>
          <Navbar />
        </main>
      )
    }
    </>
    
  )
}
