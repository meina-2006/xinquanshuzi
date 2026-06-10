css = open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css', 'r', encoding='utf-8').read()

css = css.replace('--avoid-color: #D8A0AD;', '--avoid-color: #D8A0AD;\n   --medium-black: #444444;')

css = css.replace(
  '.card .val {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--positive-red);\n}',
  '.card .val {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--medium-black);\n}'
)

css = css.replace(
  '.frac-card .frac {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--pink-primary);\n}',
  '.frac-card .frac {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--medium-black);\n}'
)

css = css.replace(
  'color: var(--positive-red);\n  letter-spacing: 1px;\n  box-shadow: var(--shadow-soft);\n }\n \n /* 组合数字 */',
  'color: var(--medium-black);\n  letter-spacing: 1px;\n  box-shadow: var(--shadow-soft);\n }\n \n /* 组合数字 */'
)

css = css.replace(
  'font-family: var(--font-main);\n  text-anchor: middle;\n}',
  'font-family: "Impact", "Arial Black", var(--font-main);\n  text-anchor: middle;\n}'
)

open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css', 'w', encoding='utf-8').write(css)
print('CSS updated OK')
