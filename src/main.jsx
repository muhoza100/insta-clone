import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const conversations = [
  { id: 1, name: 'Maya', time: '2m', unread: 3, color: '#f9a8d4', status: 'online', lastMessage: 'I sent the moodboard early!', active: true },
  { id: 2, name: 'Noah', time: '18m', unread: 0, color: '#93c5fd', status: 'typing', lastMessage: 'Your photos looked amazing 😍' },
  { id: 3, name: 'Ari', time: '1h', unread: 1, color: '#86efac', status: 'online', lastMessage: 'Let’s do coffee after work?' },
  { id: 4, name: 'Lina', time: '3h', unread: 0, color: '#fcd34d', status: 'offline', lastMessage: 'Can you share the link again?' },
  { id: 5, name: 'Zoe', time: '5h', unread: 0, color: '#c4b5fd', status: 'online', lastMessage: 'Your reel is getting traction.' },
  { id: 6, name: 'Kai', time: 'Yesterday', unread: 0, color: '#fdba74', status: 'offline', lastMessage: 'I’m sending the design file now.' }
];

const messages = [
  { id: 1, sender: 'other', text: 'Hey! I saw your new profile picture — it looks stunning.', time: '9:42 AM' },
  { id: 2, sender: 'me', text: 'Thanks! I finally got the right lighting 😄', time: '9:43 AM' },
  { id: 3, sender: 'other', text: 'We should definitely post a joint story this week.', time: '9:44 AM' },
  { id: 4, sender: 'me', text: 'That sounds perfect. I’ll send you the concept in 10 mins.', time: '9:45 AM' },
  { id: 5, sender: 'other', text: 'Also, can you share the brand palette for the launch?', time: '9:46 AM' },
  { id: 6, sender: 'me', text: 'Absolutely — I just uploaded it to the shared album.', time: '9:47 AM' }
];

const storyList = [
  { name: 'Your Story', accent: 'linear-gradient(135deg, #f59e0b, #ec4899)', me: true },
  { name: 'Maya', accent: 'linear-gradient(135deg, #fb7185, #8b5cf6)' },
  { name: 'Noah', accent: 'linear-gradient(135deg, #38bdf8, #2563eb)' },
  { name: 'Ari', accent: 'linear-gradient(135deg, #4ade80, #22c55e)' },
  { name: 'Lina', accent: 'linear-gradient(135deg, #fbbf24, #f97316)' },
  { name: 'Zoe', accent: 'linear-gradient(135deg, #a78bfa, #ec4899)' }
];

const highlights = [
  { label: 'Design', value: '12' },
  { label: 'Trips', value: '8' },
  { label: 'Food', value: '18' }
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-row">
          <div className="brand-mark">◎</div>
          <div>
            <div className="brand-name">InstaChat</div>
            <div className="brand-tag">Social messaging</div>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">
            <span>⌂</span>
            Feed
          </button>
          <button className="nav-item">
            <span>💬</span>
            Chats
          </button>
          <button className="nav-item">
            <span>◎</span>
            Discover
          </button>
          <button className="nav-item">
            <span>🔔</span>
            Alerts
          </button>
          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>
        </nav>

        <div className="mini-profile">
          <div className="avatar large gradient-1">S</div>
          <div>
            <div className="mini-name">Sofia</div>
            <div className="mini-status">Available now</div>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <div className="eyebrow">Inbox</div>
            <h1>Messages</h1>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button">New chat</button>
            <button className="icon-button">✎</button>
          </div>
        </header>

        <section className="stories">
          {storyList.map((story) => (
            <div key={story.name} className={`story ${story.me ? 'me' : ''}`}>
              <div className="story-ring" style={{ background: story.accent }}>
                <div className="story-avatar">{story.me ? '+' : story.name[0]}</div>
              </div>
              <span>{story.name}</span>
            </div>
          ))}
        </section>

        <section className="conversation-panel">
          <div className="list-panel">
            <div className="search-box">Search chats</div>

            {conversations.map((chat) => (
              <div key={chat.id} className={`chat-row ${chat.active ? 'active' : ''}`}>
                <div className="avatar" style={{ background: chat.color }}>
                  {chat.name[0]}
                </div>
                <div className="chat-body">
                  <div className="row-top">
                    <strong>{chat.name}</strong>
                    <span>{chat.time}</span>
                  </div>
                  <div className="row-bottom">
                    <small>{chat.status === 'typing' ? 'typing…' : chat.lastMessage}</small>
                    {chat.unread > 0 && <span className="badge">{chat.unread}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-window">
            <div className="chat-header">
              <div className="header-user">
                <div className="avatar gradient-2">M</div>
                <div>
                  <div className="name">Maya</div>
                  <div className="status online">online</div>
                </div>
              </div>

              <div className="header-actions">
                <button className="icon-button">📞</button>
                <button className="icon-button">🎥</button>
                <button className="icon-button">⋮</button>
              </div>
            </div>

            <div className="message-stream">
              {messages.map((message) => (
                <div key={message.id} className={`bubble-wrap ${message.sender === 'me' ? 'me' : ''}`}>
                  <div className={`message-bubble ${message.sender === 'me' ? 'me' : 'other'}`}>
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="composer">
              <button className="icon-button">＋</button>
              <input type="text" value="Type a message..." readOnly />
              <button className="send-button">Send</button>
            </div>
          </div>

          <aside className="profile-panel">
            <div className="profile-card">
              <div className="profile-cover"></div>
              <div className="profile-info">
                <div className="avatar large gradient-3">M</div>
                <h3>Maya Chen</h3>
                <p>@mayacreative</p>
              </div>
              <div className="stats">
                <div>
                  <strong>2.4k</strong>
                  <span>Followers</span>
                </div>
                <div>
                  <strong>340</strong>
                  <span>Following</span>
                </div>
                <div>
                  <strong>98</strong>
                  <span>Posts</span>
                </div>
              </div>
            </div>

            <div className="highlight-card">
              <h4>Highlights</h4>
              <div className="highlight-list">
                {highlights.map((item) => (
                  <div key={item.label} className="highlight-item">
                    <div className="dot"></div>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
