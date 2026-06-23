import { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CalcOverlay from './components/CalcOverlay';
import AuthModal from './components/AuthModal';
import ProfileForm from './components/ProfileForm';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import './styles/theme.css';

export default function App() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [profileDone, setProfileDone] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [activeNav, setActiveNav] = useState('home');
  const [showCalc, setShowCalc] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('xinquan_current_user');
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch(e) {}
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    const users = JSON.parse(localStorage.getItem('xinquan_users')||'[]');
    const u = users.find(x => x.name === userData.name);
    if (u && !u.profile) setShowProfileForm(true);
    else setProfileDone(true);
  };
  const handleLogout = () => { localStorage.removeItem('xinquan_current_user'); setUser(null); setProfileDone(false); };
  const handleNavChange = (nav) => { setShowCalc(false); setActiveNav(nav); };
  const handleDataChange = (data) => setCurrentData(data);

  const renderPage = () => {
    switch (activeNav) {
      case 'home': return <HomePage data={currentData} />;
      case 'analysis': return <AnalysisPage data={currentData} />;
      case 'course': return <CoursePage data={currentData} />;
      case 'profile': return <ProfilePage user={user} onLogout={handleLogout} onShowAuth={() => setShowAuth(true)} />;
      default: return <HomePage data={currentData} />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">{renderPage()}</div>
      <BottomNav activeNav={activeNav} onNavChange={handleNavChange} onPlusClick={() => setShowCalc(true)} />
      {showCalc && <CalcOverlay onClose={() => setShowCalc(false)} onDataChange={handleDataChange} />}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} onLogin={handleLogin} />}
      {showProfileForm && <ProfileForm user={user} onComplete={() => { setShowProfileForm(false); setProfileDone(true); }} onSkip={() => setShowProfileForm(false)} />}
    </div>
  );
}
