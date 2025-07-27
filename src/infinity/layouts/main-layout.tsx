import Navigation from "@/infinity/components/navigation";
import Footer from "@/infinity/components/footer";
import ChatWidget from "@/infinity/components/chat-widget";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">{children}</main>
      <Footer />
      
      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}
