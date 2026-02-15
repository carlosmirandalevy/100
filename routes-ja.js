/* ===== routes-ja.js — Japanese route definitions for Explore page ===== */
const ROUTES = [
  {
    id: 'student',
    name: '学生エクスプローラー',
    description: '勉強、レポート作成、試験対策にAIツールを活用しよう。',
    icon: 'student',
    audience: '学生・学習者',
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
    name: 'プロフェッショナルの強み',
    description: 'AIを活用した生産性向上、コミュニケーション、戦略立案でキャリアアップ。',
    icon: 'professional',
    audience: 'ビジネスパーソン',
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
    name: 'クリエイティブアーティスト',
    description: 'ビジュアルアート、動画、音楽にAIを活用して創造力を解き放とう。',
    icon: 'creative',
    audience: 'アーティスト・クリエイター',
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
    name: 'ファミリーコネクション',
    description: 'AIを活用した会話やアクティビティで、お子さんとの絆を深めよう。',
    icon: 'parent',
    audience: '保護者・養育者',
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
    name: 'アントレプレナー',
    description: 'AIを活用した事業計画とマーケティングで、ビジネスを立ち上げ成長させよう。',
    icon: 'entrepreneur',
    audience: '起業家・事業主',
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
    name: 'デベロッパー',
    description: 'AIアシスト開発と自動化で、コーディングスキルをレベルアップ。',
    icon: 'developer',
    audience: 'プログラマー・開発者',
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
    name: 'リサーチャー',
    description: 'データ分析、論文執筆、新発見にAIを活用して研究を加速させよう。',
    icon: 'researcher',
    audience: '科学者・研究者',
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
    name: 'コンテンツクリエイター',
    description: 'ブログ記事から詩、ビジネスメールまで、より良いコンテンツをより速く書こう。',
    icon: 'writer',
    audience: 'ライター・コンテンツ制作者',
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
    name: 'ミュージシャン',
    description: 'AIをクリエイティブパートナーに、作曲、制作、音楽学習に取り組もう。',
    icon: 'musician',
    audience: '音楽家・音楽愛好家',
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
    name: 'エデュケーター',
    description: 'AIを活用した授業計画、クイズ、各種ツールで教育を変革しよう。',
    icon: 'educator',
    audience: '教師・講師',
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
    name: '就職活動サポート',
    description: 'AIを活用した履歴書作成、カバーレター、面接対策で理想の仕事を手に入れよう。',
    icon: 'jobseeker',
    audience: '求職者・転職希望者',
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
    name: 'エクスプローラー',
    description: '旅行計画からゲーム、個人プロジェクトまで、AIの楽しい一面を発見しよう。',
    icon: 'hobbyist',
    audience: '好奇心旺盛な人・趣味を楽しむ人',
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
    { id: 'professional', label: 'ビジネスパーソン', icon: '💼' },
    { id: 'creative', label: 'クリエイター・アーティスト', icon: '🎨' },
    { id: 'parent', label: '保護者', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: '起業家', icon: '🚀' },
    { id: 'developer', label: '開発者', icon: '💻' },
    { id: 'researcher', label: '研究者', icon: '🔬' },
    { id: 'writer', label: 'ライター・クリエイター', icon: '✍️' },
    { id: 'musician', label: '音楽家', icon: '🎵' },
    { id: 'educator', label: '教育者', icon: '📚' },
    { id: 'jobseeker', label: '求職者', icon: '🎯' },
    { id: 'hobbyist', label: '気軽に探索', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: '初心者', desc: 'AI初心者 — 基本から教えて' },
    { id: 'intermediate', label: '中級者', desc: 'AIを何度か使ったことがある' },
    { id: 'advanced', label: '上級者', desc: 'AIを日常的に使っている' }
  ],
  interests: [
    { id: 'writing', label: 'ライティング', color: 'var(--cat-writing)' },
    { id: 'learning', label: '学習', color: 'var(--cat-learning)' },
    { id: 'art', label: 'アート・デザイン', color: 'var(--cat-art)' },
    { id: 'music', label: '音楽', color: 'var(--cat-music)' },
    { id: 'video', label: '動画', color: 'var(--cat-video)' },
    { id: 'productivity', label: '生産性向上', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'コーディング', color: 'var(--cat-coding)' },
    { id: 'business', label: 'ビジネス', color: 'var(--cat-business)' },
    { id: 'science', label: '科学', color: 'var(--cat-science)' },
    { id: 'fun', label: '趣味・遊び', color: 'var(--cat-fun)' },
    { id: 'family', label: '家族', color: 'var(--cat-family)' }
  ]
};
