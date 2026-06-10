fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("fontSize=\"11\"","fontSize=\"22\"")
hc=hc.replace("x=\"40\" y=\"345\"","x=\"90\" y=\"345\"")
open(fp,"w",encoding="utf-8").write(hc)
print("label fixed")
