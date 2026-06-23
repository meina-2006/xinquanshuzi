import { useState } from "react";
import { numTypes, numToType } from "../utils/numberTypes";
import { heCaiData } from "../utils/hecai";
import { coupleCodeText } from "../utils/coupleCode";
import HePanContent from "../components/HePanContent";
import HeartChart from "../components/HeartChart";
import { calcAll } from "../utils/calculator";
import { courseChapters, numToWuxing, wuxingElements, wuxingCharacter, shengCycle, keCycle } from "../utils/wuxing";
import "../styles/theme.css";

const courses = [
  { id: "wuxing",  icon: "🏫", title: "五行学堂", subtitle: "数字与五行的奥秘", bg: "#FFF5F0" },
  { id: "yinyang", icon: "☯",     title: "阴阳密码", subtitle: "数字的阴性与阳性", bg: "#F0F4FF" },
  { id: "numbertype", icon: "🔢", title: "数字类型", subtitle: "务实·感觉·远见", bg: "#FFF0F8" },
  { id: "hecai", icon: "🤝", title: "合财密码", subtitle: "看看你们合不合财", bg: "#F8F0FF" },
  { id: "hepan", icon: "👩‍❤️‍👨", title: "合盘密码", subtitle: "输入两人生日看夫妻密码", bg: "#FFF0F5" },
  { id: "oldage", icon: <svg width="36" height="36" viewBox="0 0 80 80" fill="none" style={{verticalAlign:"middle"}}>
                <circle cx="40" cy="40" r="38" fill="#FFF0F3"/>
                <ellipse cx="40" cy="14" rx="26" ry="10" fill="#D96B86"/>
                <circle cx="35" cy="10" r="5" fill="#D96B86"/>
                <ellipse cx="40" cy="32" rx="30" ry="22" fill="#E0C8C8"/>
                <ellipse cx="40" cy="46" rx="22" ry="20" fill="#FDE8D0"/>
                <circle cx="28" cy="42" r="9" fill="none" stroke="#D96B86" strokeWidth="2.5"/>
                <circle cx="52" cy="42" r="9" fill="none" stroke="#D96B86" strokeWidth="2.5"/>
                <line x1="37" y1="42" x2="43" y2="42" stroke="#D96B86" strokeWidth="2.5"/>
                <circle cx="28" cy="42" r="2.5" fill="#5A4A4A"/>
                <circle cx="52" cy="42" r="2.5" fill="#5A4A4A"/>
                <path d="M34 52 Q40 56 46 52" fill="none" stroke="#D96B86" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="34" cy="62" r="3" fill="#FFD0D8"/>
                <circle cx="40" cy="63" r="3" fill="#FFD0D8"/>
                <circle cx="46" cy="62" r="3" fill="#FFD0D8"/>
              </svg>, title: "晚年密码", subtitle: "老年期数字能量", bg: "#FFF8F0" },
];

function OldAgeContent() {
  const now = new Date();
  const [p, setP] = useState({ year: now.getFullYear(), month: now.getMonth()+1, day: now.getDate(), data: null });
  const years = Array.from({length: 131}, (_, i) => 1900 + i);
  const months = Array.from({length: 12}, (_, i) => i + 1);
  const days = Array.from({length: 31}, (_, i) => i + 1);
  const d = p.data;
  return (
    <div className="course-detail">
      <div className="cd-hero" style={{background:"#FFF8F0"}}>
        <svg width="64" height="64" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="#FFF0F3"/>
              <ellipse cx="40" cy="14" rx="26" ry="10" fill="#D96B86"/>
              <circle cx="35" cy="10" r="5" fill="#D96B86"/>
              <ellipse cx="40" cy="32" rx="30" ry="22" fill="#E0C8C8"/>
              <ellipse cx="40" cy="46" rx="22" ry="20" fill="#FDE8D0"/>
              <circle cx="28" cy="42" r="9" fill="none" stroke="#D96B86" strokeWidth="2.5"/>
              <circle cx="52" cy="42" r="9" fill="none" stroke="#D96B86" strokeWidth="2.5"/>
              <line x1="37" y1="42" x2="43" y2="42" stroke="#D96B86" strokeWidth="2.5"/>
              <circle cx="28" cy="42" r="2.5" fill="#5A4A4A"/>
              <circle cx="52" cy="42" r="2.5" fill="#5A4A4A"/>
              <path d="M34 52 Q40 56 46 52" fill="none" stroke="#D96B86" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="34" cy="62" r="3" fill="#FFD0D8"/>
              <circle cx="40" cy="63" r="3" fill="#FFD0D8"/>
              <circle cx="46" cy="62" r="3" fill="#FFD0D8"/>
            </svg>
        <h2>晚年密码</h2>
        <p>查看老年期数字能量</p>
      </div>
      <div className="cd-body">
        <div className="hp-input-bar">
          <span className="hp-input-label">生日</span>
          <select value={p.year} onChange={e => setP({...p, year: e.target.value, data: null})}>
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
          <span className="hp-sep">/</span>
          <select value={p.month} onChange={e => setP({...p, month: Number(e.target.value), data: null})}>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <span className="hp-sep">/</span>
          <select value={p.day} onChange={e => setP({...p, day: Number(e.target.value), data: null})}>
            {days.map(d2 => <option key={d2} value={d2}>{d2}</option>)}
          </select>
          <button className="hp-btn" onClick={() => {
            if (!p.year || !p.month || !p.day) return;
            setP({...p, data: calcAll(Number(p.year), p.month, p.day)});
          }}>解析</button>
        </div>
        {d && (
          <>
            <div style={{margin:"12px 0",textAlign:"center"}}>
              <HeartChart tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml} tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr} bot={d.bot}
                oldLabel="老年期" oldNum={String(d.on1) + " " + String(d.on2)} oldDen={d.od} />
            </div>
                 <div className="oa-text-section">
              {(() => {
                const k = String(d.on1) + String(d.on2) + String(d.od);
                const m = {
                  "189": "是个追求完美主义者，众者皆知这世上无完美事物，所以这些人都会累积一些产业，但往往在追求完美过程时影响了健康",
                  "213": "这种人也许到晚年他不需要很多钱，但却要尊严，要有人听他说话，所以劝告这种人年轻时要多存一些钱，不然到老了没有说服力",
                  "336": "需要很积极就会很有钱，而且不能有脾气和嗜赌，否则都会影响晚年的财富",
                  "459": "都会想在很短促的时间找到他要的财富，如果他在年轻时达不到所要的成就，晚年处事都需要谨慎，不然往往事与愿违",
                  "573": "这种人到了晚年也会一直遇到比自己有钱的人，比较多是上流社会的，这种人每天吃喝都要上等的，要是星级的，慢慢的，也许你也将钱花光了，所以要找机会与这些上流朋友合作，这样你也可以赚到钱",
                  "696": "这些人要将年轻时所赚取的财富投资在产业，晚年就会有收获",
                  "729": "需要维持友好婚姻状况，因为这组数字属友善者，时而不时有较强异性缘，这都会影响个人磁场，如要突破，伴侣和女性都是你的贵人",
                  "843": "这种人大多数到了晚年是比较知足的一群，如果你还不满意这种生活，请你要找对领导者来领导你，因为你是属于跟从者，而不是领导者，这样才能让你有所突破",
                  "996": "这类人属于有福报的晚年，因为年轻时急于求成，就会过于追求外在的改变，如改名，佩戴过多的吉祥饰物。建议更好的修身养性"
                }[k];
                return <>
                <div className="oa-combo">{d.on1}{d.on2}/{d.od}</div>
                {m ? <p className="oa-desc">{m}</p> : <p className="oa-desc">暂无此组合的详细解读</p>}
                </>;
              })()}
            </div>
            </>
        )}
      </div>
    </div>
  );
}

const HeCaiContent = ({ data }) => {
  const [myNum, setMyNum] = useState(data ? String(data.s3) : "");
  const [theirNum, setTheirNum] = useState("");
  const key = myNum && theirNum ? myNum + "-" + theirNum : null;
  const result = key && heCaiData[key] ? heCaiData[key] : null;
  return (
    <div className="course-detail">
      <div className="cd-hero" style={{background:"#F8F0FF"}}>
        <span style={{fontSize:40}}>🤝</span>
        <h2>合财密码</h2>
        <p>看看你们合不合财</p>
      </div>
      <div className="cd-body">
        <div className="cd-section">
          <h4>选择你们的数字</h4>
          <div className="hc-selectors">
            <div className="hc-field">
              <label>你的数字</label>
              <select value={myNum} onChange={e => setMyNum(e.target.value)}>
                <option value="">—</option>
                {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}号人</option>)}
              </select>
            </div>
            <div className="hc-field">
              <label>对方的数字</label>
              <select value={theirNum} onChange={e => setTheirNum(e.target.value)}>
                <option value="">—</option>
                {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}号人</option>)}
              </select>
            </div>
          </div>
        </div>
        {myNum && theirNum && (
          <div className="hc-result">
            <div className="hc-pair">{myNum}号人 vs {theirNum}号人</div>
            {result ? (
              <>
                <div className="hc-good">
                  <div className="hc-label">✅ 合作点</div>
                  <p>{result.good}</p>
                </div>
                <div className="hc-bad">
                  <div className="hc-label">❌ 不合之处</div>
                  <p>{result.bad}</p>
                </div>
              </>
            ) : (
              <p style={{textAlign:"center",color:"#A8969A"}}>暂无此组合数据</p>
            )}
          </div>
        )}
        {(!myNum || !theirNum) && (
          <div className="hc-tip">💡 选择双方数字即可查看合财密码</div>
        )}
      </div>
    </div>
  );
};

const NumberTypeContent = () => (
  <div className="course-detail">
    <div className="cd-hero" style={{background:"#FFF0F8"}}>
      <span style={{fontSize:40}}>🔢</span>
      <h2>数字类型</h2>
      <p>务实型 · 感觉型 · 远见型</p>
    </div>
    <div className="cd-body">
      <div className="cd-section">
        <h4>三种数字类型</h4>
        <p>数字心理学将数字分为三种类型：务实型、感觉型、远见型。了解这些有助于更好地理解自己和他人。</p>
      </div>
      <div className="cd-types">
        <div className="cd-type-card" style={{borderTop:"4px solid #6BA86B"}}>
          <div className="cd-type-icon">🌾</div>
          <div className="cd-type-name">务实型</div>
          <div className="cd-type-nums">1 · 4 · 7</div>
          <p>说话直接，讲究性价比，务实，关注当下。</p>
        </div>
        <div className="cd-type-card" style={{borderTop:"4px solid #D96B86"}}>
          <div className="cd-type-icon">💖</div>
          <div className="cd-type-name">感觉型</div>
          <div className="cd-type-nums">2 · 3 · 5 · 8</div>
          <p>凡事凭感觉，爱面子，特别是5和8，重感受。</p>
        </div>
        <div className="cd-type-card" style={{borderTop:"4px solid #967AD9"}}>
          <div className="cd-type-icon">🔭</div>
          <div className="cd-type-name">远见型</div>
          <div className="cd-type-nums">6 · 9</div>
          <p>考虑长远，看未来，有格局有远见。</p>
        </div>
      </div>
      <div className="cd-section">
        <h4>如何运用</h4>
        <p>务实型的人：和他们沟通直接点，别绕弯子，讲实际利益和效果。</p>
        <p>感觉型的人：照顾他们的感受和面子，情绪价值比道理更重要。</p>
        <p>远见型的人：聊未来、聊梦想、聊格局，他们会被宏大愿景吸引。</p>
        <p style={{color:"#D96B86",fontWeight:700,textAlign:"center",marginTop:12}}>懂是爱的前提——了解了对方的类型，就知道该怎么相处了。</p>
      </div>
    </div>
  </div>
);

const YinyangContent = () => (

  <div className="course-detail">
    <div className="cd-hero" style={{background:"#F0F4FF"}}>
      <span style={{fontSize:40}}>☯</span>
      <h2>阴阳密码</h2>
      <p>数字的阴性与阳性</p>
    </div>
    <div className="cd-body">
      <div className="cd-section">
        <h4>什么是阴阳数字</h4>
        <p>数字也分阴性数字和阳性数字。阳性数字代表阳刚、主动、积极；阴性数字代表阴柔、被动、含蓄。</p>
      </div>
      <div className="cd-grid-2">
        <div className="cd-card" style={{borderTop:"4px solid #E8915A"}}>
          <h3>☀️ 阳性数字</h3>
          <div className="cd-nums"><span>1</span><span>3</span><span>5</span><span>7</span><span>9</span></div>
          <p>奇数 · 代表阳刚<br/>积极主动 · 外向表达<br/>领导力 · 创造力</p>
        </div>
        <div className="cd-card" style={{borderTop:"4px solid #5A9BD9"}}>
          <h3>🌙 阴性数字</h3>
          <div className="cd-nums"><span>2</span><span>4</span><span>6</span><span>8</span></div>
          <p>偶数 · 代表阴柔<br/>含蓄内敛 · 细腻敏感<br/>包容力 · 感受力</p>
        </div>
      </div>
      <div className="cd-section">
        <h4>心形图中的阴阳</h4>
        <p>如果心形图中阳性数字较多，说明阳性能量偏强。女性阳数多，容易成为"女汉子"，温柔是需要修行的功课。</p>
        <p>如果心形图中阴性数字较多，说明阴性能量偏强。男性阴数多，会谦和温顺，阳刚之气需要通过修行来中和。</p>
      </div>
      <div className="cd-section">
        <h4>阴阳平衡</h4>
        <p>了解自己和另一半的数字能量，就不会过多要求对方改变。</p>
      </div>
      <div className="cd-quote">💡 懂是爱的前提</div>
    </div>
  </div>
);

export default function CoursePage({ data }) {
  const [selected, setSelected] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [showYinModal, setShowYinModal] = useState(false);

  const userWx = data ? numToWuxing[data.s3] : null;
  const userEl = userWx ? wuxingElements[userWx] : null;
  const userChar = userWx ? wuxingCharacter[userWx] : null;
  const yangNums = data ? [data.tl_l,data.tl_r,data.ml,data.tr_l,data.tr_r,data.mr,data.bot].filter(n=>n%2===1) : [];
  const yinNums = data ? [data.tl_l,data.tl_r,data.ml,data.tr_l,data.tr_r,data.mr,data.bot].filter(n=>n%2===0) : [];

  if (selected === "hepan") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <HePanContent />
      </div>
    );
  }
  if (selected === "oldage") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <OldAgeContent />
      </div>
    );
  }
  if (selected === "hecai") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <HeCaiContent data={data} />
      </div>
    );
  }
  if (selected === "numbertype") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <NumberTypeContent />
      </div>
    );
  }
  if (selected === "yinyang") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <YinyangContent />
      </div>
    );
  }

  if (selected === "wuxing") {
    return (
      <div className="course-page">
        <button className="cd-back" onClick={() => setSelected(null)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回
        </button>
        <div className="course-detail">
          <div className="cd-hero" style={{background:"#FFF5F0"}}>
            <span style={{fontSize:40}}>🏫</span>
            <h2>五行学堂</h2>
            <p>数字与五行的奥秘</p>
          </div>
          <div className="cd-body">
            {userWx && (
              <div className="wx-card" style={{borderLeft:"4px solid "+(userEl?userEl.color:"#D96B86")}}>
                <div className="wx-card-hd">
                  <span className="wx-card-icon">{userEl?userEl.icon:""}</span>
                  <div>
                    <div className="wx-card-label">你的五行属性</div>
                    <div className="wx-card-main" style={{color:userEl?userEl.color:"#D96B86"}}>主性格 {data.s3} 属{userWx} · {userChar?userChar.name:""}</div>
                  </div>
                </div>
                <div className="wx-card-tag">{userChar?userChar.tag:""}</div>
                <div className="wx-card-desc">{userChar?userChar.desc:""}</div>
                <div className="wx-card-grid">
                  <div className="wx-card-item"><span>🌱</span><span>生你：{(shengCycle.find(s=>s.to===userWx)||{}).from||"—"}</span></div>
                  <div className="wx-card-item"><span>⚔️</span><span>克你：{(keCycle.find(k=>k.to===userWx)||{}).from||"—"}</span></div>
                  <div className="wx-card-item"><span>🌿</span><span>你生：{(shengCycle.find(s=>s.from===userWx)||{}).to||"—"}</span></div>
                  <div className="wx-card-item"><span>🛡️</span><span>你克：{(keCycle.find(k=>k.from===userWx)||{}).to||"—"}</span></div>
                </div>
              </div>
            )}
            <div className="course-section-title">课程章节</div>
            <div className="wx-grid">
              {courseChapters.map(ch => (
                <div key={ch.id}
                  className={"wx-chapter"+(expandedId===ch.id?" wx-chapter-open":"")}
                  style={{background:ch.bgColor}}
                  onClick={() => setExpandedId(expandedId===ch.id?null:ch.id)}
                >
                  <div className="wx-ch-icon">{ch.icon}</div>
                  <div className="wx-ch-title">{ch.title}</div>
                  <div className="wx-ch-sub">{ch.subtitle}</div>
                  {expandedId===ch.id && (
                    <div className="wx-ch-body">
                      <p>{ch.desc}</p>
                      {ch.id==="sheng" && <div className="wx-cycle-list">{shengCycle.map((s,i)=><div key={i} className="wx-cycle-item"><span className="wx-cycle-arrow">{s.from} → {s.to}</span><span className="wx-cycle-desc">{s.desc}</span></div>)}</div>}
                      {ch.id==="ke" && <div className="wx-cycle-list">{keCycle.map((k,i)=><div key={i} className="wx-cycle-item"><span className="wx-cycle-arrow">{k.from} → {k.to}</span><span className="wx-cycle-desc">{k.desc}</span></div>)}</div>}
                      {ch.id==="character" && <div className="wx-char-list">{["金","水","火","木","土"].map(el=>{const c=wuxingCharacter[el];return <div key={el} className="wx-char-item"><span className="wx-char-name" style={{color:wuxingElements[el]?.color}}>{wuxingElements[el]?.icon} {el} · {c.name}</span><span className="wx-char-nums">数字 {c.numbers.join("/")}</span><span className="wx-char-desc">{c.desc}</span></div>;})}</div>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: card grid
  return (
    <div className="course-page">
      <div className="course-hero">
        <h1 className="course-hero-title">📚 课程中心</h1>
        <p className="course-hero-sub">探索数字心理学的奥秘</p>
      </div>
      <div className="course-grid">
        {courses.map(c => (
          <div key={c.id} className="course-card" style={{background:c.bg}} onClick={() => setSelected(c.id)}>
            <div className="course-card-icon">{c.icon}</div>
            <div className="course-card-title">{c.title}</div>
            <div className="course-card-sub">{c.subtitle}</div>
          </div>
        ))}
        <div className="course-card course-card-more">
          <div className="course-card-icon">+</div>
          <div className="course-card-title">更多课程</div>
          <div className="course-card-sub">敬请期待</div>
        </div>
      </div>
    </div>
  );
}
