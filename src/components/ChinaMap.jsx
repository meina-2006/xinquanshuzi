import { useRef, useEffect } from 'react';
import { cities, defaultCity, directions } from '../utils/cities';
import '../styles/theme.css';

function pt(cx, cy, r, a) {
  const rad = a * Math.PI / 180;
  return { x: cx + r * Math.sin(rad), y: cy - r * Math.cos(rad) };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y); ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}

const CX = 160, CY = 175, W = 320, H = 350;

function drawChart(canvas, data, city) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  roundRect(ctx, 0, 0, W, H, 8);
  ctx.fillStyle = '#faf5f0'; ctx.fill();

  ctx.fillStyle = '#D96B86';
  ctx.font = 'bold 14px sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('飞行图 · ' + city.name, CX, 20);

  [42, 82, 122].forEach(r => {
    ctx.beginPath(); ctx.arc(CX, CY, r, 0, Math.PI*2);
    ctx.strokeStyle = '#F0E4E8'; ctx.lineWidth = 1;
    ctx.setLineDash([4,6]); ctx.stroke(); ctx.setLineDash([]);
  });

  if (data) {
    directions.forEach((_, i) => {
      const end = pt(CX, CY, 130, i*30);
      const v = data.finDir[i];
      let color = '#BBB';
      if (v === '避') color = '#D8A0AD';
      else if (typeof v === 'number' && v > 0) color = '#E6212A';
      ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = color; ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.7; ctx.stroke(); ctx.globalAlpha = 1;
    });

    directions.forEach((d, i) => {
      const p = pt(CX, CY, 148, i*30);
      ctx.fillStyle = '#D96B86';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(d, p.x, p.y);
    });

    directions.forEach((_, i) => {
      const p = pt(CX, CY, 163, i*30);
      const v = data.finDir[i];
      let color = '#BBB', label = String(v);
      if (v === '避') { color = '#D8A0AD'; }
      else if (typeof v === 'number' && v > 0) { color = '#E6212A'; label = '+' + v; }
      ctx.fillStyle = color;
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(label, p.x, p.y);
    });
  }

  ctx.beginPath(); ctx.arc(CX, CY, 5, 0, Math.PI*2);
  ctx.fillStyle = '#D96B86'; ctx.globalAlpha = 0.25; ctx.fill(); ctx.globalAlpha = 1;

  ctx.beginPath(); ctx.arc(CX, CY, 2, 0, Math.PI*2);
  ctx.fillStyle = '#C9A96E'; ctx.globalAlpha = 0.8; ctx.fill(); ctx.globalAlpha = 1;

  ctx.fillStyle = '#C75A74';
  ctx.font = 'bold 12px sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(city.name, CX, CY - 14);
}

export default function ChinaMap({ selectedCity, data, onCityChange }) {
  const canvasRef = useRef(null);
  const city = selectedCity || defaultCity;

  useEffect(() => {
    if (canvasRef.current && data) drawChart(canvasRef.current, data, city);
  }, [data, city]);

  const ar = W + '/' + H;

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
      <div style={{ display: 'flex', justifyContent: 'center', padding: 10 }}>
        <canvas ref={canvasRef} width={W} height={H}
          style={{ width: '100%', maxWidth: W, height: 'auto', aspectRatio: ar, borderRadius: 8 }} />
      </div>
      {data && <p style={{textAlign:'center',fontSize:10,color:'#A8969A',margin:0}}>{data.y}年{data.m}月{data.d}日 · 属{data.zodiac} · 原点{city.name}</p>}
    </div>
  );
}
