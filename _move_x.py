fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x1=\"32\" x2=\"60\"","x1=\"37\" x2=\"65\"")
open(fp,"w",encoding="utf-8").write(hc)
print("x moved +5")
