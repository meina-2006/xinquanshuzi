fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
hc=hc.replace("x=\"40\" y=\"308\" className=\"nt nts\" fill=\"#D96B86\"","x=\"90\" y=\"308\" className=\"nt\" fill=\"#D96B86\" fontSize=\"40\"")
hc=hc.replace("x1=\"27\" y1=\"314\" x2=\"55\" y2=\"314\"","x1=\"60\" y1=\"314\" x2=\"120\" y2=\"314\"")
hc=hc.replace("x=\"40\" y=\"332\" className=\"nt nts\" fill=\"#D96B86\"","x=\"90\" y=\"332\" className=\"nt\" fill=\"#D96B86\" fontSize=\"40\"")
hc=hc.replace("x=\"40\" y=\"345\" fontSize=\"11\"","x=\"90\" y=\"345\" fontSize=\"22\"")
open(fp,"w",encoding="utf-8").write(hc)
print("font doubled, x+50")
