/* ===== routes.js — English route definitions for Explore page ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'The Student Explorer',
    description: 'Master AI tools for studying, writing papers, and acing your classes.',
    icon: 'student',
    audience: 'Students & learners',
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
    name: 'The Professional Edge',
    description: 'Boost your career with AI-powered productivity, communication, and strategy.',
    icon: 'professional',
    audience: 'Working professionals',
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
    name: 'The Creative Artist',
    description: 'Unleash your creativity with AI for visual art, video, and music.',
    icon: 'creative',
    audience: 'Artists & creatives',
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
    name: 'The Family Connection',
    description: 'Strengthen bonds with your children using AI-guided conversations and activities.',
    icon: 'parent',
    audience: 'Parents & caregivers',
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
    name: 'The Entrepreneur',
    description: 'Launch and grow your business with AI-powered planning and marketing.',
    icon: 'entrepreneur',
    audience: 'Founders & business owners',
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
    name: 'The Developer',
    description: 'Level up your coding skills with AI-assisted development and automation.',
    icon: 'developer',
    audience: 'Programmers & developers',
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
    name: 'The Researcher',
    description: 'Accelerate your research with AI for data analysis, papers, and discovery.',
    icon: 'researcher',
    audience: 'Scientists & academics',
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
    name: 'The Content Creator',
    description: 'Write better content faster — from blog posts to poetry to professional emails.',
    icon: 'writer',
    audience: 'Writers & content creators',
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
    name: 'The Musician',
    description: 'Compose, produce, and learn music with AI as your creative partner.',
    icon: 'musician',
    audience: 'Musicians & music lovers',
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
    name: 'The Educator',
    description: 'Transform your teaching with AI-powered lesson plans, quizzes, and tools.',
    icon: 'educator',
    audience: 'Teachers & instructors',
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
    name: 'The Job Seeker',
    description: 'Land your dream job with AI help for resumes, cover letters, and interview prep.',
    icon: 'jobseeker',
    audience: 'Job seekers & career changers',
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
    name: 'The Explorer',
    description: 'Discover the fun side of AI — from travel planning to games to personal projects.',
    icon: 'hobbyist',
    audience: 'Curious minds & hobbyists',
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
    { id: 'student', label: 'Student', icon: '🎓' },
    { id: 'professional', label: 'Professional', icon: '💼' },
    { id: 'creative', label: 'Creative / Artist', icon: '🎨' },
    { id: 'parent', label: 'Parent', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Entrepreneur', icon: '🚀' },
    { id: 'developer', label: 'Developer', icon: '💻' },
    { id: 'researcher', label: 'Researcher', icon: '🔬' },
    { id: 'writer', label: 'Writer / Creator', icon: '✍️' },
    { id: 'musician', label: 'Musician', icon: '🎵' },
    { id: 'educator', label: 'Educator', icon: '📚' },
    { id: 'jobseeker', label: 'Job Seeker', icon: '🎯' },
    { id: 'hobbyist', label: 'Just Exploring', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Beginner', desc: 'New to AI — show me the basics' },
    { id: 'intermediate', label: 'Intermediate', desc: 'I\'ve used AI a few times' },
    { id: 'advanced', label: 'Advanced', desc: 'I use AI regularly' }
  ],
  interests: [
    { id: 'writing', label: 'Writing', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Learning', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Art & Design', color: 'var(--cat-art)' },
    { id: 'music', label: 'Music', color: 'var(--cat-music)' },
    { id: 'video', label: 'Video', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Productivity', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Coding', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Business', color: 'var(--cat-business)' },
    { id: 'science', label: 'Science', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Fun & Hobbies', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Family', color: 'var(--cat-family)' }
  ]
};
