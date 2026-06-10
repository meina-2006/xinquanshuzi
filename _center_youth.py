fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# Change textAnchor start->middle for centering
hc=hc.replace("textAnchor=\"start\"","textAnchor=\"middle\"")
# Keep line centered. Already at x1=45, x2=95 (center=70)
open(fp,"w",encoding="utf-8").write(hc)
print("centered textAnchor")
