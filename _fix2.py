import re
fp = r"F:\codex\设计心泉数字心理学app\xinquan-app\src\tabs\CalcTab.jsx"
with open(fp, "r", encoding="utf-8") as f:
    data = f.read()
# Fix: remove double backslash before dollar sign in template literals
data = data.replace("\\${d.s1}", "${d.s1}")
data = data.replace("\\${d.s2}", "${d.s2}")
data = data.replace("\\${d.s3}", "${d.s3}")
with open(fp, "w", encoding="utf-8") as f:
    f.write(data)
print("Fixed template literals in CalcTab.jsx")
