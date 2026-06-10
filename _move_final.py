fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x1=\"30\" y1=\"319\" x2=\"90\" y2=\"319\"","x1=\"10\" y1=\"319\" x2=\"70\" y2=\"319\"")
hc=hc.replace("y=\"380\"","y=\"375\"")
open(fp,"w",encoding="utf-8").write(hc)
print("moved")
