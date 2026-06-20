import ChinaMap from '../components/ChinaMap';
import { directions } from '../utils/cities';
import '../styles/theme.css';

export default function FlightTab({ data, selectedCity, onCityChange }) {
  if (!data) return null;
  const d = data;

  return (
    <div>
      <div style={{marginBottom:12}}>
        <div className="section-title" style={{marginBottom:8}}>属相</div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <div style={{width:80,height:80,display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg-white)',borderRadius:'var(--radius-sm)',boxShadow:'var(--shadow-soft)',border:'1px solid var(--border-light)'}}>
            <span style={{fontSize:28,fontWeight:700,color:'var(--medium-black)'}}>{d.zodiac}</span>
          </div>
        </div>
      </div>
      <div className="section-title">心泉数字心理学方位数</div>
      <table className="dir-table">
        <thead>
          <tr>
            {directions.map((dir, i) => <th key={i}>{dir}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            {d.finDir.map((v, i) => {
              if (v === '避') return <td className="avoid" key={i}>避</td>;
              const num = typeof v === 'number' ? v : parseInt(v);
              if (num > 0) return <td className="val" key={i}>+{num}</td>;
              return <td className="neg" key={i}>{num}</td>;
            })}
          </tr>
        </tbody>
      </table>

      <div className="section-title">十二方位飞行图</div>
      <ChinaMap
        selectedCity={selectedCity}
        data={data}
        onCityChange={onCityChange}
      />
    </div>
  );
}
