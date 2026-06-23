import { useState } from "react";
import { calcAll } from "../utils/calculator";
import { coupleCodeText } from "../utils/coupleCode";
import HeartChart from "./HeartChart";
import "../styles/theme.css";

function ss(n) {
  while (n >= 10) n = String(n).split("").reduce((a, b) => a + +b, 0);
  return n;
}

function DateInputs({ label, person, setPerson, onParse }) {
  const now = new Date();
  const years = Array.from({length: 131}, (_, i) => 1900 + i);
  const months = Array.from({length: 12}, (_, i) => i + 1);
  const days = Array.from({length: 31}, (_, i) => i + 1);
  return (
    <div className="hp-input-bar">
      <span className="hp-input-label">{label}</span>
      <select value={person.year}
        onChange={e => setPerson({...person, year: e.target.value, data: null})}>
        {years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>
      <span className="hp-sep">/</span>
      <select value={person.month}
        onChange={e => setPerson({...person, month: Number(e.target.value), data: null})}>
        {months.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <span className="hp-sep">/</span>
      <select value={person.day}
        onChange={e => setPerson({...person, day: Number(e.target.value), data: null})}>
        {days.map(d => <option key={d} value={d}>{d}</option>)}
      </select>
      <button className="hp-btn" onClick={() => onParse(person, setPerson)}>解析</button>
    </div>
  );
}

function MiniChart({ data, label }) {
  return (
    <div className="hp-chart-box">
      <div className="hp-badge">{label} 主性格 {data.s3}</div>
      <div className="hp-chart-crop">
        <HeartChart
          tl_l={data.tl_l} tl_r={data.tl_r} ml={data.ml}
          tr_l={data.tr_l} tr_r={data.tr_r} mr={data.mr}
          bot={data.bot}
        />
      </div>
    </div>
  );
}

export default function HePanContent() {
  const now = new Date();
  const [female, setFemale] = useState({ year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate(), data: null });
  const [male, setMale] = useState({ year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate(), data: null });
  const [showResult, setShowResult] = useState(false);
  const [animating, setAnimating] = useState(false);

  const doParse = (p, setP) => {
    if (!p.year || !p.month || !p.day) return;
    setShowResult(false);
    setP({...p, data: calcAll(Number(p.year), p.month, p.day)});
  };

  const ready = female.data && male.data;
  const code = ready ? ss(female.data.s3 + male.data.s3) : null;
  const couple = showResult && code ? coupleCodeText[code] : null;

  const handleHeart = () => {
    if (!ready) return;
    setAnimating(true);
    setTimeout(() => { setShowResult(true); setAnimating(false); }, 400);
  };

  return (
    <div className="course-detail">
      <div className="cd-hero" style={{background:"#FFF0F5"}}>
        <span style={{fontSize:40}}>👩‍❤️‍👨</span>
        <h2>合盘密码</h2>
        <p>输入两人生日看夫妻密码</p>
      </div>
      <div className="cd-body">
        <DateInputs label="女方" person={female} setPerson={setFemale} onParse={doParse} />
        <DateInputs label="男方" person={male} setPerson={setMale} onParse={doParse} />

        {(female.data || male.data) && (
          <div className="hp-charts-row">
            <div className="hp-chart-col">
              {female.data && <MiniChart data={female.data} label="女方" />}
            </div>
            <div className="hp-heart-col">
              <button className={"hp-heart" + (ready ? " hp-heart-glow" : "") + (animating ? " hp-heart-boom" : "")}
                onClick={handleHeart} disabled={!ready}>❤️</button>
            </div>
            <div className="hp-chart-col">
              {male.data && <MiniChart data={male.data} label="男方" />}
            </div>
          </div>
        )}

        {!showResult && ready && !animating && (
          <p style={{textAlign:"center",fontSize:13,color:"#A8969A"}}>点击中间的 ❤️ 查看夫妻密码</p>
        )}

        {!ready && !showResult && (
          <p style={{textAlign:"center",fontSize:13,color:"#A8969A",padding:16}}>💡 分别点击两人的“解析”按钮</p>
        )}

        {showResult && couple && (
          <div className="hp-result hp-slide-in">
            <div className="hp-formula">{female.data.s3} + {male.data.s3} = {female.data.s3 + male.data.s3} → <strong>{code}</strong></div>
            <div className="hp-code-label">💞 夫妻密码：{code}</div>
            <div className={couple.type === "ideal" ? "hc-good" : "hc-bad"}>
              <div className="hc-label">{couple.type === "ideal" ? "\u2705 \u5F88理想" : "\u26A0\uFE0F \u9700注意"}</div>
              <p>{couple.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
