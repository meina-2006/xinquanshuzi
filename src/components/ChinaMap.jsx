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
        <label>📍 所在地</label>
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

      <div style={{ position:'relative', width:320, height:350, margin:'10px auto', background:'#faf5f0', borderRadius:8, overflow:'hidden' }}>
        {/* Title */}
        <div style={{ position:'absolute', top:12, left:0, width:'100%', textAlign:'center', color:'#D96B86', fontSize:14, fontWeight:'bold', fontFamily:'sans-serif' }}>
          飞行图 · {city.name}
        </div>

        {/* 3 concentric circles */}
        {[42, 82, 122].map(r => (
          <div key={r} style={{
            position:'absolute', left:CX-r, top:CY-r, width:r*2, height:r*2,
            borderRadius:'50%', border:'1px dashed #F0E4E8', pointerEvents:'none'
          }} />
        ))}

        {/* 12 direction lines */}
        {data && directions.map((_, i) => {
          const a = i * 30;
          const v = data.finDir[i];
          let color = '#BBB';
          if (v === '避') color = '#D8A0AD';
          else if (typeof v === 'number' && v > 0) color = '#E6212A';
          return (
            <div key={'l'+i} style={{
              position:'absolute', left:CX, top:CY-0.75, width:130, height:1.5,
              background:color, opacity:0.7,
              transformOrigin:'0 50%', transform:'rotate('+(a-90)+'deg)',
              pointerEvents:'none'
            }} />
          );
        })}

        {/* Direction labels */}
        {data && directions.map((d, i) => {
          const p = pt(CX, CY, 148, i*30);
          return (
            <div key={'d'+i} style={{
              position:'absolute', left:p.x, top:p.y,
              transform:'translate(-50%,-50%)',
              color:'#D96B86', fontSize:10, fontWeight:'bold',
              fontFamily:'sans-serif', whiteSpace:'nowrap',
              pointerEvents:'none'
            }}>{d}</div>
          );
        })}

        {/* Value labels */}
        {data && directions.map((_, i) => {
          const p = pt(CX, CY, 163, i*30);
          const v = data.finDir[i];
          let color = '#BBB', label = String(v);
          if (v === '避') { color = '#D8A0AD'; }
          else if (typeof v === 'number' && v > 0) { color = '#E6212A'; label = '+' + v; }
          return (
            <div key={'v'+i} style={{
              position:'absolute', left:p.x, top:p.y,
              transform:'translate(-50%,-50%)',
              color:color, fontSize:13, fontWeight:'bold',
              fontFamily:'sans-serif',
              pointerEvents:'none'
            }}>{label}</div>
          );
        })}

        {/* Center dot - outer pink */}
        <div style={{
          position:'absolute', left:CX-5, top:CY-5, width:10, height:10,
          borderRadius:'50%', background:'#D96B86', opacity:0.25,
          pointerEvents:'none'
        }} />
        {/* Center dot - inner gold */}
        <div style={{
          position:'absolute', left:CX-2, top:CY-2, width:4, height:4,
          borderRadius:'50%', background:'#C9A96E', opacity:0.8,
          pointerEvents:'none'
        }} />

        {/* City name */}
        <div style={{
          position:'absolute', left:CX, top:CY-14,
          transform:'translate(-50%,-50%)',
          color:'#C75A74', fontSize:12, fontWeight:'bold',
          fontFamily:'sans-serif', whiteSpace:'nowrap',
          pointerEvents:'none'
        }}>{city.name}</div>
      </div>

      {data && <p style={{textAlign:'center',fontSize:10,color:'#A8969A',margin:0}}>{data.y}年{data.m}月{data.d}日 · 属{data.zodiac} · 原点{city.name}</p>}
    </div>
  );
}
