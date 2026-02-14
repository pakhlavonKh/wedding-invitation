import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import HostsSection from "@/components/HostsSection";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <HostsSection />
      <CountdownTimer />
      <LocationSection />
      <RSVPSection />
    </main>
  );
};

export default Index;
