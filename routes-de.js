/* ===== routes-de.js — Deutsche Routendefinitionen für die Entdecken-Seite ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'Der Wissensentdecker',
    description: 'Meistere KI-Tools fürs Lernen, Schreiben und für Bestnoten.',
    icon: 'student',
    audience: 'Schüler und Lernende',
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
    name: 'Der Karrierevorteil',
    description: 'Bringe deine Karriere voran mit KI-gestützter Produktivität, Kommunikation und Strategie.',
    icon: 'professional',
    audience: 'Berufstätige',
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
    name: 'Der kreative Künstler',
    description: 'Entfessle deine Kreativität mit KI für bildende Kunst, Video und Musik.',
    icon: 'creative',
    audience: 'Künstler und Kreative',
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
    name: 'Die Familienverbindung',
    description: 'Stärke die Bindung zu deinen Kindern mit KI-gestützten Gesprächen und Aktivitäten.',
    icon: 'parent',
    audience: 'Eltern und Erziehende',
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
    name: 'Der Unternehmer',
    description: 'Gründe und entwickle dein Unternehmen mit KI-gestützter Planung und Marketing.',
    icon: 'entrepreneur',
    audience: 'Gründer und Unternehmer',
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
    name: 'Der Entwickler',
    description: 'Verbessere deine Programmierkenntnisse mit KI-gestützter Entwicklung und Automatisierung.',
    icon: 'developer',
    audience: 'Programmierer und Entwickler',
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
    name: 'Der Forscher',
    description: 'Beschleunige deine Forschung mit KI für Datenanalyse, Publikationen und Entdeckungen.',
    icon: 'researcher',
    audience: 'Wissenschaftler und Akademiker',
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
    name: 'Der Content-Creator',
    description: 'Schreibe bessere Inhalte schneller — von Blogbeiträgen über Gedichte bis hin zu geschäftlichen E-Mails.',
    icon: 'writer',
    audience: 'Autoren und Content-Creator',
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
    name: 'Der Musiker',
    description: 'Komponiere, produziere und lerne Musik mit KI als kreativem Partner.',
    icon: 'musician',
    audience: 'Musiker und Musikbegeisterte',
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
    name: 'Der Pädagoge',
    description: 'Verwandle deinen Unterricht mit KI-gestützten Unterrichtsplänen, Quizzen und Werkzeugen.',
    icon: 'educator',
    audience: 'Lehrer und Dozenten',
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
    name: 'Der Jobsuchende',
    description: 'Lande deinen Traumjob mit KI-Hilfe für Lebensläufe, Anschreiben und Interviewvorbereitung.',
    icon: 'jobseeker',
    audience: 'Jobsuchende und Quereinsteiger',
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
    name: 'Der Entdecker',
    description: 'Entdecke die unterhaltsame Seite der KI — von Reiseplanung über Spiele bis hin zu persönlichen Projekten.',
    icon: 'hobbyist',
    audience: 'Neugierige und Hobbyisten',
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
    { id: 'student', label: 'Schüler / Student', icon: '🎓' },
    { id: 'professional', label: 'Berufstätiger', icon: '💼' },
    { id: 'creative', label: 'Kreativer / Künstler', icon: '🎨' },
    { id: 'parent', label: 'Elternteil', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Unternehmer', icon: '🚀' },
    { id: 'developer', label: 'Entwickler', icon: '💻' },
    { id: 'researcher', label: 'Forscher', icon: '🔬' },
    { id: 'writer', label: 'Autor / Creator', icon: '✍️' },
    { id: 'musician', label: 'Musiker', icon: '🎵' },
    { id: 'educator', label: 'Pädagoge', icon: '📚' },
    { id: 'jobseeker', label: 'Jobsuchender', icon: '🎯' },
    { id: 'hobbyist', label: 'Einfach Entdecken', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Anfänger', desc: 'Neu bei KI — zeig mir die Grundlagen' },
    { id: 'intermediate', label: 'Fortgeschritten', desc: 'Ich habe KI schon ein paar Mal benutzt' },
    { id: 'advanced', label: 'Erfahren', desc: 'Ich nutze KI regelmäßig' }
  ],
  interests: [
    { id: 'writing', label: 'Schreiben', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Lernen', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Kunst und Design', color: 'var(--cat-art)' },
    { id: 'music', label: 'Musik', color: 'var(--cat-music)' },
    { id: 'video', label: 'Video', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Produktivität', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Programmierung', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Business', color: 'var(--cat-business)' },
    { id: 'science', label: 'Wissenschaft', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Spaß und Hobbys', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Familie', color: 'var(--cat-family)' }
  ]
};
