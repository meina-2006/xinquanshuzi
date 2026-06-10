import re

with open('F:/codex/设计心泉数字心理学app/xinquan-app/src/utils/calculator.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add the new data before the last line
newData = '''

// ===== 6维度深度解析 =====
export const sixDimension = {
  1: { talent: '创造力、决断力、思维敏捷、体能好', personality: '独立自主、积极主动、好胜不服输、简单直接、吃苦耐劳', feeling: '自信与自卑并存，想当第一，被否定时产生对抗', expectation: '做事要快，不喜欢被打扰，要说了算，证明自己', behavior: '做事不含糊、要结果要快，点子多创意多，争输赢', advice: '学会信任他人并合作，允许他人用自己的方式完成事情' },
  2: { talent: '沟通协调、善于察言观色、写作表达', personality: '温和细心、耐心、敏感、想得多、依赖配合', feeling: '委屈先忍着、压抑、不希望破坏和谐', expectation: '希望和谐合作，关系温暖贴心，希望被倾听', behavior: '爱说会说、感受敏锐关注别人、包容接纳', advice: '学会先"我"后"他"，把感受放在第一位' },
  3: { talent: '表演表达、多才多艺、动手模仿能力强', personality: '热情爽朗、阳光乐观、冲动、粗线条', feeling: '着急急躁、烦躁、生气愤怒', expectation: '想被看见、希望被人群关注、开心最重要', behavior: '孩子般能量、爱表现、花钱不犹豫、不怕犯错', advice: '学会管理情绪，多认可多看见，给足面子' },
  4: { talent: '做计划、定规则、善于分类理财', personality: '稳重务实、直接不迂回、多愁善感', feeling: '害怕焦虑、担心忧虑、缺乏安全感', expectation: '守规则、重承诺、安全第一、准确有条理', behavior: '稳定、按规矩办事、追求物质满足、三思而后行', advice: '突破安全感，学会放松，不要过度担忧' },
  5: { talent: '打破常规、颠覆传统、搞定人、讲故事', personality: '幽默开朗、爱冒险、喜欢新鲜刺激、豁达', feeling: '恐惧无趣、厌烦不耐烦', expectation: '要自由要好玩、有意义的、新鲜刺激的', behavior: '标新立异、特立独行、精力充沛、清楚自己要什么', advice: '学会自律，找到感觉与责任之间的平衡' },
  6: { talent: '空间审美、自我疗愈、善谋略', personality: '谨慎念旧情、忠诚顾家、护短、占有欲强', feeling: '嫌弃在意价值、抱怨付出未被看见', expectation: '有品质有内涵、有价值、在意细节完美', behavior: '负责任、为家人花钱、善良有爱心、尽善尽美', advice: '学会无条件地爱，不过度追求完美' },
  7: { talent: '逻辑思维强、发现规律、找到真相', personality: '随和、不争不抢、高冷爱静、淡泊名利', feeling: '失落纠结、枯燥乏味、困惑烦累', expectation: '有专业有逻辑有深度、解决问题', behavior: '学习思考、身心合一、求知欲强、爱问为什么', advice: '敞开心扉，乐观接受外面的一切' },
  8: { talent: '搞人际关系、生意头脑、赚钱能力', personality: '忍辱负重、要强好胜、外冷心热、责任感强', feeling: '自责压抑、愤怒痛苦、失望紧张', expectation: '卓越优秀、有钱有权、勤奋拼搏', behavior: '有权威、企图心强、对自己和别人要求高', advice: '厚德载物，保持纯正的心' },
  9: { talent: '健谈、机变灵活、博爱包容', personality: '慈悲博爱、敢要敢得、包容、有同理心', feeling: '想要帮助别人、无力感', expectation: '助人行善、被别人需要、给人机会', behavior: '有爱无私、慷慨付出不求回报、有使命感', advice: '学会聚焦和断舍离，先爱己而后爱人' }
};

// ===== 缺失数字建议 =====
export const missingAdvice = {
  1: '独立性不够，做事情容易没有主见。建议：多多放手，学会自己做主做选择',
  2: '不擅长沟通，察言观色能力较弱。建议：多与人沟通交流，主动表达内心',
  3: '行动力不足，做事容易拖延。建议：制定每日计划，完成给自己鼓励',
  4: '做事缺乏规划，缺少勇气。建议：培养自律和主动性，多看提升认知的书',
  5: '目标性不强，容易迷失方向。建议：培养冒险精神，勇于尝试不同体验',
  6: '对钱不敏感，总算不清楚账。建议：培养责任感，先爱己而后爱人',
  7: '缺乏深度思考，看问题只看表面。建议：多看书学习拓宽知识面',
  8: '对压力排斥，缺乏担当。建议：锻炼领导力，敢于竞争，勇敢面对挫折',
  9: '不容易得到认可，缺乏慈悲心。建议：增强自我认同感，不断学习提升自己'
};
'''

# Insert before last newline
content = content.rstrip() + newData + chr(10)

with open('F:/codex/设计心泉数字心理学app/xinquan-app/src/utils/calculator.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('calculator.js done')
