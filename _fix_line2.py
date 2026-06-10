fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x1=\"12\" y1=\"364\" x2=\"46\" y2=\"364\"","x1=\"32\" y1=\"320\" x2=\"60\" y2=\"320\"")
open(fp,"w",encoding="utf-8").write(hc)
print("line fixed")
