fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y1=\"419\" y2=\"419\"","y1=\"434\" y2=\"434\"")
open(fp,"w",encoding="utf-8").write(hc)
print("mid line down 15px")
