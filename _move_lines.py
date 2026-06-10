fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y1=\"307\"","y1=\"297\"")
hc=hc.replace("y2=\"307\"","y2=\"297\"")
hc=hc.replace("y1=\"406\" y2=\"406\"","y1=\"391\" y2=\"391\"")
open(fp,"w",encoding="utf-8").write(hc)
print("lines moved")
