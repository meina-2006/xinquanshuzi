import { useState } from 'react';
import { calcAll } from '../utils/calculator';
import CalcTab from '../tabs/CalcTab';
import FlowTab from '../tabs/FlowTab';
import FlightTab from '../tabs/FlightTab';
import { defaultCity } from '../utils/cities';
import '../styles/theme.css';

const subTabs = [
  { id: 'calc', label: '数字计算' },
  { id: 'flow', label: '流年心图' },
  { id: 'flight', label: '飞行图' },
];

export default function CalcOverlay({ onClose, onDataChange }) {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [day, setDay] = useState(now.getDate());
  const [data, setData] = useState(null);
  const [subTab, setSubTab] = useState('calc');
  const [selectedCity, setSelectedCity] = useState(defaultCity);

  const years = Array.from({ length: 131 }, (_, i) => 1900 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleCalculate = () => {
    if (!year || !month || !day) return;
    const result = calcAll(Number(year), month, day);
    setData(result);
    onDataChange(result);
  };

  return (
    <div className="calc-overlay">
      <div className="calc-overlay-header">
        <button className="calc-overlay-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="calc-overlay-title">
          {data ? '解析结果' : '输入阳历生日'}
        </div>
        <div style={{width:24}}></div>
      </div>

      {!data ? (
        <div className="calc-overlay-input">
          <div className="co-input-row">
            <span className="co-input-label">阳历生日</span>
          </div>
          <div className="co-input-fields">
            <select value={year} onChange={e => setYear(Number(e.target.value))}
              style={{width:80}} className="input-field-select">
              {years.map(y => <option key={y} value={y}>{y}年</option>)}
            </select>
            <select value={month} onChange={e => setMonth(Number(e.target.value))}
              className="input-field-select">
              {months.map(m => <option key={m} value={m}>{m}月</option>)}
            </select>
            <select value={day} onChange={e => setDay(Number(e.target.value))}
              style={{width:72}} className="input-field-select">
              {days.map(d => <option key={d} value={d}>{d}日</option>)}
            </select>
          </div>
          <button className="btn-primary" onClick={handleCalculate}
            style={{width:'100%',marginTop:20,padding:'12px 0',fontSize:16}}>
            开始解析
          </button>
        </div>
      ) : (
        <div className="calc-overlay-result">
          <div className="co-sub-tabs">
            {subTabs.map(t => (
              <div key={t.id}
                className={`co-sub-tab ${subTab === t.id ? 'active' : ''}`}
                onClick={() => setSubTab(t.id)}>
                {t.label}
              </div>
            ))}
          </div>
          <div className="co-content">
            {subTab === 'calc' && <CalcTab data={data} />}
            {subTab === 'flow' && <FlowTab data={data} />}
            {subTab === 'flight' && (
              <FlightTab data={data} selectedCity={selectedCity} onCityChange={setSelectedCity} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
