fp=r"F:/codex/设计心泉数字心理学app/xinquan-app/src/components/HeartChart.jsx"
hc=open(fp,"r",encoding="utf-8").read()
# Fix middle line directly
old_line="""        {middleNum !== undefined && <line x1="165" y1="426" x2="215" y2="426" stroke="#D96B86" strokeWidth="2" />}"""
new_line="""        {middleNum !== undefined && <line x1="165" y1="391" x2="215" y2="391" stroke="#D96B86" strokeWidth="2" />}"""
hc=hc.replace(old_line,new_line)
open(fp,"w",encoding="utf-8").write(hc)
import sys; sys.stdout.reconfigure(encoding="utf-8"); print("middle line fixed")
