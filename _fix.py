css = open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css','r',encoding='utf-8').read()
css = css.replace('  font-family: "Impact", "Arial Black", var(--font-main);\n    font-family: "Impact", "Arial Black", var(--font-main);', 
                  '  font-family: "Impact", "Arial Black", var(--font-main);')
open('F:/codex/设计心泉数字心理学app/xinquan-app/src/styles/theme.css','w',encoding='utf-8').write(css)
print('duplicate fixed')
