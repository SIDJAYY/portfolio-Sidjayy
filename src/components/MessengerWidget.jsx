import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export default function MessengerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "👋 Hi there! I'm Carl Janus Bacolod. Thanks for visiting my profile!", sender: 'bot', time: 'Just now' },
    { id: 2, text: "Feel free to drop a message or ask about my IT projects & specialization!", sender: 'bot', time: 'Just now' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;

    const userText = inputMsg.trim();
    const newMsg = {
      id: Date.now(),
      text: userText,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputMsg('');

    // Simulated reply
    setTimeout(() => {
      let replyText = "Thanks for your message! I've received your query and will get back to you shortly. You can also reach me directly at carljanus.bacolod@example.com!";
      if (userText.toLowerCase().includes('hire') || userText.toLowerCase().includes('job')) {
        replyText = "💼 Excited to hear about opportunities! Let's schedule a chat. Check the ABOUT tab for my full contact info or download my resume.";
      } else if (userText.toLowerCase().includes('project') || userText.toLowerCase().includes('code')) {
        replyText = "🚀 You can check out all my latest code and live demos in the ALL tab!";
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          text: replyText,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <div className="messenger-widget">
      {isOpen ? (
        <div className="messenger-chat-box">
          {/* Header */}
          <div className="messenger-chat-header">
            <div className="messenger-user-info">
              <div style={{ position: 'relative' }}>
                <img 
                  src="/profile_picture/profilepicture.jpg" 
                  alt="Carl Janus Bacolod" 
                  style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #FCA311' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%', border: '2px solid #14213D' }}></div>
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '14px', color: '#FFFFFF' }}>Carl Janus Bacolod</div>
                <div style={{ fontSize: '11px', color: '#FCA311' }}>Active Now</div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="messenger-chat-body">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                className={`msg-bubble ${msg.sender === 'user' ? 'sent' : 'received'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form className="messenger-chat-input-row" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Write a message..."
              className="messenger-input"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
            />
            <button type="submit" className="messenger-send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          id="messenger-fab-trigger"
          className="messenger-fab" 
          onClick={() => setIsOpen(true)}
          title="Open Messenger"
        >
          <MessageSquare size={26} />
        </button>
      )}
    </div>
  );
}
