import { Navbar }            from "@/components/navbar";
import { HeroSection }       from "@/components/hero-section";
import { OriginSection }     from "@/components/origin-section";
import { ProblemSection }    from "@/components/problem-section";
import { SolutionsSection }  from "@/components/solutions-section";
import { VideoSection }      from "@/components/video-section";
import { WhyTekoSection }    from "@/components/why-teko-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { CtaSection }        from "@/components/cta-section";
import { Footer }            from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <OriginSection />
      <ProblemSection />
      <SolutionsSection />
      <VideoSection />
      <WhyTekoSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
