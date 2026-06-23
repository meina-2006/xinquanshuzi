 import HeartChart from '../components/HeartChart';
 import { flowText } from '../utils/calculator';
import '../styles/theme.css';
 
 function card(label, value) {
   return (
     <div className="card" key={label}>
       <div className="val">{value}</div>
       <div className="lbl">{label}</div>
     </div>
   );
 }
 
 export default function FlowTab({ data }) {
   if (!data) return null;
   const d = data;
   return (
     <div>
       <div className="section-title">流年 {d.cy}</div>
       <div className="card-grid">
         {card('流年主性格', d.f_s3)}
         {card('流年坐镇', `${d.f_s1}${d.f_s2}${d.f_s3}`)}
       </div>
 
       <div className="section-title">流年心形图</div>
       <HeartChart
         tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}
         tr_l={d.f_tr_l} tr_r={d.f_tr_r} mr={d.f_mr}
         bot={d.f_bot}
       />

      <div className="section-title">流年 {d.cy} · 解读</div>
      <div className="interpret">
        {flowText[d.f_s3] ? flowText[d.f_s3].split("\n\n").map((p,i) => <p key={i}>{p}</p>) : ''}
      </div>
     </div>
   );
 }
