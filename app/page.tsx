import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Leadership } from '@/components/sections/Leadership';
import { Built } from '@/components/sections/Built';
import { Academic } from '@/components/sections/Academic';
import { Beyond } from '@/components/sections/Beyond';
import { NextChapter } from '@/components/sections/NextChapter';
import { Connect } from '@/components/sections/Connect';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Leadership />
      <Academic />
      <Built />
      <Beyond />
      <NextChapter />
      <Connect />
    </>
  );
}
