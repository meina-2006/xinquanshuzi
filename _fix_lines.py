fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# Youth & Old line: 294 -> 307 (midpoint of 288 and 327)
hc=hc.replace("y1=\"294\"","y1=\"307\"")
# Middle line: 406 -> 419 (midpoint of 400 and 439)
hc=hc.replace("y1=\"406\"","y1=\"419\"")
open(fp,"w",encoding="utf-8").write(hc)
print("lines centered")
