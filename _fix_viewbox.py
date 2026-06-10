fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("width=\"340\" height=\"340\" viewBox=\"0 0 380 380\"","width=\"340\" height=\"460\" viewBox=\"0 0 380 500\"")
open(fp,"w",encoding="utf-8").write(hc)
print("viewBox updated")
