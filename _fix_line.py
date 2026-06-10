fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y1=\"314\" y2=\"314\"","y1=\"320\" y2=\"320\"")
open(fp,"w",encoding="utf-8").write(hc)
print("line position fixed")
