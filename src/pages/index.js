import Navbar from '@/components/common/Navbar';
import { useSession } from 'next-auth/react';
import Login from './login';
import YourWorkouts from '@/components/home/YourWorkouts';

export default function Home() {
  const { data: session } = useSession();
  
  return (
    <>
    {
      !session ? (
        <Login />
      ) : (
        <main>
          <Navbar />
          <YourWorkouts />
        </main>
      )
    }
    </>
    
  )
}
