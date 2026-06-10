fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x1=\"32\" y1=\"314\" x2=\"60\" y2=\"314\"","x1=\"27\" y1=\"314\" x2=\"55\" y2=\"314\"")
open(fp,"w",encoding="utf-8").write(hc)
print("x fixed")
