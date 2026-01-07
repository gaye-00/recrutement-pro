import CTASection from "../components/home/CTASection";
import FeaturedJobsSection from "../components/home/FeaturedJobsSection";
import FeaturesSection from "../components/home/FeaturesSection";
import HeroSection from "../components/home/HeroSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import StatsSection from "../components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <FeaturedJobsSection />
      <StatsSection />
      <HowItWorksSection />
      <CTASection />
    </>
  );
}
