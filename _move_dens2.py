fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("y=\"452\"","y=\"457\"")
hc=hc.replace("y=\"340\"","y=\"345\"")
open(fp,"w",encoding="utf-8").write(hc)
print("dens moved down 5px")
