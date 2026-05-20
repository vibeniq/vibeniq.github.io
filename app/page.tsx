import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { TechStack } from '@/components/tech-stack';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
