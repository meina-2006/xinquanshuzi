import { startText, mainText, flowText, missingText, sixDimension, missingAdvice, getCombinedMeaning } from '../utils/calculator';
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
      <div className="section-title">起始数字 &#183; {d.start}</div>
      <div className="interpret">
        <p>{startText[d.start] || ''}</p>
      </div>

      <div className="section-title">主性格 &#183; {d.s3}</div>
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

      <div className="section-title">缺失数字{missing.length ? ' &#183; ' + missing.join('、') : ' &#183; 无'}</div>
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

      <div className="section-title">流年 {d.cy} &#183; 主性格 {d.f_s3}</div>
      <div className="interpret">
        <p>{flowText[d.f_s3] || ''}</p>
      </div>
    </div>
  );
}
