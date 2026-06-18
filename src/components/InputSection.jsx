import '../styles/theme.css';

export default function InputSection({ year, month, day, onYearChange, onMonthChange, onDayChange, onCalculate }) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 131 }, (_, i) => 1900 + i);

  return (
    <div className="input-section">
      <span className="input-label">阳历生日</span>
      <select className="input-field-select" style={{width:80}} value={year} onChange={e => onYearChange(Number(e.target.value))}>
        {years.map(y => <option key={y} value={y}>{y}年</option>)}
      </select>
      <select className="input-field-select" value={month} onChange={e => onMonthChange(Number(e.target.value))}>
        {months.map(m => <option key={m} value={m}>{m}月</option>)}
      </select>
      <select className="input-field-select" value={day} onChange={e => onDayChange(Number(e.target.value))}>
        {days.map(d => <option key={d} value={d}>{d}日</option>)}
      </select>
      <div style={{width:'100%', textAlign:'center', marginTop:'8px'}}>
        <button className="btn-primary" onClick={onCalculate}>开始解析</button>
      </div>
    </div>
  );
}
