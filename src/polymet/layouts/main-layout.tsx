import Navigation from "@/polymet/components/navigation";
import Footer from "@/polymet/components/footer";
import ChatWidget from "@/polymet/components/chat-widget";

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
