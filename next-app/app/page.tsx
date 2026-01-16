import Image from "next/image";
import PageWrapper from './components/PageWrapper';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <PageWrapper>
      <Hero></Hero>
      <Stack/>
      <Projects></Projects>
      <Contact></Contact>
    </PageWrapper>
  );
}
