import sys
sys.stdout.reconfigure(encoding='utf-8')
tpl = """\
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
      <div className="section-title">""" + chr(22522) + chr(30784) + chr(20449) + chr(24687) + """</div>
      <div className="card-grid">
        {card('""" + chr(36215) + chr(22987) + chr(25968) + chr(23383) + """', d.start)}
        {card('""" + chr(20027) + chr(24615) + chr(26684) + """', d.s3)}
        {card('""" + chr(22352) + chr(38215) + chr(32852) + chr(21512) + chr(25968) + chr(23383) + """', String(d.s1)+String(d.s2)+String(d.s3))}
        {card('""" + chr(23646) + chr(30456) + """', d.zodiac)}
      </div>
      <div className="section-title">""" + chr(24515) + chr(24418) + chr(22270) + """</div>
      <HeartChart
        tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}
        tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr}
        bot={d.bot}
        youthLabel=\"""" + chr(38738) + chr(24180) + chr(26399) + """(20-40""" + chr(23681) + """)"
        youthNum={String(d.yn1) + String(d.yn2)}
        youthDen={d.yd}
      />
      <div className="section-title">""" + chr(29983) + chr(21629) + chr(38454) + chr(27573) + chr(20998) + chr(25968) + """</div>
      <div className="frac-row">
        <FracCard label=\"""" + chr(20013) + chr(24180) + chr(26399) + """(40-60""" + chr(23681) + """)" left={d.mn1} right={d.mn2} denom={d.md} />
        <FracCard label=\"""" + chr(32769) + chr(24180) + chr(26399) + """(60""" + chr(23681) + """)" left={d.on1} right={d.on2} denom={d.od} />
      </div>
      <div className="section-title">""" + chr(21313) + chr(19977) + chr(32452) + chr(32852) + chr(21512) + chr(25968) + chr(23383) + """</div>
      {comboGroup('""" + chr(38738) + chr(24180) + chr(26399) + """', d.jy)}
      {comboGroup('""" + chr(20013) + chr(24180) + chr(26399) + """', d.jm)}
      {comboGroup('""" + chr(32769) + chr(24180) + chr(26399) + """', d.jo)}
      {comboGroup('""" + chr(29305) + chr(27530) + chr(32852) + chr(21512) + chr(25968) + chr(23383) + """', [d.jspl])}
    </div>
  );
}
"""
with open("F:/codex/\u8bbe\u8ba1\u5fc3\u6cc9\u6570\u5b57\u5fc3\u7406\u5b66app/xinquan-app/src/tabs/CalcTab.jsx", "w", encoding="utf-8") as f:
    f.write(tpl)
print("CalcTab.jsx written successfully")
