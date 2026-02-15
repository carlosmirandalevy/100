/* suggest-app.js — Suggestion form logic
   IIFE with embedded translations. Renders form, validates, writes to Firestore. */
(function() {
    'use strict';

    var lang = document.documentElement.lang || 'en';

    // === Form string translations (23 keys x 8 languages) ===
    var FORM_STRINGS = {
        en: {
            pageTitle: 'Suggest an Idea',
            pageSubtitle: 'Help us grow the collection! Submit a new item, a "don\'t", a new category, or an example idea.',
            typeLabel: 'Submission Type',
            typeItem: 'New Item (Do)',
            typeDont: 'New Don\'t',
            typeCategory: 'New Category',
            typeExample: 'Example / Idea',
            typeRequest: 'Request',
            typeTips: 'Tips',
            typeSkills: 'Useful Skills',
            typeQuickWins: 'Quick Wins',
            typeShowcase: 'Showcase',
            typeTool: 'Tool',
            typeFaq: 'FAQ',
            categoryLabel: 'Category',
            categoryNew: 'New Category',
            newCatLabel: 'New Category Name',
            newCatPlaceholder: 'Name your proposed category',
            titleLabel: 'Title',
            titlePlaceholder: 'A short, descriptive title (max 200 chars)',
            descLabel: 'Description',
            descPlaceholder: 'Describe the idea in detail (max 2000 chars)',
            promptLabel: 'Example Prompt (optional)',
            promptPlaceholder: 'A ready-to-use prompt for this idea (max 3000 chars)',
            toolsLabel: 'Suggested Tools (optional)',
            toolsPlaceholder: 'e.g. ChatGPT, Midjourney, Claude',
            creditLabel: 'Credit',
            creditAnon: 'Anonymous',
            creditMe: 'Credit me',
            creditNameLabel: 'Your Name',
            creditNamePlaceholder: 'How should we credit you?',
            emailLabel: 'Email (optional)',
            emailPlaceholder: 'We\'ll only use this to follow up if needed',
            disclaimerText: 'I understand my submission may be edited before publishing.',
            submitBtn: 'Submit Suggestion',
            submitting: 'Submitting...',
            successTitle: 'Thank you!',
            successMsg: 'Your suggestion has been submitted. We\'ll review it soon.',
            successAnother: 'Submit Another',
            errorRequired: 'This field is required.',
            errorMaxLen: 'Maximum {n} characters.',
            errorDisclaimer: 'Please accept the disclaimer.',
            errorGeneral: 'Something went wrong. Please try again.',
            errorRateLimit: 'Please wait before submitting again.',
            charsRemaining: '{n} characters remaining'
        },
        fr: {
            pageTitle: 'Proposer une id\u00e9e',
            pageSubtitle: 'Aidez-nous \u00e0 enrichir la collection ! Soumettez un nouvel \u00e9l\u00e9ment, un \u00ab\u00a0\u00e0 ne pas faire\u00a0\u00bb, une nouvelle cat\u00e9gorie ou une id\u00e9e.',
            typeLabel: 'Type de soumission',
            typeItem: 'Nouvel \u00e9l\u00e9ment (\u00e0 faire)',
            typeDont: 'Nouveau \u00ab\u00a0\u00e0 ne pas faire\u00a0\u00bb',
            typeCategory: 'Nouvelle cat\u00e9gorie',
            typeExample: 'Exemple / Id\u00e9e',
            typeRequest: 'Demande',
            typeTips: 'Conseils',
            typeSkills: 'Comp\u00e9tences utiles',
            typeQuickWins: 'Victoires rapides',
            typeShowcase: 'Vitrine',
            typeTool: 'Outil',
            typeFaq: 'FAQ',
            categoryLabel: 'Cat\u00e9gorie',
            categoryNew: 'Nouvelle cat\u00e9gorie',
            newCatLabel: 'Nom de la nouvelle cat\u00e9gorie',
            newCatPlaceholder: 'Nommez votre cat\u00e9gorie propos\u00e9e',
            titleLabel: 'Titre',
            titlePlaceholder: 'Un titre court et descriptif (max 200 caract\u00e8res)',
            descLabel: 'Description',
            descPlaceholder: 'D\u00e9crivez l\u2019id\u00e9e en d\u00e9tail (max 2000 caract\u00e8res)',
            promptLabel: 'Exemple de prompt (optionnel)',
            promptPlaceholder: 'Un prompt pr\u00eat \u00e0 l\u2019emploi pour cette id\u00e9e (max 3000 caract\u00e8res)',
            toolsLabel: 'Outils sugg\u00e9r\u00e9s (optionnel)',
            toolsPlaceholder: 'ex. ChatGPT, Midjourney, Claude',
            creditLabel: 'Cr\u00e9dit',
            creditAnon: 'Anonyme',
            creditMe: 'Me cr\u00e9diter',
            creditNameLabel: 'Votre nom',
            creditNamePlaceholder: 'Comment devons-nous vous cr\u00e9diter ?',
            emailLabel: 'E-mail (optionnel)',
            emailPlaceholder: 'Utilis\u00e9 uniquement pour un suivi si n\u00e9cessaire',
            disclaimerText: 'Je comprends que ma soumission peut \u00eatre modifi\u00e9e avant publication.',
            submitBtn: 'Envoyer la suggestion',
            submitting: 'Envoi en cours...',
            successTitle: 'Merci !',
            successMsg: 'Votre suggestion a \u00e9t\u00e9 soumise. Nous l\u2019examinerons bient\u00f4t.',
            successAnother: 'Envoyer une autre',
            errorRequired: 'Ce champ est requis.',
            errorMaxLen: 'Maximum {n} caract\u00e8res.',
            errorDisclaimer: 'Veuillez accepter la clause.',
            errorGeneral: 'Une erreur est survenue. Veuillez r\u00e9essayer.',
            errorRateLimit: 'Veuillez patienter avant de soumettre \u00e0 nouveau.',
            charsRemaining: '{n} caract\u00e8res restants'
        },
        es: {
            pageTitle: 'Sugerir una idea',
            pageSubtitle: '\u00a1Ay\u00fadanos a hacer crecer la colecci\u00f3n! Env\u00eda un nuevo elemento, un \u00abno hacer\u00bb, una nueva categor\u00eda o una idea.',
            typeLabel: 'Tipo de env\u00edo',
            typeItem: 'Nuevo elemento (hacer)',
            typeDont: 'Nuevo \u00abno hacer\u00bb',
            typeCategory: 'Nueva categor\u00eda',
            typeExample: 'Ejemplo / Idea',
            typeRequest: 'Solicitud',
            typeTips: 'Consejos',
            typeSkills: 'Habilidades \u00fatiles',
            typeQuickWins: 'Victorias r\u00e1pidas',
            typeShowcase: 'Vitrina',
            typeTool: 'Herramienta',
            typeFaq: 'FAQ',
            categoryLabel: 'Categor\u00eda',
            categoryNew: 'Nueva categor\u00eda',
            newCatLabel: 'Nombre de la nueva categor\u00eda',
            newCatPlaceholder: 'Nombre de tu categor\u00eda propuesta',
            titleLabel: 'T\u00edtulo',
            titlePlaceholder: 'Un t\u00edtulo corto y descriptivo (m\u00e1x 200 caracteres)',
            descLabel: 'Descripci\u00f3n',
            descPlaceholder: 'Describe la idea en detalle (m\u00e1x 2000 caracteres)',
            promptLabel: 'Prompt de ejemplo (opcional)',
            promptPlaceholder: 'Un prompt listo para usar (m\u00e1x 3000 caracteres)',
            toolsLabel: 'Herramientas sugeridas (opcional)',
            toolsPlaceholder: 'ej. ChatGPT, Midjourney, Claude',
            creditLabel: 'Cr\u00e9dito',
            creditAnon: 'An\u00f3nimo',
            creditMe: 'Acred\u00edtame',
            creditNameLabel: 'Tu nombre',
            creditNamePlaceholder: '\u00bfC\u00f3mo debemos acreditarte?',
            emailLabel: 'Correo (opcional)',
            emailPlaceholder: 'Solo se usar\u00e1 para seguimiento si es necesario',
            disclaimerText: 'Entiendo que mi env\u00edo puede ser editado antes de publicarse.',
            submitBtn: 'Enviar sugerencia',
            submitting: 'Enviando...',
            successTitle: '\u00a1Gracias!',
            successMsg: 'Tu sugerencia ha sido enviada. La revisaremos pronto.',
            successAnother: 'Enviar otra',
            errorRequired: 'Este campo es obligatorio.',
            errorMaxLen: 'M\u00e1ximo {n} caracteres.',
            errorDisclaimer: 'Por favor acepta la cl\u00e1usula.',
            errorGeneral: 'Algo sali\u00f3 mal. Int\u00e9ntalo de nuevo.',
            errorRateLimit: 'Espera antes de enviar de nuevo.',
            charsRemaining: '{n} caracteres restantes'
        },
        pt: {
            pageTitle: 'Sugerir uma ideia',
            pageSubtitle: 'Ajude-nos a enriquecer a cole\u00e7\u00e3o! Envie um novo item, um \u00abnot to do\u00bb, uma nova categoria ou uma ideia.',
            typeLabel: 'Tipo de envio',
            typeItem: 'Novo item (fazer)',
            typeDont: 'Novo \u00abnot to do\u00bb',
            typeCategory: 'Nova categoria',
            typeExample: 'Exemplo / Ideia',
            typeRequest: 'Pedido',
            typeTips: 'Dicas',
            typeSkills: 'Habilidades \u00fateis',
            typeQuickWins: 'Vit\u00f3rias r\u00e1pidas',
            typeShowcase: 'Vitrine',
            typeTool: 'Ferramenta',
            typeFaq: 'FAQ',
            categoryLabel: 'Categoria',
            categoryNew: 'Nova categoria',
            newCatLabel: 'Nome da nova categoria',
            newCatPlaceholder: 'Nomeie a categoria proposta',
            titleLabel: 'T\u00edtulo',
            titlePlaceholder: 'Um t\u00edtulo curto e descritivo (m\u00e1x 200 caracteres)',
            descLabel: 'Descri\u00e7\u00e3o',
            descPlaceholder: 'Descreva a ideia em detalhes (m\u00e1x 2000 caracteres)',
            promptLabel: 'Prompt de exemplo (opcional)',
            promptPlaceholder: 'Um prompt pronto para usar (m\u00e1x 3000 caracteres)',
            toolsLabel: 'Ferramentas sugeridas (opcional)',
            toolsPlaceholder: 'ex. ChatGPT, Midjourney, Claude',
            creditLabel: 'Cr\u00e9dito',
            creditAnon: 'An\u00f4nimo',
            creditMe: 'Me creditar',
            creditNameLabel: 'Seu nome',
            creditNamePlaceholder: 'Como devemos credit\u00e1-lo?',
            emailLabel: 'E-mail (opcional)',
            emailPlaceholder: 'Usado apenas para acompanhamento se necess\u00e1rio',
            disclaimerText: 'Entendo que meu envio pode ser editado antes da publica\u00e7\u00e3o.',
            submitBtn: 'Enviar sugest\u00e3o',
            submitting: 'Enviando...',
            successTitle: 'Obrigado!',
            successMsg: 'Sua sugest\u00e3o foi enviada. Vamos revis\u00e1-la em breve.',
            successAnother: 'Enviar outra',
            errorRequired: 'Este campo \u00e9 obrigat\u00f3rio.',
            errorMaxLen: 'M\u00e1ximo de {n} caracteres.',
            errorDisclaimer: 'Por favor aceite a cl\u00e1usula.',
            errorGeneral: 'Algo deu errado. Tente novamente.',
            errorRateLimit: 'Aguarde antes de enviar novamente.',
            charsRemaining: '{n} caracteres restantes'
        },
        de: {
            pageTitle: 'Idee vorschlagen',
            pageSubtitle: 'Hilf uns, die Sammlung zu erweitern! Reiche ein neues Element, ein \u201eDon\u2019t\u201c, eine neue Kategorie oder eine Idee ein.',
            typeLabel: 'Art der Einreichung',
            typeItem: 'Neues Element (Do)',
            typeDont: 'Neues \u201eDon\u2019t\u201c',
            typeCategory: 'Neue Kategorie',
            typeExample: 'Beispiel / Idee',
            typeRequest: 'Anfrage',
            typeTips: 'Tipps',
            typeSkills: 'N\u00fctzliche F\u00e4higkeiten',
            typeQuickWins: 'Schnelle Erfolge',
            typeShowcase: 'Vitrine',
            typeTool: 'Werkzeug',
            typeFaq: 'FAQ',
            categoryLabel: 'Kategorie',
            categoryNew: 'Neue Kategorie',
            newCatLabel: 'Name der neuen Kategorie',
            newCatPlaceholder: 'Benenne deine vorgeschlagene Kategorie',
            titleLabel: 'Titel',
            titlePlaceholder: 'Ein kurzer, beschreibender Titel (max. 200 Zeichen)',
            descLabel: 'Beschreibung',
            descPlaceholder: 'Beschreibe die Idee im Detail (max. 2000 Zeichen)',
            promptLabel: 'Beispiel-Prompt (optional)',
            promptPlaceholder: 'Ein fertiger Prompt f\u00fcr diese Idee (max. 3000 Zeichen)',
            toolsLabel: 'Vorgeschlagene Tools (optional)',
            toolsPlaceholder: 'z.B. ChatGPT, Midjourney, Claude',
            creditLabel: 'Nennung',
            creditAnon: 'Anonym',
            creditMe: 'Mich nennen',
            creditNameLabel: 'Dein Name',
            creditNamePlaceholder: 'Wie sollen wir dich nennen?',
            emailLabel: 'E-Mail (optional)',
            emailPlaceholder: 'Nur f\u00fcr R\u00fcckfragen verwendet',
            disclaimerText: 'Ich verstehe, dass mein Beitrag vor der Ver\u00f6ffentlichung bearbeitet werden kann.',
            submitBtn: 'Vorschlag einreichen',
            submitting: 'Wird gesendet...',
            successTitle: 'Danke!',
            successMsg: 'Dein Vorschlag wurde eingereicht. Wir pr\u00fcfen ihn bald.',
            successAnother: 'Weiteren einreichen',
            errorRequired: 'Dieses Feld ist erforderlich.',
            errorMaxLen: 'Maximal {n} Zeichen.',
            errorDisclaimer: 'Bitte akzeptiere den Hinweis.',
            errorGeneral: 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
            errorRateLimit: 'Bitte warte, bevor du erneut einreichst.',
            charsRemaining: '{n} Zeichen \u00fcbrig'
        },
        it: {
            pageTitle: 'Suggerisci un\'idea',
            pageSubtitle: 'Aiutaci a far crescere la collezione! Invia un nuovo elemento, un \u201cda non fare\u201d, una nuova categoria o un\'idea.',
            typeLabel: 'Tipo di invio',
            typeItem: 'Nuovo elemento (da fare)',
            typeDont: 'Nuovo \u201cda non fare\u201d',
            typeCategory: 'Nuova categoria',
            typeExample: 'Esempio / Idea',
            typeRequest: 'Richiesta',
            typeTips: 'Consigli',
            typeSkills: 'Competenze utili',
            typeQuickWins: 'Vittorie rapide',
            typeShowcase: 'Vetrina',
            typeTool: 'Strumento',
            typeFaq: 'FAQ',
            categoryLabel: 'Categoria',
            categoryNew: 'Nuova categoria',
            newCatLabel: 'Nome della nuova categoria',
            newCatPlaceholder: 'Dai un nome alla categoria proposta',
            titleLabel: 'Titolo',
            titlePlaceholder: 'Un titolo breve e descrittivo (max 200 caratteri)',
            descLabel: 'Descrizione',
            descPlaceholder: 'Descrivi l\'idea in dettaglio (max 2000 caratteri)',
            promptLabel: 'Prompt di esempio (opzionale)',
            promptPlaceholder: 'Un prompt pronto all\'uso per questa idea (max 3000 caratteri)',
            toolsLabel: 'Strumenti suggeriti (opzionale)',
            toolsPlaceholder: 'es. ChatGPT, Midjourney, Claude',
            creditLabel: 'Credito',
            creditAnon: 'Anonimo',
            creditMe: 'Accreditami',
            creditNameLabel: 'Il tuo nome',
            creditNamePlaceholder: 'Come dovremmo accreditarti?',
            emailLabel: 'E-mail (opzionale)',
            emailPlaceholder: 'Usata solo per follow-up se necessario',
            disclaimerText: 'Capisco che il mio invio potrebbe essere modificato prima della pubblicazione.',
            submitBtn: 'Invia suggerimento',
            submitting: 'Invio in corso...',
            successTitle: 'Grazie!',
            successMsg: 'Il tuo suggerimento \u00e8 stato inviato. Lo esamineremo presto.',
            successAnother: 'Invia un altro',
            errorRequired: 'Questo campo \u00e8 obbligatorio.',
            errorMaxLen: 'Massimo {n} caratteri.',
            errorDisclaimer: 'Accetta la clausola.',
            errorGeneral: 'Qualcosa \u00e8 andato storto. Riprova.',
            errorRateLimit: 'Attendi prima di inviare di nuovo.',
            charsRemaining: '{n} caratteri rimanenti'
        },
        ja: {
            pageTitle: '\u30a2\u30a4\u30c7\u30a2\u3092\u63d0\u6848\u3059\u308b',
            pageSubtitle: '\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u306e\u62e1\u5145\u306b\u3054\u5354\u529b\u304f\u3060\u3055\u3044\uff01\u65b0\u3057\u3044\u30a2\u30a4\u30c6\u30e0\u3001\u300c\u3084\u3063\u3066\u306f\u3044\u3051\u306a\u3044\u3053\u3068\u300d\u3001\u65b0\u30ab\u30c6\u30b4\u30ea\u30fc\u3001\u30a2\u30a4\u30c7\u30a2\u3092\u9001\u4fe1\u3067\u304d\u307e\u3059\u3002',
            typeLabel: '\u9001\u4fe1\u30bf\u30a4\u30d7',
            typeItem: '\u65b0\u3057\u3044\u30a2\u30a4\u30c6\u30e0',
            typeDont: '\u65b0\u3057\u3044\u300c\u3084\u3063\u3066\u306f\u3044\u3051\u306a\u3044\u3053\u3068\u300d',
            typeCategory: '\u65b0\u30ab\u30c6\u30b4\u30ea\u30fc',
            typeExample: '\u4f8b / \u30a2\u30a4\u30c7\u30a2',
            typeRequest: '\u30ea\u30af\u30a8\u30b9\u30c8',
            typeTips: '\u30d2\u30f3\u30c8',
            typeSkills: '\u5f79\u7acb\u3064\u30b9\u30ad\u30eb',
            typeQuickWins: '\u30af\u30a4\u30c3\u30af\u30a6\u30a3\u30f3',
            typeShowcase: '\u30b7\u30e7\u30fc\u30b1\u30fc\u30b9',
            typeTool: '\u30c4\u30fc\u30eb',
            typeFaq: 'FAQ',
            categoryLabel: '\u30ab\u30c6\u30b4\u30ea\u30fc',
            categoryNew: '\u65b0\u30ab\u30c6\u30b4\u30ea\u30fc',
            newCatLabel: '\u65b0\u30ab\u30c6\u30b4\u30ea\u30fc\u540d',
            newCatPlaceholder: '\u63d0\u6848\u3059\u308b\u30ab\u30c6\u30b4\u30ea\u30fc\u540d\u3092\u5165\u529b',
            titleLabel: '\u30bf\u30a4\u30c8\u30eb',
            titlePlaceholder: '\u77ed\u304f\u308f\u304b\u308a\u3084\u3059\u3044\u30bf\u30a4\u30c8\u30eb\uff08\u6700\u5927200\u6587\u5b57\uff09',
            descLabel: '\u8aac\u660e',
            descPlaceholder: '\u30a2\u30a4\u30c7\u30a2\u3092\u8a73\u3057\u304f\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044\uff08\u6700\u59272000\u6587\u5b57\uff09',
            promptLabel: '\u30d7\u30ed\u30f3\u30d7\u30c8\u4f8b\uff08\u4efb\u610f\uff09',
            promptPlaceholder: '\u3053\u306e\u30a2\u30a4\u30c7\u30a2\u7528\u306e\u30d7\u30ed\u30f3\u30d7\u30c8\uff08\u6700\u59273000\u6587\u5b57\uff09',
            toolsLabel: '\u63a8\u5968\u30c4\u30fc\u30eb\uff08\u4efb\u610f\uff09',
            toolsPlaceholder: '\u4f8b: ChatGPT, Midjourney, Claude',
            creditLabel: '\u30af\u30ec\u30b8\u30c3\u30c8',
            creditAnon: '\u533f\u540d',
            creditMe: '\u540d\u524d\u3092\u8f09\u305b\u308b',
            creditNameLabel: '\u304a\u540d\u524d',
            creditNamePlaceholder: '\u3069\u306e\u3088\u3046\u306b\u8a18\u8f09\u3057\u307e\u3059\u304b\uff1f',
            emailLabel: '\u30e1\u30fc\u30eb\uff08\u4efb\u610f\uff09',
            emailPlaceholder: '\u5fc5\u8981\u306a\u5834\u5408\u306e\u307f\u9023\u7d61\u306b\u4f7f\u7528\u3057\u307e\u3059',
            disclaimerText: '\u9001\u4fe1\u5185\u5bb9\u306f\u516c\u958b\u524d\u306b\u7de8\u96c6\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3053\u3068\u3092\u7406\u89e3\u3057\u3066\u3044\u307e\u3059\u3002',
            submitBtn: '\u63d0\u6848\u3092\u9001\u4fe1',
            submitting: '\u9001\u4fe1\u4e2d...',
            successTitle: '\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01',
            successMsg: '\u63d0\u6848\u304c\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002\u307e\u3082\u306a\u304f\u78ba\u8a8d\u3044\u305f\u3057\u307e\u3059\u3002',
            successAnother: '\u5225\u306e\u63d0\u6848\u3092\u9001\u4fe1',
            errorRequired: '\u3053\u306e\u9805\u76ee\u306f\u5fc5\u9808\u3067\u3059\u3002',
            errorMaxLen: '\u6700\u5927{n}\u6587\u5b57\u3067\u3059\u3002',
            errorDisclaimer: '\u514d\u8cac\u4e8b\u9805\u306b\u540c\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
            errorGeneral: '\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002',
            errorRateLimit: '\u518d\u9001\u4fe1\u307e\u3067\u3057\u3070\u3089\u304f\u304a\u5f85\u3061\u304f\u3060\u3055\u3044\u3002',
            charsRemaining: '\u6b8b\u308a{n}\u6587\u5b57'
        },
        zh: {
            pageTitle: '\u63d0\u4ea4\u5efa\u8bae',
            pageSubtitle: '\u5e2e\u52a9\u6211\u4eec\u4e30\u5bcc\u5185\u5bb9\uff01\u63d0\u4ea4\u65b0\u9879\u76ee\u3001\u201c\u4e0d\u8981\u505a\u7684\u4e8b\u201d\u3001\u65b0\u7c7b\u522b\u6216\u521b\u610f\u3002',
            typeLabel: '\u63d0\u4ea4\u7c7b\u578b',
            typeItem: '\u65b0\u9879\u76ee',
            typeDont: '\u65b0\u7684\u201c\u4e0d\u8981\u505a\u201d',
            typeCategory: '\u65b0\u7c7b\u522b',
            typeExample: '\u793a\u4f8b / \u521b\u610f',
            typeRequest: '\u8bf7\u6c42',
            typeTips: '\u6280\u5de7',
            typeSkills: '\u5b9e\u7528\u6280\u80fd',
            typeQuickWins: '\u5feb\u901f\u4e0a\u624b',
            typeShowcase: '\u5c55\u793a',
            typeTool: '\u5de5\u5177',
            typeFaq: 'FAQ',
            categoryLabel: '\u7c7b\u522b',
            categoryNew: '\u65b0\u7c7b\u522b',
            newCatLabel: '\u65b0\u7c7b\u522b\u540d\u79f0',
            newCatPlaceholder: '\u4e3a\u63d0\u8bae\u7684\u7c7b\u522b\u547d\u540d',
            titleLabel: '\u6807\u9898',
            titlePlaceholder: '\u7b80\u77ed\u7684\u63cf\u8ff0\u6027\u6807\u9898\uff08\u6700\u591a200\u5b57\u7b26\uff09',
            descLabel: '\u63cf\u8ff0',
            descPlaceholder: '\u8be6\u7ec6\u63cf\u8ff0\u8fd9\u4e2a\u60f3\u6cd5\uff08\u6700\u591a2000\u5b57\u7b26\uff09',
            promptLabel: '\u793a\u4f8b\u63d0\u793a\u8bcd\uff08\u53ef\u9009\uff09',
            promptPlaceholder: '\u4e00\u4e2a\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u63d0\u793a\u8bcd\uff08\u6700\u591a3000\u5b57\u7b26\uff09',
            toolsLabel: '\u63a8\u8350\u5de5\u5177\uff08\u53ef\u9009\uff09',
            toolsPlaceholder: '\u5982 ChatGPT, Midjourney, Claude',
            creditLabel: '\u7f72\u540d',
            creditAnon: '\u533f\u540d',
            creditMe: '\u7f72\u540d\u53d1\u5e03',
            creditNameLabel: '\u60a8\u7684\u540d\u5b57',
            creditNamePlaceholder: '\u60a8\u5e0c\u671b\u5982\u4f55\u7f72\u540d\uff1f',
            emailLabel: '\u7535\u5b50\u90ae\u4ef6\uff08\u53ef\u9009\uff09',
            emailPlaceholder: '\u4ec5\u5728\u9700\u8981\u65f6\u7528\u4e8e\u8ddf\u8fdb',
            disclaimerText: '\u6211\u7406\u89e3\u6211\u7684\u63d0\u4ea4\u5728\u53d1\u5e03\u524d\u53ef\u80fd\u4f1a\u88ab\u7f16\u8f91\u3002',
            submitBtn: '\u63d0\u4ea4\u5efa\u8bae',
            submitting: '\u63d0\u4ea4\u4e2d...',
            successTitle: '\u8c22\u8c22\uff01',
            successMsg: '\u60a8\u7684\u5efa\u8bae\u5df2\u63d0\u4ea4\u3002\u6211\u4eec\u5c06\u5c3d\u5feb\u5ba1\u67e5\u3002',
            successAnother: '\u63d0\u4ea4\u53e6\u4e00\u4e2a',
            errorRequired: '\u6b64\u5b57\u6bb5\u4e3a\u5fc5\u586b\u9879\u3002',
            errorMaxLen: '\u6700\u591a{n}\u4e2a\u5b57\u7b26\u3002',
            errorDisclaimer: '\u8bf7\u63a5\u53d7\u514d\u8d23\u58f0\u660e\u3002',
            errorGeneral: '\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002',
            errorRateLimit: '\u8bf7\u7a0d\u7b49\u540e\u518d\u63d0\u4ea4\u3002',
            charsRemaining: '\u5269\u4f59{n}\u4e2a\u5b57\u7b26'
        }
    };

    var S = FORM_STRINGS[lang] || FORM_STRINGS.en;

    // Categories list
    var CATEGORIES = [
        { value: 'writing', en: 'Writing', fr: '\u00c9criture', es: 'Escritura', pt: 'Escrita', de: 'Schreiben', it: 'Scrittura', ja: '\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0', zh: '\u5199\u4f5c' },
        { value: 'learning', en: 'Learning', fr: 'Apprentissage', es: 'Aprendizaje', pt: 'Aprendizado', de: 'Lernen', it: 'Apprendimento', ja: '\u5b66\u7fd2', zh: '\u5b66\u4e60' },
        { value: 'art', en: 'Art & Design', fr: 'Art & Design', es: 'Arte y Dise\u00f1o', pt: 'Arte e Design', de: 'Kunst & Design', it: 'Arte e Design', ja: '\u30a2\u30fc\u30c8&\u30c7\u30b6\u30a4\u30f3', zh: '\u827a\u672f\u4e0e\u8bbe\u8ba1' },
        { value: 'music', en: 'Music', fr: 'Musique', es: 'M\u00fasica', pt: 'M\u00fasica', de: 'Musik', it: 'Musica', ja: '\u97f3\u697d', zh: '\u97f3\u4e50' },
        { value: 'video', en: 'Video', fr: 'Vid\u00e9o', es: 'Video', pt: 'V\u00eddeo', de: 'Video', it: 'Video', ja: '\u52d5\u753b', zh: '\u89c6\u9891' },
        { value: 'productivity', en: 'Productivity', fr: 'Productivit\u00e9', es: 'Productividad', pt: 'Produtividade', de: 'Produktivit\u00e4t', it: 'Produttivit\u00e0', ja: '\u751f\u7523\u6027', zh: '\u751f\u4ea7\u529b' },
        { value: 'coding', en: 'Coding', fr: 'Code', es: 'Programaci\u00f3n', pt: 'Programa\u00e7\u00e3o', de: 'Programmierung', it: 'Programmazione', ja: '\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0', zh: '\u7f16\u7a0b' },
        { value: 'business', en: 'Business', fr: 'Business', es: 'Negocios', pt: 'Neg\u00f3cios', de: 'Business', it: 'Business', ja: '\u30d3\u30b8\u30cd\u30b9', zh: '\u5546\u4e1a' },
        { value: 'science', en: 'Science', fr: 'Sciences', es: 'Ciencia', pt: 'Ci\u00eancia', de: 'Wissenschaft', it: 'Scienza', ja: '\u79d1\u5b66', zh: '\u79d1\u5b66' },
        { value: 'fun', en: 'Fun', fr: 'Fun', es: 'Diversi\u00f3n', pt: 'Divers\u00e3o', de: 'Spa\u00df', it: 'Divertimento', ja: '\u304a\u697d\u3057\u307f', zh: '\u5a31\u4e50' },
        { value: 'quickwins', en: 'Quick Wins', fr: 'Gains Rapides', es: 'Victorias R\u00e1pidas', pt: 'Vit\u00f3rias R\u00e1pidas', de: 'Schnelle Erfolge', it: 'Vittorie Rapide', ja: '\u30af\u30a4\u30c3\u30af\u30a6\u30a3\u30f3', zh: '\u5feb\u901f\u4e0a\u624b' },
        { value: 'family', en: 'Family', fr: 'Famille', es: 'Familia', pt: 'Fam\u00edlia', de: 'Familie', it: 'Famiglia', ja: '\u30d5\u30a1\u30df\u30ea\u30fc', zh: '\u5bb6\u5ead' }
    ];

    // Rate-limit state
    var lastSubmitTime = 0;
    var COOLDOWN_MS = 30000;

    // Render the form
    function renderForm() {
        var container = document.getElementById('suggest-form-container');
        if (!container) return;

        var catOptions = CATEGORIES.map(function(c) {
            return '<option value="' + c.value + '">' + (c[lang] || c.en) + '</option>';
        }).join('');

        container.innerHTML =
            '<form id="suggest-form" class="suggest-form" novalidate>' +
            // Honeypot
            '<div style="position:absolute;left:-9999px;top:-9999px" aria-hidden="true"><input type="text" name="website" tabindex="-1" autocomplete="off"></div>' +

            // Type
            '<div class="suggest-field">' +
                '<label for="sf-type">' + S.typeLabel + ' <span class="suggest-required">*</span></label>' +
                '<select id="sf-type" required>' +
                    '<option value="">\u2014</option>' +
                    '<option value="item">' + S.typeItem + '</option>' +
                    '<option value="dont">' + S.typeDont + '</option>' +
                    '<option value="category">' + S.typeCategory + '</option>' +
                    '<option value="example">' + S.typeExample + '</option>' +
                    '<option value="request">' + S.typeRequest + '</option>' +
                    '<option value="tips">' + S.typeTips + '</option>' +
                    '<option value="skills">' + S.typeSkills + '</option>' +
                    '<option value="quickwins">' + S.typeQuickWins + '</option>' +
                    '<option value="showcase">' + S.typeShowcase + '</option>' +
                    '<option value="tool">' + S.typeTool + '</option>' +
                    '<option value="faq">' + S.typeFaq + '</option>' +
                '</select>' +
                '<div class="suggest-error" id="err-type"></div>' +
            '</div>' +

            // Category
            '<div class="suggest-field">' +
                '<label for="sf-category">' + S.categoryLabel + ' <span class="suggest-required">*</span></label>' +
                '<select id="sf-category" required>' +
                    '<option value="">\u2014</option>' +
                    catOptions +
                    '<option value="new">' + S.categoryNew + '</option>' +
                '</select>' +
                '<div class="suggest-error" id="err-category"></div>' +
            '</div>' +

            // New Category Name (conditional)
            '<div class="suggest-field suggest-conditional" id="field-newcat" style="display:none">' +
                '<label for="sf-newcat">' + S.newCatLabel + ' <span class="suggest-required">*</span></label>' +
                '<input type="text" id="sf-newcat" maxlength="100" placeholder="' + S.newCatPlaceholder + '">' +
                '<div class="suggest-error" id="err-newcat"></div>' +
            '</div>' +

            // Title
            '<div class="suggest-field">' +
                '<label for="sf-title">' + S.titleLabel + ' <span class="suggest-required">*</span></label>' +
                '<input type="text" id="sf-title" maxlength="200" required placeholder="' + S.titlePlaceholder + '">' +
                '<div class="suggest-char-count" id="cc-title"></div>' +
                '<div class="suggest-error" id="err-title"></div>' +
            '</div>' +

            // Description
            '<div class="suggest-field">' +
                '<label for="sf-desc">' + S.descLabel + ' <span class="suggest-required">*</span></label>' +
                '<textarea id="sf-desc" maxlength="2000" rows="5" required placeholder="' + S.descPlaceholder + '"></textarea>' +
                '<div class="suggest-char-count" id="cc-desc"></div>' +
                '<div class="suggest-error" id="err-desc"></div>' +
            '</div>' +

            // Example Prompt
            '<div class="suggest-field">' +
                '<label for="sf-prompt">' + S.promptLabel + '</label>' +
                '<textarea id="sf-prompt" maxlength="3000" rows="4" placeholder="' + S.promptPlaceholder + '"></textarea>' +
                '<div class="suggest-char-count" id="cc-prompt"></div>' +
            '</div>' +

            // Tools
            '<div class="suggest-field">' +
                '<label for="sf-tools">' + S.toolsLabel + '</label>' +
                '<input type="text" id="sf-tools" maxlength="200" placeholder="' + S.toolsPlaceholder + '">' +
            '</div>' +

            // Credit
            '<div class="suggest-field">' +
                '<label>' + S.creditLabel + ' <span class="suggest-required">*</span></label>' +
                '<div class="suggest-radio-group">' +
                    '<label class="suggest-radio"><input type="radio" name="credit" value="anonymous" checked> ' + S.creditAnon + '</label>' +
                    '<label class="suggest-radio"><input type="radio" name="credit" value="creditme"> ' + S.creditMe + '</label>' +
                '</div>' +
            '</div>' +

            // Credit Name (conditional)
            '<div class="suggest-field suggest-conditional" id="field-creditname" style="display:none">' +
                '<label for="sf-creditname">' + S.creditNameLabel + ' <span class="suggest-required">*</span></label>' +
                '<input type="text" id="sf-creditname" maxlength="100" placeholder="' + S.creditNamePlaceholder + '">' +
                '<div class="suggest-error" id="err-creditname"></div>' +
            '</div>' +

            // Email
            '<div class="suggest-field">' +
                '<label for="sf-email">' + S.emailLabel + '</label>' +
                '<input type="email" id="sf-email" placeholder="' + S.emailPlaceholder + '">' +
            '</div>' +

            // Disclaimer
            '<div class="suggest-field">' +
                '<label class="suggest-checkbox">' +
                    '<input type="checkbox" id="sf-disclaimer" required>' +
                    ' ' + S.disclaimerText +
                '</label>' +
                '<div class="suggest-error" id="err-disclaimer"></div>' +
            '</div>' +

            // Submit
            '<div class="suggest-field suggest-submit-row">' +
                '<button type="submit" class="btn btn-primary suggest-submit-btn" id="sf-submit">' + S.submitBtn + '</button>' +
                '<div class="suggest-error suggest-error-general" id="err-general"></div>' +
            '</div>' +
            '</form>';

        // Success state (hidden initially)
        container.insertAdjacentHTML('beforeend',
            '<div class="suggest-success" id="suggest-success" style="display:none">' +
                '<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' +
                '<h2>' + S.successTitle + '</h2>' +
                '<p>' + S.successMsg + '</p>' +
                '<button class="btn btn-primary" id="suggest-another">' + S.successAnother + '</button>' +
            '</div>'
        );

        attachFormListeners();
    }

    function attachFormListeners() {
        var form = document.getElementById('suggest-form');
        if (!form) return;

        // Category "new" toggle
        var catSelect = document.getElementById('sf-category');
        var newCatField = document.getElementById('field-newcat');
        catSelect.addEventListener('change', function() {
            newCatField.style.display = this.value === 'new' ? '' : 'none';
        });

        // Credit radio toggle
        var creditRadios = form.querySelectorAll('input[name="credit"]');
        var creditNameField = document.getElementById('field-creditname');
        creditRadios.forEach(function(r) {
            r.addEventListener('change', function() {
                creditNameField.style.display = this.value === 'creditme' ? '' : 'none';
            });
        });

        // Character counters
        setupCharCount('sf-title', 'cc-title', 200);
        setupCharCount('sf-desc', 'cc-desc', 2000);
        setupCharCount('sf-prompt', 'cc-prompt', 3000);

        // Submit
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmit();
        });

        // Another submission
        var anotherBtn = document.getElementById('suggest-another');
        if (anotherBtn) {
            anotherBtn.addEventListener('click', function() {
                document.getElementById('suggest-success').style.display = 'none';
                form.style.display = '';
                form.reset();
                document.getElementById('field-newcat').style.display = 'none';
                document.getElementById('field-creditname').style.display = 'none';
                clearErrors();
            });
        }
    }

    function setupCharCount(inputId, countId, max) {
        var input = document.getElementById(inputId);
        var counter = document.getElementById(countId);
        if (!input || !counter) return;
        function update() {
            var remaining = max - input.value.length;
            counter.textContent = S.charsRemaining.replace('{n}', remaining);
            counter.classList.toggle('warn', remaining < 50);
        }
        input.addEventListener('input', update);
    }

    function clearErrors() {
        document.querySelectorAll('.suggest-error').forEach(function(el) { el.textContent = ''; });
        document.querySelectorAll('.suggest-field').forEach(function(el) { el.classList.remove('has-error'); });
    }

    function showError(fieldId, msg) {
        var errEl = document.getElementById('err-' + fieldId);
        if (errEl) errEl.textContent = msg;
        var field = errEl && errEl.closest('.suggest-field');
        if (field) field.classList.add('has-error');
    }

    function validate() {
        clearErrors();
        var valid = true;

        var type = document.getElementById('sf-type').value;
        if (!type) { showError('type', S.errorRequired); valid = false; }

        var cat = document.getElementById('sf-category').value;
        if (!cat) { showError('category', S.errorRequired); valid = false; }

        if (cat === 'new') {
            var newCat = document.getElementById('sf-newcat').value.trim();
            if (!newCat) { showError('newcat', S.errorRequired); valid = false; }
        }

        var title = document.getElementById('sf-title').value.trim();
        if (!title) { showError('title', S.errorRequired); valid = false; }
        else if (title.length > 200) { showError('title', S.errorMaxLen.replace('{n}', '200')); valid = false; }

        var desc = document.getElementById('sf-desc').value.trim();
        if (!desc) { showError('desc', S.errorRequired); valid = false; }
        else if (desc.length > 2000) { showError('desc', S.errorMaxLen.replace('{n}', '2000')); valid = false; }

        var credit = document.querySelector('input[name="credit"]:checked');
        if (credit && credit.value === 'creditme') {
            var creditName = document.getElementById('sf-creditname').value.trim();
            if (!creditName) { showError('creditname', S.errorRequired); valid = false; }
        }

        var disclaimer = document.getElementById('sf-disclaimer');
        if (!disclaimer.checked) { showError('disclaimer', S.errorDisclaimer); valid = false; }

        return valid;
    }

    function handleSubmit() {
        if (!validate()) return;

        // Rate limiting
        var now = Date.now();
        if (now - lastSubmitTime < COOLDOWN_MS) {
            showError('general', S.errorRateLimit);
            return;
        }

        // Honeypot check
        var honeypot = document.querySelector('input[name="website"]');
        if (honeypot && honeypot.value) return; // Bot detected, silently fail

        var submitBtn = document.getElementById('sf-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = S.submitting;

        var credit = document.querySelector('input[name="credit"]:checked');
        var data = {
            type: document.getElementById('sf-type').value,
            category: document.getElementById('sf-category').value,
            newCategoryName: document.getElementById('sf-category').value === 'new' ? document.getElementById('sf-newcat').value.trim() : '',
            title: document.getElementById('sf-title').value.trim(),
            description: document.getElementById('sf-desc').value.trim(),
            prompt: document.getElementById('sf-prompt').value.trim(),
            tools: document.getElementById('sf-tools').value.trim(),
            creditAnonymous: credit ? credit.value === 'anonymous' : true,
            creditName: credit && credit.value === 'creditme' ? document.getElementById('sf-creditname').value.trim() : '',
            email: document.getElementById('sf-email').value.trim(),
            language: lang,
            status: 'pending',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            reviewedAt: null,
            reviewNotes: ''
        };

        if (!window.__db) {
            showError('general', S.errorGeneral);
            submitBtn.disabled = false;
            submitBtn.textContent = S.submitBtn;
            return;
        }

        window.__db.collection('submissions').add(data).then(function() {
            lastSubmitTime = Date.now();
            document.getElementById('suggest-form').style.display = 'none';
            document.getElementById('suggest-success').style.display = '';
            submitBtn.disabled = false;
            submitBtn.textContent = S.submitBtn;
        }).catch(function() {
            showError('general', S.errorGeneral);
            submitBtn.disabled = false;
            submitBtn.textContent = S.submitBtn;
        });
    }

    // Update modal title from translations
    function updateTitle() {
        var titleEl = document.getElementById('suggest-title');
        if (titleEl) titleEl.textContent = S.pageTitle;
    }

    // Init
    function init() {
        updateTitle();
        renderForm();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
