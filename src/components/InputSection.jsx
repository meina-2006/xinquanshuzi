 import '../styles/theme.css';
 
 export default function InputSection({ year, month, day, onYearChange, onMonthChange, onDayChange, onCalculate }) {
   const months = Array.from({ length: 12 }, (_, i) => i + 1);
   const days = Array.from({ length: 31 }, (_, i) => i + 1);
 
   return (
     <div className="input-section">
       <span className="input-label">阳历生日</span>
       <input
         type="number"
         className="input-field"
         value={year}
         min={1900}
         max={2100}
         onChange={e => onYearChange(e.target.value)}
         placeholder="年"
         style={{ width: 70 }}
       />
       <span className="input-separator">年</span>
       <select className="input-field-select" value={month} onChange={e => onMonthChange(Number(e.target.value))}>
         {months.map(m => <option key={m} value={m}>{m}月</option>)}
       </select>
       <select className="input-field-select" value={day} onChange={e => onDayChange(Number(e.target.value))}>
         {days.map(d => <option key={d} value={d}>{d}</option>)}
       </select>
       <span className="input-separator">日</span>
       <button className="btn-primary" onClick={onCalculate}>开始解析</button>
     </div>
   );
 }
