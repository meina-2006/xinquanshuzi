import re

css = open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css', 'r', encoding='utf-8').read()

# 1. Add medium-black variable if not present
if '--medium-black' not in css:
    css = css.replace('--avoid-color: #D8A0AD;', '--avoid-color: #D8A0AD;\n   --medium-black: #444444;')

# 2. Replace card .val color
css = re.sub(
    r'\.card \.val \{[^}]*\}',
    '.card .val {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--medium-black);\n}',
    css, flags=re.DOTALL
)

# 3. Replace frac-card .frac color
css = re.sub(
    r'\.frac-card \.frac \{[^}]*\}',
    '.frac-card .frac {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--medium-black);\n}',
    css, flags=re.DOTALL
)

# 4. Replace combo-tag color
css = re.sub(
    r'(\.combo-tag \{[^}]*?color: )var\(--positive-red\)',
    r'\1var(--medium-black)',
    css
)

# 5. Add Impact font to heart-svg
css = css.replace(
    'text-anchor: middle;\n}',
    '  font-family: "Impact", "Arial Black", var(--font-main);\n  text-anchor: middle;\n}',
    1  # only first occurrence
)

open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css', 'w', encoding='utf-8').write(css)
print('CSS updates applied successfully')
