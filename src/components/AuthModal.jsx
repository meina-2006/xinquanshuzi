import { useState, useRef, useEffect } from 'react';
import '../styles/theme.css';

export default function AuthModal({ onClose, onLogin }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [error, setError] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [phone, setPhone] = useState('');
  const [veriCode, setVeriCode] = useState('');
  const [sentCode, setSentCode] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const nameRef = useRef(null);
  const pwdRef = useRef(null);

  // Get registered users for suggestions
  const users = JSON.parse(localStorage.getItem('xinquan_users') || '[]');
  const suggestions = [...new Set(users.map(u => u.name))];

  // On mount, restore last used name
  useEffect(() => {
    const lastUser = localStorage.getItem('xinquan_last_user');
    if (lastUser) setName(lastUser);
  }, []);

  const selectSuggestion = (s) => {
    setName(s);
    setShowSuggestions(false);
    // Auto-fill password from stored users
    const allUsers = JSON.parse(localStorage.getItem('xinquan_users') || '[]');
    const found = allUsers.find(u => u.name === s);
    if (found) setPassword(found.password);
    // Focus password field
    setTimeout(() => pwdRef.current?.focus(), 100);
  };

  const handleSubmit = () => {
    setError('');
    if (!name.trim() || !password.trim()) {
      setError('请填写完整信息');
      return;
    }

    if (mode === 'register') {
      if (password !== confirmPwd) {
        setError('两次密码不一致');
        return;
      }
      if (!phone || phone.length < 11) {
        setError('请输入正确的手机号码');
        return;
      }
      if (!veriCode || veriCode !== sentCode) {
        setError('验证码错误');
        return;
      }
      if (!agreed) {
        setError('请阅读并同意用户协议和隐私条款');
        return;
      }
      if (users.find(u => u.name === name.trim())) {
        setError('该昵称已被注册');
        return;
      }
      users.push({ name: name.trim(), password, phone, registerDate: new Date().toISOString() });
      localStorage.setItem('xinquan_users', JSON.stringify(users));
    } else {
      const user = users.find(u => u.name === name.trim() && u.password === password);
      if (!user) {
        setError('昵称或密码错误');
        return;
      }
    }

    localStorage.setItem('xinquan_current_user', JSON.stringify({ name: name.trim() }));
    localStorage.setItem('xinquan_last_user', name.trim());
    onLogin({ name: name.trim() });
    onClose();
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <div className="auth-header">
          <div className="auth-tabs">
            <div className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => { setMode('login'); setError(''); }}>登录</div>
            <div className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
              onClick={() => { setMode('register'); setError(''); }}>注册</div>
          </div>
          <button className="auth-close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="auth-body">
          <div className="auth-field">
            <label>称称</label>
            <div className="auth-input-wrap">
              <input ref={nameRef} type="text" value={name} onChange={e => setName(e.target.value)}
                onFocus={() => mode === 'login' && suggestions.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="请输入昵称" className="auth-input" autoComplete="off" />
              {mode === 'login' && showSuggestions && suggestions.length > 0 && (
                <div className="auth-suggestions">
                  {suggestions.map(s => (
                    <div key={s} className="auth-suggestion" onClick={() => selectSuggestion(s)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                      </svg>
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="auth-field">
            <label>密码</label>
            <div className="auth-input-wrap">
              <input ref={pwdRef} type={showPwd ? 'text' : 'password'} value={password}
                onChange={e => setPassword(e.target.value)} placeholder="请输入密码"
                className="auth-input auth-input-pwd" autoComplete="off" />
              <button className="auth-eye" onClick={() => setShowPwd(!showPwd)} type="button">
                {showPwd ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {mode === 'register' && (<>
            <div className="auth-field">
              <label>确认密码</label>
              <div className="auth-input-wrap">
                <input type={showConfirmPwd ? 'text' : 'password'} value={confirmPwd}
                  onChange={e => setConfirmPwd(e.target.value)} placeholder="再次输入密码"
                  className="auth-input auth-input-pwd" autoComplete="off" />
                <button className="auth-eye" onClick={() => setShowConfirmPwd(!showConfirmPwd)} type="button">
                  {showConfirmPwd ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8969A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="auth-field">
              <label>手机号码</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="请输入手机号" className="auth-input" autoComplete="off" />
            </div>
            <div className="auth-field">
              <label>验证码</label>
              <div className="auth-veri-row">
                <input type="text" value={veriCode} onChange={e => setVeriCode(e.target.value)}
                  placeholder="请输入验证码" className="auth-input auth-veri-input" autoComplete="off" />
                <button className="auth-veri-btn" onClick={() => {
                  if (!phone || phone.length < 11) return alert('请输入正确的手机号码');
                  const code = String(Math.floor(1000 + Math.random() * 9000));
                  setSentCode(code);
                  alert('验证码：' + code);
                  setCountdown(60);
                  const timer = setInterval(() => {
                    setCountdown(prev => {
                      if (prev <= 1) { clearInterval(timer); return 0; }
                      return prev - 1;
                    });
                  }, 1000);
                }} disabled={countdown > 0}>
                  {countdown > 0 ? countdown + 's' : '获取验证码'}
                </button>
              </div>
            </div>
            <div className="auth-agree">
              <div className={`auth-checkbox ${agreed ? 'checked' : ''}`} onClick={() => setAgreed(!agreed)}>
                {agreed && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              <span className="auth-agree-text">已阅读并同意<em>《用户协议》</em>和<em>《隐私条款》</em></span>
            </div>
          </>)}
          {error && <div className="auth-error">{error}</div>}
          <button className="auth-btn" onClick={handleSubmit}>
            {mode === 'login' ? '登录' : '注册'}
          </button>
          {mode === 'register' && (
            <div className="auth-wechat-area">
              <div className="auth-wechat-divider">
                <span className="auth-wechat-divider-text">其他方式</span>
              </div>
              <div className="auth-wechat-btn" onClick={() => {
                const d = localStorage.getItem('xinquan_current_user');
                if (d) { const u = JSON.parse(d); onLogin(u); onClose(); }
              }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="#07C160">
                  <path d="M8.5 13.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S10 15.83 10 15s-.67-1.5-1.5-1.5zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 15.83 17 15s-.67-1.5-1.5-1.5zM12 2C6.48 2 2 6.48 2 12c0 1.97.51 3.82 1.41 5.44L2 22l4.6-1.38C8.05 21.53 9.98 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                <span className="auth-wechat-label">{mode === 'login' ? '微信登录' : '微信注册'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
