/* ===== routes-pt.js — Definições de rotas em português para a página Explorar ===== */
const ROUTES = [
  {
    id: 'student',
    name: 'O Estudante Explorador',
    description: 'Domine ferramentas de IA para estudar, escrever trabalhos e se destacar nas aulas.',
    icon: 'student',
    audience: 'Estudantes e aprendizes',
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
    name: 'A Vantagem Profissional',
    description: 'Impulsione sua carreira com produtividade, comunicação e estratégia potencializadas por IA.',
    icon: 'professional',
    audience: 'Profissionais do mercado',
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
    name: 'O Artista Criativo',
    description: 'Liberte sua criatividade com IA para artes visuais, vídeo e música.',
    icon: 'creative',
    audience: 'Artistas e criativos',
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
    name: 'A Conexão Familiar',
    description: 'Fortaleça os laços com seus filhos usando conversas e atividades guiadas por IA.',
    icon: 'parent',
    audience: 'Pais e cuidadores',
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
    name: 'O Empreendedor',
    description: 'Lance e expanda seu negócio com planejamento e marketing potencializados por IA.',
    icon: 'entrepreneur',
    audience: 'Fundadores e donos de negócios',
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
    name: 'O Desenvolvedor',
    description: 'Eleve suas habilidades de programação com desenvolvimento e automação assistidos por IA.',
    icon: 'developer',
    audience: 'Programadores e desenvolvedores',
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
    name: 'O Pesquisador',
    description: 'Acelere sua pesquisa com IA para análise de dados, artigos e descobertas.',
    icon: 'researcher',
    audience: 'Cientistas e acadêmicos',
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
    name: 'O Criador de Conteúdo',
    description: 'Escreva conteúdo melhor e mais rápido — de posts de blog a poesia e e-mails profissionais.',
    icon: 'writer',
    audience: 'Escritores e criadores de conteúdo',
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
    name: 'O Músico',
    description: 'Componha, produza e aprenda música com a IA como parceira criativa.',
    icon: 'musician',
    audience: 'Músicos e amantes de música',
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
    name: 'O Educador',
    description: 'Transforme seu ensino com planos de aula, quizzes e ferramentas potencializados por IA.',
    icon: 'educator',
    audience: 'Professores e instrutores',
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
    name: 'O Candidato',
    description: 'Conquiste o emprego dos sonhos com ajuda da IA para currículos, cartas de apresentação e preparação para entrevistas.',
    icon: 'jobseeker',
    audience: 'Candidatos e profissionais em transição',
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
    name: 'O Explorador',
    description: 'Descubra o lado divertido da IA — de planejamento de viagens a jogos e projetos pessoais.',
    icon: 'hobbyist',
    audience: 'Mentes curiosas e entusiastas',
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
    { id: 'student', label: 'Estudante', icon: '🎓' },
    { id: 'professional', label: 'Profissional', icon: '💼' },
    { id: 'creative', label: 'Criativo / Artista', icon: '🎨' },
    { id: 'parent', label: 'Pai / Mãe', icon: '👨‍👩‍👧' },
    { id: 'entrepreneur', label: 'Empreendedor', icon: '🚀' },
    { id: 'developer', label: 'Desenvolvedor', icon: '💻' },
    { id: 'researcher', label: 'Pesquisador', icon: '🔬' },
    { id: 'writer', label: 'Escritor / Criador', icon: '✍️' },
    { id: 'musician', label: 'Músico', icon: '🎵' },
    { id: 'educator', label: 'Educador', icon: '📚' },
    { id: 'jobseeker', label: 'Candidato a Vaga', icon: '🎯' },
    { id: 'hobbyist', label: 'Só Explorando', icon: '🌟' }
  ],
  experience: [
    { id: 'beginner', label: 'Iniciante', desc: 'Novo em IA — me mostre o básico' },
    { id: 'intermediate', label: 'Intermediário', desc: 'Já usei IA algumas vezes' },
    { id: 'advanced', label: 'Avançado', desc: 'Uso IA regularmente' }
  ],
  interests: [
    { id: 'writing', label: 'Escrita', color: 'var(--cat-writing)' },
    { id: 'learning', label: 'Aprendizado', color: 'var(--cat-learning)' },
    { id: 'art', label: 'Arte e Design', color: 'var(--cat-art)' },
    { id: 'music', label: 'Música', color: 'var(--cat-music)' },
    { id: 'video', label: 'Vídeo', color: 'var(--cat-video)' },
    { id: 'productivity', label: 'Produtividade', color: 'var(--cat-productivity)' },
    { id: 'coding', label: 'Programação', color: 'var(--cat-coding)' },
    { id: 'business', label: 'Negócios', color: 'var(--cat-business)' },
    { id: 'science', label: 'Ciência', color: 'var(--cat-science)' },
    { id: 'fun', label: 'Diversão e Hobbies', color: 'var(--cat-fun)' },
    { id: 'family', label: 'Família', color: 'var(--cat-family)' }
  ]
};
