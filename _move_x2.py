fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x1=\"37\" x2=\"65\"","x1=\"27\" x2=\"55\"")
open(fp,"w",encoding="utf-8").write(hc)
print("x moved -10")
