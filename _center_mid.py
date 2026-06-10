fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y1=\"391\" y2=\"391\"","y1=\"419\" y2=\"419\"")
open(fp,"w",encoding="utf-8").write(hc)
print("middle line centered at 419")
