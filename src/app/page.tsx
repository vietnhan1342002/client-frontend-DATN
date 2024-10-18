import QuickBookingForm from "@/components/ui/quickbookingform";
import Hero from "@/components/ui/hero";
import ChatBox from "@/components/ui/chatbox";


export default function Home() {
  return (
    <main className="container mx-auto py-6">
      <Hero />
      <QuickBookingForm />
      <ChatBox />
    </main>
  );
}
