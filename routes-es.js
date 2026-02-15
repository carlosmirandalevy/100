/* ===== routes-es.js — Spanish route definitions for Explore page ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'El estudiante explorador',
    description: 'Domina las herramientas de IA para estudiar, redactar trabajos y destacar en tus clases.',
    icon: 'student',
    audience: 'Estudiantes y aprendices',
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
    name: 'La ventaja profesional',
    description: 'Impulsa tu carrera con IA para la productividad, la comunicación y la estrategia.',
    icon: 'professional',
    audience: 'Profesionales en activo',
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
    name: 'El artista creativo',
    description: 'Libera tu creatividad con IA para artes visuales, video y música.',
    icon: 'creative',
    audience: 'Artistas y creativos',
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
    name: 'El vínculo familiar',
    description: 'Fortalece los lazos con tus hijos mediante conversaciones y actividades guiadas por IA.',
    icon: 'parent',
    audience: 'Padres y cuidadores',
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
    name: 'El emprendedor',
    description: 'Lanza y haz crecer tu negocio con IA para la planificación y el marketing.',
    icon: 'entrepreneur',
    audience: 'Fundadores y dueños de negocios',
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
    name: 'El desarrollador',
    description: 'Lleva tus habilidades de programación al siguiente nivel con desarrollo y automatización asistidos por IA.',
    icon: 'developer',
    audience: 'Programadores y desarrolladores',
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
    name: 'El investigador',
    description: 'Acelera tu investigación con IA para el análisis de datos, la redacción y el descubrimiento.',
    icon: 'researcher',
    audience: 'Científicos y académicos',
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
    name: 'El creador de contenido',
    description: 'Escribe mejor contenido más rápido — desde publicaciones de blog hasta poesía y correos profesionales.',
    icon: 'writer',
    audience: 'Escritores y creadores de contenido',
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
    name: 'El músico',
    description: 'Compón, produce y aprende música con la IA como tu compañero creativo.',
    icon: 'musician',
    audience: 'Músicos y amantes de la música',
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
    name: 'El educador',
    description: 'Transforma tu enseñanza con planes de clase, cuestionarios y herramientas impulsados por IA.',
    icon: 'educator',
    audience: 'Profesores e instructores',
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
    name: 'El buscador de empleo',
    description: 'Consigue el trabajo de tus sueños con ayuda de la IA para currículums, cartas de presentación y preparación de entrevistas.',
    icon: 'jobseeker',
    audience: 'Buscadores de empleo y personas en transición profesional',
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
    name: 'El explorador',
    description: 'Descubre el lado divertido de la IA — desde planificar viajes hasta juegos y proyectos personales.',
    icon: 'hobbyist',
    audience: 'Mentes curiosas y aficionados',
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
    { id: 'student', label: 'Estudiante', icon: '🎓' },
    { id: 'professional', label: 'Profesional', icon: '💼' },
    { id: 'creative', label: 'Creativo / Artista', icon: '🎨' },
    { id: 'parent', label: 'Padre o madre', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Emprendedor', icon: '🚀' },
    { id: 'developer', label: 'Desarrollador', icon: '💻' },
    { id: 'researcher', label: 'Investigador', icon: '🔬' },
    { id: 'writer', label: 'Escritor / Creador', icon: '✍️' },
    { id: 'musician', label: 'Músico', icon: '🎵' },
    { id: 'educator', label: 'Educador', icon: '📚' },
    { id: 'jobseeker', label: 'Buscador de empleo', icon: '🎯' },
    { id: 'hobbyist', label: 'Solo explorando', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Principiante', desc: 'Nuevo con la IA — muéstrame lo básico' },
    { id: 'intermediate', label: 'Intermedio', desc: 'He usado IA algunas veces' },
    { id: 'advanced', label: 'Avanzado', desc: 'Uso IA de forma habitual' }
  ],
  interests: [
    { id: 'writing', label: 'Escritura', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Aprendizaje', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Arte y diseño', color: 'var(--cat-art)' },
    { id: 'music', label: 'Música', color: 'var(--cat-music)' },
    { id: 'video', label: 'Video', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Productividad', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Programación', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Negocios', color: 'var(--cat-business)' },
    { id: 'science', label: 'Ciencia', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Ocio y hobbies', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Familia', color: 'var(--cat-family)' }
  ]
};
