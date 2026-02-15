/* ===== routes-zh.js — Simplified Chinese route definitions for Explore page ===== */
const ROUTES = [
  {
    id: 'student',
    name: '学生探索者',
    description: '掌握AI工具，助力学习、论文写作和考试备考。',
    icon: 'student',
    audience: '学生和学习者',
    color: 'var(--cat-learning)',
    categories: ['learning', 'writing', 'productivity'],
    items: [11, 12, 13, 14, 15, 1, 2, 8, 51, 20],
    adaptations: {
      beginner: { swap: [[15, 103], [20, 16]] },
      advanced: { swap: [[11, 122], [12, 121]] }
    }
  },
  {
    id: 'professional',
    name: '职场精英',
    description: '用AI驱动的效率工具、沟通技巧和战略规划提升你的职业发展。',
    icon: 'professional',
    audience: '职场人士',
    color: 'var(--cat-business)',
    categories: ['business', 'productivity', 'writing'],
    items: [71, 72, 73, 80, 53, 54, 55, 10, 8, 9],
    adaptations: {
      beginner: { swap: [[54, 51], [55, 58]] },
      advanced: { swap: [[80, 117], [53, 116]] }
    }
  },
  {
    id: 'creative',
    name: '创意艺术家',
    description: '用AI释放你在视觉艺术、视频和音乐方面的创造力。',
    icon: 'creative',
    audience: '艺术家和创意工作者',
    color: 'var(--cat-art)',
    categories: ['art', 'video', 'music'],
    items: [21, 22, 23, 24, 25, 41, 42, 43, 31, 32],
    adaptations: {
      beginner: { swap: [[42, 47], [32, 33]] },
      advanced: { swap: [[23, 106], [24, 102]] }
    }
  },
  {
    id: 'parent',
    name: '家庭纽带',
    description: '通过AI引导的对话和活动，增进与孩子之间的亲子关系。',
    icon: 'parent',
    audience: '家长和照护者',
    color: 'var(--cat-family)',
    categories: ['family'],
    items: [136, 137, 138, 139, 140, 141, 142, 143, 144, 145],
    adaptations: {
      beginner: { swap: [[144, 146], [145, 150]] },
      advanced: { swap: [[142, 147], [143, 148]] }
    }
  },
  {
    id: 'entrepreneur',
    name: '创业者',
    description: '借助AI驱动的商业规划和营销策略，启动并壮大你的事业。',
    icon: 'entrepreneur',
    audience: '创业者和企业主',
    color: 'var(--cat-business)',
    categories: ['business', 'productivity'],
    items: [71, 75, 76, 77, 78, 79, 74, 57, 56, 4],
    adaptations: {
      beginner: { swap: [[75, 51], [74, 58]] },
      advanced: { swap: [[4, 115], [56, 117]] }
    }
  },
  {
    id: 'developer',
    name: '开发者',
    description: '通过AI辅助开发和自动化，提升你的编程技能。',
    icon: 'developer',
    audience: '程序员和开发者',
    color: 'var(--cat-coding)',
    categories: ['coding', 'productivity'],
    items: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    adaptations: {
      beginner: { swap: [[67, 104], [66, 107]] },
      advanced: { swap: [[63, 108], [65, 69]] }
    }
  },
  {
    id: 'researcher',
    name: '研究者',
    description: '用AI加速数据分析、论文撰写和科学发现。',
    icon: 'researcher',
    audience: '科学家和学术研究人员',
    color: 'var(--cat-science)',
    categories: ['science', 'learning'],
    items: [81, 82, 83, 84, 85, 86, 89, 88, 16, 17],
    adaptations: {
      beginner: { swap: [[82, 12], [89, 103]] },
      advanced: { swap: [[16, 122], [17, 90]] }
    }
  },
  {
    id: 'writer',
    name: '内容创作者',
    description: '从博客文章到诗歌再到商务邮件，更快地写出更好的内容。',
    icon: 'writer',
    audience: '写作者和内容创作者',
    color: 'var(--cat-writing)',
    categories: ['writing'],
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    adaptations: {
      beginner: { swap: [[5, 129], [9, 131]] },
      advanced: { swap: [[2, 133], [7, 115]] }
    }
  },
  {
    id: 'musician',
    name: '音乐人',
    description: '让AI成为你的创作伙伴，一起作曲、制作和学习音乐。',
    icon: 'musician',
    audience: '音乐人和音乐爱好者',
    color: 'var(--cat-music)',
    categories: ['music', 'fun'],
    items: [31, 32, 33, 34, 35, 36, 37, 38, 39, 123],
    adaptations: {
      beginner: { swap: [[34, 128], [37, 40]] },
      advanced: { swap: [[35, 6], [38, 111]] }
    }
  },
  {
    id: 'educator',
    name: '教育工作者',
    description: '用AI驱动的教案设计、测验和教学工具，革新你的教学方式。',
    icon: 'educator',
    audience: '教师和讲师',
    color: 'var(--cat-learning)',
    categories: ['learning', 'productivity'],
    items: [11, 13, 16, 17, 18, 121, 122, 52, 60, 29],
    adaptations: {
      beginner: { swap: [[122, 103], [121, 12]] },
      advanced: { swap: [[52, 118], [60, 107]] }
    }
  },
  {
    id: 'jobseeker',
    name: '求职达人',
    description: '借助AI完善简历、求职信和面试准备，赢得理想工作。',
    icon: 'jobseeker',
    audience: '求职者和职业转型者',
    color: 'var(--cat-business)',
    categories: ['business', 'writing'],
    items: [71, 72, 73, 10, 8, 9, 100, 80, 53, 119],
    adaptations: {
      beginner: { swap: [[72, 51], [119, 58]] },
      advanced: { swap: [[80, 115], [100, 117]] }
    }
  },
  {
    id: 'hobbyist',
    name: '探索者',
    description: '发现AI的趣味一面——从旅行规划到游戏再到个人项目。',
    icon: 'hobbyist',
    audience: '好奇心旺盛的人和爱好者',
    color: 'var(--cat-fun)',
    categories: ['fun', 'art', 'science'],
    items: [91, 92, 93, 94, 95, 96, 97, 98, 109, 110],
    adaptations: {
      beginner: { swap: [[109, 99], [110, 127]] },
      advanced: { swap: [[95, 82], [98, 118]] }
    }
  }
];

const QUIZ_CONFIG = {
  roles: [
    { id: 'student', label: '学生', icon: '🎓' },
    { id: 'professional', label: '职场人士', icon: '💼' },
    { id: 'creative', label: '创意工作者/艺术家', icon: '🎨' },
    { id: 'parent', label: '家长', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: '创业者', icon: '🚀' },
    { id: 'developer', label: '开发者', icon: '💻' },
    { id: 'researcher', label: '研究者', icon: '🔬' },
    { id: 'writer', label: '写作者/创作者', icon: '✍️' },
    { id: 'musician', label: '音乐人', icon: '🎵' },
    { id: 'educator', label: '教育工作者', icon: '📚' },
    { id: 'jobseeker', label: '求职者', icon: '🎯' },
    { id: 'hobbyist', label: '随便看看', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: '初学者', desc: 'AI新手——从基础开始' },
    { id: 'intermediate', label: '中级', desc: '用过几次AI' },
    { id: 'advanced', label: '高级', desc: '经常使用AI' }
  ],
  interests: [
    { id: 'writing', label: '写作', color: 'var(--cat-writing)' },
    { id: 'learning', label: '学习', color: 'var(--cat-learning)' },
    { id: 'art', label: '艺术与设计', color: 'var(--cat-art)' },
    { id: 'music', label: '音乐', color: 'var(--cat-music)' },
    { id: 'video', label: '视频', color: 'var(--cat-video)' },
    { id: 'productivity', label: '效率工具', color: 'var(--cat-productivity)' },
    { id: 'coding', label: '编程', color: 'var(--cat-coding)' },
    { id: 'business', label: '商业', color: 'var(--cat-business)' },
    { id: 'science', label: '科学', color: 'var(--cat-science)' },
    { id: 'fun', label: '趣味与爱好', color: 'var(--cat-fun)' },
    { id: 'family', label: '家庭', color: 'var(--cat-family)' }
  ]
};
