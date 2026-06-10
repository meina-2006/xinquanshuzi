fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y2=\"314\"","y2=\"307\"")
hc=hc.replace("y1=\"426\" y2=\"426\"","y1=\"406\" y2=\"406\"")
open(fp,"w",encoding="utf-8").write(hc)
print("diagonal lines fixed")
