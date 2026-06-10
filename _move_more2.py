fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y=\"457\"","y=\"459\"")
hc=hc.replace("y=\"345\"","y=\"347\"")
hc=hc.replace("y=\"475\"","y=\"485\"")
open(fp,"w",encoding="utf-8").write(hc)
print("moved")
