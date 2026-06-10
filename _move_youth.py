import re

hcp = r"F:\codex\设计心泉数字心理学app\xinquan-app\src\components\HeartChart.jsx"
ccp = r"F:\codex\设计心泉数字心理学app\xinquan-app\src\tabs\CalcTab.jsx"

# 1. Update HeartChart.jsx
with open(hcp, "r", encoding="utf-8") as f:
    hc = f.read()

hc = hc.replace(
    "export default function HeartChart({ tl_l, tl_r, ml, tr_l, tr_r, mr, bot })",
    "export default function HeartChart({ tl_l, tl_r, ml, tr_l, tr_r, mr, bot, youthLabel, youthNum, youthDen })"
)

youth_text = """        {youthLabel && <text x="25" y="355" className="nt nts nt-red" textAnchor="start">{youthLabel}</text>}
        {youthNum !== undefined && <text x="25" y="378" className="nt nts nt-red" textAnchor="start">{youthNum}/{youthDen}</text>}
      </svg>"""
hc = hc.replace("      </svg>", youth_text)

with open(hcp, "w", encoding="utf-8") as f:
    f.write(hc)
print("HeartChart.jsx done")

# 2. Update CalcTab.jsx
with open(ccp, "r", encoding="utf-8") as f:
    cc = f.read()

# Add youth props to HeartChart
old_heart = "<HeartChart\n        tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}\n        tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr}\n        bot={d.bot}\n      />"
new_heart = '<HeartChart\n        tl_l={d.tl_l} tl_r={d.tl_r} ml={d.ml}\n        tr_l={d.tr_l} tr_r={d.tr_r} mr={d.mr}\n        bot={d.bot}\n        youthLabel="\u9752\u5e74\u671f(20-40\u5c81)"\n        youthNum={String(d.yn1) + String(d.yn2)}\n        youthDen={d.yd}\n      />'
cc = cc.replace(old_heart, new_heart)

# Remove the first FracCard (youth)
# Find and remove the line containing FracCard with youth label
lines = cc.split("\n")
new_lines = []
skip_next = False
for line in lines:
    if "<FracCard label=\u9752\u5e74\u671f" in line:
        skip_next = False
        continue
    new_lines.append(line)
cc = "\n".join(new_lines)

with open(ccp, "w", encoding="utf-8") as f:
    f.write(cc)
print("CalcTab.jsx done")
