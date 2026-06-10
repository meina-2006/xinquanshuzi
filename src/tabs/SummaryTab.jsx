import { mainQualities, flowAdvice, sixDimension, missingText, missingAdvice } from '../utils/calculator';
import '../styles/theme.css';

export default function SummaryTab({ data }) {
  if (!data) return null;
  const d = data;

  const present = new Set([d.tl_l, d.tl_r, d.ml, d.tr_l, d.tr_r, d.mr, d.bot]);
  const missing = [];
  for (let i = 1; i <= 9; i++) {
    if (!present.has(i)) missing.push(i);
  }

  const good = d.dirs.filter((_, i) =>
    typeof d.finDir[i] === 'number' && d.finDir[i] > 0
  );
  const avoid = d.dirs.filter((_, i) => d.finDir[i] === '避');
  const dim = sixDimension[d.s3] || {};

  return (
    <div>
      <div className="section-title">生命密码总结</div>
      <div className="interpret">
        <p>
          你是一个<span className="hl">{mainQualities[d.s3] || ''}</span>。
          主性格<span className="hl">{d.s3}</span>是你的核心能量，
          坐镇联合数字<span className="hl">{d.s1}{d.s2}{d.s3}</span>就是你生命的地图导航。
        </p>

        {dim.talent && (
          <>
            <p><span className="hl">&#127775; 天赋优势：</span>{dim.talent}</p>
            <p><span className="hl">&#128100; 人格特质：</span>{dim.personality}</p>
            <p><span className="hl">&#128154; 成长建议：</span>{dim.advice}</p>
          </>
        )}

        {good.length > 0 && (
          <p>
            飞行图中吉位在<span className="hl">{good.join('、')}</span>方向，
            这些方位能量对你有助。
          </p>
        )}

        {avoid.length > 0 && (
          <p>
            <span className="hl">{avoid.join('、')}</span>方位为避用位，需多加注意。
          </p>
        )}

        <p>
          你的核心联合数字<span className="hl">{d.jm[0]}</span>（坐镇）决定了你的行为底色；
          <span className="hl">{d.jspl}</span>（特殊联合）是隐藏的天赋密码。
        </p>

        {missing.length > 0 ? (
          <p>
            心形图中缺少<span className="hl">{missing.join('、')}</span>，
            这些能量是你此生需要后天修炼的课题。没有不代表不好——
            每一个缺失，都是成长的邀请函。
            <br /><span style={{color:'#888',fontSize:'12px'}}>
              {missing.map(n => '缺' + n + '：' + (missingAdvice[n] || '')).join('；')}
            </span>
          </p>
        ) : (
          <p>
            心形图中九个数字全部出现，能量完整而平衡，
            这是非常难得的天赋配置。
          </p>
        )}

        <p>
          生命阶段方面：青年期<span className="hl">{d.yn1} {d.yn2}/{d.yd}</span>，
          中年期<span className="hl">{d.mn1} {d.mn2}/{d.md}</span>，
          老年期<span className="hl">{d.on1} {d.on2}/{d.od}</span>。
          每个阶段都有不同的能量频率，顺应节奏方能行稳致远。
        </p>

        <p>
          {d.cy}年流年走<span className="hl">{d.f_s3}</span>，
          {flowAdvice[d.f_s3] || ''}
        </p>

        <p style={{
          marginTop: '16px', fontSize: '14px',
          color: '#D96B86', fontWeight: 700, textAlign: 'center'
        }}>
          记住&mdash;&mdash;<span style={{ color: '#E6212A' }}>懂是爱的前提，修是生命的答案。</span>
        </p>
      </div>
    </div>
  );
}
