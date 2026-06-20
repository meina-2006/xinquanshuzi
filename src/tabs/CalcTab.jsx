import HeartChart from '../components/HeartChart';
import '../styles/theme.css';

function card(label, value) {
  return (
    <div className="card" key={label}>
      <div className="val">{value}</div>
      <div className="lbl">{label}</div>
    </div>
  );
}

function FracCard({ label, left, right, denom }) {
  const num = String(left) + String(right);
  return (
    <div className="frac-card" key={label}>
      <div className="frac-inline">
        <div className="frac-num">{num}</div>
        <div className="frac-line"></div>
        <div className="frac-den">{denom}</div>
      </div>
      <div className="lbl">{label}</div>
    </div>
  );
}

function comboGroup(title, tags) {
  return (
    <div className="combo-group" key={title}>
      <h4>{title}</h4>
      <div className="combo-row">
        {tags.map((t, i) => (
          <span className="combo-tag" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function CalcTab({ data }) {
  if (!data) return null;
  const d = data;
  return (
    <div>
      <div className="section-title">基础信息</div>
      <div className="card-grid">
        {card('起始数字', d.start)}
        {card('主性格', d.s3)}
        {card('坐镇数字', String(d.s1)+String(d.s2)+String(d.s3))}
      </div>
      <div className="section-title">心形图</div>
      <HeartChart
        tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}
        tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr}
        bot={d.bot}
        youthLabel="青年期(20-40岁)"
        youthNum={String(d.yn1) + String(d.yn2)}
        youthDen={d.yd}
        middleLabel="中年期(40-60岁)"
        middleNum={String(d.mn1) + String(d.mn2)}
        middleDen={d.md}
        oldLabel="老年期(60岁+)"
        oldNum={String(d.on1) + String(d.on2)}
        oldDen={d.od}
      />
      
      <div className="section-title">十三组联合数字</div>
      {comboGroup('青年期', d.jy)}
      {comboGroup('中年期', d.jm)}
      {comboGroup('老年期', d.jo)}
      {comboGroup('特殊联合数字', [d.jspl])}
    </div>
  );
}
