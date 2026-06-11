import { cities, defaultCity, directions } from '../utils/cities';
import '../styles/theme.css';

const CX = 160, CY = 175;
function pt(cx, cy, r, a) {
  const rad = a * Math.PI / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

export default function ChinaMap({ selectedCity, data, onCityChange }) {
  const city = selectedCity || defaultCity;
  return (
    <div>
      <div className="city-selector">
        <label>所在地</label>
        <select value={city.name} onChange={e => {
          onCityChange(cities.find(c => c.name === e.target.value) || defaultCity);
        }}>
          {cities.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
        </select>
      </div>
      <div className="map-legend" style={{ justifyContent: 'center', gap: 16, display: 'flex', fontSize: 10, margin: '8px 0' }}>
        <span><span style={{background:'#E6212A',borderRadius:'50%',width:8,height:8,display:'inline-block',marginRight:4}} /> 吉位 +</span>
        <span><span style={{background:'#BBB',borderRadius:'50%',width:8,height:8,display:'inline-block',marginRight:4}} /> 平位</span>
        <span><span style={{background:'#D8A0AD',borderRadius:'50%',width:8,height:8,display:'inline-block',marginRight:4}} /> 避用</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
        <svg viewBox="0 0 320 350" style={{ width: '100%', maxWidth: 320, height: 'auto', display: 'block' }}>
          <rect x="0" y="0" width="320" height="350" fill="#faf5f0" rx="8" />
          <text x={CX} y={20} textAnchor="middle" fill="#D96B86" fontSize="14" fontWeight="bold">飞行图 · {city.name}</text>
          {[42, 82, 122].map(r => (
            <circle cx={CX} cy={CY} r={r} fill="none" stroke="#F0E4E8" strokeWidth="1" strokeDasharray="4,6" />
          ))}
          {data && directions.map((_, i) => {
            const a = i * 30;
            const end = pt(CX, CY, 130, a);
            const v = data.finDir[i];
            let color = '#BBB';
            if (v === '避') color = '#D8A0AD'; else if (typeof v === 'number' && v > 0) color = '#E6212A';
            return <line key={'l'+i} x1={CX} y1={CY} x2={end.x} y2={end.y} stroke={color} strokeWidth={1.5} opacity="0.7" />;
          })}
          {data && directions.map((d, i) => {
            const p = pt(CX, CY, 148, i * 30);
            return <text key={'d'+i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fill="#D96B86" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{d}</text>;
          })}
          {data && directions.map((_, i) => {
            const p = pt(CX, CY, 163, i * 30);
            const v = data.finDir[i];
            let color = '#BBB';
            let label = String(v);
            if (v === '避') { color = '#D8A0AD'; }
            else if (typeof v === 'number' && v > 0) { color = '#E6212A'; label = '+' + v; }
            return <text key={'v'+i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fill={color} fontSize="13" fontWeight="bold" fontFamily="sans-serif">{label}</text>;
          })}
          <circle cx={CX} cy={CY} r="5" fill="#D96B86" fillOpacity="0.3" />
          <circle cx={CX} cy={CY} r="2" fill="#C9A96E" />
          <text x={CX} y={CY - 14} textAnchor="middle" dominantBaseline="middle" fill="#C75A74" fontSize="12" fontWeight="bold" fontFamily="sans-serif">{city.name}</text>
        </svg>
      </div>
      {data && <p style={{textAlign:'center',fontSize:10,color:'#A8969A',margin:0}}>{data.y}年{data.m}月{data.d}日 · 属{data.zodiac} · 原点{city.name}</p>}
    </div>
  );
}
