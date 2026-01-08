import Image from "next/image";
import PageWrapper from './components/PageWrapper';
import Hero from './components/Hero';
import Stack from './components/Stack';

export default function Home() {
  return (
    <PageWrapper>
      <Hero></Hero>
      <Stack/>
    </PageWrapper>
  );
}
