/* ===== routes-it.js — Definizioni dei percorsi in italiano per la pagina Esplora ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'Lo Studente Esploratore',
    description: 'Padroneggia gli strumenti di IA per studiare, scrivere tesine e ottenere il massimo a scuola.',
    icon: 'student',
    audience: 'Studenti e apprendisti',
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
    name: 'Il Vantaggio Professionale',
    description: 'Dai slancio alla tua carriera con produttività, comunicazione e strategia potenziate dall\'IA.',
    icon: 'professional',
    audience: 'Professionisti',
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
    name: 'L\'Artista Creativo',
    description: 'Libera la tua creatività con l\'IA per arti visive, video e musica.',
    icon: 'creative',
    audience: 'Artisti e creativi',
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
    name: 'Il Legame Familiare',
    description: 'Rafforza il legame con i tuoi figli usando conversazioni e attività guidate dall\'IA.',
    icon: 'parent',
    audience: 'Genitori e tutori',
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
    name: 'L\'Imprenditore',
    description: 'Lancia e fai crescere la tua attività con pianificazione e marketing potenziati dall\'IA.',
    icon: 'entrepreneur',
    audience: 'Fondatori e imprenditori',
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
    name: 'Lo Sviluppatore',
    description: 'Migliora le tue competenze di programmazione con sviluppo e automazione assistiti dall\'IA.',
    icon: 'developer',
    audience: 'Programmatori e sviluppatori',
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
    name: 'Il Ricercatore',
    description: 'Accelera la tua ricerca con l\'IA per analisi dati, pubblicazioni e scoperte.',
    icon: 'researcher',
    audience: 'Scienziati e accademici',
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
    name: 'Il Creatore di Contenuti',
    description: 'Scrivi contenuti migliori e più velocemente — dai post del blog alla poesia alle email professionali.',
    icon: 'writer',
    audience: 'Scrittori e creatori di contenuti',
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
    name: 'Il Musicista',
    description: 'Componi, produci e impara la musica con l\'IA come partner creativo.',
    icon: 'musician',
    audience: 'Musicisti e appassionati di musica',
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
    name: 'L\'Educatore',
    description: 'Trasforma il tuo insegnamento con piani di lezione, quiz e strumenti potenziati dall\'IA.',
    icon: 'educator',
    audience: 'Insegnanti e formatori',
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
    name: 'Il Candidato',
    description: 'Ottieni il lavoro dei tuoi sogni con l\'aiuto dell\'IA per curriculum, lettere di presentazione e preparazione ai colloqui.',
    icon: 'jobseeker',
    audience: 'Candidati e chi cambia carriera',
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
    name: 'L\'Esploratore',
    description: 'Scopri il lato divertente dell\'IA — dalla pianificazione di viaggi ai giochi ai progetti personali.',
    icon: 'hobbyist',
    audience: 'Menti curiose e appassionati',
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
    { id: 'student', label: 'Studente', icon: '🎓' },
    { id: 'professional', label: 'Professionista', icon: '💼' },
    { id: 'creative', label: 'Creativo / Artista', icon: '🎨' },
    { id: 'parent', label: 'Genitore', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Imprenditore', icon: '🚀' },
    { id: 'developer', label: 'Sviluppatore', icon: '💻' },
    { id: 'researcher', label: 'Ricercatore', icon: '🔬' },
    { id: 'writer', label: 'Scrittore / Creatore', icon: '✍️' },
    { id: 'musician', label: 'Musicista', icon: '🎵' },
    { id: 'educator', label: 'Educatore', icon: '📚' },
    { id: 'jobseeker', label: 'In Cerca di Lavoro', icon: '🎯' },
    { id: 'hobbyist', label: 'Sto Solo Esplorando', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Principiante', desc: 'Nuovo all\'IA — mostrami le basi' },
    { id: 'intermediate', label: 'Intermedio', desc: 'Ho usato l\'IA qualche volta' },
    { id: 'advanced', label: 'Avanzato', desc: 'Uso l\'IA regolarmente' }
  ],
  interests: [
    { id: 'writing', label: 'Scrittura', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Apprendimento', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Arte e Design', color: 'var(--cat-art)' },
    { id: 'music', label: 'Musica', color: 'var(--cat-music)' },
    { id: 'video', label: 'Video', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Produttività', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Programmazione', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Business', color: 'var(--cat-business)' },
    { id: 'science', label: 'Scienza', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Svago e Hobby', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Famiglia', color: 'var(--cat-family)' }
  ]
};
