fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
cp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css"
hc=open(fp,"r",encoding="utf-8").read()
css=open(cp,"r",encoding="utf-8").read()
# CSS: nts 20px -> 30px
css=css.replace(".heart-svg .nts { font-size: 20px; }",".heart-svg .nts { font-size: 30px; }")
# Position changes
hc=hc.replace("x=\"105\" y=\"120\"","x=\"95\" y=\"120\"")
hc=hc.replace("x=\"275\" y=\"120\"","x=\"285\" y=\"120\"")
hc=hc.replace("x=\"150\" y=\"200\"","x=\"140\" y=\"200\"")
hc=hc.replace("x=\"230\" y=\"200\"","x=\"240\" y=\"200\"")
# Youth fraction: fontSize 40->30, x+10, line x+10
hc=hc.replace("fontSize=\"40\"","fontSize=\"30\"")
hc=hc.replace("x=\"90\" y=\"308\"","x=\"100\" y=\"308\"")
hc=hc.replace("x=\"90\" y=\"332\"","x=\"100\" y=\"332\"")
hc=hc.replace("x1=\"60\" x2=\"120\"","x1=\"70\" x2=\"130\"")
# Youth label: fontSize 22->15, x+20
hc=hc.replace("fontSize=\"22\"","fontSize=\"15\"")
hc=hc.replace("x=\"90\" y=\"345\"","x=\"110\" y=\"345\"")
# Write files
open(fp,"w",encoding="utf-8").write(hc)
open(cp,"w",encoding="utf-8").write(css)
print("all changes applied")
