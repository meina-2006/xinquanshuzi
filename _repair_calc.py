import re
with open("F:/codex/设计心泉数字心理学app/xinquan-app/src/tabs/CalcTab.jsx","r",encoding="utf-8") as f:
    content = f.read()
content = re.sub(r'\\\\\$', "$", content)
content = content.replace('`$', '`$')
for i, line in enumerate(content.split("\n")):
    if "d.s1" in line:
        print(f"Line {i}: {repr(line)}")
with open("F:/codex/设计心泉数字心理学app/xinquan-app/src/tabs/CalcTab.jsx","w",encoding="utf-8") as f:
    f.write(content)
print("done")
