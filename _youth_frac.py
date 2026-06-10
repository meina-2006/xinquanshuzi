hc = open(r"F:\codex\设计心泉数字心理学app\xinquan-app\src\components\HeartChart.jsx", "r", encoding="utf-8").read()

old = """        {youthLabel && <text x="25" y="355" className="nt nts nt-red" textAnchor="start">{youthLabel}</text>}
        {youthNum !== undefined && <text x="25" y="378" className="nt nts nt-red" textAnchor="start">{youthNum}/{youthDen}</text>}
      </svg>"""

new = """        {youthNum !== undefined && <text x="28" y="350" className="nt nts" fill="#D96B86" textAnchor="start">{youthNum}</text>}
        {youthNum !== undefined && <line x1="22" y1="356" x2="58" y2="356" stroke="#D96B86" strokeWidth="2" />}
        {youthDen !== undefined && <text x="28" y="374" className="nt nts" fill="#D96B86" textAnchor="start">{youthDen}</text>}
        {youthLabel && <text x="28" y="388" fontFamily="'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif" fontSize="11" fill="#A8969A" textAnchor="start">{youthLabel}</text>}
      </svg>"""

hc = hc.replace(old, new)
open(r"F:\codex\设计心泉数字心理学app\xinquan-app\src\components\HeartChart.jsx", "w", encoding="utf-8").write(hc)
print("HeartChart.jsx updated with fraction layout")
