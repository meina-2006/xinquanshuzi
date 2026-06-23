import { useState } from "react";
import InterpTab from "../tabs/InterpTab";
import SummaryTab from "../tabs/SummaryTab";
import { innerCodeText, outerCodeText, subconsciousText, familyCodeText, spouseCodeText } from "../utils/calculator";
import "../styles/theme.css";

export default function AnalysisPage({ data }) {
  const [activeTab, setActiveTab] = useState("interp");

  if (!data) {
    return (
      <div className="empty-state">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#D0C0C4" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <p>暂无解析数据</p>
        <p className="empty-hint">请点击底部 + 号输入生日</p>
      </div>
    );
  }

  const d = data;

  const codeCards = [
    { key: "inner", label: "内心密码", num: d.innerCode, desc: innerCodeText[String(d.s3) + d.innerCode] || "", formula: "主性格 " + d.s3 + " x 2 = " + (d.s3*2) + " → " + d.innerCode },
    { key: "outer", label: "外心密码", num: d.outerCode, desc: outerCodeText[d.outerCode] || "", formula: "青年期(" + d.yd + ") + 中年期(" + d.md + ") + 老年期(" + d.od + ") = " + d.outerCode },
    { key: "subconscious", label: "潜意识密码", num: d.subconsciousCode, desc: subconsciousText[d.subconsciousCode] || "", formula: d.tl_l + " + " + d.tr_r + " + " + d.bot + " = " + d.subconsciousCode },
    { key: "family", label: "家庭密码", num: d.familyCode, desc: familyCodeText[d.familyCode] || "", formula: "左上右(" + d.tl_r + ") + 右上左(" + d.tr_l + ") = " + d.familyCode, nums: d.familyNums },
    { key: "yinyang", label: "阴阳密码", num: d.yangCount + "阳 " + d.yinCount + "阴", desc: d.yinYang === "yang" ? "阳性能量偏强，做事积极主动，有主见不拖泥带水。" : d.yinYang === "yin" ? "阴性能量偏强，含蓄内敛，细腻敏感，包容力强。" : "阴阳能量平衡，刚柔并济，是难得的好状态。", formula: "阳数 " + d.yangCount + "个 · 阴数 " + d.yinCount + "个" },
    { key: "spouse", label: "夫妻密码", num: d.spouseCode, desc: spouseCodeText[d.spouseCode] || "", nums: d.spouseNums },
  ];

  return (
    <div>
      <div className="analysis-tabs">
        <div className={`analysis-tab ${activeTab === "interp" ? "active" : ""}`}
          onClick={() => setActiveTab("interp")}>深度解析</div>
        <div className={`analysis-tab ${activeTab === "codes" ? "active" : ""}`}
          onClick={() => setActiveTab("codes")}>密码解析</div>
        <div className={`analysis-tab ${activeTab === "summary" ? "active" : ""}`}
          onClick={() => setActiveTab("summary")}>总结</div>
      </div>
      <div className="analysis-content">
        {activeTab === "interp" && <InterpTab data={data} />}
        {activeTab === "codes" && (
          <div className="code-cards-grid">
            {codeCards.map(card => (
              <div className={`code-card code-card-${String(card.num).charAt(0) || card.num}`} key={card.key}>
                <div className="code-card-number">{card.num}</div>
                <div className="code-card-label">{card.label}</div>
                {card.nums && (
                  <div className="code-card-subnums">
                    {card.nums.map((n, i) => <span className="code-subnum" key={i}>{n}</span>)}
                  </div>
                )}
                {card.formula && <div className="code-card-formula">{card.formula}</div>}
                <div className="code-card-desc">{card.desc}</div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "summary" && <SummaryTab data={data} />}
      </div>
    </div>
  );
}
