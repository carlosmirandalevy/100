/* ===== include.js - Shared components for all pages ===== */
/* Load this in <head> to inject CSS/fonts, then nav/footer on DOMContentLoaded */
(function() {
    'use strict';

    // === Early theme application (prevents FOUC) ===
    var savedTheme = localStorage.getItem('theme') || 'pastel';
    if (savedTheme !== 'dark') document.documentElement.setAttribute('data-theme', savedTheme);

    var head = document.head;

    // === Inject CSS, Fonts, Favicon & Meta into <head> (synchronous, prevents FOUC) ===
    if (!document.querySelector('link[href="styles.css"]')) {
        var pc1 = document.createElement('link'); pc1.rel = 'preconnect'; pc1.href = 'https://fonts.googleapis.com'; head.appendChild(pc1);
        var pc2 = document.createElement('link'); pc2.rel = 'preconnect'; pc2.href = 'https://fonts.gstatic.com'; pc2.crossOrigin = ''; head.appendChild(pc2);
        var gf = document.createElement('link'); gf.rel = 'stylesheet'; gf.href = 'https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400;700;900&family=Inter:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400&family=Source+Code+Pro:wght@400;500;600&display=swap'; head.appendChild(gf);
        var css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'styles.css'; head.appendChild(css);
    }

    // === Inject Favicon, Apple Touch Icon, Manifest ===
    if (!document.querySelector('link[rel="icon"]')) {
        var ico = document.createElement('link'); ico.rel = 'icon'; ico.type = 'image/x-icon'; ico.href = 'favicon.ico'; head.appendChild(ico);
        var i32 = document.createElement('link'); i32.rel = 'icon'; i32.type = 'image/png'; i32.sizes = '32x32'; i32.href = 'assets/logos/favicon-32x32.png'; head.appendChild(i32);
        var i16 = document.createElement('link'); i16.rel = 'icon'; i16.type = 'image/png'; i16.sizes = '16x16'; i16.href = 'assets/logos/favicon-16x16.png'; head.appendChild(i16);
        var atc = document.createElement('link'); atc.rel = 'apple-touch-icon'; atc.sizes = '180x180'; atc.href = 'apple-touch-icon.png'; head.appendChild(atc);
        var man = document.createElement('link'); man.rel = 'manifest'; man.href = 'site.webmanifest'; head.appendChild(man);
        var tc = document.createElement('meta'); tc.name = 'theme-color'; tc.content = '#a70000'; head.appendChild(tc);
    }

    // === Google Analytics (GA4) ===
    if (!document.querySelector('script[src*="googletagmanager"]')) {
        var gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-5BQ9VNWRX5';
        head.appendChild(gaScript);
        var gaInit = document.createElement('script');
        gaInit.textContent = 'window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-5BQ9VNWRX5");';
        head.appendChild(gaInit);
    }

    // === Inject Open Graph & Twitter Card meta (if not already present) ===
    if (!document.querySelector('meta[property="og:title"]')) {
        var title = document.title || '100+ Things to Do with AI (and Some Not To) | CEMI.AI';
        var desc = (document.querySelector('meta[name="description"]') || {}).content || 'Discover 100+ amazing things you can do with AI. A comprehensive guide by CEMI.AI.';
        var ogTags = [
            ['property', 'og:type', 'website'],
            ['property', 'og:url', 'https://100.cemi.ai/'],
            ['property', 'og:title', title],
            ['property', 'og:description', desc],
            ['property', 'og:image', 'https://100.cemi.ai/assets/logos/og-image.png'],
            ['property', 'og:image:width', '1200'],
            ['property', 'og:image:height', '630'],
            ['property', 'og:site_name', '100.cemi.ai'],
            ['name', 'twitter:card', 'summary_large_image'],
            ['name', 'twitter:title', title],
            ['name', 'twitter:description', desc],
            ['name', 'twitter:image', 'https://100.cemi.ai/assets/logos/twitter-card.png']
        ];
        ogTags.forEach(function(t) {
            var m = document.createElement('meta');
            m.setAttribute(t[0], t[1]);
            m.content = t[2];
            head.appendChild(m);
        });
    }

    // === UI Strings for all supported languages ===
    var STRINGS = {
        en: {
            things: '100+ Things to Do', donts: "A Few Don'ts", logoText: "AI Do's and Don'ts", usingAI: 'Using AI', tips: 'Tips', skills: 'Useful Skills',
            quickWins: 'Quick Wins', tools: 'Tools', showcase: 'Showcase', about: 'About',
            searchLabel: 'Search (Ctrl+K)', searchPlaceholder: 'Search the 100+ things...',
            searchHint: 'Press Enter to search', scrollTop: 'Scroll to top',
            funFact: 'AI Fun Fact', anotherFact: 'Another fact',
            researchChatGPT: 'Research on ChatGPT', researchPerplexity: 'Research on Perplexity',
            close: 'Close',
            mantra: 'AI is not about doing the same faster and easier &mdash; it is about doing MORE and BETTER than before.',
            visit: 'Visit', quickLinks: 'Quick Links', home: 'Home',
            connectWithUs: 'Connect With Us',
            connectDesc: 'Want to learn more about AI and how it can transform your work and learning?',
            developSkills: 'Want to develop new skills with AI?',
            lawraDesc: 'AI for Law &mdash; our sister project',
            madeWith: 'Made with AI + Human Creativity',
            themePastel: 'Pastel', themeLight: 'Light', themeDark: 'Dark', themeLabel: 'Theme',
            explore: 'Explore', exploreTitle: 'Find Your AI Path', exploreSubtitle: 'Take a quick quiz or browse curated routes tailored to your goals.',
            quizCard: 'Quick Quiz', quizCardDesc: 'Answer 3 questions and get personalized recommendations.', browseCard: 'Browse Routes', browseCardDesc: 'Explore all 12 curated learning routes.',
            quizStep1: 'What best describes you?', quizStep2: 'What is your AI experience level?', quizStep3: 'What interests you most?',
            quizNext: 'Next', quizBack: 'Back', quizFinish: 'Show My Routes',
            routeItems: 'items', viewItem: 'View', startRoute: 'Start Route', yourRoutes: 'Your Recommended Routes', completed: 'completed',
            browseAll: 'Browse All Routes', orBrowse: 'or browse all routes', recommended: 'Recommended', backToRoutes: 'Back to routes', progress: 'Progress',
            sharePage: 'Share', copyLink: 'Copy Link', linkCopied: 'Copied!',
            suggest: 'Suggest',
            resources: 'Resources',
            sisterProjects: 'Sister Projects',
            sisterLawra: 'AI in Law',
            sisterIbizai: 'AI in Business',
            sisterInsureversia: 'AI in Insurance',
            newsletterTitle: 'Stay in the loop',
            newsletterDesc: 'One email per week. No spam. Unsubscribe anytime.',
            newsletterPlaceholder: 'Your email address',
            newsletterBtn: 'Subscribe',
            newsletterSuccess: "You're subscribed! Thank you.",
            newsletterError: 'Something went wrong. Please try again.',
            glossary: 'Glossary'
        },
        fr: {
            things: '100+ choses \u00e0 faire', donts: 'Quelques interdits', logoText: "AI Do's et Don'ts", usingAI: "Utiliser l'IA", tips: 'Conseils', skills: 'Comp\u00e9tences utiles',
            quickWins: 'Victoires rapides', tools: 'Outils', showcase: 'Vitrine', about: '\u00c0 propos',
            searchLabel: 'Rechercher (Ctrl+K)', searchPlaceholder: 'Rechercher les 100+ choses...',
            searchHint: 'Appuyez sur Entr\u00e9e pour rechercher', scrollTop: 'Retour en haut',
            funFact: "Fait amusant sur l'IA", anotherFact: 'Un autre fait',
            researchChatGPT: 'Rechercher sur ChatGPT', researchPerplexity: 'Rechercher sur Perplexity',
            close: 'Fermer',
            mantra: "L'IA ne consiste pas \u00e0 faire la m\u00eame chose plus vite et plus facilement &mdash; il s'agit de faire PLUS et MIEUX qu'avant.",
            visit: 'Visitez', quickLinks: 'Liens rapides', home: 'Accueil',
            connectWithUs: 'Contactez-nous',
            connectDesc: "Vous voulez en savoir plus sur l'IA et comment elle peut transformer votre travail et votre apprentissage ?",
            developSkills: "Vous voulez d\u00e9velopper de nouvelles comp\u00e9tences avec l'IA ?",
            lawraDesc: "IA pour le Droit &mdash; notre projet s\u0153ur",
            madeWith: 'Fait avec IA + Cr\u00e9ativit\u00e9 Humaine',
            themePastel: 'Pastel', themeLight: 'Clair', themeDark: 'Sombre', themeLabel: 'Th\u00e8me',
            explore: 'Explorer', exploreTitle: 'Trouvez votre parcours IA', exploreSubtitle: 'Faites un quiz rapide ou parcourez des itin\u00e9raires adapt\u00e9s \u00e0 vos objectifs.',
            quizCard: 'Quiz rapide', quizCardDesc: 'R\u00e9pondez \u00e0 3 questions et obtenez des recommandations personnalis\u00e9es.', browseCard: 'Parcourir les routes', browseCardDesc: 'Explorez les 12 itin\u00e9raires d\u0027apprentissage.',
            quizStep1: 'Qu\u0027est-ce qui vous d\u00e9crit le mieux ?', quizStep2: 'Quel est votre niveau d\u0027exp\u00e9rience avec l\u0027IA ?', quizStep3: 'Qu\u0027est-ce qui vous int\u00e9resse le plus ?',
            quizNext: 'Suivant', quizBack: 'Retour', quizFinish: 'Voir mes routes',
            routeItems: '\u00e9l\u00e9ments', viewItem: 'Voir', startRoute: 'Commencer', yourRoutes: 'Vos routes recommand\u00e9es', completed: 'termin\u00e9',
            browseAll: 'Toutes les routes', orBrowse: 'ou parcourir toutes les routes', recommended: 'Recommand\u00e9', backToRoutes: 'Retour aux routes', progress: 'Progr\u00e8s',
            sharePage: 'Partager', copyLink: 'Copier le lien', linkCopied: 'Copi\u00e9 !',
            suggest: 'Sugg\u00e9rer',
            resources: 'Ressources',
            sisterProjects: 'Projets partenaires',
            sisterLawra: 'IA et Droit',
            sisterIbizai: 'IA et Business',
            sisterInsureversia: 'IA et Assurance',
            newsletterTitle: 'Restez inform\u00e9',
            newsletterDesc: 'Un email par semaine. Pas de spam. D\u00e9sabonnement \u00e0 tout moment.',
            newsletterPlaceholder: 'Votre adresse email',
            newsletterBtn: "S'abonner",
            newsletterSuccess: 'Vous \u00eates abonn\u00e9 ! Merci.',
            newsletterError: 'Une erreur est survenue. Veuillez r\u00e9essayer.',
            glossary: 'Glossaire'
        },
        es: {
            things: '100+ cosas que hacer', donts: 'Algunas que no', logoText: 'Qu\u00e9 hacer y no con IA', usingAI: 'Usar IA', tips: 'Consejos', skills: 'Habilidades \u00fatiles',
            quickWins: 'Rápidas', tools: 'Herramientas', showcase: 'Vitrina', about: 'About',
            searchLabel: 'Buscar (Ctrl+K)', searchPlaceholder: 'Buscar las 100+ cosas...',
            searchHint: 'Presiona Enter para buscar', scrollTop: 'Volver arriba',
            funFact: 'Dato curioso sobre IA', anotherFact: 'Otro dato',
            researchChatGPT: 'Investigar en ChatGPT', researchPerplexity: 'Investigar en Perplexity',
            close: 'Cerrar',
            mantra: 'La IA no se trata de hacer lo mismo m\u00e1s r\u00e1pido y f\u00e1cil &mdash; se trata de hacer M\u00c1S y MEJOR que antes.',
            visit: 'Visita', quickLinks: 'Enlaces r\u00e1pidos', home: 'Inicio',
            connectWithUs: 'Cont\u00e1ctanos',
            connectDesc: '\u00bfQuieres aprender m\u00e1s sobre IA y c\u00f3mo puede transformar tu trabajo y aprendizaje?',
            developSkills: '\u00bfQuieres desarrollar nuevas habilidades con IA?',
            lawraDesc: 'IA para el Derecho &mdash; nuestro proyecto hermano',
            madeWith: 'Hecho con IA + Creatividad Humana',
            themePastel: 'Pastel', themeLight: 'Claro', themeDark: 'Oscuro', themeLabel: 'Tema',
            explore: 'Explorar', exploreTitle: 'Encuentra tu camino con IA', exploreSubtitle: 'Haz un quiz r\u00e1pido o explora rutas adaptadas a tus objetivos.',
            quizCard: 'Quiz r\u00e1pido', quizCardDesc: 'Responde 3 preguntas y obt\u00e9n recomendaciones personalizadas.', browseCard: 'Ver rutas', browseCardDesc: 'Explora las 12 rutas de aprendizaje.',
            quizStep1: '\u00bfQu\u00e9 te describe mejor?', quizStep2: '\u00bfCu\u00e1l es tu nivel de experiencia con IA?', quizStep3: '\u00bfQu\u00e9 te interesa m\u00e1s?',
            quizNext: 'Siguiente', quizBack: 'Atr\u00e1s', quizFinish: 'Ver mis rutas',
            routeItems: 'elementos', viewItem: 'Ver', startRoute: 'Comenzar', yourRoutes: 'Tus rutas recomendadas', completed: 'completado',
            browseAll: 'Todas las rutas', orBrowse: 'o explorar todas las rutas', recommended: 'Recomendado', backToRoutes: 'Volver a rutas', progress: 'Progreso',
            sharePage: 'Compartir', copyLink: 'Copiar enlace', linkCopied: '\u00a1Copiado!',
            suggest: 'Sugerir',
            resources: 'Recursos',
            sisterProjects: 'Proyectos hermanos',
            sisterLawra: 'IA y Derecho',
            sisterIbizai: 'IA y Negocios',
            sisterInsureversia: 'IA y Seguros',
            newsletterTitle: 'Mantente al d\u00eda',
            newsletterDesc: 'Un email por semana. Sin spam. Cancela cuando quieras.',
            newsletterPlaceholder: 'Tu direcci\u00f3n de email',
            newsletterBtn: 'Suscribirse',
            newsletterSuccess: '\u00a1Te has suscrito! Gracias.',
            newsletterError: 'Algo sali\u00f3 mal. Int\u00e9ntalo de nuevo.',
            glossary: 'Glosario'
        },
        pt: {
            things: '100+ coisas para fazer', donts: 'Algumas que n\u00e3o', logoText: 'a fazer e n\u00e3o com IA', usingAI: 'Usar IA', tips: 'Dicas', skills: 'Habilidades úteis',
            quickWins: 'Vit\u00f3rias r\u00e1pidas', tools: 'Ferramentas', showcase: 'Vitrine', about: 'Sobre',
            searchLabel: 'Pesquisar (Ctrl+K)', searchPlaceholder: 'Pesquisar as 100+ coisas...',
            searchHint: 'Pressione Enter para pesquisar', scrollTop: 'Voltar ao topo',
            funFact: 'Curiosidade sobre IA', anotherFact: 'Outra curiosidade',
            researchChatGPT: 'Pesquisar no ChatGPT', researchPerplexity: 'Pesquisar no Perplexity',
            close: 'Fechar',
            mantra: 'A IA n\u00e3o \u00e9 sobre fazer o mesmo mais r\u00e1pido e f\u00e1cil &mdash; \u00e9 sobre fazer MAIS e MELHOR do que antes.',
            visit: 'Visite', quickLinks: 'Links r\u00e1pidos', home: 'In\u00edcio',
            connectWithUs: 'Entre em contato',
            connectDesc: 'Quer saber mais sobre IA e como ela pode transformar seu trabalho e aprendizado?',
            developSkills: 'Quer desenvolver novas habilidades com IA?',
            lawraDesc: 'IA para o Direito &mdash; nosso projeto irm\u00e3o',
            madeWith: 'Feito com IA + Criatividade Humana',
            themePastel: 'Pastel', themeLight: 'Claro', themeDark: 'Escuro', themeLabel: 'Tema',
            explore: 'Explorar', exploreTitle: 'Encontre seu caminho com IA', exploreSubtitle: 'Fa\u00e7a um quiz r\u00e1pido ou navegue por rotas adaptadas aos seus objetivos.',
            quizCard: 'Quiz r\u00e1pido', quizCardDesc: 'Responda 3 perguntas e receba recomenda\u00e7\u00f5es personalizadas.', browseCard: 'Ver rotas', browseCardDesc: 'Explore as 12 rotas de aprendizado.',
            quizStep1: 'O que melhor descreve voc\u00ea?', quizStep2: 'Qual \u00e9 seu n\u00edvel de experi\u00eancia com IA?', quizStep3: 'O que mais te interessa?',
            quizNext: 'Pr\u00f3ximo', quizBack: 'Voltar', quizFinish: 'Ver minhas rotas',
            routeItems: 'itens', viewItem: 'Ver', startRoute: 'Come\u00e7ar', yourRoutes: 'Suas rotas recomendadas', completed: 'conclu\u00eddo',
            browseAll: 'Todas as rotas', orBrowse: 'ou explorar todas as rotas', recommended: 'Recomendado', backToRoutes: 'Voltar \u00e0s rotas', progress: 'Progresso',
            sharePage: 'Compartilhar', copyLink: 'Copiar link', linkCopied: 'Copiado!',
            suggest: 'Sugerir',
            resources: 'Recursos',
            sisterProjects: 'Projetos irm\u00e3os',
            sisterLawra: 'IA e Direito',
            sisterIbizai: 'IA e Neg\u00f3cios',
            sisterInsureversia: 'IA e Seguros',
            newsletterTitle: 'Fique por dentro',
            newsletterDesc: 'Um email por semana. Sem spam. Cancele quando quiser.',
            newsletterPlaceholder: 'Seu endere\u00e7o de email',
            newsletterBtn: 'Inscrever-se',
            newsletterSuccess: 'Voc\u00ea est\u00e1 inscrito! Obrigado.',
            newsletterError: 'Algo deu errado. Tente novamente.',
            glossary: 'Gloss\u00e1rio'
        },
        de: {
            things: '100+ Dinge', donts: 'Einige Don\u2019ts', logoText: 'KI: Dos und Don\u2019ts', usingAI: 'KI nutzen', tips: 'Tipps', skills: 'N\u00fctzliche F\u00e4higkeiten',
            quickWins: 'Schnelle Erfolge', tools: 'Werkzeuge', showcase: 'Vitrine', about: '\u00dcber uns',
            searchLabel: 'Suchen (Ctrl+K)', searchPlaceholder: 'Die 100+ Dinge durchsuchen...',
            searchHint: 'Enter dr\u00fccken zum Suchen', scrollTop: 'Nach oben',
            funFact: 'KI-Funfakt', anotherFact: 'Noch ein Fakt',
            researchChatGPT: 'Auf ChatGPT recherchieren', researchPerplexity: 'Auf Perplexity recherchieren',
            close: 'Schlie\u00dfen',
            mantra: 'KI geht nicht darum, das Gleiche schneller und einfacher zu tun &mdash; es geht darum, MEHR und BESSER zu machen als zuvor.',
            visit: 'Besuche', quickLinks: 'Schnelllinks', home: 'Startseite',
            connectWithUs: 'Kontakt',
            connectDesc: 'M\u00f6chtest du mehr \u00fcber KI erfahren und wie sie deine Arbeit und dein Lernen ver\u00e4ndern kann?',
            developSkills: 'M\u00f6chtest du neue F\u00e4higkeiten mit KI entwickeln?',
            lawraDesc: 'KI f\u00fcr Recht &mdash; unser Schwesterprojekt',
            madeWith: 'Gemacht mit KI + Menschlicher Kreativit\u00e4t',
            themePastel: 'Pastell', themeLight: 'Hell', themeDark: 'Dunkel', themeLabel: 'Design',
            explore: 'Entdecken', exploreTitle: 'Finde deinen KI-Weg', exploreSubtitle: 'Mach ein kurzes Quiz oder entdecke Lernpfade f\u00fcr deine Ziele.',
            quizCard: 'Schnell-Quiz', quizCardDesc: 'Beantworte 3 Fragen und erhalte personalisierte Empfehlungen.', browseCard: 'Routen durchsuchen', browseCardDesc: 'Entdecke alle 12 Lernpfade.',
            quizStep1: 'Was beschreibt dich am besten?', quizStep2: 'Wie ist dein KI-Erfahrungslevel?', quizStep3: 'Was interessiert dich am meisten?',
            quizNext: 'Weiter', quizBack: 'Zur\u00fcck', quizFinish: 'Meine Routen zeigen',
            routeItems: 'Elemente', viewItem: 'Ansehen', startRoute: 'Starten', yourRoutes: 'Deine empfohlenen Routen', completed: 'abgeschlossen',
            browseAll: 'Alle Routen', orBrowse: 'oder alle Routen durchsuchen', recommended: 'Empfohlen', backToRoutes: 'Zur\u00fcck zu Routen', progress: 'Fortschritt',
            sharePage: 'Teilen', copyLink: 'Link kopieren', linkCopied: 'Kopiert!',
            suggest: 'Vorschlagen',
            resources: 'Ressourcen',
            sisterProjects: 'Schwesterprojekte',
            sisterLawra: 'KI im Recht',
            sisterIbizai: 'KI im Business',
            sisterInsureversia: 'KI in der Versicherung',
            newsletterTitle: 'Bleib auf dem Laufenden',
            newsletterDesc: 'Eine E-Mail pro Woche. Kein Spam. Jederzeit abbestellbar.',
            newsletterPlaceholder: 'Deine E-Mail-Adresse',
            newsletterBtn: 'Abonnieren',
            newsletterSuccess: 'Du bist angemeldet! Danke.',
            newsletterError: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
            glossary: 'Glossar'
        },
        it: {
            things: '100+ cose da fare', donts: 'Alcune da non fare', logoText: "IA: da fare e non", usingAI: "Usare l'IA", tips: 'Consigli', skills: 'Competenze utili',
            quickWins: 'Vittorie rapide', tools: 'Strumenti', showcase: 'Vetrina', about: 'Chi siamo',
            searchLabel: 'Cerca (Ctrl+K)', searchPlaceholder: 'Cerca le 100+ cose...',
            searchHint: 'Premi Invio per cercare', scrollTop: 'Torna su',
            funFact: "Curiosit\u00e0 sull'IA", anotherFact: "Un'altra curiosit\u00e0",
            researchChatGPT: 'Cerca su ChatGPT', researchPerplexity: 'Cerca su Perplexity',
            close: 'Chiudi',
            mantra: "L'IA non riguarda fare le stesse cose pi\u00f9 velocemente e facilmente &mdash; riguarda fare di PI\u00d9 e MEGLIO di prima.",
            visit: 'Visita', quickLinks: 'Link rapidi', home: 'Home',
            connectWithUs: 'Contattaci',
            connectDesc: "Vuoi saperne di pi\u00f9 sull'IA e su come pu\u00f2 trasformare il tuo lavoro e apprendimento?",
            developSkills: "Vuoi sviluppare nuove competenze con l'IA?",
            lawraDesc: "IA per il Diritto &mdash; il nostro progetto gemello",
            madeWith: 'Fatto con IA + Creativit\u00e0 Umana',
            themePastel: 'Pastello', themeLight: 'Chiaro', themeDark: 'Scuro', themeLabel: 'Tema',
            explore: 'Esplora', exploreTitle: 'Trova il tuo percorso IA', exploreSubtitle: 'Fai un quiz veloce o sfoglia i percorsi adatti ai tuoi obiettivi.',
            quizCard: 'Quiz veloce', quizCardDesc: 'Rispondi a 3 domande e ottieni raccomandazioni personalizzate.', browseCard: 'Sfoglia i percorsi', browseCardDesc: 'Esplora tutti i 12 percorsi di apprendimento.',
            quizStep1: 'Cosa ti descrive meglio?', quizStep2: 'Qual \u00e8 il tuo livello di esperienza con l\u0027IA?', quizStep3: 'Cosa ti interessa di pi\u00f9?',
            quizNext: 'Avanti', quizBack: 'Indietro', quizFinish: 'Mostra i miei percorsi',
            routeItems: 'elementi', viewItem: 'Vedi', startRoute: 'Inizia', yourRoutes: 'I tuoi percorsi consigliati', completed: 'completato',
            browseAll: 'Tutti i percorsi', orBrowse: 'o sfoglia tutti i percorsi', recommended: 'Consigliato', backToRoutes: 'Torna ai percorsi', progress: 'Progressi',
            sharePage: 'Condividi', copyLink: 'Copia link', linkCopied: 'Copiato!',
            suggest: 'Suggerisci',
            resources: 'Risorse',
            sisterProjects: 'Progetti gemelli',
            sisterLawra: 'IA e Diritto',
            sisterIbizai: 'IA e Business',
            sisterInsureversia: 'IA e Assicurazioni',
            newsletterTitle: 'Resta aggiornato',
            newsletterDesc: "Un'email a settimana. Niente spam. Cancellati quando vuoi.",
            newsletterPlaceholder: 'Il tuo indirizzo email',
            newsletterBtn: 'Iscriviti',
            newsletterSuccess: 'Sei iscritto! Grazie.',
            newsletterError: 'Qualcosa \u00e8 andato storto. Riprova.',
            glossary: 'Glossario'
        },
        ja: {
            things: '100+\u3084\u308b\u3079\u304d\u3053\u3068', donts: '\u3044\u304f\u3064\u304b\u306eNG', logoText: 'AI\u306e\u3059\u3079\u304d\u3053\u3068\u30fb\u3059\u3079\u304d\u3067\u306a\u3044\u3053\u3068', usingAI: 'AI活用', tips: 'ヒント', skills: 'スキル',
            quickWins: '即効', tools: 'ツール', showcase: '事例', about: '概要',
            searchLabel: '\u691c\u7d22 (Ctrl+K)', searchPlaceholder: '100\u306e\u3053\u3068\u3092\u691c\u7d22...',
            searchHint: 'Enter\u3067\u691c\u7d22', scrollTop: '\u30c8\u30c3\u30d7\u306b\u623b\u308b',
            funFact: 'AI\u306e\u8c46\u77e5\u8b58', anotherFact: '\u5225\u306e\u8c46\u77e5\u8b58',
            researchChatGPT: 'ChatGPT\u3067\u8abf\u3079\u308b', researchPerplexity: 'Perplexity\u3067\u8abf\u3079\u308b',
            close: '\u9589\u3058\u308b',
            mantra: 'AI\u306f\u540c\u3058\u3053\u3068\u3092\u3088\u308a\u901f\u304f\u7c21\u5358\u306b\u3059\u308b\u3053\u3068\u3067\u306f\u3042\u308a\u307e\u305b\u3093 &mdash; \u4ee5\u524d\u3088\u308a\u3082\u3063\u3068\u591a\u304f\u3001\u3082\u3063\u3068\u826f\u304f\u3059\u308b\u3053\u3068\u3067\u3059\u3002',
            visit: '\u8a2a\u554f', quickLinks: '\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af', home: '\u30db\u30fc\u30e0',
            connectWithUs: '\u304a\u554f\u3044\u5408\u308f\u305b',
            connectDesc: 'AI\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u77e5\u308a\u305f\u3044\u3067\u3059\u304b\uff1f\u4ed5\u4e8b\u3084\u5b66\u3073\u3092\u3069\u3046\u5909\u3048\u308b\u304b\u3092\u767a\u898b\u3057\u307e\u3057\u3087\u3046\u3002',
            developSkills: 'AI\u3067\u65b0\u3057\u3044\u30b9\u30ad\u30eb\u3092\u8eab\u306b\u3064\u3051\u305f\u3044\u3067\u3059\u304b\uff1f',
            lawraDesc: '\u6cd5\u5f8b\u306e\u305f\u3081\u306eAI &mdash; \u59c9\u59b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
            madeWith: 'AI + \u4eba\u9593\u306e\u5275\u9020\u529b\u3067\u5236\u4f5c',
            themePastel: '\u30d1\u30b9\u30c6\u30eb', themeLight: '\u30e9\u30a4\u30c8', themeDark: '\u30c0\u30fc\u30af', themeLabel: '\u30c6\u30fc\u30de',
            explore: '\u63a2\u7d22', exploreTitle: '\u3042\u306a\u305f\u306eAI\u30d1\u30b9\u3092\u898b\u3064\u3051\u3088\u3046', exploreSubtitle: '\u30af\u30a4\u30ba\u306b\u7b54\u3048\u308b\u304b\u3001\u76ee\u6a19\u306b\u5408\u3063\u305f\u30eb\u30fc\u30c8\u3092\u95b2\u89a7\u3057\u307e\u3057\u3087\u3046\u3002',
            quizCard: '\u30af\u30a4\u30c3\u30af\u30af\u30a4\u30ba', quizCardDesc: '3\u3064\u306e\u8cea\u554f\u306b\u7b54\u3048\u3066\u304a\u3059\u3059\u3081\u3092\u53d7\u3051\u53d6\u308a\u307e\u3057\u3087\u3046\u3002', browseCard: '\u30eb\u30fc\u30c8\u4e00\u89a7', browseCardDesc: '12\u306e\u5b66\u7fd2\u30eb\u30fc\u30c8\u3092\u3059\u3079\u3066\u63a2\u7d22\u3002',
            quizStep1: '\u3042\u306a\u305f\u306b\u6700\u3082\u5f53\u3066\u306f\u307e\u308b\u306e\u306f\uff1f', quizStep2: 'AI\u306e\u7d4c\u9a13\u30ec\u30d9\u30eb\u306f\uff1f', quizStep3: '\u6700\u3082\u8208\u5473\u304c\u3042\u308b\u306e\u306f\uff1f',
            quizNext: '\u6b21\u3078', quizBack: '\u623b\u308b', quizFinish: '\u304a\u3059\u3059\u3081\u3092\u8868\u793a',
            routeItems: '\u30a2\u30a4\u30c6\u30e0', viewItem: '\u898b\u308b', startRoute: '\u958b\u59cb', yourRoutes: '\u304a\u3059\u3059\u3081\u30eb\u30fc\u30c8', completed: '\u5b8c\u4e86',
            browseAll: '\u3059\u3079\u3066\u306e\u30eb\u30fc\u30c8', orBrowse: '\u307e\u305f\u306f\u3059\u3079\u3066\u306e\u30eb\u30fc\u30c8\u3092\u95b2\u89a7', recommended: '\u304a\u3059\u3059\u3081', backToRoutes: '\u30eb\u30fc\u30c8\u306b\u623b\u308b', progress: '\u9032\u6357',
            sharePage: '\u5171\u6709', copyLink: '\u30ea\u30f3\u30af\u3092\u30b3\u30d4\u30fc', linkCopied: '\u30b3\u30d4\u30fc\u3057\u307e\u3057\u305f',
            suggest: '\u63d0\u6848\u3059\u308b',
            resources: '\u30ea\u30bd\u30fc\u30b9',
            sisterProjects: '\u59c9\u59b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8',
            sisterLawra: '\u6cd5\u5f8b\u306eAI',
            sisterIbizai: '\u30d3\u30b8\u30cd\u30b9\u306eAI',
            sisterInsureversia: '\u4fdd\u967a\u306eAI',
            newsletterTitle: '\u6700\u65b0\u60c5\u5831\u3092\u53d7\u3051\u53d6\u308b',
            newsletterDesc: '\u9031\u306b1\u901a\u306e\u30e1\u30fc\u30eb\u3002\u30b9\u30d1\u30e0\u306a\u3057\u3002\u3044\u3064\u3067\u3082\u89e3\u9664\u53ef\u80fd\u3002',
            newsletterPlaceholder: '\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9',
            newsletterBtn: '\u8cfc\u8aad\u3059\u308b',
            newsletterSuccess: '\u8cfc\u8aad\u5b8c\u4e86\uff01\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\u3002',
            newsletterError: '\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
            glossary: '\u7528\u8a9e\u96c6'
        },
        zh: {
            things: '100+\u8be5\u505a\u7684\u4e8b', donts: '\u4e00\u4e9b\u4e0d\u8be5\u505a\u7684\u4e8b', logoText: 'AI\u8be5\u505a\u4e0e\u4e0d\u8be5\u505a', usingAI: '\u4f7f\u7528AI', tips: '\u6280\u5de7', skills: '\u5b9e\u7528\u6280\u80fd',
            quickWins: '\u5feb\u901f\u4e0a\u624b', tools: '\u5de5\u5177', showcase: '\u5c55\u793a', about: '\u5173\u4e8e',
            searchLabel: '\u641c\u7d22 (Ctrl+K)', searchPlaceholder: '\u641c\u7d22100\u4ef6\u4e8b...',
            searchHint: '\u6309Enter\u641c\u7d22', scrollTop: '\u56de\u5230\u9876\u90e8',
            funFact: 'AI\u8da3\u4e8b', anotherFact: '\u6362\u4e00\u4e2a',
            researchChatGPT: '\u5728ChatGPT\u4e0a\u7814\u7a76', researchPerplexity: '\u5728Perplexity\u4e0a\u7814\u7a76',
            close: '\u5173\u95ed',
            mantra: 'AI\u4e0d\u662f\u4e3a\u4e86\u66f4\u5feb\u66f4\u5bb9\u6613\u5730\u505a\u540c\u6837\u7684\u4e8b\u60c5 &mdash; \u800c\u662f\u8981\u505a\u5f97\u66f4\u591a\u3001\u505a\u5f97\u66f4\u597d\u3002',
            visit: '\u8bbf\u95ee', quickLinks: '\u5feb\u901f\u94fe\u63a5', home: '\u9996\u9875',
            connectWithUs: '\u8054\u7cfb\u6211\u4eec',
            connectDesc: '\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8eAI\u4ee5\u53ca\u5b83\u5982\u4f55\u6539\u53d8\u4f60\u7684\u5de5\u4f5c\u548c\u5b66\u4e60\uff1f',
            developSkills: '\u60f3\u7528AI\u53d1\u5c55\u65b0\u6280\u80fd\uff1f',
            lawraDesc: '\u6cd5\u5f8b\u7684AI &mdash; \u59ca\u59b9\u9879\u76ee',
            madeWith: 'AI + \u4eba\u7c7b\u521b\u610f\u5236\u4f5c',
            themePastel: '\u67d4\u548c', themeLight: '\u660e\u4eae', themeDark: '\u6697\u8272', themeLabel: '\u4e3b\u9898',
            explore: '\u63a2\u7d22', exploreTitle: '\u627e\u5230\u4f60\u7684AI\u8def\u5f84', exploreSubtitle: '\u505a\u4e2a\u5feb\u901f\u6d4b\u9a8c\u6216\u6d4f\u89c8\u9002\u5408\u4f60\u76ee\u6807\u7684\u8def\u7ebf\u3002',
            quizCard: '\u5feb\u901f\u6d4b\u9a8c', quizCardDesc: '\u56de\u7b543\u4e2a\u95ee\u9898\uff0c\u83b7\u53d6\u4e2a\u6027\u5316\u63a8\u8350\u3002', browseCard: '\u6d4f\u89c8\u8def\u7ebf', browseCardDesc: '\u63a2\u7d22\u5168\u90e812\u6761\u5b66\u4e60\u8def\u7ebf\u3002',
            quizStep1: '\u54ea\u4e2a\u6700\u80fd\u63cf\u8ff0\u4f60\uff1f', quizStep2: '\u4f60\u7684AI\u7ecf\u9a8c\u6c34\u5e73\u5982\u4f55\uff1f', quizStep3: '\u4f60\u6700\u611f\u5174\u8da3\u7684\u662f\u4ec0\u4e48\uff1f',
            quizNext: '\u4e0b\u4e00\u6b65', quizBack: '\u8fd4\u56de', quizFinish: '\u67e5\u770b\u63a8\u8350',
            routeItems: '\u9879\u76ee', viewItem: '\u67e5\u770b', startRoute: '\u5f00\u59cb', yourRoutes: '\u4f60\u7684\u63a8\u8350\u8def\u7ebf', completed: '\u5df2\u5b8c\u6210',
            browseAll: '\u6240\u6709\u8def\u7ebf', orBrowse: '\u6216\u6d4f\u89c8\u6240\u6709\u8def\u7ebf', recommended: '\u63a8\u8350', backToRoutes: '\u8fd4\u56de\u8def\u7ebf', progress: '\u8fdb\u5ea6',
            sharePage: '\u5206\u4eab', copyLink: '\u590d\u5236\u94fe\u63a5', linkCopied: '\u5df2\u590d\u5236',
            suggest: '\u5efa\u8bae',
            resources: '\u8d44\u6e90',
            sisterProjects: '\u59ca\u59b9\u9879\u76ee',
            sisterLawra: '\u6cd5\u5f8bAI',
            sisterIbizai: '\u5546\u4e1aAI',
            sisterInsureversia: '\u4fdd\u9669AI',
            newsletterTitle: '\u4fdd\u6301\u8054\u7cfb',
            newsletterDesc: '\u6bcf\u5468\u4e00\u5c01\u90ae\u4ef6\u3002\u65e0\u5783\u573e\u90ae\u4ef6\u3002\u968f\u65f6\u53d6\u6d88\u8ba2\u9605\u3002',
            newsletterPlaceholder: '\u4f60\u7684\u90ae\u7bb1\u5730\u5740',
            newsletterBtn: '\u8ba2\u9605',
            newsletterSuccess: '\u8ba2\u9605\u6210\u529f\uff01\u8c22\u8c22\u3002',
            newsletterError: '\u51fa\u4e86\u70b9\u95ee\u9898\u3002\u8bf7\u91cd\u8bd5\u3002',
            glossary: '\u672f\u8bed\u8868'
        }
    };

    // === Available languages ===
    var LANGS = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Fran\u00e7ais' },
        { code: 'es', label: 'Espa\u00f1ol' },
        { code: 'pt', label: 'Portugu\u00eas' },
        { code: 'de', label: 'Deutsch' },
        { code: 'it', label: 'Italiano' },
        { code: 'ja', label: '\u65e5\u672c\u8a9e' },
        { code: 'zh', label: '\u4e2d\u6587' }
    ];

    // === On DOM ready, inject nav, footer, fun facts, scroll-to-top ===
    document.addEventListener('DOMContentLoaded', function() {
        var lang = document.documentElement.lang || 'en';
        var S = STRINGS[lang] || STRINGS.en;
        window.__S = S; // expose for page scripts (explore-app.js etc.)
        var page = document.body.dataset.page || 'index';

        // Page href helper — link to a page in the current language
        function ph(pageName) {
            if (pageName === 'index') return lang === 'en' ? 'index.html' : lang + '.html';
            return (lang === 'en' ? '' : lang + '-') + pageName + '.html';
        }

        // Language href helper — link to the current page in a different language
        function langHref(targetLang) {
            if (page === 'index') return targetLang === 'en' ? 'index.html' : targetLang + '.html';
            return (targetLang === 'en' ? '' : targetLang + '-') + page + '.html';
        }

        function active(p) { return page === p ? ' active' : ''; }

        // --- Language dropdown ---
        var langItems = LANGS.map(function(l) {
            return '<a href="' + langHref(l.code) + '" class="nav-dropdown-item' + (l.code === lang ? ' active' : '') + '">' + l.code.toUpperCase() + ' ' + l.label + '</a>';
        }).join('');

        var langDropdown = '<div class="nav-dropdown nav-lang-dropdown">' +
            '<button class="nav-dropdown-trigger nav-link" style="display:inline-flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;font:inherit;color:inherit;padding:inherit">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg> ' +
            lang.toUpperCase() +
            ' <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg>' +
            '</button>' +
            '<div class="nav-dropdown-menu">' + langItems + '</div></div>';

        // --- Navigation ---
        var navHTML = '<nav class="nav" id="main-nav"><div class="nav-inner">' +
            '<a href="' + ph('index') + '" class="nav-logo"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100+ <span>' + S.logoText + '</span></a>' +
            '<button class="nav-hamburger" id="nav-toggle-btn" aria-label="Menu"><span></span><span></span><span></span></button>' +
            '<div class="nav-links" id="nav-links">' +
            '<div class="nav-dropdown">' +
            '<a href="' + ph('things') + '" class="nav-dropdown-trigger nav-link' + (page === 'things' || page === 'donts' ? ' active' : '') + '">100+ <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg></a>' +
            '<div class="nav-dropdown-menu">' +
            '<a href="' + ph('things') + '" class="nav-dropdown-item' + active('things') + '">' + S.things + '</a>' +
            '<a href="' + ph('donts') + '" class="nav-dropdown-item' + active('donts') + '">' + S.donts + '</a>' +
            '</div></div>' +
            '<a href="' + ph('explore') + '" class="nav-link' + active('explore') + '">' + S.explore + '</a>' +
            '<div class="nav-dropdown">' +
            '<a href="' + ph('tips') + '" class="nav-dropdown-trigger nav-link' + (page === 'tips' || page === 'toolkit' || page === 'quickwins' || page === 'showcase' ? ' active' : '') + '">' + S.usingAI + ' <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg></a>' +
            '<div class="nav-dropdown-menu">' +
            '<a href="' + ph('tips') + '" class="nav-dropdown-item' + active('tips') + '">' + S.tips + '</a>' +
            '<a href="' + ph('toolkit') + '" class="nav-dropdown-item' + active('toolkit') + '">' + S.skills + '</a>' +
            '<a href="' + ph('quickwins') + '" class="nav-dropdown-item' + active('quickwins') + '">' + S.quickWins + '</a>' +
            '<a href="' + ph('showcase') + '" class="nav-dropdown-item' + active('showcase') + '">' + S.showcase + '</a>' +
            '</div></div>' +
            '<div class="nav-dropdown">' +
            '<a href="' + ph('faq') + '" class="nav-dropdown-trigger nav-link' + (page === 'faq' || page === 'tools' || page === 'glossary' || page === 'newsletter' ? ' active' : '') + '">' + S.resources + ' <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 4 5 7 8 4"></polyline></svg></a>' +
            '<div class="nav-dropdown-menu">' +
            '<a href="' + ph('faq') + '" class="nav-dropdown-item' + active('faq') + '">FAQ</a>' +
            '<a href="' + ph('tools') + '" class="nav-dropdown-item' + active('tools') + '">' + S.tools + '</a>' +
            '<a href="' + ph('glossary') + '" class="nav-dropdown-item' + active('glossary') + '">' + S.glossary + '</a>' +
            '<a href="' + ph('newsletter') + '" class="nav-dropdown-item' + active('newsletter') + '">Newsletter</a>' +
            '</div></div>' +
            '<a href="' + ph('about') + '" class="nav-link' + active('about') + '">' + S.about + '</a>' +
            '<button class="nav-search-btn" id="nav-search-btn" aria-label="' + S.searchLabel + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>' +
            '<div class="theme-toggle" id="theme-toggle">' +
            '<button class="theme-toggle-btn" id="theme-toggle-btn" aria-label="' + S.themeLabel + '">' +
            '<svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M6.34 17.66l-1.41 1.41"></path><path d="M19.07 4.93l-1.41 1.41"></path></svg>' +
            '</button>' +
            '<div class="theme-dropdown" id="theme-dropdown">' +
            '<button class="theme-dropdown-item' + (savedTheme === 'pastel' ? ' active' : '') + '" data-theme-value="pastel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg> ' + S.themePastel + '</button>' +
            '<button class="theme-dropdown-item' + (savedTheme === 'light' ? ' active' : '') + '" data-theme-value="light"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> ' + S.themeLight + '</button>' +
            '<button class="theme-dropdown-item' + (savedTheme === 'dark' ? ' active' : '') + '" data-theme-value="dark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path></svg> ' + S.themeDark + '</button>' +
            '</div></div>' +
            langDropdown +
            '<a href="https://cemi.ai" class="nav-link nav-cta" target="_blank">CEMI.AI</a>' +
            '</div></div></nav>';

        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // --- Footer ---
        var footerHTML = '<footer class="footer"><div class="container"><div class="footer-grid">' +
            '<div class="footer-col">' +
            '<a href="' + ph('index') + '" class="nav-logo" style="display:inline-flex;align-items:center;gap:8px;margin-bottom:var(--space-md);font-size:1.3rem"><img src="assets/logos/favicon-32x32.png" alt="CEMI.AI" class="nav-logo-img"> 100+ <span>' + S.logoText + '</span></a>' +
            '<p class="footer-mantra">&ldquo;' + S.mantra + '&rdquo;</p>' +
            '<a href="https://cemi.ai" target="_blank">' + S.visit + ' CEMI.AI &rarr;</a>' +
            '<div style="margin-top:var(--space-lg);padding-top:var(--space-md);border-top:1px solid rgba(167,0,0,0.1)">' +
            '<h4 style="font-size:0.95rem;margin-bottom:var(--space-sm)">' + S.sisterProjects + '</h4>' +
            '<a href="https://lawra.org" target="_blank" class="footer-sister-link"><img src="assets/logos/external/lawra-logo-icon.png" alt="Lawra" width="18" height="18" style="border-radius:3px"> Lawra &mdash; ' + S.sisterLawra + '</a>' +
            '<a href="https://ibizai.io" target="_blank" class="footer-sister-link">Ibizai &mdash; ' + S.sisterIbizai + '</a>' +
            '<a href="https://insureversia.com" target="_blank" class="footer-sister-link">Insureversia &mdash; ' + S.sisterInsureversia + '</a>' +
            '</div>' +
            '</div>' +
            '<div class="footer-col"><h4>' + S.quickLinks + '</h4><ul class="footer-links footer-links-2col">' +
            '<li><a href="' + ph('index') + '">' + S.home + '</a></li>' +
            '<li><a href="' + ph('toolkit') + '">' + S.skills + '</a></li>' +
            '<li><a href="' + ph('tools') + '">' + S.tools + '</a></li>' +
            '<li><a href="' + ph('tips') + '">' + S.tips + '</a></li>' +
            '<li><a href="' + ph('quickwins') + '">' + S.quickWins + '</a></li>' +
            '<li><a href="' + ph('faq') + '">FAQ</a></li>' +
            '<li><a href="' + ph('things') + '">' + S.things + '</a></li>' +
            '<li><a href="' + ph('donts') + '">' + S.donts + '</a></li>' +
            '<li><a href="' + ph('explore') + '">' + S.explore + '</a></li>' +
            '<li><a href="#suggest">' + S.suggest + '</a></li>' +
            '<li><a href="' + ph('about') + '">' + S.about + '</a></li>' +
            '</ul></div>' +
            '<div class="footer-col"><h4>' + S.connectWithUs + '</h4>' +
            '<p>' + S.connectDesc + '</p>' +
            '<a href="https://cemi.ai" target="_blank" style="margin-top:var(--space-sm);display:inline-block;color:var(--accent-2);font-weight:600">cemi.ai &rarr;</a>' +
            '<div style="margin-top:var(--space-lg);padding-top:var(--space-md);border-top:1px solid rgba(167,0,0,0.1)">' +
            '<p style="font-size:0.88rem;color:var(--accent-3);margin-bottom:var(--space-xs)">' + S.developSkills + '</p>' +
            '<a href="https://xperto.academy" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:var(--accent-4);font-weight:600;font-size:0.9rem">xperto.academy <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>' +
            '</div></div>' +
            '</div>' +
            '<div class="footer-newsletter">' +
            '<h4>' + S.newsletterTitle + '</h4>' +
            '<p>' + S.newsletterDesc + '</p>' +
            '<form class="footer-newsletter-form newsletter-subscribe-form">' +
            '<input type="email" placeholder="' + S.newsletterPlaceholder + '" required>' +
            '<button type="submit" class="btn btn-primary">' + S.newsletterBtn + '</button>' +
            '</form>' +
            '<p class="footer-newsletter-msg newsletter-msg"></p>' +
            '</div>' +
            '<div class="footer-bottom">' +
            '<p>' + S.madeWith + ' | &copy; 2026 <a href="https://cemi.ai" target="_blank">CEMI.ai</a> + <a href="https://thesocialentrepreneur.com" target="_blank">Carlos Miranda Levy</a></p>' +
            '</div></div></footer>';

        // --- Scroll to top ---
        var scrollTopHTML = '<button class="scroll-top" id="scroll-top-btn" aria-label="' + S.scrollTop + '">' +
            '<svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button>';

        // --- Fun Facts widget ---
        var funFactHTML = '<button class="funfact-trigger" id="funfact-trigger" title="' + S.funFact + '">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>' +
            '</button>' +
            '<div class="funfact-widget" id="funfact-widget">' +
            '<div class="funfact-content">' +
            '<div class="funfact-label"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> ' + S.funFact + '</div>' +
            '<p id="funfact-text"></p>' +
            '<div class="funfact-actions">' +
            '<button id="funfact-next" class="funfact-btn" title="' + S.anotherFact + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"></path></svg></button>' +
            '<a id="funfact-chatgpt" class="funfact-btn" target="_blank" title="' + S.researchChatGPT + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path></svg></a>' +
            '<a id="funfact-perplexity" class="funfact-btn" target="_blank" title="' + S.researchPerplexity + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>' +
            '<button id="funfact-close" class="funfact-btn funfact-close-btn" title="' + S.close + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>' +
            '</div></div></div>';

        // --- Page Share button ---
        var pageShareHTML = '<div class="page-share" id="page-share">' +
            '<button class="page-share-btn" id="page-share-btn" title="' + S.sharePage + '">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>' +
            '</button></div>';

        // --- Floating Suggest button + modal ---
        var suggestBtnHTML = '<button class="suggest-fab" id="suggest-fab" title="' + S.suggest + '">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>' +
            '</button>';
        var suggestModalHTML = '<div class="suggest-modal-overlay" id="suggest-modal-overlay">' +
            '<div class="suggest-modal">' +
            '<button class="suggest-modal-close" id="suggest-modal-close" aria-label="' + S.close + '">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
            '</button>' +
            '<div class="suggest-modal-body">' +
            '<h2 class="gradient-text suggest-modal-title" id="suggest-title">' + S.suggest + '</h2>' +
            '<div id="suggest-form-container" class="suggest-container"></div>' +
            '</div></div></div>';

        // --- Search Modal ---
        var searchModalHTML = '<div class="search-modal-overlay" id="search-modal-overlay">' +
            '<div class="search-modal">' +
            '<div class="search-modal-input-wrap">' +
            '<svg class="search-modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
            '<input type="text" id="search-modal-input" placeholder="' + S.searchPlaceholder + '" autocomplete="off">' +
            '<kbd class="search-modal-kbd">ESC</kbd>' +
            '</div>' +
            '<div class="search-modal-hint">' + S.searchHint + ' \u00b7 <span class="search-modal-shortcut">' + (navigator.platform.indexOf('Mac') > -1 ? '\u2318' : 'Ctrl') + '+K</span></div>' +
            '</div></div>';

        // Insert footer, scroll-top, funfact, page-share, suggest fab + modal, search modal at end of body
        document.body.insertAdjacentHTML('beforeend', footerHTML + scrollTopHTML + funFactHTML + pageShareHTML + suggestBtnHTML + suggestModalHTML + searchModalHTML);

        // --- Suggest modal open/close ---
        var suggestOverlay = document.getElementById('suggest-modal-overlay');
        var suggestClose = document.getElementById('suggest-modal-close');
        var suggestLoaded = false;

        function openSuggestModal() {
            if (!suggestLoaded) {
                // Load Firebase + suggest-app.js on first open
                var fbBase = 'https://www.gstatic.com/firebasejs/10.14.1/';
                var queue = [fbBase + 'firebase-app-compat.js', fbBase + 'firebase-firestore-compat.js', 'firebase-config.js', 'suggest-app.js'];
                (function loadNext(i) {
                    if (i >= queue.length) return;
                    var s = document.createElement('script');
                    s.src = queue[i];
                    s.onload = function() { loadNext(i + 1); };
                    document.body.appendChild(s);
                })(0);
                suggestLoaded = true;
            }
            suggestOverlay.classList.add('visible');
            document.body.style.overflow = 'hidden';
        }

        function closeSuggestModal() {
            suggestOverlay.classList.remove('visible');
            document.body.style.overflow = '';
        }

        // FAB click
        var suggestFab = document.getElementById('suggest-fab');
        if (suggestFab) suggestFab.addEventListener('click', openSuggestModal);

        // Any #suggest link (footer, about pages, etc.)
        document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href="#suggest"]');
            if (link) { e.preventDefault(); openSuggestModal(); }
        });

        if (suggestClose) suggestClose.addEventListener('click', closeSuggestModal);
        if (suggestOverlay) suggestOverlay.addEventListener('click', function(e) {
            if (e.target === suggestOverlay) closeSuggestModal();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && suggestOverlay.classList.contains('visible')) closeSuggestModal();
        });

        // --- Newsletter subscribe handler ---
        function setupNewsletterForm(formEl) {
            var msgEl = formEl.nextElementSibling;
            formEl.addEventListener('submit', function(e) {
                e.preventDefault();
                var emailInput = formEl.querySelector('input[type="email"]');
                var email = emailInput.value.trim();
                if (!email) return;
                var btn = formEl.querySelector('button');
                btn.disabled = true;
                if (msgEl) { msgEl.textContent = ''; msgEl.className = msgEl.className.replace(/ success| error/g, ''); }

                function saveEmail() {
                    window.__db.collection('newsletter').add({
                        email: email,
                        language: lang,
                        page: page,
                        subscribedAt: firebase.firestore.FieldValue.serverTimestamp()
                    }).then(function() {
                        if (msgEl) { msgEl.textContent = S.newsletterSuccess; msgEl.classList.add('success'); }
                        emailInput.disabled = true;
                        btn.disabled = true;
                    }).catch(function() {
                        if (msgEl) { msgEl.textContent = S.newsletterError; msgEl.classList.add('error'); }
                        btn.disabled = false;
                    });
                }

                if (window.__db) {
                    saveEmail();
                } else {
                    var fbBase = 'https://www.gstatic.com/firebasejs/10.14.1/';
                    var queue = [fbBase + 'firebase-app-compat.js', fbBase + 'firebase-firestore-compat.js', 'firebase-config.js'];
                    (function loadNext(i) {
                        if (i >= queue.length) { saveEmail(); return; }
                        var s = document.createElement('script');
                        s.src = queue[i];
                        s.onload = function() { loadNext(i + 1); };
                        s.onerror = function() {
                            if (msgEl) { msgEl.textContent = S.newsletterError; msgEl.classList.add('error'); }
                            btn.disabled = false;
                        };
                        document.body.appendChild(s);
                    })(0);
                    suggestLoaded = true;
                }
            });
        }
        document.querySelectorAll('.newsletter-subscribe-form').forEach(setupNewsletterForm);

        // --- Initialize fun facts (called after funfacts.js loads) ---
        function initFunFacts() {
            if (typeof FUN_FACTS === 'undefined') return;
            var currentFact = -1;
            var factText = document.getElementById('funfact-text');
            var chatgptLink = document.getElementById('funfact-chatgpt');
            var perplexityLink = document.getElementById('funfact-perplexity');
            var nextBtn = document.getElementById('funfact-next');
            var closeBtn = document.getElementById('funfact-close');
            var widget = document.getElementById('funfact-widget');
            var trigger = document.getElementById('funfact-trigger');

            function showFact() {
                var idx;
                do { idx = Math.floor(Math.random() * FUN_FACTS.length); } while (idx === currentFact && FUN_FACTS.length > 1);
                currentFact = idx;
                var fact = FUN_FACTS[idx];
                if (factText) factText.textContent = fact;
                if (chatgptLink) chatgptLink.href = 'https://chatgpt.com/?q=' + encodeURIComponent('Tell me more about: ' + fact);
                if (perplexityLink) perplexityLink.href = 'https://www.perplexity.ai/search?q=' + encodeURIComponent(fact);
            }

            showFact();
            if (nextBtn) nextBtn.addEventListener('click', showFact);

            // Trigger opens widget
            if (trigger) trigger.addEventListener('click', function() {
                trigger.classList.remove('visible');
                widget.classList.remove('hidden');
                widget.classList.add('visible');
            });

            // Close collapses widget back to trigger
            if (closeBtn) closeBtn.addEventListener('click', function() {
                widget.classList.add('hidden');
                widget.classList.remove('visible');
                setTimeout(function() { trigger.classList.add('visible'); }, 300);
            });

            // Show trigger after slight delay
            setTimeout(function() {
                if (trigger) trigger.classList.add('visible');
            }, 2000);
        }

        // === Dynamically load funfacts.js (language-aware), share.js, then main.js ===
        var ffFile = 'funfacts.js';
        var ffScript = document.createElement('script');
        ffScript.src = ffFile;
        ffScript.onload = function() {
            initFunFacts();
            var shScript = document.createElement('script');
            shScript.src = 'share.js';
            document.body.appendChild(shScript);
            var mjScript = document.createElement('script');
            mjScript.src = 'main.js';
            document.body.appendChild(mjScript);
        };
        document.body.appendChild(ffScript);

        // === Conditionally load Firebase + page-specific scripts ===
        if (page === 'things' || page === 'admin') {
            var fbBase = 'https://www.gstatic.com/firebasejs/10.14.1/';
            var fbQueue = [fbBase + 'firebase-app-compat.js', fbBase + 'firebase-firestore-compat.js'];
            if (page === 'admin') fbQueue.push(fbBase + 'firebase-auth-compat.js');
            fbQueue.push('firebase-config.js');
            if (page === 'things') fbQueue.push('likes.js');
            else if (page === 'admin') fbQueue.push('admin-app.js');

            (function loadNext(i) {
                if (i >= fbQueue.length) return;
                var s = document.createElement('script');
                s.src = fbQueue[i];
                s.onload = function() { loadNext(i + 1); };
                document.body.appendChild(s);
            })(0);
        }
    });
})();
