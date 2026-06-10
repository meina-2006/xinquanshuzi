import re
f=r"F:/codex/设计心泉数字心理学app/xinquan-app/_gen_calc_final.py"
t=open(f,"r",encoding="utf-8").read()
t=t.replace(chr(34)+chr(43)+chr(41),chr(34)+chr(34)+chr(34)+chr(41))
open(f,"w",encoding="utf-8").write(t)
print("fixed")
