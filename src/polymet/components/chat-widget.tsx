import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircleIcon, XIcon, MessageSquareIcon, BotIcon } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStartChat = () => {
    // Open WhatsApp chat
    const message = "Hi! I would like to get more information about your services.";
    const whatsappUrl = `https://wa.me/919884644544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  const handleTalkToAI = () => {
    // This can be connected to an AI chatbot service like Dialogflow, Botpress, etc.
    // For now, we'll show an alert - you can replace this with your AI chat integration
    alert("AI Agent feature coming soon! For now, please use 'Start a Chat' to connect with our team.");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Options Menu */}
      {isOpen && (
        <div className="mb-4 animate-in slide-in-from-bottom-2 duration-200">
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-3 space-y-2 min-w-[200px]">
              <Button
                onClick={handleStartChat}
                className="w-full justify-start bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                size="sm"
              >
                <MessageSquareIcon className="w-4 h-4 mr-3" />
                Start a Chat
              </Button>
              
              <Button
                onClick={handleTalkToAI}
                variant="outline"
                className="w-full justify-start border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-medium py-3 px-4 rounded-lg transition-all duration-300"
                size="sm"
              >
                <BotIcon className="w-4 h-4 mr-3" />
                Talk to AI Agent
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-green-600 hover:bg-green-700 hover:scale-110'
        }`}
        size="icon"
      >
        {isOpen ? (
          <XIcon className="w-6 h-6 text-white" />
        ) : (
          <MessageCircleIcon className="w-6 h-6 text-white animate-bounce" />
        )}
      </Button>

      {/* Floating notification dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
      )}
    </div>
  );
} 