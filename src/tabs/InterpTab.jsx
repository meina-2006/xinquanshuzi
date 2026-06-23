import { numTypes, numToType } from "../utils/numberTypes";
import { startText, mainText, missingText, sixDimension, missingAdvice, getCombinedMeaning } from '../utils/calculator';
import '../styles/theme.css';

export default function InterpTab({ data }) {
  if (!data) return null;
  const d = data;

  const present = new Set([d.tl_l, d.tl_r, d.ml, d.tr_l, d.tr_r, d.mr, d.bot]);
  const missing = [];
  for (let i = 1; i <= 9; i++) {
    if (!present.has(i)) missing.push(i);
  }

  const dim = sixDimension[d.s3] || {};

  function comboGroup(title, tags) {
    return (
      <div className="combo-group" key={title}>
        <h4>{title}</h4>
        {tags.map((t, i) => (
          <div key={i} style={{marginBottom:'8px', padding:'8px 10px', background:'#fff', borderRadius:'8px', borderLeft:'4px solid #D96B86', boxShadow:'0 1px 4px rgba(217,107,134,0.08)'}}>
            <span style={{display:'inline-block', background:'#FCE8EF', color:'var(--text-primary)', padding:'2px 12px', borderRadius:'12px', fontWeight:700, fontSize:'14px', fontFamily:'var(--font-main)', marginRight:'8px'}}>{t}</span>
            <span style={{fontSize:'14px', color:'#555', lineHeight:'1.6'}}>{getCombinedMeaning(t)}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="section-title">起始数字 · {d.start}</div>
      <div className="interpret">
        <p>{startText[d.start] || ''}</p>
      </div>

      <div className="section-title">主性格 · {d.s3}</div>
      <div className="interpret">
        <p dangerouslySetInnerHTML={{ __html: mainText[d.s3] || '' }} />
      </div>

      {dim.talent && (
        <>
          <div className="section-title">6维度深度解析</div>
          <div className="interpret">
            <p><span className="hl">&#127775; 天赋</span> {dim.talent}</p>
            <p><span className="hl">&#128100; 人格特质</span> {dim.personality}</p>
            <p><span className="hl">&#128148; 内心感受</span> {dim.feeling}</p>
            <p><span className="hl">&#127919; 内心期待</span> {dim.expectation}</p>
            <p><span className="hl">&#9889; 行为模式</span> {dim.behavior}</p>
            <p><span className="hl">&#128154; 成长建议</span> {dim.advice}</p>
          </div>
        </>
      )}

      <div className="section-title">13组联合数字解析</div>
      <div className="interpret">
        {comboGroup('青年期', d.jy)}
        {comboGroup('中年期', d.jm)}
        {comboGroup('老年期', d.jo)}
        {comboGroup('特殊联合数字', [d.jspl])}
        <p style={{fontSize:'11px', color:'#A8969A', marginTop:'10px', textAlign:'center'}}>
          每组联合数字由左数、中数、右数三个数字组成，代表能量从起始到转化的完整路径
        </p>
      </div>

      <div className="section-title">缺失数字{missing.length ? ' · ' + missing.join('、') : ' · 无'}</div>
      <div className="interpret">
        {missing.length === 0 ? (
          <p>
            <span className="hl">恭喜！</span>心形图中九个数字全部出现，能量完整而平衡，这是非常难得的天赋配置。
            你天生拥有全方位的能量，只需将它们发挥到极致。
          </p>
        ) : (
          missing.map(n => (
            <p key={n}>
              <span className="hl">缺{n}：</span>{missingText[n] || ''}<br />
              <span style={{color:'#888',fontSize:'12px'}}>&#128161; 建议：{missingAdvice[n] || ''}</span>
            </p>
          ))
        )}
      </div>

      
      <div className="section-title">数字类型</div>
      <div className="interpret">
        <p>你的主性格 {d.s3} 属于 <span className="hl">{numTypes[numToType[d.s3]]?.name || ""}</span></p>
        <p>{numTypes[numToType[d.s3]]?.desc || ""}</p>
        <p style={{fontSize:"13px",lineHeight:1.7,color:"#6A5A5A",marginTop:"8px"}}>{numTypes[numToType[d.s3]]?.detail || ""}</p>
      </div>

      <div className="section-title">阴阳能量</div>
      <div className="interpret">
        <p>心形图中：<span className="hl">阳数 {d.yangCount}个</span> · <span className="hl">阴数 {d.yinCount}个</span></p>
        {d.yinYang === "yang" && <p>你的阳性能量偏强，做事积极主动，有主见不拖泥带水。<br/>{/* 性别判断后续再加 */}如果心形图中阳性数字较多，说明你是一个行动派。<br/>{/* 对于女性：容易成为"女汉子"，温柔是需要修行的功课。 */}</p>}
        {d.yinYang === "yin" && <p>你的阴性能量偏强，含蓄内敛，细腻敏感，包容力强。<br/>如果心形图中阴性数字较多，你是一个温和体贴的人。</p>}
        {d.yinYang === "balance" && <p>你的阴阳能量平衡，刚柔并济，既能果断行动也能温柔包容，是难得的好状态。</p>}
        <p style={{marginTop:"12px",textAlign:"center",color:"#D96B86",fontWeight:700}}>懂是爱的前提 —— 理解了另一半的数字能量，就不会过多要求对方改变</p>
      </div>
    </div>
  );
}
