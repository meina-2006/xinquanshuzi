fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# ml down 10px
hc=hc.replace("x=\"140\" y=\"200\"","x=\"140\" y=\"210\"")
# mr down 10px
hc=hc.replace("x=\"240\" y=\"200\"","x=\"240\" y=\"210\"")
# line left 20px, down 5px
hc=hc.replace("x1=\"50\" y1=\"314\" x2=\"110\" y2=\"314\"","x1=\"30\" y1=\"319\" x2=\"90\" y2=\"319\"")
# youthLabel fontSize 18->14, down 15px
hc=hc.replace("fontSize=\"18\"","fontSize=\"14\"")
hc=hc.replace("y=\"365\"","y=\"380\"")
open(fp,"w",encoding="utf-8").write(hc)
print("more moves done")
