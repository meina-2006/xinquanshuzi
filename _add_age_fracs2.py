hfp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
cfp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/tabs/CalcTab.jsx"
hc=open(hfp,"r",encoding="utf-8").read()
cc=open(cfp,"r",encoding="utf-8").read()
hc=hc.replace("youthLabel, youthNum, youthDen })","youthLabel, youthNum, youthDen, middleLabel, middleNum, middleDen, oldLabel, oldNum, oldDen })")
# Build middle and old fraction elements
mid_old=""
mid_old+="        {middleNum !== undefined && <text x=\"190\" y=\"420\" className=\"nt\" fill=\"#D96B86\" fontSize=\"30\" textAnchor=\"middle\">{middleNum}</text>}\n"
mid_old+="        {middleNum !== undefined && <line x1=\"165\" y1=\"426\" x2=\"215\" y2=\"426\" stroke=\"#D96B86\" strokeWidth=\"2\" />}\n"
mid_old+="        {middleDen !== undefined && <text x=\"190\" y=\"444\" className=\"nt\" fill=\"#D96B86\" fontSize=\"30\" textAnchor=\"middle\">{middleDen}</text>}\n"
mid_old+="        {middleLabel && <text x=\"190\" y=\"475\" fontFamily=\"Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif\" fontSize=\"14\" fill=\"#A8969A\" textAnchor=\"middle\">{middleLabel}</text>}\n"
mid_old+="        {oldNum !== undefined && <text x=\"310\" y=\"308\" className=\"nt\" fill=\"#D96B86\" fontSize=\"30\" textAnchor=\"middle\">{oldNum}</text>}\n"
mid_old+="        {oldNum !== undefined && <line x1=\"285\" y1=\"314\" x2=\"335\" y2=\"314\" stroke=\"#D96B86\" strokeWidth=\"2\" />}\n"
mid_old+="        {oldDen !== undefined && <text x=\"310\" y=\"332\" className=\"nt\" fill=\"#D96B86\" fontSize=\"30\" textAnchor=\"middle\">{oldDen}</text>}\n"
mid_old+="        {oldLabel && <text x=\"310\" y=\"375\" fontFamily=\"Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif\" fontSize=\"14\" fill=\"#A8969A\" textAnchor=\"middle\">{oldLabel}</text>}\n"
hc=hc.replace("      </svg>",mid_old+"      </svg>")
# Update CalcTab HeartChart props
cc=cc.replace("youthDen={d.yd}","youthDen={d.yd}\n        middleLabel=\"中年期(40-60岁)\"\n        middleNum={String(d.mn1) + String(d.mn2)}\n        middleDen={d.md}\n        oldLabel=\"老年期(60岁+)\"\n        oldNum={String(d.on1) + String(d.on2)}\n        oldDen={d.od}")
# Remove 生命阶段分数 section
oldSec="<div className=\"section-title\">生命阶段分数</div>\n      <div className=\"frac-row\">\n        <FracCard label=\"中年期(40-60岁)\" left={d.mn1} right={d.mn2} denom={d.md} />\n        <FracCard label=\"老年期(60岁)\" left={d.on1} right={d.on2} denom={d.od} />\n      </div>"
cc=cc.replace(oldSec,"")
open(hfp,"w",encoding="utf-8").write(hc)
open(cfp,"w",encoding="utf-8").write(cc)
print("age fractions added")
