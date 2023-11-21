import { Inter } from 'next/font/google';
import Search from '@/components/Search';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const handleChange = (e: any) => console.log(e);
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Search handleChange={handleChange} />
    </main>
  );
}
