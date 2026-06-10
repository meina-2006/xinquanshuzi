# Generate CalcTab.jsx with proper UTF-8 content
jsx = """import HeartChart from '../components/HeartChart';
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
      <div className="section-title">\u57fa\u7840\u4fe1\u606f</div>
      <div className="card-grid">
        {card('\u8d77\u59cb\u6570\u5b57', d.start)}
        {card('\u4e3b\u6027\u683c', d.s3)}
        {card('\u5750\u9547\u8054\u5408\u6570\u5b57', `\x24{d.s1}` + `\x24{d.s2}` + `\x24{d.s3}`)}
        {card('\u5c5e\u76f8', d.zodiac)}
      </div>

      <div className="section-title">\u5fc3\u5f62\u56fe</div>
      <HeartChart
        tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}
        tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr}
        bot={d.bot}
      />

      <div className="section-title">\u751f\u547d\u9636\u6bb5\u5206\u6570</div>
      <div className="frac-row">
        <FracCard label="\u9752\u5e74\u671f(20-40\u5c81)" left={d.yn1} right={d.yn2} denom={d.yd} />
        <FracCard label="\u4e2d\u5e74\u671f(40-60\u5c81)" left={d.mn1} right={d.mn2} denom={d.md} />
        <FracCard label="\u8001\u5e74\u671f(60\u5c81+)" left={d.on1} right={d.on2} denom={d.od} />
      </div>

      <div className="section-title">\u5341\u4e09\u7ec4\u8054\u5408\u6570\u5b57</div>
      {comboGroup('\u9752\u5e74\u671f', d.jy)}
      {comboGroup('\u4e2d\u5e74\u671f', d.jm)}
      {comboGroup('\u8001\u5e74\u671f', d.jo)}
      {comboGroup('\u7279\u6b8a\u8054\u5408\u6570\u5b57', [d.jspl])}
    </div>
  );
}
"""

with open("F:/codex/设计心泉数字心理学app/xinquan-app/src/tabs/CalcTab.jsx", "w", encoding="utf-8") as f:
    f.write(jsx)
print("CalcTab.jsx rewritten successfully")
