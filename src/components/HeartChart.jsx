import '../styles/theme.css';

export default function HeartChart({ tl_l, tl_r, ml, tr_l, tr_r, mr, bot, youthLabel, youthNum, youthDen, middleLabel, middleNum, middleDen, oldLabel, oldNum, oldDen }) {
  const spaceDigits = (val) => String(val ?? '').split('').join('  ');
  return (
    <div className="heart-wrap">
      <svg width="340" height="460" viewBox="0 0 380 500" xmlns="http://www.w3.org/2000/svg" className="heart-svg">
        <path
          d="M 190 338 L 167 317 C 85 243, 32 194, 32 135 C 32 86, 70 48, 119 48 C 146 48, 173 60, 190 81 C 207 60, 234 48, 261 48 C 310 48, 348 86, 348 135 C 348 194, 295 243, 213 317 L 190 338 Z"
          fill="none"
          stroke="#D96B86"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="38" y1="160" x2="342" y2="160" stroke="#D96B86" strokeWidth="2" />
        <line x1="87" y1="240" x2="293" y2="240" stroke="#D96B86" strokeWidth="2" />
        <line x1="190" y1="81" x2="190" y2="240" stroke="#D96B86" strokeWidth="2" />
        <text x="95" y="120" className="nt nts nt-red">{tl_l}</text>
        <text x="150" y="120" className="nt nts nt-gray">{tl_r}</text>
        <text x="230" y="120" className="nt nts nt-gray">{tr_l}</text>
        <text x="285" y="120" className="nt nts nt-red">{tr_r}</text>
        <text x="140" y="210" className="nt nts nt-gray">{ml}</text>
        <text x="240" y="210" className="nt nts nt-gray">{mr}</text>
        <text x="190" y="300" className="nt ntb-big nt-red">{bot}</text>
        {youthNum !== undefined && <text x="50" y="288" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{spaceDigits(youthNum)}</text>}
        {youthNum !== undefined && <line x1="25" y1="297" x2="75" y2="297" stroke="#D96B86" strokeWidth="2" />}
        {youthDen !== undefined && <text x="50" y="327" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{youthDen}</text>}
        {youthLabel && <text x="50" y="355" fontFamily="'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif" fontSize="14" fill="#A8969A" textAnchor="middle">{youthLabel}</text>}
        {middleNum !== undefined && <text x="190" y="400" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{spaceDigits(middleNum)}</text>}
        {middleNum !== undefined && <line x1="165" y1="408" x2="215" y2="408" stroke="#D96B86" strokeWidth="2" />}
        {middleDen !== undefined && <text x="190" y="439" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{middleDen}</text>}
        {middleLabel && <text x="190" y="465" fontFamily="Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif" fontSize="14" fill="#A8969A" textAnchor="middle">{middleLabel}</text>}
        {oldNum !== undefined && <text x="330" y="288" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{spaceDigits(oldNum)}</text>}
        {oldNum !== undefined && <line x1="305" y1="297" x2="355" y2="297" stroke="#D96B86" strokeWidth="2" />}
        {oldDen !== undefined && <text x="330" y="327" className="nt" fill="#D96B86" fontSize="30" textAnchor="middle">{oldDen}</text>}
        {oldLabel && <text x="330" y="355" fontFamily="Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif" fontSize="14" fill="#A8969A" textAnchor="middle">{oldLabel}</text>}
      </svg>
    </div>
  );
}
