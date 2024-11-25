import QuickBookingForm from "@/components/ui/quickbookingform";
import Banner from "@/components/ui/banner";
import ChatBox from "@/components/ui/chatbox";
import CareSection from "@/components/ui/caresection";
import Service from "@/components/ui/service";
import Specialty from "@/components/ui/specialty";
import Doctor from "@/components/ui/doctor";
import News from "@/components/ui/new";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";


export default function Home() {
  return (
    <main className="container mx-auto py-6">
      <Banner />
      <QuickBookingForm />
      <ChatBox />
      <CareSection />
      <Specialty />
      <Service />
      <Doctor />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
