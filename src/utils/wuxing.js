// 五行数据模块

export const wuxingElements = {
  金: { numbers: [1, 6], color: "#C9A96E", icon: "💛" },
  水: { numbers: [2, 7], color: "#5A9BD9", icon: "💙" },
  火: { numbers: [3, 8], color: "#D96B86", icon: "❤️" },
  木: { numbers: [4, 9], color: "#6BA86B", icon: "💚" },
  土: { numbers: [5], color: "#C97A5A", icon: "🧡" },
};

export const numToWuxing = { 1:"金", 2:"水", 3:"火", 4:"木", 5:"土", 6:"金", 7:"水", 8:"火", 9:"木" };

export const shengCycle = [
  { from: "金", to: "水", desc: "金生水——金属被烈火燃烧后溶为液体，液体属水" },
  { from: "水", to: "木", desc: "水生木——水灌溉树木，树木便能欣欣向荣" },
  { from: "木", to: "火", desc: "木生火——火以木料作燃料，木烧尽则火熄" },
  { from: "火", to: "土", desc: "火生土——火燃烧后化为灰烬，灰烬便是土" },
  { from: "土", to: "金", desc: "土生金——金蕴藏于泥土中，经冶炼提取" },
];

export const keCycle = [
  { from: "金", to: "木", desc: "金克木——金属工具可锯毁树木" },
  { from: "木", to: "土", desc: "木克土——树根力量强大能突破土的障碍" },
  { from: "土", to: "水", desc: "土克水——土能防水" },
  { from: "水", to: "火", desc: "水克火——火遇水便熄灭" },
  { from: "火", to: "金", desc: "火克金——烈火能溶解金属" },
];

export const wuxingCharacter = {
  金: { name: "行动者", tag: "展现才华，行动突破", numbers: [1, 6],
    desc: "金在土里，一定要展现自己的才华，让人发掘土里的你。行动者金的人喜欢展现自己才能有突破，所以许多事需要行动来证明，最终才能创造非凡的人生。" },
  水: { name: "享受者", tag: "环境影响，近朱者赤", numbers: [2, 7],
    desc: "水容易被人影响，环境对你很重要。一杯干净的水倒入被污染的水里，同样属于污染的水。近朱者赤，近墨者黑，需要有能量去辨别自己所追逐的人生。" },
  火: { name: "执行者", tag: "点燃他人，行动力强", numbers: [3, 8],
    desc: "很容易点燃周围的人和事，只要相信自己的火候到家。因为火属容易燃烧，所以火属的人可以做事的，但结果取决于对自己的了解有多深，方能定论。" },
  木: { name: "思想者", tag: "靠书提升，终身学习", numbers: [4, 9],
    desc: "要找到肥沃土地，把自己种下去，才能有茂盛的树木。这类型人需要靠书籍来提升自己，书才能让他们生活有突破，更善于找寻生命答案，不停学习可增财富。" },
  土: { name: "多姿多彩者", tag: "大爱精神，找到沃土", numbers: [5],
    desc: "万人之上或万人之下，有大爱精神的多姿多彩者。土地上所拥有的不就是多姿多彩吗？但要找到自己的沃土是需要拥有智慧，方能让自己活得精彩。" }
};

export const courseChapters = [
  { id: "origin",  title: "五行起源",   subtitle: "认识五行基础",       icon: "📜",
    desc: "五行是构成宇宙的基本物质元素，金木水火土五种基本属性的归类。了解五行的前世今生。", bgColor: "#FFF5F0" },
  { id: "sheng",   title: "相生关系",   subtitle: "能量的滋养循环",     icon: "🔄",
    desc: "金生水、水生木、木生火、火生土、土生金。了解能量如何相互滋生促进与助长。", bgColor: "#F0FFF0" },
  { id: "ke",      title: "相克关系",   subtitle: "能量的制约平衡",     icon: "⚡",
    desc: "金克木、木克土、土克水、水克火、火克金。克不是坏，是维持平衡的智慧。", bgColor: "#FFF0F0" },
  { id: "character", title: "五行性格", subtitle: "你的性格属于哪行",   icon: "💡",
    desc: "金是行动者，水是享受者，火是执行者，木是思想者，土是多姿多彩者。", bgColor: "#F8F0FF" },
  { id: "life",    title: "生活应用",   subtitle: "颜色·方向·行业",    icon: "🎨",
    desc: "五行在风水、颜色、行业选择中的实际应用。不同五行属性适合什么？", bgColor: "#FFF8E8" },
  { id: "hecai",   title: "合财密码",   subtitle: "你的贵人数字",       icon: "🤝",
    desc: "通过五行生克看哪些数字是你的贵人，什么性格与你最合财、最互补。", bgColor: "#F0F8FF" }
];
