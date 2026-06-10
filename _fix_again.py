fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# Fix line: was stuck at x1=60 x2=120, now move left 20px
hc=hc.replace("x1=\"60\" y1=\"314\" x2=\"120\" y2=\"314\"","x1=\"40\" y1=\"314\" x2=\"100\" y2=\"314\"")
# Youth label: x=60 -> x=30 (left 30px)
hc=hc.replace("x=\"60\" y=\"375\"","x=\"30\" y=\"375\"")
open(fp,"w",encoding="utf-8").write(hc)
print("fixed")
