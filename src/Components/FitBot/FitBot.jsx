import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./FitBot.css";
import MessagesCard from "./MessagesCard";

const FitBot = () => {
  const [messages, setMessages] = useState([
    "Hello USER, I am FitBot, how can i help you.",
  ]);
  const [sendMessage, setSendMessage] = useState("");

  const chatRef = useRef("");

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const animation2 = () => {
    setMessages([...messages, "About to come..."]);
    animation();
  };

  let animationinterval2;

  const animation = () => {
    setMessages([...messages, "On the way...."]);
    animationinterval2 = setInterval((animation2, 3000));
  };

  const sendMessagefunction = async () => {
    messages.push(sendMessage);

    setMessages([...messages, "Please wait, we are seaching..."]);

    const animationinterval = setInterval(animation, 3000);

    setSendMessage("");
    const { data } = await axios.post("http://localhost:3000/message", {
      message: sendMessage,
    });
    clearInterval(animationinterval);
    clearInterval(animationinterval2);
    setMessages([...messages, data.message]);
  };

  return (
    < div className="fit-bot-body">
      <div className="fitbot-image-div">
        <img
          className="fitbot-image"
          src="https://res.cloudinary.com/dycitvrpg/image/upload/v1681721860/chatbot_x5tltz.png"
          alt=""
        />
      </div>

      <div class="chat-box">
        <div class="chat-box-header">CrossFit Chats</div>
          <div ref={chatRef} class="chat-box-body">
            {messages.map((item, i) => (
              <MessagesCard message={item} index={i} />
            ))}
          </div>
          <div class="chat-box-footer">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessagefunction();
                }
              }}
              value={sendMessage}
              onChange={(e) => {
                setSendMessage(e.target.value);
              }}
              type="text"
              placeholder="Ask a question..."
            />
            <button onClick={sendMessagefunction}>Send</button>
          </div>
        </div>
        <div className="fitbot-right">
            <h1 className="fitbot-right-head">FitBot</h1>
            <p className="fitbot-right-desc">Introducing FitBot - your personal AI assistant that can help you with all your fitness and day-to-day queries. With advanced machine learning algorithms, FotBot provides accurate and personalized solutions in real-time. Whether you need workout routines, healthy eating tips, or guidance on managing your daily schedule, FitBot has got you covered. Interact with FotBot through a simple and user-friendly interface, and customize your experience by setting your goals and preferences. FotBot is here to make your life easier, healthier, and more balanced.</p>
            <h3 className="fitbot-hashtag">#GetFitterWithFotBot</h3>
       </div>
      </div>
    
  );
};

export default FitBot;
