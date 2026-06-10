fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# bot down 10px
hc=hc.replace("x=\"190\" y=\"290\"","x=\"190\" y=\"300\"")
# youthNum left 20px
hc=hc.replace("x=\"100\" y=\"308\"","x=\"80\" y=\"308\"")
# youthDen left 20px, down 15px
hc=hc.replace("x=\"100\" y=\"332\"","x=\"80\" y=\"347\"")
# line left 20px
hc=hc.replace("x1=\"70\" x2=\"130\"","x1=\"50\" x2=\"110\"")
# youthLabel fontSize 15->18, left 50px, down 20px
hc=hc.replace("fontSize=\"15\"","fontSize=\"18\"")
hc=hc.replace("x=\"110\" y=\"345\"","x=\"60\" y=\"365\"")
open(fp,"w",encoding="utf-8").write(hc)
print("all moves done")
