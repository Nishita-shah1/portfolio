// pages/home/page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Experience />
      <Skills />
    </div>
  );
}
