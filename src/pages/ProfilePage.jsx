import '../styles/theme.css';

export default function ProfilePage({ user, onLogout, onShowAuth }) {
  return (
    <div className="profile-page">
      {user ? (
        <>
          <div className="profile-header">
            <div className="profile-avatar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-hint">已登录</div>
          </div>
          <div className="profile-menu">
            <div className="profile-menu-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>历史记录</span>
            </div>
            <div className="profile-menu-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>帮助与反馈</span>
            </div>
            <div className="profile-menu-item" onClick={onLogout}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              <span>退出登录</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="profile-header" onClick={onShowAuth} style={{cursor:'pointer'}}>
            <div className="profile-avatar">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="profile-name">未登录</div>
            <div className="profile-hint">点击登录/注册</div>
          </div>
          <div className="profile-menu">
            <div className="profile-menu-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>历史记录</span>
            </div>
            <div className="profile-menu-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>帮助与反馈</span>
            </div>
            <div className="profile-menu-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span>免责声明</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
