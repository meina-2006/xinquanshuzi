hfp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
cfp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/tabs/CalcTab.jsx"
hc=open(hfp,"r",encoding="utf-8").read()
cc=open(cfp,"r",encoding="utf-8").read()
# Step 1: HeartChart - add function params
hc=hc.replace("youthLabel, youthNum, youthDen })","youthLabel, youthNum, youthDen, middleLabel, middleNum, middleDen, oldLabel, oldNum, oldDen })")
# Step 2: HeartChart - add middle and old SVG elements
hc=hc.replace("      </svg>",add_mid_old+"      </svg>")
# Step 3: CalcTab - add middle/old props to HeartChart
cc=cc.replace("youthDen={d.yd}","youthDen={d.yd}\n        middleLabel=\"中年期(40-60岁)\"\n        middleNum={String(d.mn1) + String(d.mn2)}\n        middleDen={d.md}\n        oldLabel=\"老年期(60岁+)\"\n        oldNum={String(d.on1) + String(d.on2)}\n        oldDen={d.od}")
# Step 4: CalcTab - remove 生命阶段分数 section
old_section="<div className=\"section-title\">生命阶段分数</div>\n      <div className=\"frac-row\">\n        <FracCard label=\"中年期(40-60岁)\" left={d.mn1} right={d.mn2} denom={d.md} />\n        <FracCard label=\"老年期(60岁)\" left={d.on1} right={d.on2} denom={d.od} />\n      </div>"
cc=cc.replace(old_section,"")
# Write files
open(hfp,"w",encoding="utf-8").write(hc)
open(cfp,"w",encoding="utf-8").write(cc)
print("age fractions added")
