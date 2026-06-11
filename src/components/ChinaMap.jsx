import { cities, defaultCity, directions } from '../utils/cities';
import '../styles/theme.css';

function pt(cx, cy, r, angleDeg) {
  const rad = angleDeg * Math.PI / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

const CX = 160, CY = 175;
const RINGS = [42, 82, 122];
const LINE_R = 130;
const LABEL_R_DIR = 148;
const LABEL_R_VAL = 162;

export default function ChinaMap({ selectedCity, data, onCityChange }) {
  const currentCity = selectedCity || defaultCity;

  return (
    <div>
      <div className="city-selector">
        <label>📍 所在地</label>
        <select
          value={currentCity.name}
          onChange={e => {
            const city = cities.find(c => c.name === e.target.value) || defaultCity;
            onCityChange(city);
          }}
        >
          {cities.map(c => (
            <option key={c.name} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div className="map-legend">
        <span><span className="legend-dot positive" /> 吉位 +</span>
        <span><span className="legend-dot negative" /> 平位</span>
        <span><span className="legend-dot avoid" /> 避用</span>
      </div>
      <div className="map-container" style={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
        <svg viewBox="0 0 320 350" style={{ width: '100%', maxWidth: '320px', height: 'auto' }}>
          <rect x="0" y="0" width="320" height="350" fill="#faf5f0" rx="8" />
          {RINGS.map(r => (
            <circle key={r} cx={CX} cy={CY} r={r}
              fill="none" stroke="#F0E4E8" strokeWidth="0.8" strokeDasharray="4,6" />
          ))}
          {data && directions.map((_, i) => {
            const angle = i * 30;
            const end = pt(CX, CY, LINE_R, angle);
            const val = data.finDir[i];
            let color, sw, dash;
            if (val === '避') {
              color = '#D8A0AD'; sw = 1.5; dash = '5,4';
            } else if (typeof val === 'number' && val > 0 || String(val).startsWith('+')) {
              color = '#E6212A'; sw = 2; dash = '';
            } else {
              color = '#BBBBBB'; sw = 1; dash = '4,4';
            }
            return (
              <line key={i}
                x1={CX} y1={CY} x2={end.x} y2={end.y}
                stroke={color} strokeWidth={sw} strokeDasharray={dash || null} opacity="0.7" />
            );
          })}
          {data && directions.map((d, i) => {
            const angle = i * 30;
            const p = pt(CX, CY, LABEL_R_DIR, angle);
            return (
              <text key={'d' + i} x={p.x} y={p.y}
                textAnchor="middle" dominantBaseline="central"
                className="compass-label compass-label-dir">{d}</text>
            );
          })}
          {data && directions.map((_, i) => {
            const angle = i * 30;
            const p = pt(CX, CY, LABEL_R_VAL, angle);
            const val = data.finDir[i];
            let cls = 'compass-label compass-label-val-negative';
            let display = String(val);
            if (val === '避') {
              cls = 'compass-label compass-label-val-avoid';
            } else if (typeof val === 'number' && val > 0) {
              cls = 'compass-label compass-label-val-positive';
              display = '+' + val;
            }
            return (
              <text key={'v' + i} x={p.x} y={p.y}
                textAnchor="middle" dominantBaseline="central"
                className={cls}>{display}</text>
            );
          })}
          <circle cx={CX} cy={CY} r="6" fill="#D96B86" fillOpacity="0.25" stroke="#D96B86" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r="2.5" fill="#C9A96E" fillOpacity="0.8" />
          <text x={CX} y={CY - 14} textAnchor="middle" dominantBaseline="middle"
            fontFamily="'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif"
            fontSize="12" fontWeight="700" fill="#C75A74"
            style={{ textShadow: '0 0 4px #fff, 0 0 4px #fff' }}>
            {currentCity.name}
          </text>
        </svg>
      </div>
      {data && (
        <p style={{
          textAlign: 'center', fontSize: '10px',
          color: '#A8969A', marginTop: '0px'
        }}>
          {data.y}年{data.m}月{data.d}日 · 属{data.zodiac} · 原点{currentCity.name}
        </p>
      )}
    </div>
  );
}
