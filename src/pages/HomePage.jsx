import '../styles/theme.css';

export default function HomePage({ data }) {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-hero-bg">
          <div className="home-hero-icon">
            <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
              <defs>
                <linearGradient id="hg" x1="15%" y1="5%" x2="85%" y2="95%">
                  <stop offset="0%" stopColor="#FF7BA6"/><stop offset="50%" stopColor="#E8547E"/><stop offset="100%" stopColor="#D9466E"/>
                </linearGradient>
              </defs>
              <path d="M50 88C47 85 30 72 18 57C3 38 1 20 10 11C16 5 25 4 33 8C38 11 44 17 50 25C56 17 62 11 67 8C75 4 84 5 90 11C99 20 97 38 82 57C70 72 53 85 50 88Z" fill="url(#hg)" opacity="0.9"/>
            </svg>
          </div>
        </div>
        <h1 className="home-title">数字心理学</h1>
        <p className="home-subtitle">探索你的生命数字密码<br/>发现真实的自己</p>
      </div>

      <div className="home-cards">
        <div className="home-card" onClick={() => {}}>
          <div className="home-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D96B86" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
          </div>
          <div className="home-card-text">
            <div className="home-card-title">今日运势</div>
            <div className="home-card-desc">点击查看今日数字能量</div>
          </div>
        </div>

        <div className="home-card">
          <div className="home-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <div className="home-card-text">
            <div className="home-card-title">流年运势</div>
            <div className="home-card-desc">查看你的流年数字变化</div>
          </div>
        </div>
      </div>

      <div className="home-quote">
        <div className="home-quote-line"></div>
        <p>懂是爱的前提<br/>修是生命的答案</p>
        <div className="home-quote-line"></div>
      </div>

      <div className="home-tip">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>点击下方 + 号，输入阳历生日开始解析</span>
      </div>
    </div>
  );
}
