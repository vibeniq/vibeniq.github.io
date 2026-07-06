import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { About } from '@/components/about';
import { TechStack } from '@/components/tech-stack';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Strong full-bleed grid backdrop + ambient accent glows */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 grid-lines grid-mask opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#06b6d4]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-[#34d399]/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-[#164e63]/20 blur-[130px]" />
      </div>

      <div className="relative z-10">
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
    </div>
  );
}
