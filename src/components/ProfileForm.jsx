import { useState } from 'react';
import { cities } from '../utils/cities';
import { lunarToSolar, getLunarYearName } from '../utils/lunar';
import '../styles/theme.css';
const Y = new Date().getFullYear();
export default function ProfileForm({ user, onComplete, onSkip }) {
  const [gender, setGender] = useState('');
  const [calType, setCalType] = useState('solar');
  const [bYear, setBYear] = useState(1990);
  const [bMonth, setBMonth] = useState(1);
  const [bDay, setBDay] = useState(1);
  const [birthplace, setBirthplace] = useState('');
  const [residence, setResidence] = useState('');
  const years = Array.from({length:120}, (_,i) => Y-i);
  const handleSave = () => {
    if (!gender||!birthplace||!residence) return alert('请完善信息');
    let sy=bYear, sm=bMonth, sd=bDay;
    if (calType==='lunar') { const c=lunarToSolar(bYear,bMonth,bDay,false); sy=c.year; sm=c.month; sd=c.day; }
    const users=JSON.parse(localStorage.getItem('xinquan_users')||'[]');
    const idx=users.findIndex(u=>u.name===user.name);
    if(idx>=0){ users[idx].profile={gender,birthType:calType,birthYear:sy,birthMonth:sm,birthDay:sd,birthplace,residence};
      localStorage.setItem('xinquan_users',JSON.stringify(users)); }
    onComplete();
  };
  const lc = calType==='lunar' ? getLunarYearName(bYear)+bMonth+'月'+bDay+'日 → '+
    lunarToSolar(bYear,bMonth,bDay,false).year+'年'+lunarToSolar(bYear,bMonth,bDay,false).month+'月'+lunarToSolar(bYear,bMonth,bDay,false).day+'日' : '';
  return (<div className="auth-overlay"><div className="profile-form">
    <div className="profile-form-header"><div className="pf-title">HI 请完善你的信息</div><div className="pf-underline"></div></div>
    <div className="profile-form-body">
      <div className="pf-field"><label className="pf-label">性别</label>
        <div className="pf-gender">
          <div className={`pf-gender-opt ${gender==='男'?'active':''}`} onClick={()=>setGender('男')}>男</div>
          <div className={`pf-gender-opt ${gender==='女'?'active':''}`} onClick={()=>setGender('女')}>女</div>
        </div>
      </div>
      <div className="pf-field"><label className="pf-label">生日</label>
        <div className="pf-cal-tabs">
          <div className={`pf-cal-tab ${calType==='solar'?'active':''}`} onClick={()=>setCalType('solar')}>公历</div>
          <div className={`pf-cal-tab ${calType==='lunar'?'active':''}`} onClick={()=>setCalType('lunar')}>农历</div>
        </div>
        <div className="pf-birthday-row">
          <select value={bYear} onChange={e=>setBYear(Number(e.target.value))} className="input-field-select" style={{width:80}}>
            {years.map(y=><option key={y} value={y}>{y}年</option>)}
          </select>
          <select value={bMonth} onChange={e=>setBMonth(Number(e.target.value))} className="input-field-select">
            {[1,2,3,4,5,6,7,8,9,10,11,12].map(m=><option key={m} value={m}>{m}月</option>)}
          </select>
          <select value={bDay} onChange={e=>setBDay(Number(e.target.value))} className="input-field-select" style={{width:72}}>
            {Array.from({length:31},(_,i)=>i+1).map(d=><option key={d} value={d}>{d}日</option>)}
          </select>
        </div>
        {calType==='lunar'&&<div className="pf-lunar-convert">{lc}</div>}
      </div>
      <div className="pf-field"><label className="pf-label">出生地点</label>
        <select value={birthplace} onChange={e=>setBirthplace(e.target.value)} className="input-field-select pf-select"><option value="">请选择</option>
          {cities.map(c=><option key={c.name} value={c.name}>{c.name}</option>)}</select>
      </div>
      <div className="pf-field"><label className="pf-label">现居住地点</label>
        <select value={residence} onChange={e=>setResidence(e.target.value)} className="input-field-select pf-select"><option value="">请选择</option>
          {cities.map(c=><option key={c.name} value={c.name}>{c.name}</option>)}</select>
      </div>
      <div className="pf-btns"><button className="auth-btn" onClick={handleSave}>保存信息</button>
        <button className="pf-skip" onClick={onSkip}>跳过</button></div>
    </div></div></div>);
}