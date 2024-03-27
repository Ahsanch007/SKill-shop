import React from "react";
import GoogleChatHero from "./GoogleChatHero";
import GoogleChatSection from "./GoogleChatSection";
import TryItOutChat from "./TryItOutChat";
import GoogleChatFooter from "./GoogleChatFooter";

const GoogleChat = () => {
  return (
    <div>
      <GoogleChatHero />
      <GoogleChatSection />
      <TryItOutChat />
      <GoogleChatFooter />
    </div>
  );
};

export default GoogleChat;
