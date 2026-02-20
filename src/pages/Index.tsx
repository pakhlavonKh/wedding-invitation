import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import HostsSection from "@/components/HostsSection";
import LocationSection from "@/components/LocationSection";
import RSVPSection from "@/components/RSVPSection";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <MusicPlayer />
      <HeroSection />
      <HostsSection />
      <CountdownTimer />
      <LocationSection />
      <RSVPSection />
    </main>
  );
};

export default Index;
