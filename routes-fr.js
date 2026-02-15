/* ===== routes-fr.js — French route definitions for Explore page ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'L\'étudiant explorateur',
    description: 'Maîtrisez les outils d\'IA pour étudier, rédiger des travaux et exceller dans vos cours.',
    icon: 'student',
    audience: 'Étudiants et apprenants',
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
    name: 'L\'atout professionnel',
    description: 'Boostez votre carrière grâce à l\'IA pour la productivité, la communication et la stratégie.',
    icon: 'professional',
    audience: 'Professionnels en activité',
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
    name: 'L\'artiste créatif',
    description: 'Libérez votre créativité avec l\'IA pour les arts visuels, la vidéo et la musique.',
    icon: 'creative',
    audience: 'Artistes et créatifs',
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
    name: 'Le lien familial',
    description: 'Renforcez les liens avec vos enfants grâce à des conversations et activités guidées par l\'IA.',
    icon: 'parent',
    audience: 'Parents et accompagnants',
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
    name: 'L\'entrepreneur',
    description: 'Lancez et développez votre entreprise avec l\'IA pour la planification et le marketing.',
    icon: 'entrepreneur',
    audience: 'Fondateurs et chefs d\'entreprise',
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
    name: 'Le développeur',
    description: 'Perfectionnez vos compétences en code avec le développement et l\'automatisation assistés par l\'IA.',
    icon: 'developer',
    audience: 'Programmeurs et développeurs',
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
    name: 'Le chercheur',
    description: 'Accélérez vos recherches avec l\'IA pour l\'analyse de données, la rédaction et la découverte.',
    icon: 'researcher',
    audience: 'Scientifiques et universitaires',
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
    name: 'Le créateur de contenu',
    description: 'Rédigez du contenu de qualité plus vite — des articles de blog à la poésie en passant par les e-mails professionnels.',
    icon: 'writer',
    audience: 'Rédacteurs et créateurs de contenu',
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
    name: 'Le musicien',
    description: 'Composez, produisez et apprenez la musique avec l\'IA comme partenaire créatif.',
    icon: 'musician',
    audience: 'Musiciens et mélomanes',
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
    name: 'L\'éducateur',
    description: 'Transformez votre enseignement avec des plans de cours, des quiz et des outils propulsés par l\'IA.',
    icon: 'educator',
    audience: 'Enseignants et formateurs',
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
    name: 'Le chercheur d\'emploi',
    description: 'Décrochez l\'emploi de vos rêves avec l\'aide de l\'IA pour les CV, les lettres de motivation et la préparation aux entretiens.',
    icon: 'jobseeker',
    audience: 'Chercheurs d\'emploi et personnes en reconversion',
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
    name: 'L\'explorateur',
    description: 'Découvrez le côté ludique de l\'IA — de la planification de voyages aux jeux en passant par les projets personnels.',
    icon: 'hobbyist',
    audience: 'Esprits curieux et amateurs',
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
    { id: 'student', label: 'Étudiant', icon: '🎓' },
    { id: 'professional', label: 'Professionnel', icon: '💼' },
    { id: 'creative', label: 'Créatif / Artiste', icon: '🎨' },
    { id: 'parent', label: 'Parent', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Entrepreneur', icon: '🚀' },
    { id: 'developer', label: 'Développeur', icon: '💻' },
    { id: 'researcher', label: 'Chercheur', icon: '🔬' },
    { id: 'writer', label: 'Rédacteur / Créateur', icon: '✍️' },
    { id: 'musician', label: 'Musicien', icon: '🎵' },
    { id: 'educator', label: 'Éducateur', icon: '📚' },
    { id: 'jobseeker', label: 'Chercheur d\'emploi', icon: '🎯' },
    { id: 'hobbyist', label: 'Simple curiosité', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Débutant', desc: 'Nouveau avec l\'IA — montrez-moi les bases' },
    { id: 'intermediate', label: 'Intermédiaire', desc: 'J\'ai déjà utilisé l\'IA quelques fois' },
    { id: 'advanced', label: 'Avancé', desc: 'J\'utilise l\'IA régulièrement' }
  ],
  interests: [
    { id: 'writing', label: 'Rédaction', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Apprentissage', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Art et design', color: 'var(--cat-art)' },
    { id: 'music', label: 'Musique', color: 'var(--cat-music)' },
    { id: 'video', label: 'Vidéo', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Productivité', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Programmation', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Business', color: 'var(--cat-business)' },
    { id: 'science', label: 'Science', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Loisirs et hobbies', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Famille', color: 'var(--cat-family)' }
  ]
};
