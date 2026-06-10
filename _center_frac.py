fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# Center youthNum at x=70
hc=hc.replace("x=\"80\" y=\"308\"","x=\"70\" y=\"308\"")
# Center youthDen at x=70
hc=hc.replace("x=\"80\" y=\"347\"","x=\"70\" y=\"347\"")
# Center youthLabel at x=70
hc=hc.replace("x=\"30\" y=\"375\"","x=\"70\" y=\"375\"")
# Also center line to match (center at 70, width 50px)
hc=hc.replace("x1=\"40\" y1=\"314\" x2=\"100\" y2=\"314\"","x1=\"45\" y1=\"314\" x2=\"95\" y2=\"314\"")
open(fp,"w",encoding="utf-8").write(hc)
print("centered")
