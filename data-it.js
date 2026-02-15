const ITEMS = [
  {
    id: 1,
    title: "Scrivi Saggi e Relazioni",
    subtitle: "L'IA ti aiuta a strutturare argomentazioni e ricerche",
    category: "writing",
    description: "L'IA può aiutarti a organizzare le idee, costruire argomentazioni solide e scrivere saggi e relazioni ben strutturati. Non scriverà AL POSTO tuo, ma ti aiuterà a scrivere MEGLIO. Usala per fare brainstorming, creare scalette e perfezionare le bozze.",
    steps: [
      "Scegli l'argomento e incolla eventuale materiale di riferimento nell'IA",
      "Chiedi all'IA di aiutarti a fare brainstorming su tesi e argomentazioni chiave",
      "Richiedi una scaletta con introduzione, paragrafi centrali e conclusione",
      "Scrivi la bozza usando la scaletta, poi chiedi all'IA di revisionarla e suggerire miglioramenti"
    ],
    prompt: "Devo scrivere un saggio di 1000 parole su [ARGOMENTO] per il mio corso di [MATERIA]. Aiutami a creare una scaletta dettagliata con:\n- Una tesi convincente\n- 3 argomentazioni principali con prove a supporto\n- Un'introduzione accattivante\n- Una conclusione forte\n\nSuggeriscimi anche 3 fonti credibili da consultare.",
    promptTip: "Sostituisci [ARGOMENTO] con il tuo tema e [MATERIA] con la tua materia. Aggiungi i requisiti specifici dati dal tuo insegnante.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 2,
    title: "Riassumi Articoli Lunghi",
    subtitle: "Estrai i punti chiave da qualsiasi testo",
    category: "writing",
    description: "Quando hai un articolo lungo, un capitolo di un libro di testo o un documento da leggere, l'IA può riassumere i punti chiave in pochi secondi. Questo ti aiuta a studiare in modo più efficiente e a concentrarti su ciò che conta davvero.",
    steps: [
      "Copia il testo che vuoi riassumere",
      "Incollalo nella chat dell'IA",
      "Chiedi un riassunto della lunghezza desiderata",
      "Richiedi punti elenco per una lettura rapida"
    ],
    prompt: "Per favore riassumi il seguente testo in 5 punti chiave, scritti in un linguaggio semplice comprensibile da uno studente delle superiori. Evidenzia le idee più importanti e le conclusioni:\n\n[INCOLLA IL TUO TESTO QUI]",
    promptTip: "Specifica la lunghezza desiderata: '3 frasi', '5 punti elenco' o 'un paragrafo'. Puoi anche chiedere angolazioni specifiche come 'concentrati sull'impatto economico'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      }
    ]
  },
  {
    id: 3,
    title: "Traduci Testi in Qualsiasi Lingua",
    subtitle: "Abbatti le barriere linguistiche all'istante",
    category: "writing",
    description: "L'IA può tradurre testi tra praticamente qualsiasi coppia di lingue mantenendo significato, tono e sfumature. Perfetta per studenti bilingui che devono lavorare tra francese, spagnolo, inglese e altre lingue.",
    steps: [
      "Digita o incolla il testo da tradurre",
      "Specifica le lingue di partenza e di arrivo",
      "Chiedi all'IA di tradurre mantenendo il tono",
      "Richiedi traduzioni alternative se necessario"
    ],
    prompt: "Traduci il seguente testo da [LINGUA DI PARTENZA] a [LINGUA DI ARRIVO]. Mantieni il tono e lo stile originali. Se ci sono modi di dire o riferimenti culturali, adattali in modo naturale invece di tradurre letteralmente:\n\n[IL TUO TESTO QUI]",
    promptTip: "Specifica il registro: 'formale', 'informale', 'accademico'. Per i saggi, chiedi all'IA di spiegare le sfumature culturali che non si traducono direttamente.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Translate",
      "DeepL"
    ],
    links: [
      {
        name: "DeepL",
        url: "https://www.deepl.com"
      },
      {
        name: "Google Translate",
        url: "https://translate.google.com"
      }
    ]
  },
  {
    id: 4,
    title: "Crea Articoli per Blog",
    subtitle: "Genera contenuti coinvolgenti su qualsiasi argomento",
    category: "writing",
    description: "Vuoi aprire un blog o creare contenuti per un sito web? L'IA ti aiuta a scrivere articoli coinvolgenti con titoli accattivanti, sezioni strutturate e un tono che connette con il tuo pubblico.",
    steps: [
      "Definisci l'argomento del blog e il pubblico target",
      "Chiedi all'IA di suggerire 5 opzioni di titoli accattivanti",
      "Scegli un titolo e richiedi una bozza completa con sezioni",
      "Rivedi, aggiungi la tua voce personale e modifica"
    ],
    prompt: "Scrivi un articolo per blog su [ARGOMENTO] per un pubblico adolescente. Includi:\n- Un titolo accattivante e cliccabile\n- Un'introduzione coinvolgente che catturi il lettore\n- 3-4 sezioni con sottotitoli\n- Consigli pratici o esempi\n- Un tono colloquiale e divertente\n- Una call-to-action alla fine\n\nLunghezza: circa 600 parole.",
    promptTip: "Sostituisci [ARGOMENTO] con il tuo tema. Aggiungi le tue preferenze di stile: 'usa l'umorismo', 'includi aneddoti personali', 'aggiungi statistiche pertinenti'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Medium",
        url: "https://medium.com"
      },
      {
        name: "WordPress",
        url: "https://wordpress.com"
      }
    ]
  },
  {
    id: 5,
    title: "Scrivi Poesie e Testi Creativi",
    subtitle: "Esplora l'espressione creativa con l'IA",
    category: "writing",
    description: "L'IA può aiutarti a esplorare la scrittura creativa, dalla poesia ai racconti. Usala come partner creativo per generare idee, trovare la parola perfetta o sperimentare diversi stili letterari.",
    steps: [
      "Descrivi il tema, l'atmosfera o l'emozione che vuoi esprimere",
      "Scegli una forma: verso libero, sonetto, haiku, racconto, ecc.",
      "Chiedi all'IA di generare una prima bozza",
      "Itera e perfeziona, aggiungendo il tuo tocco personale"
    ],
    prompt: "Scrivi una [TIPO: poesia/racconto/haiku] su [TEMA]. Stile: [STILE: romantico/cupo/umoristico/contemplativo]. Usa immagini vivide e dettagli sensoriali. Il tono deve sembrare autentico ed emotivo, non generico.\n\nSe scrivi poesia, sperimenta con interruzioni di verso e ritmo interessanti.",
    promptTip: "Prova diversi stili: 'Scrivi questo nello stile di Leopardi' o 'Fallo sembrare poesia contemporanea'. Più specifica è la tua visione, migliore sarà il risultato.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "Poetry Foundation",
        url: "https://www.poetryfoundation.org"
      }
    ]
  },
  {
    id: 6,
    title: "Scrivi Testi di Canzoni",
    subtitle: "Crea testi in qualsiasi genere o stile",
    category: "writing",
    description: "Che tu sia appassionato di pop, rap, rock o musica italiana, l'IA può aiutarti a scrivere testi di canzoni che fluiscono bene. Usala per trovare rime, sviluppare temi e strutturare strofe e ritornelli.",
    steps: [
      "Descrivi il genere, l'atmosfera e il tema della canzone",
      "Specifica la struttura: strofa, ritornello, bridge",
      "Chiedi all'IA di generare il testo",
      "Perfeziona il ritmo e le scelte lessicali per adattarle alla melodia"
    ],
    prompt: "Scrivi il testo per una canzone [GENERE] su [TEMA]. Struttura:\n- Strofa 1 (4-8 righe)\n- Ritornello (accattivante, memorabile, 4 righe)\n- Strofa 2 (4-8 righe)\n- Ritornello\n- Bridge (sensazione melodica diversa, 4 righe)\n- Ritornello finale\n\nRendi il ritornello memorabile e facile da cantare. Usa la lingua [LINGUA].",
    promptTip: "Specifica la lingua, aggiungi 'includi rime interne' o 'usa metafore su [argomento]'. Condividi una canzone di riferimento per lo stile.",
    tools: [
      "ChatGPT",
      "Claude",
      "Suno"
    ],
    links: [
      {
        name: "Suno AI",
        url: "https://suno.com"
      },
      {
        name: "RhymeZone",
        url: "https://www.rhymezone.com"
      }
    ]
  },
  {
    id: 7,
    title: "Crea Didascalie per Social Media",
    subtitle: "Post coinvolgenti per qualsiasi piattaforma",
    category: "writing",
    description: "Fai fatica a scrivere la didascalia perfetta per Instagram o un tweet? L'IA può aiutarti a creare contenuti coinvolgenti per i social media che ottengono like, commenti e condivisioni.",
    steps: [
      "Descrivi la foto, il video o il contenuto che stai pubblicando",
      "Specifica la piattaforma (Instagram, TikTok, Twitter)",
      "Chiedi più opzioni di didascalia",
      "Scegli e personalizza la tua preferita"
    ],
    prompt: "Scrivi 5 opzioni di didascalia Instagram per una foto di [DESCRIVI LA TUA FOTO/CONTENUTO]. Il tono deve essere [informale/divertente/ispirazionale/estetico]. Includi:\n- Emoji che si inseriscano naturalmente\n- Una call-to-action (fai una domanda o incoraggia l'interazione)\n- 5 hashtag pertinenti per ciascuna\n\nDevono sembrare autentiche, non aziendali.",
    promptTip: "Menziona la tua nicchia: 'account di viaggi', 'blog di cucina', 'brand personale'. Chiedi didascalie in stili diversi per vedere quale funziona meglio.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      }
    ]
  },
  {
    id: 8,
    title: "Correggi e Revisiona Testi",
    subtitle: "Perfeziona la tua scrittura",
    category: "writing",
    description: "L'IA è uno strumento di correzione incredibile. Individua errori grammaticali, frasi goffe e refusi che potresti non notare. Usala come tuo editor personale prima di consegnare qualsiasi lavoro importante.",
    steps: [
      "Incolla il tuo testo nell'IA",
      "Chiedile di controllare grammatica, ortografia e chiarezza",
      "Rivedi le modifiche suggerite",
      "Chiedi miglioramenti stilistici se necessario"
    ],
    prompt: "Per favore correggi e revisiona il seguente testo. Controlla:\n- Errori grammaticali e ortografici\n- Frasi goffe o poco chiare\n- Coerenza nel tono e nello stile\n- Miglioramenti nella scelta delle parole\n\nPer ogni modifica, spiega brevemente perché l'hai fatta. Mantieni la mia voce e il mio stile originali.\n\n[INCOLLA IL TUO TESTO QUI]",
    promptTip: "Aggiungi 'Questo è un saggio accademico formale' o 'Questo è un articolo informale per blog' così l'IA adatta il registro giusto. Puoi anche chiedere 'Non cambiare il mio stile, correggi solo gli errori'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Grammarly",
      "Gemini"
    ],
    links: [
      {
        name: "Grammarly",
        url: "https://www.grammarly.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 9,
    title: "Riscrivi in Toni Diversi",
    subtitle: "Formale, informale, divertente, persuasivo",
    category: "writing",
    description: "Lo stesso messaggio colpisce diversamente a seconda di come lo dici. L'IA può riscrivere qualsiasi testo in un tono diverso, rendendolo più formale, informale, divertente, persuasivo o professionale.",
    steps: [
      "Incolla il tuo testo originale",
      "Specifica il tono desiderato",
      "Chiedi all'IA di riscrivere mantenendo il messaggio",
      "Confronta le versioni e scegli la migliore"
    ],
    prompt: "Riscrivi il seguente testo in [NUMERO] toni diversi:\n1. Molto formale e professionale\n2. Informale e amichevole\n3. Umoristico e arguto\n4. Persuasivo e avvincente\n\nMantieni lo stesso messaggio di base. Ecco il testo:\n\n[IL TUO TESTO QUI]",
    promptTip: "Puoi chiedere toni molto specifici: 'Riscrivilo come un telecronista sportivo', 'Fallo sembrare un TED talk' o 'Scrivilo come se lo spiegassi a un bambino di 5 anni'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 10,
    title: "Genera Bozze di Email",
    subtitle: "Comunicazione professionale semplificata",
    category: "writing",
    description: "Scrivere email professionali può intimidire, specialmente quando scrivi a insegnanti, datori di lavoro o organizzazioni. L'IA ti aiuta a trovare il tono giusto e includere tutte le informazioni importanti.",
    steps: [
      "Descrivi a chi stai scrivendo e perché",
      "Specifica il tono (formale, semi-formale, amichevole)",
      "Chiedi all'IA di scrivere la bozza dell'email",
      "Personalizzala con i tuoi dettagli specifici"
    ],
    prompt: "Scrivi un'email professionale a [DESTINATARIO: il mio insegnante / un'azienda / un'università] riguardo [SCOPO: richiedere un incontro / candidarmi per uno stage / fare una domanda]. Tono: [formale/semi-formale]. Includi:\n- Un oggetto chiaro\n- Un saluto cortese\n- Breve contesto su chi sono\n- Richiesta o scopo chiaro\n- Chiusura professionale\n\nMi chiamo [IL TUO NOME] e sono [IL TUO CONTESTO].",
    promptTip: "Rivedi sempre le email generate dall'IA e aggiungi dettagli personali. Menziona nomi specifici, date o riferimenti che la rendano genuina. Non inviare mai un'email generata dall'IA senza leggerla prima.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com"
      }
    ]
  },
  {
    id: 11,
    title: "Crea Flashcard di Studio",
    subtitle: "Memorizza qualsiasi cosa in modo efficiente",
    category: "learning",
    description: "L'IA può generare flashcard da qualsiasi materiale di studio in pochi secondi. Perfetto per memorizzare vocabolario, date storiche, termini scientifici o qualsiasi dato utile per gli esami.",
    steps: [
      "Incolla il tuo materiale di studio o descrivi l'argomento",
      "Chiedi all'IA di creare flashcard con domande e risposte",
      "Esportale in un'app di flashcard come Anki o Quizlet",
      "Studia usando la ripetizione spaziata"
    ],
    prompt: "Crea 20 flashcard di studio per [MATERIA/ARGOMENTO]. Formatta ciascuna come:\nD: [Domanda]\nR: [Risposta]\n\nLe domande devono testare la comprensione, non solo la memorizzazione. Includi un mix di domande su definizioni, applicazioni e domande 'perché'. Livello di difficoltà: [base/intermedio/avanzato].",
    promptTip: "Chiedi flashcard in formati specifici: 'formato importazione Quizlet' o 'compatibile con Anki'. Puoi anche dire 'Concentrati sui concetti che più probabilmente saranno oggetto di esame'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Quizlet"
    ],
    links: [
      {
        name: "Quizlet",
        url: "https://quizlet.com"
      },
      {
        name: "Anki",
        url: "https://apps.ankiweb.net"
      }
    ]
  },
  {
    id: 12,
    title: "Spiega Concetti Complessi in Modo Semplice",
    subtitle: "Comprendi qualsiasi cosa al tuo livello",
    category: "learning",
    description: "Hai difficoltà con un concetto di fisica, matematica o filosofia? L'IA può spiegarlo esattamente al tuo livello di comprensione, usando analogie ed esempi che abbiano senso per te.",
    steps: [
      "Descrivi il concetto con cui hai difficoltà",
      "Indica all'IA il tuo livello attuale di comprensione",
      "Chiedi analogie ed esempi dal mondo reale",
      "Fai domande specifiche fino a quando non capisci"
    ],
    prompt: "Spiegami [CONCETTO] come se fossi uno studente delle superiori di [ETÀ] anni. Usa:\n- Un'analogia semplice dal mondo reale\n- Una spiegazione passo dopo passo\n- Un esempio concreto a cui posso relazionarmi\n- Perché è importante nel mondo reale\n\nEvita il gergo tecnico. Se devi usare termini tecnici, definiscili prima in modo semplice.",
    promptTip: "Se la prima spiegazione non funziona, dì 'Prova un'analogia diversa' o 'Spiegalo usando una metafora sportiva/culinaria/videoludica'. Continua a chiedere fino a quando non ha senso!",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ],
    links: [
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 13,
    title: "Genera Quiz di Pratica",
    subtitle: "Mettiti alla prova su qualsiasi argomento",
    category: "learning",
    description: "Il modo migliore per studiare è mettersi alla prova. L'IA può creare quiz personalizzati su qualsiasi argomento, a qualsiasi livello di difficoltà, con spiegazioni per ogni risposta.",
    steps: [
      "Specifica la materia e gli argomenti da coprire",
      "Scegli i tipi di domande (scelta multipla, risposta breve, ecc.)",
      "Imposta il livello di difficoltà",
      "Fai il quiz, poi chiedi all'IA di correggerlo e spiegare le risposte"
    ],
    prompt: "Crea un quiz di pratica su [MATERIA: es. Rivoluzione Francese] con:\n- 5 domande a scelta multipla\n- 3 domande a risposta breve\n- 2 domande in stile saggio\n\nDifficoltà: [facile/media/difficile]\nIncludi un foglio risposte alla fine con spiegazioni per ogni risposta. Crea domande che testino la comprensione, non solo la memorizzazione.",
    promptTip: "Dopo aver fatto il quiz, incolla le tue risposte e chiedi all'IA di correggerle con un feedback dettagliato. Dì 'Spiega perché l'opzione B era sbagliata' per approfondire la comprensione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Quizlet",
        url: "https://quizlet.com"
      }
    ]
  },
  {
    id: 14,
    title: "Aiuto con Problemi di Matematica",
    subtitle: "Soluzioni spiegate passo dopo passo",
    category: "learning",
    description: "L'IA può risolvere problemi di matematica passo dopo passo e spiegare il ragionamento dietro ogni passaggio. Incredibilmente utile per capire come affrontare i problemi, non solo per ottenere la risposta.",
    steps: [
      "Digita o fotografa il tuo problema di matematica",
      "Chiedi all'IA di risolverlo passo dopo passo",
      "Chiedi spiegazioni per qualsiasi passaggio che non capisci",
      "Esercitati con problemi simili per consolidare l'apprendimento"
    ],
    prompt: "Risolvi questo problema di matematica passo dopo passo, spiegando il ragionamento in ogni passaggio come se stessi insegnando a uno studente:\n\n[IL TUO PROBLEMA DI MATEMATICA]\n\nDopo la risoluzione, per favore:\n1. Spiega il concetto chiave testato\n2. Mostrami un problema di pratica simile\n3. Elenca gli errori comuni che gli studenti fanno con questo tipo di problema",
    promptTip: "Sii specifico: 'Mostrami i passaggi algebrici' o 'Spiega perché hai usato questa formula'. Se non capisci un passaggio, chiedi 'Perché hai fatto quello nel passaggio 3?'",
    tools: [
      "ChatGPT",
      "Claude",
      "Wolfram Alpha",
      "Photomath"
    ],
    links: [
      {
        name: "Wolfram Alpha",
        url: "https://www.wolframalpha.com"
      },
      {
        name: "Photomath",
        url: "https://photomath.com"
      }
    ]
  },
  {
    id: 15,
    title: "Impara una Nuova Lingua",
    subtitle: "Pratica conversazione e grammatica",
    category: "learning",
    description: "L'IA è come avere un tutor linguistico gratuito disponibile 24 ore su 24. Pratica conversazioni, ottieni spiegazioni grammaticali, impara vocabolario e migliora la pronuncia, tutto al tuo ritmo.",
    steps: [
      "Indica all'IA quale lingua vuoi praticare e il tuo livello",
      "Inizia una conversazione in quella lingua",
      "Chiedi all'IA di correggere i tuoi errori e spiegare la grammatica",
      "Pratica abilità specifiche: vocabolario, coniugazioni, ascolto"
    ],
    prompt: "Pratichiamo [LINGUA]. Sono al livello [principiante/intermedio/avanzato]. Per favore:\n1. Inizia una conversazione su [ARGOMENTO: vita quotidiana/viaggi/scuola]\n2. Scrivi in [LINGUA] con la traduzione in italiano sotto\n3. Correggi ogni errore che faccio e spiega perché\n4. Insegnami 3 nuove parole di vocabolario in modo naturale nella conversazione\n5. Usa un linguaggio naturale e quotidiano, non da libro di testo",
    promptTip: "Specifica cosa vuoi praticare: 'Concentrati sulla coniugazione al passato' o 'Aiutami a praticare come ordinare al ristorante'. Chiedi all'IA di simulare diversi scenari.",
    tools: [
      "ChatGPT",
      "Claude",
      "Duolingo",
      "Gemini"
    ],
    links: [
      {
        name: "Duolingo",
        url: "https://www.duolingo.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 16,
    title: "Crea Guide di Studio",
    subtitle: "Organizza il tuo materiale di apprendimento",
    category: "learning",
    description: "Prima di un esame, una guida di studio ben organizzata vale oro. L'IA può prendere i tuoi appunti, capitoli del libro di testo o argomenti delle lezioni e creare una guida di studio completa e strutturata.",
    steps: [
      "Elenca tutti gli argomenti e i capitoli che devi studiare",
      "Fornisci eventuali appunti o concetti chiave",
      "Chiedi all'IA di creare una guida di studio organizzata",
      "Stampala o salvala per la revisione"
    ],
    prompt: "Crea una guida di studio completa per il mio esame di [MATERIA] che copra questi argomenti: [ELENCA GLI ARGOMENTI]. Includi:\n- Concetti e definizioni chiave\n- Formule o regole importanti\n- Domande d'esame comuni e come affrontarle\n- Una tabella riassuntiva dei fatti più importanti\n- Trucchi mnemonici\n\nOrganizzala per argomento con titoli chiari.",
    promptTip: "Incolla i tuoi appunti delle lezioni o il programma per guide di studio più mirate. Chiedi 'Quali sono le 10 cose che assolutamente devo sapere?' per una revisione dell'ultimo minuto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Notion AI"
    ],
    links: [
      {
        name: "Notion",
        url: "https://www.notion.so"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 17,
    title: "Aiuto con i Compiti",
    subtitle: "Capire, non copiare",
    category: "learning",
    description: "L'IA è un aiuto incredibile per i compiti, ma la chiave è usarla per CAPIRE, non solo per ottenere risposte. Chiedile di spiegare concetti, guidarti attraverso i problemi e controllare il tuo lavoro.",
    steps: [
      "Descrivi il problema o la domanda dei compiti",
      "Chiedi all'IA di spiegare l'approccio, non solo la risposta",
      "Lavora da solo con la guida dell'IA",
      "Controlla la tua risposta e chiedi un feedback"
    ],
    prompt: "Ho bisogno di aiuto con questo compito di [MATERIA]:\n\n[LA TUA DOMANDA DEL COMPITO]\n\nNon darmi solo la risposta. Invece:\n1. Spiega quale concetto sta testando questa domanda\n2. Dammi un suggerimento per iniziare\n3. Guidami attraverso l'approccio passo dopo passo\n4. Lasciami provare a risolverlo, poi controlla il mio lavoro",
    promptTip: "La chiave è IMPARARE, non copiare. Usa l'IA come un tutor che ti guida. Chiedi 'Cosa dovrei ripassare per capire meglio questo?' dopo aver ricevuto aiuto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ],
    links: [
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 18,
    title: "Comprendi gli Eventi Storici",
    subtitle: "Dai vita alla storia",
    category: "learning",
    description: "La storia è più di date e nomi: sono storie, cause e conseguenze. L'IA può dare vita agli eventi storici spiegando contesto, diverse prospettive e connessioni con il presente.",
    steps: [
      "Indica l'evento o il periodo storico che stai studiando",
      "Chiedi all'IA di spiegarlo con contesto e prospettive multiple",
      "Richiedi connessioni con eventi moderni",
      "Chiedi una cronologia o una catena causa-effetto"
    ],
    prompt: "Spiega [EVENTO STORICO] come se stessi raccontando una storia affascinante. Includi:\n- I protagonisti chiave e le loro motivazioni\n- Le cause (sia immediate che a lungo termine)\n- Cosa è successo davvero, passo dopo passo\n- Le conseguenze e l'impatto duraturo\n- Come si collega a qualcosa che accade nel mondo oggi\n- Diverse prospettive (vincitori vs. vinti, punti di vista di diversi paesi)\n\nRendilo coinvolgente, non come un libro di testo.",
    promptTip: "Fai domande di approfondimento come 'Cosa sarebbe successo se [X] non fosse accaduto?' o 'Raccontami questo dal punto di vista di [un altro paese]' per una comprensione più profonda.",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Gemini"
    ],
    links: [
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      },
      {
        name: "Wikipedia",
        url: "https://wikipedia.org"
      }
    ]
  },
  {
    id: 19,
    title: "Impara Concetti di Programmazione",
    subtitle: "Inizia a programmare da zero",
    category: "learning",
    description: "L'IA è il miglior insegnante di programmazione che tu abbia mai avuto. Può spiegare concetti di programmazione dalle basi assolute agli argomenti avanzati, con esempi ed esercizi su misura per il tuo livello.",
    steps: [
      "Indica all'IA la tua esperienza attuale di programmazione (principiante, ecc.)",
      "Scegli un linguaggio da imparare (Python è ottimo per iniziare)",
      "Chiedi spiegazioni dei concetti con esempi di codice",
      "Esercitati con gli esercizi e chiedi all'IA di revisionare il tuo codice"
    ],
    prompt: "Sono un principiante assoluto che vuole imparare [Python/JavaScript/ecc.]. Insegnami [CONCETTO: variabili/cicli/funzioni/ecc.] con:\n1. Una spiegazione semplice di cos'è e perché è importante\n2. Un'analogia dal mondo reale\n3. Un esempio di codice con commenti che spiegano ogni riga\n4. Un piccolo esercizio da provare\n5. Errori comuni che fanno i principianti\n\nRendilo divertente e pratico!",
    promptTip: "Il modo migliore per imparare a programmare è FARE. Dopo ogni concetto, scrivi codice e incollalo per un feedback. Inizia con un progetto che ti entusiasma.",
    tools: [
      "ChatGPT",
      "Claude",
      "Replit",
      "GitHub Copilot"
    ],
    links: [
      {
        name: "Replit",
        url: "https://replit.com"
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org"
      }
    ]
  },
  {
    id: 20,
    title: "Crea Mappe Mentali e Scalette",
    subtitle: "Organizza i tuoi pensieri visivamente",
    category: "learning",
    description: "L'IA può aiutarti a scomporre qualsiasi argomento in una mappa mentale o una scaletta strutturata. Perfetto per organizzare saggi, sessioni di studio, presentazioni o pianificazione di progetti.",
    steps: [
      "Descrivi l'argomento che vuoi organizzare",
      "Chiedi all'IA di creare una scaletta gerarchica o una mappa mentale",
      "Personalizza la profondità e le aree di focus",
      "Esporta in uno strumento di mappe mentali se necessario"
    ],
    prompt: "Crea una mappa mentale dettagliata per [ARGOMENTO]. Formattala come una struttura gerarchica con:\n- Argomento principale al centro\n- 4-6 rami principali (temi maggiori)\n- 2-4 sotto-rami per ogni ramo principale\n- Dettagli chiave o esempi come nodi foglia\n\nUsa l'indentazione per mostrare la gerarchia. Rendila abbastanza completa per una sessione di studio o una presentazione.",
    promptTip: "Copia la scaletta in strumenti come Miro, Coggle o MindMeister per visualizzarla. Chiedi 'Aggiungi più dettagli al ramo [specifico]' per espandere le sezioni.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Miro"
    ],
    links: [
      {
        name: "Coggle",
        url: "https://coggle.it"
      },
      {
        name: "Miro",
        url: "https://miro.com"
      }
    ]
  },
  {
    id: 103,
    title: "Ottieni Istruzioni Passo dopo Passo",
    subtitle: "Chiedi all'IA come fare qualsiasi cosa",
    category: "learning",
    description: "Uno degli usi più potenti dell'IA è semplicemente chiederle come fare qualcosa. Che si tratti di riparare un rubinetto, configurare un software, cucinare una ricetta, risolvere un problema di matematica o compilare documenti — l'IA può scomporre qualsiasi compito in passaggi chiari e numerati che chiunque può seguire.",
    steps: [
      "Pensa a qualcosa che vuoi imparare a fare",
      "Chiedi all'IA di spiegarlo passo dopo passo",
      "Fai domande se qualche passaggio non è chiaro",
      "Segui le istruzioni e chiedi aiuto se ti blocchi"
    ],
    prompt: "Spiega come [COMPITO] passo dopo passo. Sono un [principiante/intermedio/avanzato] in questo. Per favore:\n- Numera ogni passaggio chiaramente\n- Mantieni ogni passaggio semplice e attuabile\n- Spiega i termini tecnici in linguaggio semplice\n- Avvisami degli errori comuni in ogni passaggio\n- Dimmi quali strumenti o materiali mi serviranno prima di iniziare\n- Includi consigli per rendere tutto più facile\n\nSe ci sono più modi per farlo, consiglia prima quello più semplice.",
    promptTip: "Sii specifico sul tuo livello e contesto. Invece di 'come cucinare la pasta', prova 'come cucinare la pasta per la prima volta, non ho esperienza in cucina, spiega tutto'. Più contesto dai, migliori saranno le istruzioni.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      }
    ]
  },
  {
    id: 21,
    title: "Genera Opere d'Arte Digitali",
    subtitle: "Crea immagini partendo da descrizioni",
    category: "art",
    description: "Con i generatori di immagini IA, puoi creare opere d'arte digitali straordinarie semplicemente descrivendo ciò che vuoi. Da scene fotorealistiche ad arte astratta, l'unico limite è la tua immaginazione.",
    steps: [
      "Visualizza cosa vuoi creare",
      "Scrivi una descrizione dettagliata (il 'prompt')",
      "Scegli un generatore di immagini IA",
      "Genera, itera e perfeziona la tua creazione"
    ],
    prompt: "Crea un'immagine in stile [STILE: fotorealistico/arte digitale/acquerello/pittura a olio] di [SOGGETTO]. La scena deve includere [DETTAGLI: illuminazione, colori, atmosfera, composizione]. Riferimenti stilistici: [ARTISTA O STILE]. Rapporto d'aspetto: [16:9/1:1/9:16]. Alta qualità, dettagliato, professionale.",
    promptTip: "Sii specifico su stile, illuminazione e atmosfera. Aggiungi parole come 'illuminazione cinematografica', 'ora dorata', 'ombre drammatiche' o nomina stili artistici specifici. Più dettagli = risultati migliori.",
    tools: [
      "Midjourney",
      "DALL-E",
      "Leonardo AI",
      "Stable Diffusion",
      "Freepik"
    ],
    links: [
      {
        name: "Midjourney",
        url: "https://midjourney.com"
      },
      {
        name: "Leonardo AI",
        url: "https://leonardo.ai"
      },
      {
        name: "Freepik",
        url: "https://freepik.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 22,
    title: "Progetta Loghi e Branding",
    subtitle: "Costruisci la tua identità visiva",
    category: "art",
    description: "Stai iniziando un progetto, un brand o una pagina social? L'IA può aiutarti a fare brainstorming su concetti di logo, combinazioni di colori e elementi di identità del brand. È un ottimo punto di partenza per la tua identità visiva.",
    steps: [
      "Descrivi il tuo brand: nome, valori, pubblico target",
      "Chiedi all'IA idee per il concept del logo",
      "Genera opzioni visive con strumenti di immagini IA",
      "Perfeziona il tuo preferito nel design finale"
    ],
    prompt: "Sto creando un brand chiamato [NOME DEL BRAND] per [SCOPO/SETTORE]. La personalità del brand è [moderna/giocosa/elegante/audace/minimale]. Genera 5 descrizioni di concept per il logo tra cui:\n- Idea di icona/simbolo\n- Raccomandazione sullo stile del font\n- Palette colori (3-4 colori con codici hex)\n- Come il logo dovrebbe apparire e cosa comunica\n\nPubblico target: [DESCRIVI IL TUO PUBBLICO].",
    promptTip: "Usa le descrizioni testuali per creare loghi in Canva o generatori di immagini IA. Chiedi 'variazioni sul concept #3' per esplorare le opzioni.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "Canva",
      "Looka"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Looka",
        url: "https://looka.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 23,
    title: "Crea Palette di Colori",
    subtitle: "Trova combinazioni di colori perfette",
    category: "art",
    description: "Scegliere colori che funzionano insieme è un'arte. L'IA può suggerire palette armoniche per qualsiasi progetto, che sia un sito web, una presentazione, un progetto di interior design o un'opera d'arte.",
    steps: [
      "Descrivi l'atmosfera o lo scopo del tuo progetto",
      "Chiedi all'IA suggerimenti per la palette colori con codici hex",
      "Visualizza i colori in anteprima in uno strumento di design",
      "Regola fino a trovare la combinazione perfetta"
    ],
    prompt: "Genera 3 palette colori (5 colori ciascuna) per un [TIPO DI PROGETTO: sito web/presentazione/poster/brand]. L'atmosfera deve essere [ATMOSFERA: energica/calma/professionale/giocosa/lussuosa]. Per ogni palette, fornisci:\n- Codici hex per ogni colore\n- Nomi dei colori\n- Quale colore usare per sfondo, testo, accenti\n- Quale emozione trasmette ogni colore",
    promptTip: "Menziona colori specifici che vuoi includere: 'Deve includere il verde acqua' o 'Niente toni rossi'. Fai riferimento ad atmosfere come 'vibrazioni da tramonto' o 'calma oceanica' per ispirazione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Coolors",
      "Adobe Color"
    ],
    links: [
      {
        name: "Coolors",
        url: "https://coolors.co"
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 24,
    title: "Modifica e Migliora le Foto",
    subtitle: "Fotoritocco professionale con l'IA",
    category: "art",
    description: "Gli strumenti di fotoritocco IA possono rimuovere sfondi, migliorare l'illuminazione, correggere imperfezioni, aumentare la risoluzione e applicare filtri artistici, tutto senza dover imparare Photoshop.",
    steps: [
      "Carica la tua foto in uno strumento di editing IA",
      "Descrivi cosa vuoi modificare",
      "Lascia che l'IA elabori la modifica",
      "Perfeziona i risultati"
    ],
    prompt: "Ho una foto che ha bisogno di editing. Suggerisci il miglior approccio per:\n- [DESCRIVI COSA VUOI: rimuovere sfondo / migliorare illuminazione / correggere colori / rimuovere oggetto / aumentare risoluzione]\n\nQuale strumento IA funzionerebbe meglio per questa modifica specifica? Dammi istruzioni passo dopo passo per lo strumento consigliato.",
    promptTip: "Diversi strumenti eccellono in compiti diversi. Usa Remove.bg per gli sfondi, Topaz per l'upscaling, Lightroom AI per la correzione del colore. Chiedi all'IA quale strumento si adatta alla tua esigenza specifica.",
    tools: [
      "Adobe Firefly",
      "Remove.bg",
      "Topaz Photo AI",
      "Canva"
    ],
    links: [
      {
        name: "Remove.bg",
        url: "https://www.remove.bg"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 25,
    title: "Genera Sfondi e Wallpaper",
    subtitle: "Sfondi personalizzati per i tuoi dispositivi",
    category: "art",
    description: "Crea sfondi unici per il tuo telefono, tablet o computer che nessun altro ha. I generatori di immagini IA possono creare sfondi personalizzati straordinari in qualsiasi stile tu possa immaginare.",
    steps: [
      "Decidi lo stile e il tema che desideri",
      "Scrivi un prompt dettagliato per l'immagine",
      "Genera con il rapporto d'aspetto corretto per il tuo dispositivo",
      "Scarica e imposta come sfondo"
    ],
    prompt: "Genera uno sfondo [STILE: minimalista/astratto/natura/cyberpunk/anime/estetico] per [DISPOSITIVO: iPhone 16:9 / desktop 16:9 / iPad 4:3]. Tema: [TEMA]. Palette colori: [COLORI]. L'immagine deve essere visivamente sorprendente ma non troppo caotica, così che icone e testo siano leggibili sopra. Alta risoluzione, composizione pulita.",
    promptTip: "Per sfondi del telefono usa l'orientamento verticale, per il desktop usa orizzontale. Aggiungi 'lascia spazio in alto per il widget dell'orologio' per le schermate di blocco.",
    tools: [
      "Midjourney",
      "DALL-E",
      "Leonardo AI",
      "Stable Diffusion",
      "Freepik"
    ],
    links: [
      {
        name: "Midjourney",
        url: "https://midjourney.com"
      },
      {
        name: "Leonardo AI",
        url: "https://leonardo.ai"
      },
      {
        name: "Freepik",
        url: "https://freepik.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 26,
    title: "Progetta Grafiche per Social Media",
    subtitle: "Contenuti visivi accattivanti",
    category: "art",
    description: "Crea grafiche dall'aspetto professionale per le storie di Instagram, miniature di YouTube, header di Twitter e altro usando strumenti di design IA e generatori di immagini.",
    steps: [
      "Definisci la piattaforma e le dimensioni necessarie",
      "Descrivi il design che vuoi",
      "Genera usando strumenti IA o le funzioni IA di Canva",
      "Aggiungi testo e tocchi finali"
    ],
    prompt: "Progetta una grafica per [PIATTAFORMA: post Instagram / miniatura YouTube / header Twitter] per [ARGOMENTO/CONTENUTO]. Requisiti:\n- Accattivante e che fermi lo scrolling\n- Includi spazio per il testo sovrapposto\n- Schema colori: [COLORI]\n- Stile: [moderno/audace/minimale/retrò]\n- Dimensioni: [1080x1080 / 1280x720 / 1500x500]\n\nSuggerisci il layout, i colori e le immagini da usare.",
    promptTip: "Usa Canva per aggiungere testo sopra immagini generate dall'IA. Chiedi all'IA 'idee per miniature YouTube per un video su [argomento]' per concetti creativi.",
    tools: [
      "Canva",
      "Midjourney",
      "DALL-E",
      "Adobe Express"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Adobe Express",
        url: "https://www.adobe.com/express"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 27,
    title: "Crea Meme",
    subtitle: "Umorismo con l'assistenza dell'IA",
    category: "art",
    description: "L'IA può aiutarti a creare meme originali, dalla generazione dell'immagine alla scrittura della didascalia perfetta. Combina la generazione di immagini IA con l'umorismo scritto dall'IA per contenuti virali.",
    steps: [
      "Pensa a un concetto o una situazione divertente",
      "Chiedi all'IA di scrivere didascalie per meme",
      "Genera o trova un'immagine corrispondente",
      "Combina testo e immagine usando un creatore di meme"
    ],
    prompt: "Genera 5 idee divertenti per meme su [ARGOMENTO: vita scolastica / studio / tecnologia / ecc.]. Per ogni meme, fornisci:\n- La descrizione dell'immagine (cosa dovrebbe mostrare l'immagine del meme)\n- Il testo in alto\n- Il testo in basso\n- Perché è divertente\n\nRendili relazionabili per gli adolescenti. Mantieni l'umorismo pulito ma genuinamente divertente.",
    promptTip: "I meme migliori sono quelli in cui ci si riconosce. Chiedi all'IA meme su situazioni molto specifiche: 'Meme su quando il prof dice che il compito è facile'. Usa imgflip.com per crearli.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "imgflip",
      "Canva"
    ],
    links: [
      {
        name: "imgflip Meme Generator",
        url: "https://imgflip.com/memegenerator"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 28,
    title: "Genera Strisce a Fumetti",
    subtitle: "Narrazione visiva con l'IA",
    category: "art",
    description: "Crea le tue strisce a fumetti usando l'IA per generare l'artwork e aiutare a scrivere i dialoghi. Racconta storie visivamente senza bisogno di saper disegnare.",
    steps: [
      "Scrivi il copione del fumetto: vignette, dialoghi, azione",
      "Descrivi l'aspetto di ogni vignetta per la generazione di immagini IA",
      "Genera un'arte dei personaggi coerente",
      "Assembla le vignette con i fumetti di dialogo"
    ],
    prompt: "Crea una striscia a fumetti di 4 vignette su [ARGOMENTO/STORIA]. Per ogni vignetta, fornisci:\n- Descrizione della vignetta (scena visiva, posizioni dei personaggi, espressioni)\n- Dialoghi/fumetti\n- Effetti sonori se presenti\n- Testo di narrazione se necessario\n\nStile: [manga/fumetto occidentale/cartoon/minimalista]. Rendila divertente/drammatica/toccante.",
    promptTip: "Per personaggi coerenti tra le vignette, descrivili in dettaglio una volta e fai riferimento a quella descrizione. Usa strumenti come Pixton o Canva Comics per assemblare la striscia finale.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "DALL-E",
      "Pixton"
    ],
    links: [
      {
        name: "Pixton",
        url: "https://www.pixton.com"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 29,
    title: "Progetta Slide per Presentazioni",
    subtitle: "Presentazioni belle in pochi minuti",
    category: "art",
    description: "L'IA può progettare slide professionali, suggerire layout, creare contenuti visivi e persino scrivere le tue note per il relatore. Basta con le slide noiose a punti elenco.",
    steps: [
      "Delinea il contenuto della presentazione",
      "Chiedi all'IA di suggerire layout e design per le slide",
      "Genera elementi visivi per ogni slide",
      "Assembla in PowerPoint, Google Slides o Canva"
    ],
    prompt: "Progetta una presentazione di [NUMERO] slide su [ARGOMENTO] per [PUBBLICO]. Per ogni slide, fornisci:\n- Titolo della slide\n- Contenuto chiave (max 3-4 punti elenco o una descrizione visiva)\n- Note per il relatore (cosa dire)\n- Elemento visivo o descrizione dell'immagine suggerita\n\nStile di design: [moderno minimale / audace e colorato / aziendale / creativo]. Schema colori: [COLORI]. Rendila coinvolgente, non un muro di testo.",
    promptTip: "Segui la regola 'un'idea per slide'. Chiedi all'IA 'consigli per il design della presentazione' specifici per il tuo argomento. Usa Canva o Beautiful.ai per il design visivo.",
    tools: [
      "ChatGPT",
      "Claude",
      "Canva",
      "Beautiful.ai",
      "Gamma"
    ],
    links: [
      {
        name: "Canva Presentations",
        url: "https://www.canva.com/presentations"
      },
      {
        name: "Gamma",
        url: "https://gamma.app"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 30,
    title: "Crea Mood Board",
    subtitle: "Collezioni di ispirazione visiva",
    category: "art",
    description: "Un mood board cattura la sensazione visiva di un progetto. L'IA può aiutarti a definire la tua estetica, suggerire immagini e creare collezioni visive coerenti per qualsiasi progetto creativo.",
    steps: [
      "Descrivi il progetto o l'estetica che cerchi",
      "Chiedi all'IA di suggerire elementi visivi, colori, texture",
      "Genera immagini di riferimento con l'IA",
      "Compila tutto in uno strumento per mood board"
    ],
    prompt: "Aiutami a creare un mood board per [PROGETTO: ridecorare la camera / identità del brand / servizio fotografico / collezione moda]. Voglio un'atmosfera [DESCRIVI ESTETICA: minimalismo accogliente / streetwear audace / tropicale vintage / dark academia]. Suggerisci:\n- 8-10 elementi visivi da includere\n- Palette colori con codici hex\n- Suggerimenti per texture e materiali\n- Stile tipografico\n- Artisti o stili di riferimento\n- Parole chiave per trovare ispirazione",
    promptTip: "Usa Pinterest o Milanote per creare il mood board vero e proprio. Genera immagini IA per elementi che non riesci a trovare. Più specifica è la tua descrizione estetica, meglio è.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "Pinterest",
      "Milanote"
    ],
    links: [
      {
        name: "Pinterest",
        url: "https://www.pinterest.com"
      },
      {
        name: "Milanote",
        url: "https://milanote.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 31,
    title: "Componi Musica Originale",
    subtitle: "Crea melodie e canzoni complete",
    category: "music",
    description: "Gli strumenti musicali IA possono comporre canzoni originali in qualsiasi genere, dal jazz al reggaeton al classico. Descrivi ciò che vuoi e l'IA creerà una canzone completa con strumenti e voce.",
    steps: [
      "Scegli il genere e l'atmosfera",
      "Descrivi la canzone che vuoi o scrivi il testo",
      "Usa un generatore musicale IA",
      "Scarica e modifica se necessario"
    ],
    prompt: "Componi un brano strumentale [GENERE: jazz/pop/elettronica/lo-fi/reggaeton]. Atmosfera: [allegra/malinconica/energica/rilassata]. Tempo: [lento/medio/veloce]. Includi [STRUMENTI: pianoforte, chitarra, batteria, sassofono]. Durata: circa 2-3 minuti. La sensazione deve essere [DESCRIZIONE: come un tramonto sulla spiaggia / come camminare in una città di notte].",
    promptTip: "Per Suno, scrivi una breve descrizione dello stile e il testo. Per pezzi puramente strumentali, specifica 'senza voce'. Prova a mescolare generi: 'jazz fusion con beat elettronici'.",
    tools: [
      "Suno",
      "Udio",
      "AIVA",
      "Soundraw"
    ],
    links: [
      {
        name: "Suno",
        url: "https://suno.com"
      },
      {
        name: "AIVA",
        url: "https://www.aiva.ai"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 32,
    title: "Crea Beat e Strumentali",
    subtitle: "Produci basi musicali",
    category: "music",
    description: "Che tu faccia rap, canti o ami semplicemente la produzione musicale, l'IA può creare beat e strumentali personalizzati su misura per il tuo stile. Perfetto per musicisti emergenti e creatori di contenuti.",
    steps: [
      "Definisci il genere e il tempo (BPM)",
      "Descrivi lo stile del beat e gli strumenti",
      "Genera con uno strumento musicale IA",
      "Scarica e usa nei tuoi progetti"
    ],
    prompt: "Crea un beat [GENERE] a [BPM] BPM. Stile: [trap/boom bap/R&B/drill/dancehall]. Includi:\n- Batteria incisiva\n- [Stile del basso: 808 / basso profondo / acustico]\n- [Elementi melodici: pianoforte / synth / chitarra]\n- Struttura: intro, strofa, ritornello, strofa, ritornello, outro\n\nAtmosfera: [scura e aggressiva / smooth e rilassata / allegra e divertente]",
    promptTip: "Usa range di BPM specifici: trap (130-160), lo-fi (70-90), house (120-130). Chiedi all'IA di creare variazioni per strofe e ritornelli per mantenerlo dinamico.",
    tools: [
      "Suno",
      "Udio",
      "Soundraw",
      "BandLab"
    ],
    links: [
      {
        name: "Suno",
        url: "https://suno.com"
      },
      {
        name: "BandLab",
        url: "https://www.bandlab.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 33,
    title: "Genera Effetti Sonori",
    subtitle: "Audio personalizzato per qualsiasi progetto",
    category: "music",
    description: "Hai bisogno di effetti sonori per un video, un gioco, un podcast o una presentazione? L'IA può generare effetti sonori personalizzati che si adattano alle tue esigenze esatte.",
    steps: [
      "Descrivi l'effetto sonoro di cui hai bisogno",
      "Specifica durata e stile",
      "Genera usando strumenti audio IA",
      "Scarica e integra nel tuo progetto"
    ],
    prompt: "Genera un effetto sonoro per [CONTESTO: un videogioco / un'intro podcast / un video YouTube]. Il suono deve essere: [DESCRIZIONE: una porta futuristica che si apre / una scintilla magica / un rombo di basso minaccioso / un click soddisfacente]. Durata: [LUNGHEZZA]. Stile: [realistico/cartoon/sci-fi/fantasy].",
    promptTip: "Sii descrittivo sulla qualità: 'nitido e pulito', 'profondo e rimbombante', 'brillante e scintillante'. Sovrapponi più effetti sonori per un audio più ricco.",
    tools: [
      "ElevenLabs",
      "Suno",
      "Soundraw",
      "Freesound"
    ],
    links: [
      {
        name: "ElevenLabs",
        url: "https://elevenlabs.io"
      },
      {
        name: "Freesound",
        url: "https://freesound.org"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 34,
    title: "Scrivi Arrangiamenti Musicali",
    subtitle: "Orchestrazione completa con l'aiuto dell'IA",
    category: "music",
    description: "L'IA può aiutarti a arrangiare musica, decidendo quali strumenti suonano cosa, quando aggiungere armonie, come costruire la dinamica e come strutturare un arrangiamento completo da una semplice melodia.",
    steps: [
      "Condividi la tua melodia o progressione di accordi",
      "Descrivi lo stile che desideri",
      "Chiedi all'IA suggerimenti per l'arrangiamento",
      "Implementa nel tuo DAW o strumento musicale"
    ],
    prompt: "Ho una canzone con questi accordi: [PROGRESSIONE DI ACCORDI]. Aiutami a creare un arrangiamento completo in stile [GENERE]. Suggerisci:\n- Intro (come iniziare)\n- Strati di strumenti per ogni sezione\n- Quando aggiungere/rimuovere strumenti per la dinamica\n- Suggerimenti armonici per la voce\n- Un hook o riff memorabile\n- Come costruire verso il climax\n- Opzioni per l'outro",
    promptTip: "Se suoni uno strumento, descrivi cosa hai finora. Chiedi 'Quali strumenti aggiungerebbero calore al ritornello?' o 'Come posso rendere il bridge più interessante?'",
    tools: [
      "ChatGPT",
      "Claude",
      "AIVA",
      "BandLab"
    ],
    links: [
      {
        name: "AIVA",
        url: "https://www.aiva.ai"
      },
      {
        name: "BandLab",
        url: "https://www.bandlab.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 35,
    title: "Crea Copioni per Podcast",
    subtitle: "Struttura il tuo contenuto audio",
    category: "music",
    description: "Stai pianificando un podcast? L'IA può aiutarti a creare copioni per le puntate, punti di discussione, domande per le interviste e strutture dello show che mantengono il pubblico coinvolto dall'inizio alla fine.",
    steps: [
      "Definisci l'argomento del podcast e il pubblico target",
      "Chiedi all'IA di creare una scaletta della puntata",
      "Sviluppa i punti di discussione per ogni segmento",
      "Scrivi copioni per l'intro e l'outro"
    ],
    prompt: "Crea un copione per una puntata di podcast su [ARGOMENTO]. Formato: [solo/intervista/co-condotto]. Durata: [LUNGHEZZA] minuti. Includi:\n- Titolo accattivante della puntata\n- Gancio (primi 30 secondi per catturare l'attenzione)\n- Intro con nome dello show e contesto della puntata\n- 3-4 punti di discussione principali con frasi di transizione\n- Fatti interessanti o storie da condividere\n- Momento di coinvolgimento del pubblico (domanda, sondaggio)\n- Outro con call-to-action\n\nTono: [colloquiale/educativo/divertente/ispirante]",
    promptTip: "Per le interviste, chiedi all'IA di generare 10 domande stimolanti. Per le puntate in solitario, chiedi 'ganci narrativi' che mantengano gli ascoltatori coinvolti.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Descript"
    ],
    links: [
      {
        name: "Anchor/Spotify for Podcasters",
        url: "https://podcasters.spotify.com"
      },
      {
        name: "Descript",
        url: "https://www.descript.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 36,
    title: "Genera Narrazioni Vocali",
    subtitle: "Text-to-speech per i tuoi progetti",
    category: "music",
    description: "I generatori vocali IA possono creare narrazioni dal suono naturale in più lingue e stili vocali. Perfetti per video, presentazioni, audiolibri o qualsiasi progetto che necessiti di voiceover.",
    steps: [
      "Scrivi il tuo copione o testo",
      "Scegli uno stile vocale e la lingua",
      "Genera l'audio con uno strumento vocale IA",
      "Modifica e integra nel tuo progetto"
    ],
    prompt: "Ho bisogno di una narrazione voiceover per [PROGETTO: una presentazione scolastica / un video YouTube / un audiolibro]. Il testo è:\n\n[IL TUO TESTO]\n\nStile della voce: [calda e amichevole / autorevole e professionale / energica e giovane / calma e rilassante]. Lingua: [italiano/inglese/francese]. Suggerisci il miglior strumento vocale IA per questo e consigli per renderlo naturale.",
    promptTip: "ElevenLabs offre le voci più naturali. Aggiungi pause con '...' nel tuo copione. Varia la lunghezza delle frasi per un ritmo più naturale.",
    tools: [
      "ElevenLabs",
      "Play.ht",
      "Murf",
      "NaturalReader"
    ],
    links: [
      {
        name: "ElevenLabs",
        url: "https://elevenlabs.io"
      },
      {
        name: "Play.ht",
        url: "https://play.ht"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 37,
    title: "Mixa e Masterizza l'Audio",
    subtitle: "Qualità audio professionale con l'IA",
    category: "music",
    description: "Gli strumenti di mastering IA possono far suonare le tue registrazioni in modo professionale. Analizzano il tuo audio e regolano automaticamente livelli, EQ, compressione e ampiezza stereo per un suono ottimale.",
    steps: [
      "Registra o produci il tuo brano",
      "Carica su un servizio di mastering IA",
      "Scegli uno stile di riferimento o lascia decidere all'IA",
      "Scarica la versione masterizzata"
    ],
    prompt: "Ho una registrazione di [TIPO: canzone/podcast/voiceover] che necessita di mixing e mastering professionale. Problemi attuali: [descrivi i problemi: troppo basso/basso fangoso/alti aspri/volume inconsistente]. Quali strumenti IA specifici dovrei usare e con quali impostazioni dovrei iniziare? Dammi una guida passo dopo passo per ottenere audio di qualità professionale.",
    promptTip: "LANDR ed eMastered sono ottimi per il mastering automatico. Per il mixing, usa plugin IA nel tuo DAW. Confronta sempre il prima/dopo su diversi altoparlanti.",
    tools: [
      "LANDR",
      "eMastered",
      "iZotope",
      "BandLab"
    ],
    links: [
      {
        name: "LANDR",
        url: "https://www.landr.com"
      },
      {
        name: "BandLab",
        url: "https://www.bandlab.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 38,
    title: "Crea Suonerie e Notifiche",
    subtitle: "Personalizza i tuoi dispositivi",
    category: "music",
    description: "Crea suonerie e suoni di notifica unici usando generatori musicali IA. Distinguiti dai suoni predefiniti di tutti gli altri con audio personalizzato che rispecchia la tua personalità.",
    steps: [
      "Decidi lo stile e la lunghezza (15-30 secondi per le suonerie)",
      "Genera un breve pezzo musicale con l'IA",
      "Taglia e formatta nel tipo di file corretto",
      "Impostala come suoneria"
    ],
    prompt: "Crea una breve melodia [STILE: elettronica/acustica/lo-fi/orchestrale/8-bit] da usare come suoneria del telefono. Requisiti:\n- Durata: 15-20 secondi\n- Inizia immediatamente (niente intro lunga)\n- Accattivante e riconoscibile\n- Non fastidiosa se ascoltata ripetutamente\n- Finisce in modo pulito (può fare loop)\n\nAtmosfera: [energica/calma/divertente/elegante]",
    promptTip: "Genera un pezzo più lungo in Suno e taglia la parte più accattivante. Per i suoni di notifica, mantienilo sotto i 3 secondi. Esporta come MP3 o M4R (iPhone).",
    tools: [
      "Suno",
      "Soundraw",
      "GarageBand"
    ],
    links: [
      {
        name: "Suno",
        url: "https://suno.com"
      },
      {
        name: "Soundraw",
        url: "https://soundraw.io"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 39,
    title: "Genera Paesaggi Sonori Ambientali",
    subtitle: "Suoni per la concentrazione e il relax",
    category: "music",
    description: "Crea paesaggi sonori ambientali personalizzati per studiare, rilassarti, dormire o meditare. L'IA può mixare suoni di pioggia, natura, beat lo-fi e texture atmosferiche secondo le tue preferenze.",
    steps: [
      "Descrivi l'atmosfera che desideri",
      "Specifica lo scopo (concentrazione, sonno, relax)",
      "Genera con strumenti musicali IA",
      "Riproduci durante le sessioni di studio o riposo"
    ],
    prompt: "Crea un paesaggio sonoro ambientale di [DURATA] minuti per [SCOPO: studiare/dormire/meditare/rilassarsi]. Includi:\n- [ELEMENTI: pioggia leggera, tuono in lontananza, crepitio del camino, uccelli nella foresta, onde dell'oceano, pianoforte delicato, beat lo-fi]\n- Nessun suono forte improvviso\n- Texture fluida e continua\n- Evoluzione graduale ma non distraente\n\nAtmosfera: [pacifica/misteriosa/accogliente/eterea]",
    promptTip: "Mixa suoni naturali con musica sottile per il miglior ambiente di studio. Chiedi 'battiti binaurali a 40Hz' per la concentrazione o 'onde delta' per il sonno.",
    tools: [
      "Suno",
      "AIVA",
      "Noisli",
      "myNoise"
    ],
    links: [
      {
        name: "Noisli",
        url: "https://www.noisli.com"
      },
      {
        name: "myNoise",
        url: "https://mynoise.net"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 40,
    title: "Trascrivi Audio in Testo",
    subtitle: "Converti il parlato in scrittura",
    category: "music",
    description: "L'IA può trascrivere registrazioni audio in testo con una precisione notevole. Inestimabile per convertire lezioni, interviste, podcast o registrazioni di riunioni in appunti scritti.",
    steps: [
      "Registra o ottieni il tuo file audio",
      "Carica su un servizio di trascrizione IA",
      "Rivedi e modifica la trascrizione",
      "Usa il testo per appunti, sottotitoli o documentazione"
    ],
    prompt: "Ho una registrazione audio di [TIPO: una lezione/intervista/riunione/podcast] in [LINGUA]. Ho bisogno che sia trascritta con:\n- Identificazione del parlante (chi ha detto cosa)\n- Timestamp ogni pochi minuti\n- Punteggiatura e paragrafi corretti\n- Punti chiave evidenziati o riassunti alla fine\n\nQuale strumento di trascrizione IA dà i migliori risultati per l'audio in [LINGUA]?",
    promptTip: "Otter.ai è ottimo per l'inglese, Whisper (gratuito, di OpenAI) gestisce molte lingue. Per i migliori risultati, usa audio chiaro con rumore di fondo minimo.",
    tools: [
      "Otter.ai",
      "Whisper",
      "Rev",
      "Descript"
    ],
    links: [
      {
        name: "Otter.ai",
        url: "https://otter.ai"
      },
      {
        name: "Descript",
        url: "https://www.descript.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 41,
    title: "Genera Video Brevi",
    subtitle: "Creazione video con l'IA",
    category: "video",
    description: "L'IA ora può generare clip video brevi da descrizioni testuali. Crea video promozionali, contenuti social o clip artistiche senza bisogno di una fotocamera o competenze di editing.",
    steps: [
      "Scrivi una descrizione del video che vuoi",
      "Scegli uno strumento di generazione video IA",
      "Genera e rivedi l'output",
      "Modifica e combina le clip se necessario"
    ],
    prompt: "Genera una clip video di [DURATA] secondi di [DESCRIZIONE: una persona che cammina in una città illuminata al neon di notte / una ripresa aerea di montagne tropicali / un prodotto che ruota su uno sfondo pulito]. Stile: [cinematografico/documentaristico/social media/artistico]. Movimento della camera: [panoramica lenta/statica/tracking shot/aereo]. Atmosfera: [drammatica/allegra/serena/misteriosa].",
    promptTip: "Inizia con clip brevi di 4 secondi e combinale. Sii specifico sugli angoli e i movimenti della camera. Runway e Pika sono attualmente i leader nel video IA.",
    tools: [
      "Runway",
      "Pika",
      "Sora",
      "Kling",
      "HeyGen",
      "Freepik"
    ],
    links: [
      {
        name: "Runway",
        url: "https://runwayml.com"
      },
      {
        name: "Pika",
        url: "https://pika.art"
      },
      {
        name: "Sora",
        url: "https://sora.chatgpt.com/"
      },
      {
        name: "Kling AI",
        url: "https://klingai.com"
      },
      {
        name: "Freepik",
        url: "https://freepik.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 42,
    title: "Crea Animazioni",
    subtitle: "Dai movimento alle idee",
    category: "video",
    description: "Gli strumenti di animazione IA ti permettono di creare contenuti animati, da semplici motion graphics ad animazioni di personaggi. Perfetto per progetti scolastici, social media o espressione creativa.",
    steps: [
      "Pianifica la tua animazione: fai lo storyboard dei fotogrammi chiave",
      "Scegli tra 2D, 3D o motion graphics",
      "Usa strumenti di animazione IA per generare",
      "Modifica il timing e aggiungi il suono"
    ],
    prompt: "Aiutami a pianificare un'animazione di [DURATA] secondi su [ARGOMENTO]. Voglio:\n- Stile: [cartoon 2D/render 3D/motion graphics/anime/effetto stop-motion]\n- Scene/fotogrammi chiave descritti in dettaglio\n- Suggerimenti per le transizioni tra scene\n- Note su palette colori e stile visivo\n- Suggerimenti per musica/suoni\n\nL'animazione è per [SCOPO: progetto scolastico/social media/arte personale].",
    promptTip: "Usa Canva per motion graphics semplici, Runway per animazioni generate dall'IA o LottieFiles per animazioni web. Inizia semplice e aumenta la complessità.",
    tools: [
      "Runway",
      "Canva",
      "LottieFiles",
      "Pika"
    ],
    links: [
      {
        name: "Runway",
        url: "https://runwayml.com"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 43,
    title: "Modifica Clip Video",
    subtitle: "Editing professionale semplificato",
    category: "video",
    description: "Gli strumenti di editing video IA possono tagliare, aggiungere effetti, correggere i colori, rimuovere sfondi e migliorare il tuo girato automaticamente. Risultati professionali senza anni di esperienza.",
    steps: [
      "Importa il tuo girato grezzo",
      "Usa strumenti IA per l'editing automatico (tagli, colore, audio)",
      "Aggiungi transizioni ed effetti",
      "Esporta nel formato giusto per la tua piattaforma"
    ],
    prompt: "Ho un video grezzo di [DURATA] minuti che ha bisogno di editing per [PIATTAFORMA: YouTube/Instagram/TikTok/scuola]. Aiutami a pianificare l'editing:\n- Suggerisci una struttura e un ritmo\n- Dove tagliare per mantenerlo coinvolgente\n- Quali transizioni funzionerebbero\n- Suggerimento per il color grading\n- Raccomandazioni per musica/audio\n- Idee per testo sovrapposto e didascalie\n\nIl video parla di [DESCRIZIONE].",
    promptTip: "CapCut ha eccellenti funzioni di editing IA ed è gratuito. Per i sottotitoli automatici usa Descript. Per rimuovere gli sfondi prova la funzione green screen di Runway.",
    tools: [
      "CapCut",
      "Descript",
      "Runway",
      "DaVinci Resolve"
    ],
    links: [
      {
        name: "CapCut",
        url: "https://www.capcut.com"
      },
      {
        name: "DaVinci Resolve",
        url: "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 44,
    title: "Aggiungi Sottotitoli Automaticamente",
    subtitle: "Accessibilità e coinvolgimento",
    category: "video",
    description: "L'IA può generare automaticamente sottotitoli accurati per i tuoi video in qualsiasi lingua. Migliora l'accessibilità, aumenta il coinvolgimento (la maggior parte delle persone guarda video senza audio) e aiuta con la SEO.",
    steps: [
      "Carica il tuo video in uno strumento di sottotitolazione",
      "L'IA trascrive e sincronizza i sottotitoli",
      "Rivedi e correggi eventuali errori",
      "Esporta nel formato preferito (SRT, VTT, integrato)"
    ],
    prompt: "Devo aggiungere sottotitoli a un video in [LINGUA]. Il video dura [DURATA] minuti. Aiutami:\n1. Scegliere il miglior strumento IA per sottotitoli in [LINGUA]\n2. Consigli per migliorare la precisione\n3. Miglior stile per i sottotitoli (font, dimensione, colore, posizione)\n4. Come esportare i sottotitoli in formato SRT\n5. Come tradurre i sottotitoli in [ALTRA LINGUA]",
    promptTip: "CapCut e Descript hanno eccellenti funzioni di sottotitolazione automatica. Rivedi sempre i sottotitoli generati dall'IA per la precisione. Usa colori contrastanti per la leggibilità.",
    tools: [
      "CapCut",
      "Descript",
      "Veed.io",
      "Kapwing"
    ],
    links: [
      {
        name: "Veed.io",
        url: "https://www.veed.io"
      },
      {
        name: "Kapwing",
        url: "https://www.kapwing.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 45,
    title: "Crea Copioni Video",
    subtitle: "Struttura il tuo contenuto video",
    category: "video",
    description: "Un grande video inizia con un grande copione. L'IA può aiutarti a scrivere copioni video coinvolgenti con ganci, struttura chiara e call-to-action che mantengono gli spettatori incollati.",
    steps: [
      "Definisci l'argomento del video, la piattaforma e la durata target",
      "Chiedi all'IA di scrivere un copione con note sui tempi",
      "Includi ganci, transizioni e CTA",
      "Esercitati a leggerlo ad alta voce e regola"
    ],
    prompt: "Scrivi un copione video per un video di [DURATA] minuti per [PIATTAFORMA: YouTube/TikTok/Instagram] su [ARGOMENTO]. Includi:\n- Un gancio nei primi 5 secondi che fermi lo scrolling\n- Sezioni chiare con note sui tempi\n- Suggerimenti per B-roll (cosa mostrare sullo schermo)\n- Transizioni naturali tra argomenti\n- Una forte call-to-action alla fine\n- [Marcatori temporali]\n\nTono: [educativo/divertente/ispirante/comico]. Pubblico target: [PUBBLICO].",
    promptTip: "Per YouTube, concentra il valore nei primi 30 secondi. Per TikTok, il gancio deve essere nei primi 2 secondi. Scrivi sempre per la voce parlata, non per la lettura.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 46,
    title: "Genera Storyboard",
    subtitle: "Pianifica la tua narrativa visiva",
    category: "video",
    description: "Prima di filmare o creare un'animazione, uno storyboard ti aiuta a pianificare ogni inquadratura. L'IA può generare descrizioni dettagliate per lo storyboard e persino creare frame visivi per ogni scena.",
    steps: [
      "Scrivi il concept o il copione del video",
      "Chiedi all'IA di suddividerlo in pannelli di storyboard",
      "Genera frame visivi con strumenti di immagini IA",
      "Disponi e annota lo storyboard"
    ],
    prompt: "Crea uno storyboard per un video di [DURATA] minuti su [ARGOMENTO]. Per ogni pannello (8-12 totali), fornisci:\n- Numero del pannello e timestamp\n- Angolo della camera (primo piano, campo largo, aereo, ecc.)\n- Descrizione della scena (cosa vediamo)\n- Azione (cosa sta succedendo)\n- Testo di dialogo o narrazione\n- Note su audio/musica\n- Transizione al pannello successivo",
    promptTip: "Usa generatori di immagini IA per creare rappresentazioni visive di ogni pannello. Strumenti come Storyboarder (gratuito) o Canva funzionano benissimo per assemblare lo storyboard finale.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "Canva",
      "Claude"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 47,
    title: "Crea Miniature Video",
    subtitle: "Immagini di anteprima che invitano al click",
    category: "video",
    description: "La miniatura è la prima cosa che le persone vedono. Una grande miniatura può moltiplicare per 10 le tue visualizzazioni. L'IA può aiutarti a progettare miniature accattivanti che fanno venire voglia di cliccare.",
    steps: [
      "Analizza miniature di successo nella tua nicchia",
      "Chiedi all'IA idee per il concept della miniatura",
      "Genera o progetta l'immagine della miniatura",
      "Aggiungi testo in grassetto e testa versioni diverse"
    ],
    prompt: "Progetta 3 concept di miniatura YouTube per un video intitolato '[TITOLO DEL VIDEO]'. Per ciascuno:\n- Descrizione dell'immagine (cosa vede lo spettatore)\n- Testo sovrapposto (max 4-5 parole, grande e in grassetto)\n- Schema colori che risalti\n- Espressione facciale o emozione da trasmettere\n- Perché farebbe cliccare qualcuno\n\nStile: [audace e drammatico / pulito e moderno / divertente e colorato]. La miniatura deve essere leggibile anche in dimensioni ridotte.",
    promptTip: "I volti con espressioni ottengono più click. Usa colori contrastanti (giallo su scuro, bianco su blu). Mantieni il testo a massimo 3-5 parole. Testa con A/B testing.",
    tools: [
      "Midjourney",
      "Canva",
      "DALL-E",
      "Photoshop"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Midjourney",
        url: "https://midjourney.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 48,
    title: "Crea Contenuti Time-Lapse",
    subtitle: "Comprimi il tempo visivamente",
    category: "video",
    description: "I video time-lapse sono ipnotici. L'IA può aiutarti a pianificare, creare e modificare contenuti time-lapse, o persino generare effetti time-lapse IA da immagini fisse.",
    steps: [
      "Scegli il soggetto (creazione artistica, natura, costruzione, ecc.)",
      "Configura la registrazione o usa la generazione IA",
      "Elabora il girato con regolazioni di velocità",
      "Aggiungi musica e tocchi finali"
    ],
    prompt: "Aiutami a pianificare un video time-lapse di [SOGGETTO: un disegno in fase di creazione / un tramonto / una pianta che cresce / una città dal giorno alla notte]. Fornisci:\n- Consigli per la configurazione della camera\n- Tempistica degli intervalli (quanto spesso catturare un fotogramma)\n- Tempo totale di registrazione stimato\n- Miglior software per assemblare il time-lapse\n- Suggerimenti musicali che si adattino al ritmo\n- Consigli di editing per risultati fluidi",
    promptTip: "Per time-lapse generati dall'IA, usa gli strumenti di motion di Runway. Per time-lapse reali, scatta a intervalli costanti. Aggiungi musica delicata per la migliore esperienza di visione.",
    tools: [
      "Runway",
      "CapCut",
      "LumaFusion",
      "Hyperlapse"
    ],
    links: [
      {
        name: "CapCut",
        url: "https://www.capcut.com"
      },
      {
        name: "Runway",
        url: "https://runwayml.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 49,
    title: "Crea Transizioni Video",
    subtitle: "Flusso visivo fluido tra le scene",
    category: "video",
    description: "Le transizioni creative rendono i video professionali e dinamici. Gli strumenti IA offrono transizioni intelligenti, e l'IA può aiutarti a pianificare lo stile di transizione perfetto per il tuo contenuto.",
    steps: [
      "Identifica dove servono le transizioni nel tuo video",
      "Scegli stili di transizione che si adattino all'atmosfera del contenuto",
      "Applica usando le funzioni IA del tuo software di editing",
      "Regola il timing per un flusso fluido"
    ],
    prompt: "Suggerisci idee creative per transizioni video per un [TIPO: vlog di viaggi / video educativo / video musicale / contenuto social media]. Per ogni transizione, descrivi:\n- L'effetto visivo\n- Quando usarla (tra quali tipi di scene)\n- Come eseguirla (in camera o in post-produzione)\n- Quale software di editing la gestisce meglio\n\nVoglio transizioni che sembrino [fluide/dinamiche/creative/minimali], non pacchiane o abusate.",
    promptTip: "Meno è meglio con le transizioni. Usa i tagli per contenuti dal ritmo veloce, le dissolvenze per momenti emozionali e transizioni creative con parsimonia per momenti wow.",
    tools: [
      "CapCut",
      "Premiere Pro",
      "DaVinci Resolve",
      "Runway"
    ],
    links: [
      {
        name: "CapCut",
        url: "https://www.capcut.com"
      },
      {
        name: "DaVinci Resolve",
        url: "https://www.blackmagicdesign.com/products/davinciresolve"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 50,
    title: "Genera Effetti Visivi",
    subtitle: "Aggiungi la magia del cinema ai tuoi video",
    category: "video",
    description: "Gli strumenti VFX IA ti permettono di aggiungere effetti visivi da cinema ai tuoi video, dalla rimozione degli sfondi all'aggiunta di fuoco, effetti meteo o elementi fantascientifici. Effetti da Hollywood ora accessibili a tutti.",
    steps: [
      "Filma il tuo girato base",
      "Identifica quali VFX vuoi aggiungere",
      "Usa strumenti VFX IA per generare gli effetti",
      "Componi e renderizza il video finale"
    ],
    prompt: "Voglio aggiungere effetti visivi al mio video. La scena mostra [DESCRIVI SCENA]. Voglio aggiungere [EFFETTO: esplosione / incantesimo magico / cambio meteo / HUD futuristico / superpoteri / rimozione oggetto]. Suggerisci:\n1. Miglior strumento IA per questo effetto specifico\n2. Processo passo dopo passo\n3. Consigli per renderlo realistico\n4. Come far corrispondere illuminazione e colore con il girato originale",
    promptTip: "Runway è il migliore per VFX con IA. Per il lavoro con green screen, filma su uno sfondo di colore uniforme. La coerenza dell'illuminazione è la chiave per effetti credibili.",
    tools: [
      "Runway",
      "After Effects",
      "HitFilm",
      "Unreal Engine"
    ],
    links: [
      {
        name: "Runway",
        url: "https://runwayml.com"
      },
      {
        name: "HitFilm",
        url: "https://fxhome.com/product/hitfilm"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 101,
    title: "Anima Foto e Immagini",
    subtitle: "Dai vita alle immagini statiche",
    category: "video",
    description: "L'IA può trasformare foto e immagini statiche in video animati, aggiungendo movimento, movimento della camera e vita a qualsiasi immagine fissa. Trasforma ritratti in personaggi in movimento, paesaggi in scene cinematografiche o foto di prodotti in animazioni dinamiche.",
    steps: [
      "Scegli una foto o immagine da animare",
      "Caricala su uno strumento di animazione IA",
      "Descrivi il movimento desiderato (panoramica, movimento del personaggio, ecc.)",
      "Genera, rivedi e perfeziona l'animazione"
    ],
    prompt: "Anima questa [TIPO: ritratto / paesaggio / immagine di prodotto / opera d'arte] con il seguente movimento:\n- Camera: [zoom in lento / panoramica da sinistra a destra / orbita intorno al soggetto / allontanamento per rivelare]\n- Movimento del soggetto: [capelli mossi dal vento / ammiccamento e sorriso / acqua che scorre / nuvole in movimento]\n- Durata: [4 secondi / 8 secondi]\n- Stile: [realistico / cinematografico / onirico / drammatico]\n- Loop: [sì, loop continuo / no, singola riproduzione]\n\nL'atmosfera deve sembrare [pacifica/energica/misteriosa/epica].",
    promptTip: "Runway e Pika eccellono nell'image-to-video. MidJourney può creare immagini sorgente perfette da animare. Inizia con semplici movimenti di camera prima di aggiungere movimenti complessi del soggetto.",
    tools: [
      "Runway",
      "Pika",
      "MidJourney",
      "Sora",
      "Kling"
    ],
    links: [
      {
        name: "Runway",
        url: "https://runwayml.com"
      },
      {
        name: "Pika",
        url: "https://pika.art"
      },
      {
        name: "MidJourney",
        url: "https://midjourney.com"
      },
      {
        name: "Kling AI",
        url: "https://klingai.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 102,
    title: "Crea Immagini Usando Riferimenti",
    subtitle: "Guida l'IA con le tue immagini",
    category: "art",
    description: "Usa le tue foto, personaggi o oggetti come riferimenti per generare nuove immagini IA. Carica un personaggio e posizionalo in nuove scene, usa un oggetto come punto di partenza o combina più riferimenti per creare qualcosa di completamente nuovo.",
    steps: [
      "Scegli la tua immagine di riferimento (personaggio, oggetto o stile)",
      "Caricala in uno strumento di immagini IA che supporta i riferimenti",
      "Descrivi cosa vuoi: nuova scena, stile o variazioni",
      "Genera e itera fino a ottenere il risultato perfetto"
    ],
    prompt: "Usando l'immagine allegata come riferimento, crea una nuova immagine dove:\n- Soggetto: [mantieni lo stesso personaggio/oggetto ma posizionalo in una nuova scena]\n- Nuova scena: [DESCRIZIONE: su una spiaggia tropicale al tramonto / in una città futuristica / in uno studio con illuminazione drammatica]\n- Stile: [fotorealistico / illustrazione / pittura a olio / anime / pixel art]\n- Mantieni coerenti: [viso/tratti / colori / proporzioni / abbigliamento]\n- Cambia: [sfondo / illuminazione / posa / vestito / stagione]\n\nMantieni l'identità e le caratteristiche chiave del riferimento adattandolo al nuovo contesto.",
    promptTip: "I riferimenti immagine di MidJourney sono incredibilmente potenti. In Gemini puoi caricare immagini direttamente nel prompt. Usa più riferimenti per combinare elementi da fonti diverse.",
    tools: [
      "MidJourney",
      "Gemini",
      "DALL-E",
      "Stable Diffusion"
    ],
    links: [
      {
        name: "MidJourney",
        url: "https://midjourney.com"
      },
      {
        name: "Gemini",
        url: "https://gemini.google.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 105,
    title: "Crea Avatar Parlanti",
    subtitle: "Presentatori video alimentati dall'IA",
    category: "video",
    description: "Crea avatar parlanti realistici che possono presentare i tuoi contenuti, spiegare concetti o consegnare messaggi, senza mai metterti davanti alla telecamera. Scrivi il copione e scegli un avatar. Perfetto per video educativi, presentazioni, demo di prodotti e contenuti social.",
    steps: [
      "Scrivi il copione o i punti di discussione",
      "Scegli un avatar (o carica la tua foto)",
      "Seleziona una voce e la lingua",
      "Genera il video e scarica"
    ],
    prompt: "Devo creare un video con avatar parlante per [SCOPO: lezione educativa / demo prodotto / contenuto social / presentazione]. Aiutami a:\n1. Scrivere un copione di [DURATA] minuti su [ARGOMENTO]\n2. Suggerire il miglior stile di avatar (professionale / casual / animato)\n3. Consigliare impostazioni vocali (tono, velocità, lingua)\n4. Consigli per renderlo naturale e coinvolgente\n5. Best practice per video con avatar che le persone guardano davvero\n\nIl pubblico è [PUBBLICO] e il tono deve essere [TONO: professionale/amichevole/energico/calmo].",
    promptTip: "HeyGen ti permette di creare avatar dalla tua foto o scegliere tra avatar realistici predefiniti. Mantieni i copioni colloquiali — scrivi per il parlato, non per la lettura. Aggiungi pause ed enfasi per una consegna naturale.",
    tools: [
      "HeyGen",
      "Synthesia",
      "D-ID",
      "Colossyan"
    ],
    links: [
      {
        name: "HeyGen",
        url: "https://heygen.com"
      },
      {
        name: "Synthesia",
        url: "https://www.synthesia.io"
      },
      {
        name: "D-ID",
        url: "https://www.d-id.com"
      },
      {
        name: "Vedi il nostro portfolio media IA",
        url: "https://xperto.media/portfolio"
      }
    ]
  },
  {
    id: 51,
    title: "Crea Liste di Cose da Fare e Piani",
    subtitle: "Organizza la tua vita con l'IA",
    category: "productivity",
    description: "L'IA può aiutarti a scomporre grandi obiettivi in liste di cose da fare attuabili, dare priorità ai compiti e creare piani realistici. Smetti di sentirti sopraffatto e inizia a concludere le cose.",
    steps: [
      "Descrivi il tuo obiettivo o progetto",
      "Chiedi all'IA di suddividerlo in compiti con priorità",
      "Imposta scadenze e dipendenze",
      "Rivedi e aggiusta il piano quotidianamente"
    ],
    prompt: "Devo [GRANDE OBIETTIVO/PROGETTO] entro [SCADENZA]. Aiutami a creare un piano d'azione dettagliato con:\n- Tutti i compiti suddivisi in piccoli passi attuabili\n- Livelli di priorità (alta/media/bassa)\n- Tempo stimato per ogni compito\n- Programma giornaliero suggerito\n- Dipendenze (cosa deve succedere prima di cosa)\n- Traguardi per monitorare i progressi\n\nHo circa [ORE] ore a settimana disponibili per questo.",
    promptTip: "Sii onesto sul tempo disponibile. Chiedi all'IA di 'includere tempo cuscinetto per ritardi imprevisti'. Rivedi e aggiorna il piano settimanalmente.",
    tools: [
      "ChatGPT",
      "Claude",
      "Todoist",
      "Notion"
    ],
    links: [
      {
        name: "Todoist",
        url: "https://todoist.com"
      },
      {
        name: "Notion",
        url: "https://www.notion.so"
      }
    ]
  },
  {
    id: 52,
    title: "Organizza Appunti e Idee",
    subtitle: "Struttura i tuoi pensieri",
    category: "productivity",
    description: "Hai un caos di appunti, idee e pensieri sparsi? L'IA può aiutarti a organizzarli in un sistema chiaro e strutturato che rende tutto facile da trovare e usare.",
    steps: [
      "Scarica tutti i tuoi appunti e idee nell'IA",
      "Chiedile di categorizzarli e organizzarli",
      "Crea un sistema strutturato",
      "Configuralo nella tua app di appunti preferita"
    ],
    prompt: "Ho una raccolta di appunti e idee su [ARGOMENTO/ARGOMENTI MULTIPLI]. Per favore aiutami a:\n1. Categorizzarli in gruppi logici\n2. Identificare gli elementi più importanti/attuabili\n3. Suggerire una struttura di cartelle/tag per organizzarli\n4. Evidenziare connessioni tra le idee\n5. Creare un riepilogo dei temi chiave\n\nEcco i miei appunti:\n[INCOLLA I TUOI APPUNTI]",
    promptTip: "Usa Notion o Obsidian per prendere appunti organizzati. Chiedi all'IA di identificare 'le 3 idee più importanti in questo caos di appunti' per una prioritizzazione rapida.",
    tools: [
      "ChatGPT",
      "Claude",
      "Notion",
      "Obsidian"
    ],
    links: [
      {
        name: "Notion",
        url: "https://www.notion.so"
      },
      {
        name: "Obsidian",
        url: "https://obsidian.md"
      }
    ]
  },
  {
    id: 53,
    title: "Genera Ordini del Giorno per Riunioni",
    subtitle: "Conduci riunioni efficaci",
    category: "productivity",
    description: "Che sia una riunione di un club scolastico, un sync del team di progetto o un gruppo di studio, un buon ordine del giorno tiene tutti concentrati. L'IA crea ordini del giorno strutturati che rendono le riunioni produttive.",
    steps: [
      "Definisci lo scopo della riunione e i partecipanti",
      "Elenca gli argomenti da trattare",
      "Chiedi all'IA di creare un ordine del giorno con tempi",
      "Condividi con i partecipanti prima della riunione"
    ],
    prompt: "Crea un ordine del giorno per una riunione di [DURATA] minuti per [TIPO DI RIUNIONE: riunione del club/gruppo di studio/team di progetto/pianificazione presentazione]. Partecipanti: [NUMERO] persone. Argomenti da trattare:\n[ELENCA I TUOI ARGOMENTI]\n\nIncludi:\n- Allocazione del tempo per ogni punto\n- Chi guida ogni discussione\n- Punti decisionali e azioni da intraprendere\n- 5 minuti per discussione aperta\n- Prossimi passi chiari alla fine",
    promptTip: "Rispetta i limiti di tempo. Inizia con gli argomenti più importanti. Concludi ogni riunione con azioni chiare e chi è responsabile per ciascuna.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Notion"
    ],
    links: [
      {
        name: "Google Calendar",
        url: "https://calendar.google.com"
      },
      {
        name: "Notion",
        url: "https://www.notion.so"
      }
    ]
  },
  {
    id: 54,
    title: "Crea Formule per Fogli di Calcolo",
    subtitle: "Padroneggia Excel e Google Sheets",
    category: "productivity",
    description: "Hai difficoltà con formule complesse nei fogli di calcolo? L'IA può scriverle per te. Descrivi semplicemente cosa vuoi calcolare in linguaggio naturale e ottieni la formula perfetta.",
    steps: [
      "Descrivi quali dati hai e cosa vuoi calcolare",
      "Specifica se è per Excel o Google Sheets",
      "Chiedi all'IA di scrivere la formula",
      "Testala con i tuoi dati e regola se necessario"
    ],
    prompt: "Sto usando [Google Sheets/Excel] e ho bisogno di una formula che [DESCRIVI COSA VUOI]. I miei dati sono nelle colonne [DESCRIVI LA DISPOSIZIONE DEI DATI]. Per esempio:\n- La colonna A ha [TIPO DI DATI]\n- La colonna B ha [TIPO DI DATI]\n- Voglio il risultato nella colonna C\n\nPer favore fornisci:\n1. La formula esatta\n2. Spiegazione di come funziona\n3. Come modificarla per scenari diversi",
    promptTip: "L'IA è fantastica con formule complesse come CERCA.VERT, INDICE-CONFRONTA e SE nidificati. Descrivi la logica a parole. Chiedi 'Puoi semplificare questa formula?' per l'ottimizzazione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Google Sheets AI"
    ],
    links: [
      {
        name: "Google Sheets",
        url: "https://sheets.google.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 55,
    title: "Automatizza Compiti Ripetitivi",
    subtitle: "Lavora in modo intelligente, non più duro",
    category: "productivity",
    description: "Se ti ritrovi a fare la stessa cosa ripetutamente, l'IA può aiutarti ad automatizzarla. Dall'ordinare email al rinominare file al generare report, l'automazione ti fa risparmiare ore.",
    steps: [
      "Identifica un compito che fai ripetutamente",
      "Descrivi il compito passo dopo passo all'IA",
      "Chiedi una soluzione di automazione",
      "Configurala usando gli strumenti consigliati"
    ],
    prompt: "Devo ripetutamente [DESCRIVI IL COMPITO RIPETITIVO]. Mi prende circa [TEMPO] ogni volta e lo faccio [FREQUENZA]. Aiutami ad automatizzarlo:\n1. Quale strumento o approccio funzionerebbe meglio?\n2. Istruzioni di configurazione passo dopo passo\n3. Come gestire i casi particolari\n4. Tempo stimato risparmiato a settimana\n\nIl mio livello con l'automazione: [principiante/intermedio/avanzato].",
    promptTip: "Inizia con automazioni semplici usando Zapier o IFTTT. Per operazioni sui file, chiedi all'IA di scrivere uno script Python. L'investimento di tempo nella configurazione ripaga velocemente.",
    tools: [
      "ChatGPT",
      "Zapier",
      "IFTTT",
      "Make"
    ],
    links: [
      {
        name: "Zapier",
        url: "https://zapier.com"
      },
      {
        name: "IFTTT",
        url: "https://ifttt.com"
      }
    ]
  },
  {
    id: 56,
    title: "Crea Dashboard Personali",
    subtitle: "Monitora ciò che conta per te",
    category: "productivity",
    description: "L'IA può aiutarti a progettare dashboard personali in Notion, Google Sheets o altri strumenti per monitorare obiettivi, abitudini, voti o qualsiasi metrica importante per te.",
    steps: [
      "Decidi cosa vuoi monitorare",
      "Chiedi all'IA di progettare un layout per la dashboard",
      "Costruiscila in Notion, Sheets o il tuo strumento preferito",
      "Aggiornala regolarmente e analizza le tendenze"
    ],
    prompt: "Aiutami a creare una dashboard personale per monitorare [COSA: voti scolastici/obiettivi fitness/tracciamento abitudini/budget/progresso progetto]. Voglio usare [Notion/Google Sheets/altro]. Progetta:\n- Quali dati monitorare\n- Layout visivo (sezioni, grafici, barre di progresso)\n- Quanto spesso aggiornare\n- Metriche chiave a colpo d'occhio\n- Un template che posso iniziare a usare subito",
    promptTip: "Mantienilo semplice all'inizio - monitora 3-5 cose al massimo. I template Notion sono ottimi per dashboard visive. Google Sheets funziona meglio per il monitoraggio con molti dati.",
    tools: [
      "Notion",
      "Google Sheets",
      "ChatGPT",
      "Claude"
    ],
    links: [
      {
        name: "Notion Templates",
        url: "https://www.notion.so/templates"
      },
      {
        name: "Google Sheets",
        url: "https://sheets.google.com"
      }
    ]
  },
  {
    id: 57,
    title: "Crea Cronologie di Progetto",
    subtitle: "Pianifica qualsiasi progetto visivamente",
    category: "productivity",
    description: "Che sia un progetto scolastico, un evento o un obiettivo personale, l'IA può creare cronologie dettagliate con traguardi, scadenze e dipendenze per tenerti in carreggiata.",
    steps: [
      "Descrivi il tuo progetto e la scadenza",
      "Elenca tutti i compiti coinvolti",
      "Chiedi all'IA di creare una cronologia con traguardi",
      "Monitora i progressi rispetto alla cronologia"
    ],
    prompt: "Crea una cronologia di progetto per [PROGETTO] che deve essere completato entro [SCADENZA]. Data di inizio: [DATA DI INIZIO]. Includi:\n- Tutte le fasi e i compiti principali\n- Traguardi e punti di controllo\n- Dipendenze dei compiti (cosa deve finire prima che altro inizi)\n- Tempo cuscinetto per ritardi imprevisti\n- Obiettivi settimanali\n\nFormattala come tabella con: Compito | Data Inizio | Data Fine | Stato | Note",
    promptTip: "Usa strumenti per diagrammi di Gantt (gratuiti come TeamGantt o template Gantt per Google Sheets) per visualizzare la cronologia. Rivedi e regola settimanalmente.",
    tools: [
      "ChatGPT",
      "Claude",
      "Notion",
      "Trello"
    ],
    links: [
      {
        name: "Trello",
        url: "https://trello.com"
      },
      {
        name: "Notion",
        url: "https://www.notion.so"
      }
    ]
  },
  {
    id: 58,
    title: "Genera Checklist",
    subtitle: "Non dimenticare mai un passaggio",
    category: "productivity",
    description: "L'IA crea checklist complete per qualsiasi compito, dalla preparazione della valigia per un viaggio alla preparazione per un esame al lancio di un progetto. Le checklist assicurano che non ti sfugga nulla di importante.",
    steps: [
      "Descrivi il compito o l'evento per cui ti stai preparando",
      "Chiedi all'IA di generare una checklist completa",
      "Personalizza e dai priorità agli elementi",
      "Usala man mano, spuntando gli elementi completati"
    ],
    prompt: "Crea una checklist dettagliata per [COMPITO/EVENTO: preparare la valigia per un viaggio / prepararsi per un esame / organizzare un evento / lanciare un progetto / traslocare in una nuova stanza]. Includi:\n- Tutti gli elementi organizzati per categoria\n- Indicatori di priorità (indispensabile vs. opzionale)\n- Cronologia (quando fare ogni cosa)\n- Consigli utili per ogni categoria\n\nRendila completa così non dimentico nulla.",
    promptTip: "Salva le tue checklist come template per eventi ricorrenti. Chiedi all'IA 'Cosa probabilmente sto dimenticando?' dopo aver revisionato la tua checklist.",
    tools: [
      "ChatGPT",
      "Claude",
      "Todoist",
      "Google Keep"
    ],
    links: [
      {
        name: "Todoist",
        url: "https://todoist.com"
      },
      {
        name: "Google Keep",
        url: "https://keep.google.com"
      }
    ]
  },
  {
    id: 59,
    title: "Organizza i File Digitali",
    subtitle: "Metti ordine nella tua vita digitale",
    category: "productivity",
    description: "Il tuo desktop è un disastro? La cartella Download trabocca? L'IA può aiutarti a creare un sistema di organizzazione file, suggerire convenzioni di denominazione e persino aiutare ad automatizzare l'ordinamento dei file.",
    steps: [
      "Descrivi la tua situazione attuale dei file",
      "Chiedi all'IA di progettare un sistema di organizzazione",
      "Crea la struttura delle cartelle",
      "Sposta i file e mantieni il sistema"
    ],
    prompt: "I miei file digitali sono un disastro. Ho principalmente [TIPI: documenti scolastici, foto, musica, progetti, download]. Aiutami a:\n1. Progettare una struttura di cartelle sensata\n2. Creare convenzioni di denominazione per i file\n3. Decidere cosa tenere, archiviare o eliminare\n4. Configurare un sistema per rimanere organizzato in futuro\n5. Suggerire strumenti per l'organizzazione automatica dei file\n\nUso [Windows/Mac/entrambi]. Conservo i file su [disco locale/Google Drive/entrambi].",
    promptTip: "Il miglior sistema è quello che userai davvero. Mantienilo semplice: poche cartelle con nomi chiari. Usa le date nei nomi dei file (formato AAAA-MM-GG) per l'ordinamento automatico.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Drive",
      "Dropbox"
    ],
    links: [
      {
        name: "Google Drive",
        url: "https://drive.google.com"
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com"
      }
    ]
  },
  {
    id: 60,
    title: "Crea Template per Documenti",
    subtitle: "Formati riutilizzabili per tutto",
    category: "productivity",
    description: "Smetti di partire da zero ogni volta. L'IA può creare template professionali per saggi, relazioni, lettere, fatture, curriculum e qualsiasi altro documento che usi regolarmente.",
    steps: [
      "Identifica i documenti che crei frequentemente",
      "Descrivi il formato e lo stile necessari",
      "Chiedi all'IA di generare un template",
      "Salva e riutilizza per i documenti futuri"
    ],
    prompt: "Crea un template professionale per [TIPO DI DOCUMENTO: saggio/relazione di laboratorio/curriculum/lettera di presentazione/note di riunione/proposta di progetto]. Includi:\n- Formattazione e struttura corrette\n- Testo segnaposto che mostra cosa va in ogni sezione\n- Linee guida di formattazione (font, spaziatura, margini)\n- Contenuto di esempio che posso sostituire con il mio\n\nStile: [accademico/professionale/creativo/minimale]. Formato per [Google Docs/Word].",
    promptTip: "Crea template per tutto ciò che scrivi regolarmente: relazioni di laboratorio, recensioni di libri, note di riunione. Salvali in una cartella 'Template' per un accesso rapido.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Docs",
      "Canva"
    ],
    links: [
      {
        name: "Google Docs Templates",
        url: "https://docs.google.com/document/u/0/?ftv=1"
      },
      {
        name: "Canva Templates",
        url: "https://www.canva.com/templates"
      }
    ]
  },
  {
    id: 61,
    title: "Scrivi Codice in Qualsiasi Linguaggio",
    subtitle: "Python, JavaScript e altro",
    category: "coding",
    description: "L'IA può scrivere codice in praticamente qualsiasi linguaggio di programmazione. Che tu stia costruendo una pagina web, automatizzando un compito o imparando a programmare, l'IA è come avere un programmatore esperto che ti aiuta.",
    steps: [
      "Descrivi cosa vuoi che il codice faccia in linguaggio naturale",
      "Specifica il linguaggio di programmazione",
      "Chiedi all'IA di scrivere il codice con commenti",
      "Testalo, capiscilo e modifica secondo necessità"
    ],
    prompt: "Scrivi un programma in [LINGUAGGIO: Python/JavaScript/HTML/CSS/ecc.] che [DESCRIVI COSA DEVE FARE]. Requisiti:\n- Includi commenti che spiegano ogni sezione\n- Gestisci casi limite ed errori con eleganza\n- Usa uno stile di codice pulito e leggibile\n- Includi una breve spiegazione di come funziona\n\nIl mio livello di esperienza: [principiante/intermedio/avanzato].",
    promptTip: "Comprendi sempre il codice prima di usarlo. Chiedi all'IA 'Spiega riga per riga cosa fa questo codice'. Inizia con Python per compiti generali o JavaScript per progetti web.",
    tools: [
      "Claude",
      "ChatGPT",
      "GitHub Copilot",
      "Replit"
    ],
    links: [
      {
        name: "Replit",
        url: "https://replit.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 62,
    title: "Fai il Debug del Codice Esistente",
    subtitle: "Trova e correggi gli errori",
    category: "coding",
    description: "Hai un bug nel codice? L'IA può analizzare il tuo codice, identificare il problema, spiegare perché succede e suggerire una correzione. Come avere uno sviluppatore senior che revisiona il tuo codice.",
    steps: [
      "Incolla il codice e descrivi l'errore o il comportamento inaspettato",
      "Includi eventuali messaggi di errore",
      "Chiedi all'IA di trovare il bug e spiegarlo",
      "Applica la correzione e testa"
    ],
    prompt: "Ho un bug nel mio codice [LINGUAGGIO]. Ecco il codice:\n\n```\n[INCOLLA IL TUO CODICE]\n```\n\nL'errore/problema è: [DESCRIVI IL PROBLEMA O INCOLLA IL MESSAGGIO DI ERRORE]\n\nPer favore:\n1. Identifica il bug\n2. Spiega perché sta accadendo\n3. Mostra il codice corretto\n4. Spiega cosa hai cambiato e perché\n5. Suggerisci come prevenire bug simili",
    promptTip: "Includi il messaggio di errore COMPLETO, non solo 'non funziona'. Descrivi cosa ti aspettavi vs. cosa è successo. Chiedi 'Quali altri potenziali problemi ci sono in questo codice?'",
    tools: [
      "Claude",
      "ChatGPT",
      "GitHub Copilot",
      "Replit"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com"
      }
    ]
  },
  {
    id: 63,
    title: "Crea Siti Web",
    subtitle: "Costruisci la tua presenza online",
    category: "coding",
    description: "L'IA può generare siti web completi, da semplici pagine personali ad applicazioni web complesse. Descrivi cosa vuoi e ottieni codice HTML, CSS e JavaScript funzionante.",
    steps: [
      "Pianifica il tuo sito web: scopo, pagine, funzionalità",
      "Descrivi il design e le funzionalità all'IA",
      "L'IA genera il codice",
      "Pubblica usando GitHub Pages, Netlify o Vercel"
    ],
    prompt: "Crea un sito web [TIPO: portfolio personale / blog / landing page / vetrina progetti]. Requisiti:\n- Design responsive (funziona su mobile e desktop)\n- Estetica moderna e pulita\n- Sezioni: [elenca le tue sezioni]\n- Schema colori: [le tue preferenze]\n- Includi [funzionalità: modulo di contatto/galleria immagini/menu di navigazione]\n\nUsa HTML, CSS e JavaScript vanilla. Rendilo pubblicabile come pagina singola.",
    promptTip: "Inizia con un sito a pagina singola ed espandi. Usa GitHub Pages per l'hosting gratuito. Chiedi all'IA di aggiungere funzionalità specifiche una alla volta. Testa sempre su mobile.",
    tools: [
      "Claude",
      "ChatGPT",
      "Replit",
      "GitHub Copilot"
    ],
    links: [
      {
        name: "GitHub Pages",
        url: "https://pages.github.com"
      },
      {
        name: "Replit",
        url: "https://replit.com"
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com"
      }
    ]
  },
  {
    id: 64,
    title: "Crea App Mobile",
    subtitle: "Trasforma le idee in app",
    category: "coding",
    description: "L'IA può aiutarti a creare app mobile usando framework come React Native o Flutter. Descrivi la tua idea e ottieni codice funzionante, o usa strumenti no-code con la guida dell'IA.",
    steps: [
      "Definisci la tua idea di app e le funzionalità principali",
      "Scegli un framework o una piattaforma no-code",
      "Usa l'IA per generare il codice o guidare la costruzione",
      "Testa sul tuo dispositivo e itera"
    ],
    prompt: "Voglio creare un'app mobile che [DESCRIVI LA TUA IDEA DI APP]. Piattaforma target: [iOS/Android/entrambi]. Funzionalità principali:\n1. [Funzionalità 1]\n2. [Funzionalità 2]\n3. [Funzionalità 3]\n\nAiutami a:\n- Scegliere il miglior stack tecnologico per un principiante\n- Progettare le schermate/pagine principali\n- Scrivere il codice delle funzionalità principali\n- Spiegare come testarla sul mio telefono",
    promptTip: "Per i principianti, prova Thunkable o FlutterFlow (no-code/low-code). Per imparare, React Native con Expo è adatto ai principianti. Inizia con UNA funzionalità principale, non con tutto insieme.",
    tools: [
      "Claude",
      "ChatGPT",
      "Replit",
      "FlutterFlow"
    ],
    links: [
      {
        name: "Expo",
        url: "https://expo.dev"
      },
      {
        name: "FlutterFlow",
        url: "https://flutterflow.io"
      }
    ]
  },
  {
    id: 65,
    title: "Crea Estensioni per Browser",
    subtitle: "Personalizza la tua esperienza di navigazione",
    category: "coding",
    description: "Le estensioni per browser sono sorprendentemente semplici da creare. L'IA può creare estensioni personalizzate per Chrome o Firefox che aggiungono funzionalità alla tua esperienza di navigazione.",
    steps: [
      "Definisci cosa vuoi che faccia la tua estensione",
      "Chiedi all'IA di generare il codice dell'estensione",
      "Caricala come estensione non pacchettizzata in Chrome",
      "Testa e perfeziona"
    ],
    prompt: "Crea un'estensione per Chrome che [DESCRIVI FUNZIONALITÀ: cambia il colore di sfondo della pagina / salva il testo evidenziato / blocca certi siti durante lo studio / aggiunge un contatore di parole a qualsiasi campo di testo]. Fornisci:\n- File manifest.json\n- Script background\n- Script contenuto\n- HTML/CSS/JS del popup (se necessario)\n- Istruzioni di installazione passo dopo passo\n\nMantienilo semplice e ben commentato.",
    promptTip: "Inizia con la versione più semplice possibile. Le estensioni Chrome hanno bisogno solo di 3-4 file. Carica le estensioni non pacchettizzate su chrome://extensions con la modalità Sviluppatore attiva.",
    tools: [
      "Claude",
      "ChatGPT",
      "GitHub Copilot"
    ],
    links: [
      {
        name: "Chrome Extensions Docs",
        url: "https://developer.chrome.com/docs/extensions"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 66,
    title: "Genera Query per Database",
    subtitle: "Lavora con i dati in modo efficiente",
    category: "coding",
    description: "Hai bisogno di estrarre dati specifici da un database? L'IA può scrivere query SQL, spiegare come funzionano e aiutarti a comprendere i concetti dei database. Descrivi ciò che ti serve in italiano semplice.",
    steps: [
      "Descrivi la struttura del tuo database",
      "Indica all'IA quali dati ti servono",
      "L'IA scrive la query SQL",
      "Testa e modifica secondo necessità"
    ],
    prompt: "Ho un database con queste tabelle:\n[DESCRIVI LE TUE TABELLE E COLONNE]\n\nHo bisogno di una query SQL che [DESCRIVI QUALI DATI VUOI]. Per favore:\n1. Scrivi la query\n2. Spiega ogni parte\n3. Mostra il formato dell'output atteso\n4. Suggerisci un indice che velocizzerebbe questa query\n5. Mostra come modificarla per domande correlate",
    promptTip: "Descrivi le tue tabelle chiaramente. Chiedi all'IA 'Spiega questa query a un principiante' se stai imparando. Esercitati con playground SQL gratuiti online.",
    tools: [
      "ChatGPT",
      "Claude",
      "GitHub Copilot"
    ],
    links: [
      {
        name: "SQLite Online",
        url: "https://sqliteonline.com"
      },
      {
        name: "W3Schools SQL",
        url: "https://www.w3schools.com/sql"
      }
    ]
  },
  {
    id: 67,
    title: "Crea API",
    subtitle: "Collega sistemi tra loro",
    category: "coding",
    description: "Le API permettono a diverse applicazioni di comunicare tra loro. L'IA può aiutarti a progettare e costruire API, che tu stia creando un backend per la tua app o integrando con servizi esterni.",
    steps: [
      "Definisci cosa deve fare la tua API",
      "Scegli un framework (Express, Flask, FastAPI)",
      "Chiedi all'IA di generare il codice dell'API",
      "Testa con Postman o curl"
    ],
    prompt: "Crea un'API REST usando [Framework: Express.js/Flask/FastAPI] che [DESCRIVI FUNZIONALITÀ]. Endpoint necessari:\n- GET [endpoint] - [cosa restituisce]\n- POST [endpoint] - [cosa crea]\n- PUT [endpoint] - [cosa aggiorna]\n- DELETE [endpoint] - [cosa rimuove]\n\nIncludi gestione degli errori, validazione dell'input e documentazione chiara per ogni endpoint.",
    promptTip: "Inizia con Flask (Python) o Express (JavaScript) - sono i più facili da imparare. Testa sempre la tua API con Postman prima di collegarla a un frontend.",
    tools: [
      "Claude",
      "ChatGPT",
      "Replit",
      "Postman"
    ],
    links: [
      {
        name: "Postman",
        url: "https://www.postman.com"
      },
      {
        name: "Replit",
        url: "https://replit.com"
      }
    ]
  },
  {
    id: 68,
    title: "Costruisci Chatbot",
    subtitle: "Crea esperienze di IA conversazionale",
    category: "coding",
    description: "Costruisci il tuo chatbot che può rispondere a domande, fornire raccomandazioni o semplicemente fare conversazioni divertenti. L'IA può aiutarti a progettare il flusso conversazionale e scrivere il codice.",
    steps: [
      "Definisci lo scopo e la personalità del chatbot",
      "Progetta il flusso conversazionale",
      "Usa un'API IA o una piattaforma per chatbot",
      "Testa e migliora in base alle interazioni degli utenti"
    ],
    prompt: "Aiutami a costruire un chatbot per [SCOPO: assistenza clienti / assistente allo studio / conversazioni divertenti / quiz game]. Il chatbot dovrebbe:\n- Avere una personalità [PERSONALITÀ: amichevole/professionale/umoristica]\n- Gestire questi tipi di domande: [ELENCA ARGOMENTI]\n- Fornire risposte utili con link quando appropriato\n- Avere un fallback per domande a cui non può rispondere\n\nSuggerisci la miglior piattaforma/approccio per uno sviluppatore [principiante/intermedio].",
    promptTip: "Inizia con Chatfuel o ManyChat per chatbot no-code. Per la programmazione, usa l'API OpenAI con Python. Testa sempre con utenti reali per trovare lacune nelle conoscenze del tuo chatbot.",
    tools: [
      "Claude",
      "ChatGPT API",
      "Chatfuel",
      "Botpress"
    ],
    links: [
      {
        name: "Chatfuel",
        url: "https://chatfuel.com"
      },
      {
        name: "Botpress",
        url: "https://botpress.com"
      }
    ]
  },
  {
    id: 69,
    title: "Automatizza Compiti Web",
    subtitle: "Scraping e automazione",
    category: "coding",
    description: "L'IA può aiutarti ad automatizzare compiti web come raccogliere dati dai siti, compilare moduli, monitorare prezzi o pubblicare contenuti. Risparmia ore di lavoro manuale con l'automazione intelligente.",
    steps: [
      "Identifica il compito web che vuoi automatizzare",
      "Chiedi all'IA di scrivere lo script di automazione",
      "Testa su piccola scala prima",
      "Programmalo per l'esecuzione automatica"
    ],
    prompt: "Voglio automatizzare [COMPITO: raccogliere prezzi da un sito / scaricare file / compilare un modulo / monitorare una pagina per cambiamenti]. Il sito è [URL o descrivi il sito]. Aiutami a:\n1. Scegliere lo strumento migliore (Python/Selenium/Puppeteer/no-code)\n2. Scrivere lo script di automazione\n3. Gestire problemi comuni (captcha, limiti di velocità)\n4. Programmarlo per l'esecuzione automatica\n\nIl mio livello di programmazione: [principiante/intermedio/avanzato].",
    promptTip: "Rispetta sempre i termini di servizio dei siti e il robots.txt. Inizia con Python + BeautifulSoup per scraping semplice. Usa Selenium per siti interattivi.",
    tools: [
      "Claude",
      "ChatGPT",
      "Python",
      "Selenium"
    ],
    links: [
      {
        name: "Python.org",
        url: "https://www.python.org"
      },
      {
        name: "Replit",
        url: "https://replit.com"
      }
    ]
  },
  {
    id: 70,
    title: "Crea Visualizzazioni di Dati",
    subtitle: "Grafici, diagrammi e dashboard",
    category: "coding",
    description: "Trasforma numeri noiosi in visualizzazioni belle e informative. L'IA può creare grafici, diagrammi e dashboard interattive dai tuoi dati, rendendo pattern e tendenze facili da vedere.",
    steps: [
      "Prepara i tuoi dati (foglio di calcolo o CSV)",
      "Descrivi cosa vuoi visualizzare",
      "Chiedi all'IA di creare il codice di visualizzazione",
      "Personalizza colori, etichette e stile"
    ],
    prompt: "Ho dati su [DESCRIVI I TUOI DATI]. Crea un [TIPO DI GRAFICO: grafico a barre / grafico a linee / grafico a torta / grafico a dispersione / dashboard] usando [Python matplotlib / JavaScript Chart.js / D3.js]. La visualizzazione deve:\n- Mostrare chiaramente [QUALE INSIGHT]\n- Usare colori accessibili e attraenti\n- Includere etichette, titolo e legenda\n- Essere interattiva se possibile\n\nEcco i miei dati: [INCOLLA O DESCRIVI DATI]",
    promptTip: "Scegli il tipo di grafico giusto: barre per confronti, linee per tendenze, torta per proporzioni, dispersione per correlazioni. Usa Chart.js per il web o matplotlib per Python.",
    tools: [
      "Claude",
      "ChatGPT",
      "Python",
      "Observable"
    ],
    links: [
      {
        name: "Chart.js",
        url: "https://www.chartjs.org"
      },
      {
        name: "Observable",
        url: "https://observablehq.com"
      }
    ]
  },
  {
    id: 104,
    title: "Pubblica un Sito Web Gratuito su GitHub",
    subtitle: "Condividi le tue creazioni IA con il mondo",
    category: "coding",
    description: "GitHub Pages ti permette di pubblicare qualsiasi file HTML come sito web live — gratis. È il modo perfetto per condividere le tue creazioni IA interattive: giochi, quiz, portfolio, app e altro. Nessun costo di hosting, nessuna configurazione server. Carica il file e ottieni un link che chiunque può visitare.",
    steps: [
      "Crea un account gratuito su github.com",
      "Crea un nuovo repository pubblico",
      "Carica il tuo file HTML (chiamalo index.html)",
      "Vai su Settings → Pages, seleziona il branch 'main' e salva",
      "Il tuo sito è live su tuonomeutente.github.io/nome-repo/"
    ],
    prompt: "Ho creato un [TIPO: gioco / quiz / sito web / app / portfolio] interattivo come file HTML singolo usando l'IA. Aiutami a pubblicarlo su GitHub Pages passo dopo passo. Sono un principiante assoluto e non ho mai usato GitHub.\n\nPer favore spiega:\n1. Come creare un account GitHub\n2. Come creare un repository\n3. Come caricare il mio file\n4. Come abilitare GitHub Pages\n5. Come condividere il link\n6. Come aggiornare il sito in seguito\n7. Come usare un nome di dominio personalizzato (opzionale)\n\nRendilo semplice — non conosco termini di programmazione.",
    promptTip: "Nomina il tuo file principale 'index.html' — è essenziale per GitHub Pages. Puoi ospitare più pagine e anche aggiungere immagini. Per un portfolio, considera di nominare il tuo repo 'tuonomeutente.github.io' per un URL pulito.",
    tools: [
      "GitHub Pages",
      "ChatGPT",
      "Claude"
    ],
    links: [
      {
        name: "GitHub Pages",
        url: "https://pages.github.com"
      },
      {
        name: "GitHub",
        url: "https://github.com"
      }
    ]
  },
  {
    id: 107,
    title: "Crea Diagrammi con Mermaid",
    subtitle: "Diagrammi di flusso, timeline e altro da testo",
    category: "coding",
    description: "Mermaid è un linguaggio semplice basato su testo che l'IA può scrivere per te per creare diagrammi belli — diagrammi di flusso, diagrammi di sequenza, timeline, mappe mentali, diagrammi di Gantt e altro. Descrivi ciò di cui hai bisogno e l'IA genera il codice Mermaid. Incollalo in qualsiasi visualizzatore Mermaid e ottieni un diagramma professionale istantaneamente.",
    steps: [
      "Descrivi il diagramma di cui hai bisogno (diagramma di flusso, timeline, processo, ecc.)",
      "Chiedi all'IA di generare codice Mermaid",
      "Incolla il codice in un editor Mermaid live o strumento compatibile",
      "Esporta come immagine o incorpora nei tuoi documenti"
    ],
    prompt: "Crea un diagramma Mermaid per [DESCRIZIONE: un diagramma di flusso del processo di login / una timeline della Rivoluzione Francese / un diagramma di sequenza di una chiamata API / un organigramma del nostro team / una mappa mentale delle applicazioni IA].\n\nRequisiti:\n- Usa etichette chiare e leggibili\n- Aggiungi colori o stili per evidenziare elementi chiave\n- Includi tutti i passaggi/nodi principali\n- Rendi facile seguire il flusso\n\nDammi il codice Mermaid che posso incollare direttamente nel Mermaid Live Editor.",
    promptTip: "Usa il Mermaid Live Editor (mermaid.live) per visualizzare ed esportare i diagrammi istantaneamente. GitHub visualizza anche i diagrammi Mermaid nativamente nei file Markdown. Claude e ChatGPT scrivono entrambi eccellente codice Mermaid.",
    tools: [
      "Claude",
      "ChatGPT",
      "Mermaid Live Editor",
      "GitHub"
    ],
    links: [
      {
        name: "Mermaid Live Editor",
        url: "https://mermaid.live"
      },
      {
        name: "Mermaid Docs",
        url: "https://mermaid.js.org"
      }
    ]
  },
  {
    id: 71,
    title: "Crea Piani Aziendali",
    subtitle: "Struttura la tua idea di startup",
    category: "business",
    description: "Hai un'idea imprenditoriale? L'IA può aiutarti a scrivere un business plan professionale che copre analisi di mercato, proiezioni finanziarie, strategia di marketing e altro. Perfetto per progetti scolastici o iniziative reali.",
    steps: [
      "Descrivi la tua idea imprenditoriale in dettaglio",
      "Chiedi all'IA di creare un business plan strutturato",
      "Ricerca e valida le ipotesi chiave",
      "Perfeziona e presenta il tuo piano"
    ],
    prompt: "Crea un business plan per [IDEA IMPRENDITORIALE]. Includi:\n- Executive Summary\n- Problema e Soluzione\n- Mercato Target (dimensione, demografici, esigenze)\n- Proposta di Valore\n- Modello di Ricavo (come guadagniamo)\n- Strategia di Marketing\n- Analisi Competitiva (3 competitor)\n- Struttura del team necessaria\n- Proiezioni finanziarie (Anno 1)\n- Rischi Chiave e Mitigazione\n\nRendilo professionale ma chiaro abbastanza per una presentazione scolastica.",
    promptTip: "Inizia dal problema che stai risolvendo — è la parte più importante. Chiedi all'IA di 'trovare i punti deboli in questo business plan' per un feedback onesto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ],
    links: [
      {
        name: "Lean Canvas",
        url: "https://leanstack.com/lean-canvas"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 72,
    title: "Genera Strategie di Marketing",
    subtitle: "Raggiungi il tuo pubblico efficacemente",
    category: "business",
    description: "L'IA può creare strategie di marketing complete su misura per il tuo prodotto, budget e pubblico target. Dal social media al content marketing al growth hacking.",
    steps: [
      "Definisci il tuo prodotto/servizio e pubblico target",
      "Chiedi all'IA di creare una strategia di marketing",
      "Scegli canali e tattiche adatti al tuo budget",
      "Crea un calendario editoriale e parti"
    ],
    prompt: "Crea una strategia di marketing per [PRODOTTO/SERVIZIO/BRAND] rivolta a [PUBBLICO: adolescenti/giovani adulti/ecc.] in [LUOGO/MERCATO]. Budget: [basso/medio/alto o importo specifico]. Includi:\n- I 3 migliori canali di marketing su cui concentrarsi\n- Strategia di contenuti (cosa pubblicare, quanto spesso)\n- Piano social media\n- Tattiche di engagement\n- Idee di growth hacking\n- Metriche chiave da monitorare\n- Piano d'azione per 30 giorni",
    promptTip: "Concentrati su 2-3 canali al massimo invece di provare tutto. Chiedi all'IA 'idee di guerrilla marketing a budget zero' per approcci creativi.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "HubSpot",
        url: "https://www.hubspot.com"
      },
      {
        name: "Canva",
        url: "https://www.canva.com"
      }
    ]
  },
  {
    id: 73,
    title: "Progetta Pitch Deck",
    subtitle: "Presenta le tue idee in modo convincente",
    category: "business",
    description: "Un grande pitch deck può conquistare investitori, partner o giudici nelle competizioni. L'IA ti aiuta a strutturare il pitch, scrivere copy persuasivo e progettare slide che convincono.",
    steps: [
      "Definisci il tuo pitch: a chi presenti e perché",
      "Chiedi all'IA di strutturare un deck di 10-12 slide",
      "Crea ogni slide con messaggi chiave",
      "Esercita la presentazione"
    ],
    prompt: "Crea un pitch deck di [NUMERO] slide per [IDEA/AZIENDA] da presentare a [PUBBLICO: investitori/giudici/classe/potenziali partner]. Includi queste slide:\n1. Slide titolo (tagline accattivante)\n2. Problema\n3. Soluzione\n4. Dimensione del mercato\n5. Come funziona\n6. Trazione/prove\n7. Modello di business\n8. Concorrenza\n9. Team\n10. Richiesta (cosa serve)\n\nPer ogni slide, fornisci il messaggio chiave, i punti di discussione e il visual suggerito.",
    promptTip: "Mantieni ogni slide a UNA idea. Usa la regola 10-20-30: 10 slide, 20 minuti, font minimo 30pt. Esercitati a raccontare una storia, non a leggere le slide.",
    tools: [
      "ChatGPT",
      "Claude",
      "Canva",
      "Gamma"
    ],
    links: [
      {
        name: "Gamma",
        url: "https://gamma.app"
      },
      {
        name: "Canva Presentations",
        url: "https://www.canva.com/presentations"
      }
    ]
  },
  {
    id: 74,
    title: "Analizza le Tendenze di Mercato",
    subtitle: "Comprendi il tuo mercato",
    category: "business",
    description: "L'IA può ricercare e analizzare le tendenze di mercato, aiutandoti a comprendere le dinamiche del settore, le opportunità emergenti e le potenziali minacce. Essenziale per qualsiasi idea imprenditoriale o progetto scolastico.",
    steps: [
      "Definisci il mercato o settore che vuoi analizzare",
      "Chiedi all'IA di ricercare le tendenze attuali",
      "Verifica le fonti dei dati e valida i risultati",
      "Crea un report di analisi di mercato"
    ],
    prompt: "Analizza le tendenze di mercato attuali per [SETTORE/MERCATO] in [REGIONE/GLOBALE]. Includi:\n- Dimensione del mercato e tasso di crescita\n- Top 5 tendenze attuali\n- Tecnologie emergenti o disruption\n- Cambiamenti nel comportamento dei consumatori\n- Attori chiave e la loro quota di mercato\n- Opportunità per nuovi entranti\n- Minacce e sfide\n- Previsioni per i prossimi 2-3 anni\n\nMotiva il tuo ragionamento e suggerisci dove trovare dati più recenti.",
    promptTip: "Usa Perplexity per dati di mercato aggiornati con fonti. Verifica le analisi dell'IA con report di settore reali. Chiedi 'Quali fonti di dati dovrei controllare per verificare questo?'",
    tools: [
      "Perplexity",
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      },
      {
        name: "Statista",
        url: "https://www.statista.com"
      }
    ]
  },
  {
    id: 75,
    title: "Crea Proiezioni Finanziarie",
    subtitle: "Pianifica le tue finanze",
    category: "business",
    description: "L'IA può aiutarti a costruire modelli finanziari, proiettare ricavi, stimare costi e creare le sezioni finanziarie dei business plan. Anche se non sei un esperto di finanza.",
    steps: [
      "Descrivi il tuo modello di business e le fonti di ricavo",
      "Fornisci eventuali stime dei costi",
      "Chiedi all'IA di creare proiezioni finanziarie",
      "Costruisci il foglio di calcolo e regola le ipotesi"
    ],
    prompt: "Crea una proiezione finanziaria a 12 mesi per [BUSINESS] con queste ipotesi:\n- Modello di ricavo: [come guadagni]\n- Clienti mensili previsti: [crescita da X a Y]\n- Prezzo medio: [prezzo]\n- Costi fissi mensili: [elenco]\n- Costi variabili: [costi per unità]\n\nFornisci: ricavi mensili, costi, utile/perdita, analisi del break-even e flusso di cassa. Formatta come tabella da copiare in un foglio di calcolo.",
    promptTip: "Sii conservativo con le stime dei ricavi e generoso con le stime dei costi. Includi sempre uno scenario 'pessimistico' e 'ottimistico' insieme al caso base.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Sheets",
      "Excel"
    ],
    links: [
      {
        name: "Google Sheets",
        url: "https://sheets.google.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 76,
    title: "Scrivi Descrizioni di Prodotto",
    subtitle: "Vendi efficacemente con le parole",
    category: "business",
    description: "Le grandi descrizioni di prodotto vendono. L'IA può scrivere copy persuasivo e coinvolgente che evidenzia i benefici, affronta le preoccupazioni dei clienti e spinge all'azione.",
    steps: [
      "Descrivi il tuo prodotto: caratteristiche, benefici, pubblico target",
      "Specifica il tono e la piattaforma",
      "Chiedi all'IA di scrivere più opzioni di descrizione",
      "Testa quale funziona meglio"
    ],
    prompt: "Scrivi 3 descrizioni di prodotto per [PRODOTTO] rivolta a [PUBBLICO]. Ogni versione deve essere:\n1. Breve (50 parole) - per i social media\n2. Media (150 parole) - per il negozio online\n3. Lunga (300 parole) - per la pagina prodotto dettagliata\n\nEvidenzia: [BENEFICI CHIAVE]. Tono: [divertente/professionale/lussuoso/eco-friendly]. Includi una call-to-action convincente. Concentrati sui benefici, non solo sulle caratteristiche.",
    promptTip: "I benefici vendono, le caratteristiche informano. Invece di 'fatto con materiali riciclati' (caratteristica), scrivi 'sentiti bene sapendo che stai proteggendo il pianeta' (beneficio).",
    tools: [
      "ChatGPT",
      "Claude",
      "Jasper",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com"
      }
    ]
  },
  {
    id: 77,
    title: "Genera Nomi di Brand",
    subtitle: "Trova il nome perfetto",
    category: "business",
    description: "Dare un nome a un brand, progetto o prodotto è sorprendentemente difficile. L'IA può fare brainstorming su nomi creativi, verificare la disponibilità dei domini e spiegare la psicologia dietro ogni nome.",
    steps: [
      "Descrivi il tuo brand: valori, pubblico, settore",
      "Chiedi all'IA di generare 20-30 opzioni di nomi",
      "Riduci ai tuoi top 5",
      "Verifica la disponibilità di dominio e social media"
    ],
    prompt: "Genera 20 idee creative per il nome del brand per [TIPO DI BUSINESS/PRODOTTO]. Il brand deve sembrare [AGGETTIVI: moderno/affidabile/giocoso/lussuoso/tech-savvy/eco-friendly]. Pubblico target: [PUBBLICO]. Settore: [SETTORE].\n\nPer ogni nome, fornisci:\n- Il nome\n- Perché funziona\n- Potenziale disponibilità del dominio .com (suggerisci alternative se preso)\n- Come appare come handle dei social media\n\nIncludi un mix di: parole inventate, parole composte, metafore e nomi corti e accattivanti.",
    promptTip: "Verifica la disponibilità del dominio su Namecheap o GoDaddy. Cerca su Instagram e TikTok la disponibilità degli handle. I nomi migliori sono corti, memorabili e facili da scrivere.",
    tools: [
      "ChatGPT",
      "Claude",
      "Namecheap",
      "Namelix"
    ],
    links: [
      {
        name: "Namecheap",
        url: "https://www.namecheap.com"
      },
      {
        name: "Namelix",
        url: "https://namelix.com"
      }
    ]
  },
  {
    id: 78,
    title: "Crea Sondaggi per i Clienti",
    subtitle: "Raccogli feedback preziosi",
    category: "business",
    description: "I sondaggi ben progettati rivelano cosa pensano realmente i tuoi clienti. L'IA può creare sondaggi professionali con i giusti tipi di domande, flusso e framework di analisi.",
    steps: [
      "Definisci cosa vuoi scoprire",
      "Chiedi all'IA di progettare il sondaggio",
      "Crealo in Google Forms o Typeform",
      "Analizza i risultati con l'aiuto dell'IA"
    ],
    prompt: "Crea un sondaggio clienti di [LUNGHEZZA: 5/10/15] domande per [PRODOTTO/SERVIZIO/PROGETTO]. Obiettivo: [COSA VUOI SCOPRIRE]. Includi:\n- Mix di tipi di domande (scelta multipla, scala di valutazione, risposta aperta)\n- Flusso logico da domande facili a complesse\n- Nessuna domanda tendenziosa o distorta\n- Un'introduzione breve e amichevole\n- Messaggio di ringraziamento alla fine\n\nSuggerisci anche: come distribuirlo e cosa cercare nei risultati.",
    promptTip: "Mantieni i sondaggi sotto i 5 minuti (10 domande al massimo). Metti la domanda più importante per prima. Offri un incentivo per il completamento. Usa Google Forms — è gratuito.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Forms",
      "Typeform"
    ],
    links: [
      {
        name: "Google Forms",
        url: "https://forms.google.com"
      },
      {
        name: "Typeform",
        url: "https://www.typeform.com"
      }
    ]
  },
  {
    id: 79,
    title: "Analizza i Competitor",
    subtitle: "Conosci il panorama del tuo mercato",
    category: "business",
    description: "Comprendere la concorrenza è cruciale per qualsiasi business o progetto. L'IA può aiutarti a ricercare i competitor, identificare i loro punti di forza e debolezza, e trovare il tuo vantaggio competitivo.",
    steps: [
      "Identifica i tuoi 3-5 competitor principali",
      "Chiedi all'IA di ricercare ciascuno",
      "Crea una matrice di confronto",
      "Identifica lacune e opportunità"
    ],
    prompt: "Conduci un'analisi competitiva per [IL TUO BUSINESS/IDEA] contro questi competitor: [ELENCA COMPETITOR]. Per ogni competitor, analizza:\n- Cosa offrono\n- Punti di forza e debolezza\n- Strategia di prezzo\n- Pubblico target\n- Approccio di marketing\n- Recensioni/reputazione dei clienti\n\nPoi crea una tabella di confronto e identifica:\n- Lacune nel mercato che possiamo colmare\n- I nostri potenziali vantaggi competitivi\n- Minacce da monitorare",
    promptTip: "Visita i siti web e i social media dei competitor prima di chiedere all'IA. Più contesto fornisci, migliore sarà l'analisi. Chiedi 'Cosa ci renderebbe 10 volte migliori di [competitor]?'",
    tools: [
      "Perplexity",
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      },
      {
        name: "SimilarWeb",
        url: "https://www.similarweb.com"
      }
    ]
  },
  {
    id: 80,
    title: "Redigi Comunicazioni Aziendali",
    subtitle: "Scrittura professionale per ogni situazione",
    category: "business",
    description: "Dalle proposte di partnership agli aggiornamenti per gli investitori agli annunci per i clienti, l'IA ti aiuta a scrivere comunicazioni aziendali professionali che fanno la giusta impressione.",
    steps: [
      "Definisci lo scopo, il destinatario e il risultato desiderato",
      "Specifica il tono e il formato",
      "Chiedi all'IA di redigere la comunicazione",
      "Rivedi, personalizza e invia"
    ],
    prompt: "Redigi una [TIPO: proposta di partnership / aggiornamento investitori / annuncio clienti / comunicato stampa / post LinkedIn] su [ARGOMENTO]. Destinatario: [CHI]. Messaggio chiave: [PUNTO PRINCIPALE]. Risultato desiderato: [COSA VUOI CHE FACCIANO].\n\nTono: [professionale/amichevole/urgente/ispirante]. Lunghezza: [breve/media/lunga]. Includi:\n- Frase di apertura forte\n- Proposta di valore chiara\n- Dettagli a supporto\n- Call-to-action chiara\n- Chiusura professionale",
    promptTip: "Personalizza sempre le comunicazioni aziendali generate dall'IA. Aggiungi nomi specifici, date e riferimenti. Leggila ad alta voce per verificare che suoni naturale.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 81,
    title: "Analizza Dataset",
    subtitle: "Trova pattern nei tuoi dati",
    category: "science",
    description: "L'IA può aiutarti ad analizzare dati, dal trovare pattern all'eseguire test statistici all'identificare outlier. Perfetto per progetti scientifici, sondaggi o qualsiasi dato che devi comprendere.",
    steps: [
      "Prepara i tuoi dati (puliti e organizzati)",
      "Descrivi i dati e cosa vuoi trovare",
      "Chiedi all'IA di suggerire e eseguire analisi",
      "Interpreta i risultati con l'aiuto dell'IA"
    ],
    prompt: "Ho un dataset su [ARGOMENTO] con queste colonne: [ELENCA COLONNE E TIPI DI DATI]. Voglio:\n1. Trovare i pattern e le tendenze principali\n2. Identificare correlazioni tra [VARIABILE A] e [VARIABILE B]\n3. Calcolare statistiche di base (media, mediana, deviazione standard)\n4. Identificare eventuali outlier\n5. Creare un riepilogo dei risultati chiave\n\nSuggerisci i test statistici appropriati e scrivi codice Python per eseguire l'analisi.",
    promptTip: "Pulisci i dati prima: rimuovi duplicati, gestisci i valori mancanti. Chiedi all'IA di 'spiegare questi risultati in italiano semplice' dopo l'analisi. Domandati sempre se le correlazioni significano causalità.",
    tools: [
      "ChatGPT",
      "Claude",
      "Python",
      "Google Sheets"
    ],
    links: [
      {
        name: "Google Colab",
        url: "https://colab.research.google.com"
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com"
      }
    ]
  },
  {
    id: 82,
    title: "Crea Modelli Scientifici",
    subtitle: "Simula il mondo con l'IA",
    category: "science",
    description: "L'IA può aiutarti a costruire modelli matematici e computazionali per simulare fenomeni scientifici, dalla crescita della popolazione alle reazioni chimiche alle simulazioni di fisica.",
    steps: [
      "Definisci cosa vuoi modellare",
      "Identifica variabili e relazioni",
      "Chiedi all'IA di creare il modello matematico",
      "Implementa e visualizza in Python o un foglio di calcolo"
    ],
    prompt: "Aiutami a creare un modello scientifico per [FENOMENO: crescita della popolazione / diffusione di malattie / moto del pendolo / reazione chimica / fattori del cambiamento climatico]. Includi:\n1. Variabili e parametri chiave\n2. Le equazioni matematiche\n3. Ipotesi e limitazioni\n4. Codice Python per simularlo\n5. Una visualizzazione dei risultati\n6. Come regolare i parametri per esplorare diversi scenari",
    promptTip: "Inizia con modelli semplici e aggiungi complessità gradualmente. Usa Google Colab (gratuito) per eseguire simulazioni Python. Chiedi all'IA di aiutarti a validare il modello con dati reali.",
    tools: [
      "Claude",
      "ChatGPT",
      "Python",
      "MATLAB"
    ],
    links: [
      {
        name: "Google Colab",
        url: "https://colab.research.google.com"
      },
      {
        name: "PhET Simulations",
        url: "https://phet.colorado.edu"
      }
    ]
  },
  {
    id: 83,
    title: "Genera Riassunti di Ricerca",
    subtitle: "Digerisci velocemente gli articoli accademici",
    category: "science",
    description: "Gli articoli accademici possono essere densi e difficili da leggere. L'IA può riassumere paper di ricerca, spiegare la metodologia, evidenziare i risultati chiave e contestualizzare i risultati in modo comprensibile.",
    steps: [
      "Trova l'articolo o il paper di ricerca",
      "Incolla l'abstract o le sezioni chiave",
      "Chiedi all'IA di riassumere in linguaggio semplice",
      "Chiedi spiegazioni per sezioni specifiche"
    ],
    prompt: "Riassumi questo paper di ricerca per uno studente delle superiori:\n\n[INCOLLA ABSTRACT O TESTO CHIAVE]\n\nPer favore fornisci:\n1. Quale domanda i ricercatori stavano cercando di rispondere\n2. Come l'hanno studiato (metodi, semplificati)\n3. Cosa hanno trovato (risultati chiave)\n4. Perché è importante (significato)\n5. Limitazioni dello studio\n6. Come questo si collega a ciò che già sappiamo\n\nUsa un linguaggio semplice, senza gergo tecnico.",
    promptTip: "Usa Semantic Scholar o Google Scholar per trovare paper. Se il paper completo è troppo lungo, incolla l'abstract e la conclusione. Fai domande di approfondimento su tutto ciò che non è chiaro.",
    tools: [
      "Claude",
      "ChatGPT",
      "Perplexity",
      "Semantic Scholar"
    ],
    links: [
      {
        name: "Semantic Scholar",
        url: "https://www.semanticscholar.org"
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com"
      }
    ]
  },
  {
    id: 84,
    title: "Visualizza Dati Scientifici",
    subtitle: "Presenta i risultati chiaramente",
    category: "science",
    description: "La visualizzazione dei dati è essenziale nella scienza. L'IA può aiutarti a creare il tipo giusto di grafico per i tuoi dati, generare il codice e renderlo professionale per relazioni e presentazioni.",
    steps: [
      "Prepara i tuoi dati",
      "Scegli il tipo di visualizzazione giusto",
      "Chiedi all'IA di creare il codice del grafico",
      "Personalizza colori, etichette e formattazione"
    ],
    prompt: "Devo visualizzare [DESCRIVI I TUOI DATI E COSA VUOI MOSTRARE]. Crea un [TIPO DI GRAFICO] usando Python (matplotlib o seaborn). Requisiti:\n- Aspetto chiaro e professionale\n- Etichette degli assi corrette con unità di misura\n- Titolo descrittivo\n- Schema colori accessibile ai daltonici\n- Legenda se multiple serie di dati\n- Barre di errore se applicabile\n\nDati: [FORNISCI I TUOI DATI O FORMATO]",
    promptTip: "Scegli il grafico giusto: dispersione per correlazioni, barre per confronti, linee per serie temporali, istogrammi per distribuzioni. Usa seaborn per default più belli.",
    tools: [
      "Claude",
      "ChatGPT",
      "Python",
      "Google Sheets"
    ],
    links: [
      {
        name: "Google Colab",
        url: "https://colab.research.google.com"
      },
      {
        name: "Plotly",
        url: "https://plotly.com"
      }
    ]
  },
  {
    id: 85,
    title: "Simula Esperimenti",
    subtitle: "Laboratorio virtuale",
    category: "science",
    description: "Non hai accesso a un laboratorio? L'IA può aiutarti a simulare esperimenti, prevedere risultati e comprendere processi scientifici attraverso modelli computazionali e simulazioni.",
    steps: [
      "Definisci l'esperimento che vuoi simulare",
      "Specifica variabili e condizioni",
      "Chiedi all'IA di creare una simulazione",
      "Analizza i risultati virtuali e trai conclusioni"
    ],
    prompt: "Simula un esperimento: [DESCRIVI ESPERIMENTO]. Variabili:\n- Indipendente: [COSA CAMBI]\n- Dipendente: [COSA MISURI]\n- Controllate: [COSA RESTA UGUALE]\n\nPer favore:\n1. Prevedi il risultato atteso basandoti sulla teoria scientifica\n2. Scrivi una simulazione Python che modelli questo esperimento\n3. Genera dati che approssimino risultati reali\n4. Crea visualizzazioni dei risultati\n5. Spiega come i risultati reali potrebbero differire dalla simulazione",
    promptTip: "PhET (dell'Università del Colorado) ha eccellenti simulazioni gratuite per fisica e chimica. Combina le simulazioni PhET con l'analisi IA per una comprensione più profonda.",
    tools: [
      "Claude",
      "ChatGPT",
      "Python",
      "PhET"
    ],
    links: [
      {
        name: "PhET Simulations",
        url: "https://phet.colorado.edu"
      },
      {
        name: "Google Colab",
        url: "https://colab.research.google.com"
      }
    ]
  },
  {
    id: 86,
    title: "Scrivi Relazioni di Laboratorio",
    subtitle: "Documenta i tuoi risultati correttamente",
    category: "science",
    description: "Una relazione di laboratorio ben scritta segue una struttura specifica. L'IA può aiutarti a scrivere ogni sezione correttamente, dall'abstract alla discussione, assicurando che rispetti gli standard della scrittura scientifica.",
    steps: [
      "Raccogli i dati e le osservazioni del tuo esperimento",
      "Chiedi all'IA di aiutarti a strutturare ogni sezione",
      "Scrivi la relazione seguendo il template",
      "Fai revisionare all'IA per completezza e chiarezza"
    ],
    prompt: "Aiutami a scrivere una relazione di laboratorio per un esperimento su [ARGOMENTO ESPERIMENTO]. Ho condotto [BREVE DESCRIZIONE]. I miei risultati sono stati [RIEPILOGO RISULTATI].\n\nCrea una relazione di laboratorio correttamente strutturata con:\n1. Titolo\n2. Abstract (100 parole)\n3. Introduzione (contesto, ipotesi)\n4. Materiali e Metodi\n5. Risultati (come presentare i dati)\n6. Discussione (cosa significano i risultati, errori, miglioramenti)\n7. Conclusione\n\nUsa lo stile di scrittura scientifica formale.",
    promptTip: "Non falsificare mai i dati. Usa l'IA per aiutare a strutturare e scrivere chiaramente, ma i tuoi dati e osservazioni devono essere reali. Chiedi all'IA di 'identificare le debolezze nella mia metodologia' per un'analisi migliore.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "Google Docs",
        url: "https://docs.google.com"
      }
    ]
  },
  {
    id: 87,
    title: "Crea Poster Scientifici",
    subtitle: "Presentazioni pronte per conferenze",
    category: "science",
    description: "I poster scientifici devono trasmettere ricerche complesse in modo chiaro e visivo. L'IA può aiutarti a progettare il layout, scrivere testo conciso e creare figure per un poster professionale.",
    steps: [
      "Riassumi la tua ricerca nelle sezioni del poster",
      "Chiedi all'IA suggerimenti per layout e design",
      "Crea figure e grafiche",
      "Assembla usando Canva o PowerPoint"
    ],
    prompt: "Aiutami a creare un poster scientifico per [ARGOMENTO DI RICERCA]. I miei risultati chiave sono [RIEPILOGO]. Progetta un poster con:\n- Sezione titolo e autori\n- Introduzione/Background (3-4 frasi)\n- Metodi (breve, con suggerimento di diagramma)\n- Risultati (figure chiave descritte)\n- Discussione/Conclusione (3-4 punti chiave)\n- Riferimenti\n\nSuggerisci uno schema colori e un layout che sia professionale e facile da leggere da 1,5 metri di distanza. Dimensione standard del poster: 122x91 cm.",
    promptTip: "Meno testo è meglio sui poster. Usa figure e grafici come contenuto principale. Mantieni le dimensioni del font leggibili: titolo 72pt+, corpo 28pt+, didascalie 20pt+. Usa Canva per un assemblaggio facile.",
    tools: [
      "ChatGPT",
      "Claude",
      "Canva",
      "PowerPoint"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 88,
    title: "Genera Ipotesi",
    subtitle: "Inizia la tua ricerca nel modo giusto",
    category: "science",
    description: "Il metodo scientifico inizia con una buona ipotesi. L'IA può aiutarti a generare ipotesi verificabili basate su osservazioni, ricerca esistente e principi scientifici.",
    steps: [
      "Descrivi la tua osservazione o domanda di ricerca",
      "Chiedi all'IA di suggerire ipotesi verificabili",
      "Valuta ogni ipotesi per verificabilità",
      "Scegli la migliore per il tuo esperimento"
    ],
    prompt: "Sono interessato a ricercare [ARGOMENTO/OSSERVAZIONE]. Aiutami a sviluppare un'ipotesi scientifica solida:\n1. Basandoti su ciò che si sa già di questo argomento, suggerisci 3 ipotesi verificabili\n2. Per ogni ipotesi, fornisci:\n   - L'enunciato dell'ipotesi (Se... allora... perché...)\n   - Quali variabili testare\n   - Come progettare un esperimento per testarla\n   - Quali risultati la supporterebbero o confuterebbero\n3. Quale ipotesi è più fattibile per uno studente delle superiori?",
    promptTip: "Una buona ipotesi è specifica, verificabile e basata su conoscenze esistenti. Usa il formato 'Se [faccio X], allora [succederà Y], perché [ragionamento]'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity"
    ],
    links: [
      {
        name: "Perplexity",
        url: "https://perplexity.ai"
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com"
      }
    ]
  },
  {
    id: 89,
    title: "Analizza Paper di Ricerca",
    subtitle: "Lettura critica con l'aiuto dell'IA",
    category: "science",
    description: "L'IA può aiutarti ad analizzare criticamente paper di ricerca, identificando punti di forza e debolezza della metodologia, valutando le prove e comprendendo il significato più ampio dei risultati.",
    steps: [
      "Trova e leggi il paper di ricerca",
      "Incolla le sezioni chiave nell'IA",
      "Chiedi un'analisi critica",
      "Usa l'analisi per informare il tuo lavoro"
    ],
    prompt: "Analizza criticamente questo paper di ricerca:\n\n[INCOLLA ABSTRACT E SEZIONI CHIAVE]\n\nPer favore valuta:\n1. Chiarezza e importanza della domanda di ricerca\n2. Punti di forza e debolezza della metodologia\n3. Appropriatezza della dimensione del campione e della selezione\n4. Validità dell'analisi statistica\n5. Se le conclusioni sono supportate dai dati\n6. Potenziali bias o conflitti di interesse\n7. Come questo contribuisce al campo\n8. Domande che rimangono senza risposta",
    promptTip: "Leggi sempre il paper tu stesso prima di chiedere l'analisi all'IA. Usa l'IA per cogliere cose che potresti perdere, non come sostituto del tuo pensiero critico.",
    tools: [
      "Claude",
      "ChatGPT",
      "Perplexity"
    ],
    links: [
      {
        name: "Semantic Scholar",
        url: "https://www.semanticscholar.org"
      },
      {
        name: "Claude",
        url: "https://claude.ai"
      }
    ]
  },
  {
    id: 90,
    title: "Crea Illustrazioni Scientifiche",
    subtitle: "Comunicazione scientifica visiva",
    category: "science",
    description: "Le illustrazioni scientifiche aiutano a spiegare concetti complessi visivamente. L'IA può generare diagrammi, infografiche e illustrazioni per le tue relazioni, presentazioni e poster.",
    steps: [
      "Descrivi il concetto scientifico da illustrare",
      "Specifica lo stile e il livello di dettaglio",
      "Genera con strumenti di immagini IA",
      "Etichetta e annota l'illustrazione"
    ],
    prompt: "Crea un'illustrazione scientifica di [CONCETTO: struttura cellulare / ciclo dell'acqua / placche tettoniche / replicazione del DNA / schema di circuito]. Stile: [diagramma da libro di testo / infografica / cartoon semplificato / illustrazione dettagliata]. Includi:\n- Tutti i componenti principali etichettati\n- Codifica a colori per le diverse parti\n- Frecce che mostrano processi o flusso\n- Un layout pulito e educativo\n\nQuesto è per una [relazione scolastica / presentazione / poster].",
    promptTip: "Per i diagrammi, le descrizioni testuali dell'IA funzionano bene con Canva o draw.io. Per illustrazioni scientifiche artistiche, usa Midjourney con 'stile illustrazione scientifica' nel prompt.",
    tools: [
      "Midjourney",
      "DALL-E",
      "Canva",
      "BioRender"
    ],
    links: [
      {
        name: "BioRender",
        url: "https://www.biorender.com"
      },
      {
        name: "draw.io",
        url: "https://app.diagrams.net"
      }
    ]
  },
  {
    id: 91,
    title: "Pianifica Itinerari di Viaggio",
    subtitle: "Pianificazione viaggi con l'IA",
    category: "fun",
    description: "Stai pianificando un viaggio? L'IA crea itinerari dettagliati giorno per giorno basati sui tuoi interessi, budget e stile di viaggio. Come avere un agente di viaggio personale che conosce ogni destinazione.",
    steps: [
      "Condividi destinazione, date, budget e interessi",
      "Chiedi all'IA di creare un itinerario giorno per giorno",
      "Personalizza in base alle tue preferenze",
      "Salva i consigli su ristoranti e attività"
    ],
    prompt: "Pianifica un viaggio di [NUMERO] giorni a [DESTINAZIONE] per [NUMERO] persone. Budget: [LIVELLO BUDGET: economico/medio/lusso]. Interessi: [INTERESSI: cultura, cibo, avventura, vita notturna, storia, natura]. Crea:\n- Itinerario giorno per giorno con orari\n- Attrazioni imperdibili e gemme nascoste\n- Raccomandazioni ristoranti per ogni pasto\n- Consigli di trasporto tra i luoghi\n- Costi giornalieri stimati\n- Suggerimenti per il bagaglio\n- Usanze locali e consigli",
    promptTip: "Chiedi 'gemme nascoste che i turisti di solito perdono' e 'il miglior cibo locale non presente nelle guide turistiche'. Verifica sempre orari di apertura e prezzi prima del viaggio.",
    tools: [
      "ChatGPT",
      "Claude",
      "Perplexity",
      "Google Maps"
    ],
    links: [
      {
        name: "Google Maps",
        url: "https://maps.google.com"
      },
      {
        name: "TripAdvisor",
        url: "https://www.tripadvisor.com"
      }
    ]
  },
  {
    id: 92,
    title: "Crea Ricette dagli Ingredienti",
    subtitle: "Cucina con ciò che hai",
    category: "fun",
    description: "Apri il frigorifero, dì all'IA cosa hai e ottieni idee creative per ricette. Niente più cibo sprecato o dubbi su cosa cucinare. L'IA si adatta a restrizioni alimentari e livelli di abilità.",
    steps: [
      "Elenca gli ingredienti che hai a disposizione",
      "Menziona eventuali restrizioni alimentari o preferenze",
      "Chiedi all'IA suggerimenti per ricette",
      "Segui le istruzioni di cucina passo dopo passo"
    ],
    prompt: "Ho questi ingredienti: [ELENCA I TUOI INGREDIENTI]. Restrizioni alimentari: [NESSUNA/vegetariano/vegano/senza glutine/ecc.]. Abilità in cucina: [principiante/intermedio/avanzato]. Attrezzatura disponibile: [forno/fornelli/microonde/ecc.].\n\nSuggerisci 3 ricette che posso preparare con questi ingredienti. Per ogni ricetta:\n- Nome e descrizione\n- Tempo di preparazione e cottura\n- Istruzioni passo dopo passo\n- Consigli per renderla extra deliziosa\n- Cosa servire come accompagnamento",
    promptTip: "Sii onesto sul tuo livello — l'IA adatterà la complessità. Chiedi 'ricette veloci sotto i 20 minuti' quando hai poco tempo. Salva le tue ricette IA preferite!",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Allrecipes",
        url: "https://www.allrecipes.com"
      }
    ]
  },
  {
    id: 93,
    title: "Genera Programmi di Allenamento",
    subtitle: "Piani fitness personalizzati",
    category: "fun",
    description: "L'IA crea routine di allenamento personalizzate basate sul tuo livello di fitness, obiettivi, attrezzatura disponibile e tempo. Dagli allenamenti a casa ai piani in palestra, ottieni guida fitness personalizzata.",
    steps: [
      "Condividi il tuo livello di fitness e obiettivi",
      "Descrivi l'attrezzatura e il tempo disponibili",
      "Chiedi all'IA di creare un piano di allenamento",
      "Segui la routine e monitora i progressi"
    ],
    prompt: "Crea un piano di allenamento di [DURATA: 4 settimane/8 settimane] per un [principiante/intermedio/avanzato] che vuole [OBIETTIVO: costruire muscoli/perdere peso/migliorare la resistenza/diventare flessibile/fitness generale]. Attrezzatura disponibile: [nessuna-solo corpo libero/manubri/palestra completa]. Tempo disponibile: [MINUTI] per sessione, [GIORNI] giorni a settimana.\n\nPer ogni giorno di allenamento, includi:\n- Nomi degli esercizi con serie e ripetizioni\n- Periodi di riposo\n- Consigli sulla forma corretta\n- Riscaldamento e defaticamento\n- Piano di sovraccarico progressivo (come aumentare la difficoltà)",
    promptTip: "Inizia più facile di quanto pensi. La costanza batte l'intensità. Chiedi all'IA 'modifiche per [esercizio] se non riesco ancora a farlo'. Riscaldati sempre correttamente.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      },
      {
        name: "Nike Training Club",
        url: "https://www.nike.com/ntc-app"
      }
    ]
  },
  {
    id: 94,
    title: "Crea Budget Personali",
    subtitle: "Gestisci il tuo denaro saggiamente",
    category: "fun",
    description: "L'educazione finanziaria inizia presto. L'IA può aiutarti a creare un budget personale, monitorare le spese, impostare obiettivi di risparmio e capire dove vanno i tuoi soldi.",
    steps: [
      "Elenca tutte le tue fonti di reddito",
      "Monitora le spese per un mese",
      "Chiedi all'IA di creare un piano budget",
      "Configura il monitoraggio in un foglio di calcolo o app"
    ],
    prompt: "Aiutami a creare un budget mensile. La mia situazione:\n- Reddito mensile: [IMPORTO] (da [FONTI: paghetta/lavoro part-time/ecc.])\n- Spese fisse: [ELENCO: telefono, abbonamenti, ecc.]\n- Spese regolari: [cibo, trasporti, svago, ecc.]\n- Obiettivo di risparmio: [OBIETTIVO E IMPORTO]\n\nCrea:\n1. Una suddivisione del budget per categoria\n2. La regola 50/30/20 applicata al mio reddito\n3. Consigli per ridurre le spese\n4. Un piano di risparmio per raggiungere il mio obiettivo\n5. Un template di foglio di calcolo che posso usare",
    promptTip: "Monitora OGNI spesa per un mese prima di fare il budget — sarai sorpreso di dove vanno i soldi. Usa la regola 50/30/20: 50% necessità, 30% desideri, 20% risparmi.",
    tools: [
      "ChatGPT",
      "Claude",
      "Google Sheets",
      "Mint"
    ],
    links: [
      {
        name: "Google Sheets",
        url: "https://sheets.google.com"
      },
      {
        name: "YNAB",
        url: "https://www.ynab.com"
      }
    ]
  },
  {
    id: 95,
    title: "Progetta la Tua Stanza dei Sogni",
    subtitle: "Interior design con l'IA",
    category: "fun",
    description: "Vuoi riarredare la tua stanza? L'IA può suggerire layout, schemi di colori, disposizione dei mobili e idee di decorazione basate sul tuo stile, budget e dimensioni della stanza.",
    steps: [
      "Descrivi le dimensioni della stanza e la configurazione attuale",
      "Condividi le tue preferenze di stile e budget",
      "Chiedi all'IA suggerimenti di design",
      "Genera concept visivi con strumenti di immagini IA"
    ],
    prompt: "Aiutami a riprogettare la mia [TIPO DI STANZA: camera da letto/studio/soggiorno]. Dimensioni: [DIMENSIONI]. Mobili attuali che voglio tenere: [ELENCO]. Il mio stile: [minimalista/accogliente/moderno/bohémien/gaming/estetico]. Budget: [IMPORTO].\n\nSuggerisci:\n- Schema colori (colore pareti, accenti)\n- Layout dei mobili\n- 10 elementi di decorazione da comprare (con prezzi stimati)\n- Consigli per l'illuminazione\n- Soluzioni di organizzazione\n- Progetti fai-da-te che potrei fare\n\nFai in modo che sembri [ATMOSFERA: accogliente/produttiva/creativa/rilassante].",
    promptTip: "Usa i generatori di immagini IA per visualizzare il design della tua stanza. Pinterest è ottimo per trovare prodotti specifici. Inizia con pittura/illuminazione — hanno il maggior impatto con la minor spesa.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "Pinterest",
      "IKEA"
    ],
    links: [
      {
        name: "Pinterest",
        url: "https://www.pinterest.com"
      },
      {
        name: "IKEA",
        url: "https://www.ikea.com"
      }
    ]
  },
  {
    id: 96,
    title: "Crea Storie Personalizzate",
    subtitle: "Narrativa personalizzata solo per te",
    category: "fun",
    description: "L'IA può scrivere storie personalizzate con te, i tuoi amici o qualsiasi personaggio in qualsiasi genere. Fiction interattiva, storie della buonanotte, fan fiction o avventure originali — la tua immaginazione guida.",
    steps: [
      "Descrivi i personaggi e l'ambientazione",
      "Scegli il genere e il tono",
      "Chiedi all'IA di scrivere la storia",
      "Continua l'avventura aggiungendo le tue scelte"
    ],
    prompt: "Scrivi un racconto breve [GENERE: avventura/mistero/fantascienza/fantasy/romantico/commedia]. Personaggi:\n- Protagonista: [NOME E DESCRIZIONE]\n- Personaggio secondario: [NOME E DESCRIZIONE]\n\nAmbientazione: [DOVE E QUANDO]\nTono: [divertente/serio/suspense/commovente]\nLunghezza: circa [PAROLE] parole\n\nIncludi descrizioni vivide, dialoghi e un colpo di scena inaspettato. Fallo sembrare un vero page-turner.",
    promptTip: "Per la fiction interattiva, chiedi all'IA di 'darmi 3 scelte alla fine di ogni sezione e continua in base alla mia scelta'. Questo crea un'esperienza da libro-gioco!",
    tools: [
      "ChatGPT",
      "Claude",
      "NovelAI"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 97,
    title: "Genera Giochi di Trivia e Quiz",
    subtitle: "Divertimento con gli amici",
    category: "fun",
    description: "L'IA crea giochi di trivia personalizzati su qualsiasi argomento. Perfetto per serate di giochi, feste, gruppi di studio o semplicemente per metterti alla prova. Formati multipli: quiz bowl, stile Jeopardy o pub quiz.",
    steps: [
      "Scegli gli argomenti e il livello di difficoltà",
      "Scegli un formato di gioco",
      "Chiedi all'IA di generare domande e risposte",
      "Organizza il gioco con amici o famiglia"
    ],
    prompt: "Crea una serata di trivia con [NUMERO] round di [NUMERO] domande ciascuno. Argomenti:\nRound 1: [ARGOMENTO: Cultura Pop]\nRound 2: [ARGOMENTO: Scienza]\nRound 3: [ARGOMENTO: Geografia]\nRound 4: [ARGOMENTO: Curiosità Divertenti]\n\nPer ogni domanda:\n- Testo della domanda\n- 4 opzioni a scelta multipla (una corretta)\n- Breve curiosità dopo la risposta\n\nDifficoltà: [facile/media/difficile/mista]. Includi un round bonus!",
    promptTip: "Mescola i livelli di difficoltà: inizia facile per dare fiducia, diventa più difficile nel mezzo, finisci con un round bonus divertente. Aggiungi round con immagini descrivendo le immagini per la generazione IA.",
    tools: [
      "ChatGPT",
      "Claude",
      "Kahoot"
    ],
    links: [
      {
        name: "Kahoot",
        url: "https://kahoot.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 98,
    title: "Pianifica Eventi e Feste",
    subtitle: "Celebrazioni perfette",
    category: "fun",
    description: "Stai pianificando una festa di compleanno, un evento scolastico o un ritrovo? L'IA ti aiuta a organizzare tutto, dal tema e decorazioni alla cronologia, cibo e attività.",
    steps: [
      "Definisci il tipo di evento, dimensione e budget",
      "Chiedi all'IA di creare un piano completo",
      "Organizza i compiti e delega",
      "Esegui e divertiti!"
    ],
    prompt: "Aiutami a pianificare un [TIPO DI EVENTO: festa di compleanno/celebrazione di laurea/evento scolastico/serata di giochi] per [NUMERO] persone. Budget: [IMPORTO]. Data: [DATA]. Luogo: [casa/scuola/all'aperto/spazio affittato].\n\nCrea un piano completo che includa:\n- Idee per il tema (3 opzioni)\n- Lista decorazioni con costi stimati\n- Menu cibo e bevande\n- Attività e intrattenimento\n- Cronologia minuto per minuto dell'evento\n- Suggerimenti per la playlist musicale\n- Checklist dei materiali\n- Cosa preparare il giorno prima vs. il giorno stesso",
    promptTip: "Inizia a pianificare almeno 2 settimane prima. Crea una checklist condivisa con gli amici che aiutano. Chiedi all'IA 'piani di backup in caso di pioggia' per eventi all'aperto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Canva",
      "Spotify"
    ],
    links: [
      {
        name: "Canva Invitations",
        url: "https://www.canva.com/invitations"
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com"
      }
    ]
  },
  {
    id: 99,
    title: "Crea Vision Board",
    subtitle: "Visualizza i tuoi obiettivi",
    category: "fun",
    description: "Una vision board ti aiuta a visualizzare e manifestare i tuoi obiettivi. L'IA può aiutarti a definire i tuoi obiettivi chiaramente, suggerire immagini e creare una vision board digitale che ti ispira ogni giorno.",
    steps: [
      "Rifletti sui tuoi obiettivi per il prossimo anno",
      "Chiedi all'IA di aiutarti a definire obiettivi specifici e raggiungibili",
      "Genera elementi visivi con l'IA",
      "Assembla la tua vision board"
    ],
    prompt: "Aiutami a creare una vision board per [PERIODO: quest'anno/prossimi 5 anni/questo semestre]. I miei obiettivi sono in queste aree:\n- Carriera/Scuola: [OBIETTIVO]\n- Salute: [OBIETTIVO]\n- Crescita Personale: [OBIETTIVO]\n- Relazioni: [OBIETTIVO]\n- Divertimento/Avventura: [OBIETTIVO]\n\nPer ogni obiettivo:\n1. Rendilo specifico e misurabile\n2. Suggerisci un'immagine o un visual ispirante per rappresentarlo\n3. Fornisci un'affermazione o una citazione\n4. Suddividilo in traguardi mensili",
    promptTip: "Metti la tua vision board dove la vedi ogni giorno (sfondo del telefono, scrivania, parete). Rivedila e aggiornala mensilmente. Il potere sta nella visualizzazione quotidiana, non solo nella creazione.",
    tools: [
      "ChatGPT",
      "Midjourney",
      "Canva",
      "Pinterest"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Pinterest",
        url: "https://www.pinterest.com"
      }
    ]
  },
  {
    id: 100,
    title: "Costruisci il Tuo Personal Brand",
    subtitle: "Distinguiti online e offline",
    category: "fun",
    description: "Il tuo personal brand è come il mondo ti vede. L'IA può aiutarti a definire il tuo valore unico, creare contenuti coerenti, costruire una presenza online e distinguerti dalla massa.",
    steps: [
      "Definisci cosa ti rende unico",
      "Crea la tua brand identity (visiva + verbale)",
      "Costruisci la tua presenza online",
      "Crea contenuti con costanza"
    ],
    prompt: "Aiutami a costruire un personal brand. Su di me:\n- Nome: [IL TUO NOME]\n- Età: [ETÀ]\n- Passioni: [ELENCO]\n- Competenze: [ELENCO]\n- Obiettivi: [PER COSA VUOI ESSERE CONOSCIUTO]\n\nCrea:\n1. La mia dichiarazione di personal brand (una frase)\n2. 3 pilastri di contenuto (argomenti su cui dovrei pubblicare)\n3. Bio per Instagram/LinkedIn/TikTok\n4. Idee di contenuto per il primo mese (12 post)\n5. Guida allo stile visivo (colori, font, stile foto)\n6. Come raccontare la mia storia in modo autentico\n7. Strategia di networking\n\nRendilo autentico, non finto o forzato.",
    promptTip: "L'autenticità batte la perfezione. Pubblica su ciò che ti interessa genuinamente. Sii costante — pubblica regolarmente. Interagisci con altri nella tua nicchia. Il tuo brand deve sembrare TE, amplificato.",
    tools: [
      "ChatGPT",
      "Claude",
      "Canva",
      "Linktree"
    ],
    links: [
      {
        name: "Canva",
        url: "https://www.canva.com"
      },
      {
        name: "Linktree",
        url: "https://linktr.ee"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com"
      }
    ]
  },
  {
    id: 109,
    title: "Crea un Videogioco Funzionante",
    subtitle: "Costruisci giochi giocabili con l'IA — da platform a sparatutto spaziali",
    category: "fun",
    description: "Con l'IA puoi creare videogiochi completamente funzionanti: platform 2D, platform 3D, roguelike, metroidvania, giochi di azione corri-schiva-salta-attacca, cloni di Donkey Kong, Space Invaders, Frogger o il tuo gioco unico nello stile di Hollow Knight, Stick Fight — come vuoi. Un prototipo funzionante può essere pronto in pochi minuti.",
    steps: [
      "Descrivi il tipo di gioco che vuoi (genere, meccaniche, stile artistico)",
      "Chiedi all'IA di generare un singolo file HTML con tutto il JavaScript, CSS e grafica SVG incorporata",
      "Apri il file nel browser e testalo",
      "Itera: chiedi all'IA di aggiungere funzionalità, correggere bug, migliorare la grafica o perfezionare il gameplay",
      "Per grafica avanzata, chiedi all'IA di usare Phaser o PixiJS tramite link CDN",
      "Per supporto mobile, chiedi all'IA di aggiungere un joystick virtuale e pulsanti azione su schermo"
    ],
    prompt: "Crea un videogioco [GENERE: platform 2D / sparatutto spaziale / roguelike / endless runner / puzzle] come singolo file HTML con tutto il JavaScript e CSS incorporato. Usa SVG per tutta la grafica (niente immagini esterne). Il gioco deve includere:\n- Personaggio giocante con controlli [corri/salta/attacca/schiva]\n- Almeno [3] livelli o contenuto generato proceduralmente\n- Nemici o ostacoli con comportamenti diversi\n- Sistema di punteggio e vite\n- Funzionalità di game over e riavvio\n- Animazioni fluide e controlli reattivi\n- Effetti sonori usando la Web Audio API\n\nStile artistico: [pixel art / minimalista / colorato / retrò / scuro e atmosferico].\nRendi i controlli precisi e soddisfacenti.",
    promptTip: "Inizia semplice — fai funzionare un prototipo base prima, poi aggiungi funzionalità una alla volta. Chiedi all'IA di 'aggiungere un doppio salto', 'creare un boss nemico' o 'aggiungere un effetto particellare quando il giocatore scatta'. Ogni iterazione migliora il gioco.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 110,
    title: "Crea Arte ASCII",
    subtitle: "Trasforma il testo in arte visiva usando caratteri",
    category: "fun",
    description: "L'arte ASCII è l'arte di creare immagini, loghi e illustrazioni usando solo caratteri di testo — lettere, numeri e simboli. L'IA può generare arte ASCII straordinaria da qualsiasi descrizione, da semplici scarabocchi a scene incredibilmente dettagliate.",
    steps: [
      "Descrivi cosa vuoi vedere come arte ASCII (un animale, un logo, una scena, una parola in lettere a blocchi)",
      "Chiedi all'IA di generarla usando caratteri ASCII standard",
      "Specifica la dimensione: piccola (10-15 righe), media (20-30 righe) o grande (40+ righe)",
      "Chiedi variazioni o perfezionamenti — prova stili diversi"
    ],
    prompt: "Crea arte ASCII di [SOGGETTO: un gatto / un drago / un paesaggio di montagna / un teschio / la parola 'CIAO' in lettere a blocchi]. Stile: [dettagliato con ombreggiatura / minimalista / tipo cartoon / realistico]. Dimensione: circa [20] righe di altezza. Usa solo caratteri ASCII standard (lettere, numeri, punteggiatura e simboli). Rendilo visivamente impressionante e riconoscibile.\n\nPoi crea una seconda versione in uno stile completamente diverso per confronto.",
    promptTip: "Per i migliori risultati, chiedi una dimensione e uno stile specifici. Prova 'Usa caratteri box-drawing per un aspetto più pulito' o 'Usa solo punti e spazi per un effetto halftone'. Ottimo per commenti nel codice, file README e saluti nel terminale!",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 111,
    title: "Crea Animazioni di Arte ASCII",
    subtitle: "Dai vita all'arte testuale con il movimento",
    category: "fun",
    description: "Porta l'arte ASCII al livello successivo facendola muovere! L'IA può generare arte ASCII animata come file HTML autonomi — globi che girano, pioggia che cade, paesaggi scorrevoli, personaggi che rimbalzano, cascate stile Matrix, fuochi d'artificio e altro.",
    steps: [
      "Descrivi l'animazione che vuoi (cosa si muove, come si muove, l'effetto generale)",
      "Chiedi all'IA di crearla come singolo file HTML usando JavaScript e un font monospace o canvas",
      "Apri il file HTML nel browser per vedere l'animazione",
      "Itera: chiedi all'IA di regolare la velocità, aggiungere colori, cambiare la scena o combinare effetti"
    ],
    prompt: "Crea un'animazione ASCII di [ANIMAZIONE: caratteri verdi che cadono stile Matrix / un cubo 3D che ruota / un falò con fiamme tremolanti / pioggia che cade su un panorama urbano / fuochi d'artificio che esplodono / un omino stilizzato che cammina / onde dell'oceano] come singolo file HTML. Usa uno sfondo scuro con caratteri [verdi / bianchi / colorati]. L'animazione deve:\n- Funzionare fluidamente nel browser\n- Usare font monospace per un allineamento ASCII corretto\n- Includere almeno [2-3] elementi visivi o livelli\n- Sembrare atmosferica e ipnotica\n- Ridimensionarsi automaticamente per riempire la finestra del browser\n\nRendila qualcosa che vorresti lasciare in esecuzione su un secondo monitor.",
    promptTip: "Prova a combinare effetti: 'Pioggia Matrix con lampi occasionali' o 'Una scena di falò con scintille che salgono e un cielo stellato sopra'. Chiedi transizioni di colore, controlli di velocità o elementi interattivi come il tracciamento del mouse.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 108,
    title: "Esegui la Tua IA Locale (LLM)",
    subtitle: "Esegui modelli di IA sul tuo computer — senza internet",
    category: "coding",
    description: "Non hai bisogno di affidarti ai servizi cloud per usare l'IA. Con LM Studio puoi scaricare ed eseguire potenti modelli di linguaggio IA direttamente sul tuo computer. È gratuito, privato e funziona offline. Perfetto per imparare come funziona l'IA sotto il cofano, per progetti sensibili alla privacy, o semplicemente per il brivido di avere la tua IA in locale.",
    steps: [
      "Vai su lmstudio.ai e scarica LM Studio per il tuo sistema operativo (Windows, Mac o Linux). Installalo come una normale app.",
      "Apri LM Studio e sfoglia la libreria dei modelli. Inizia con un modello piccolo come 'Llama 3.1 8B' o 'Mistral 7B' — funzionano bene sulla maggior parte dei computer.",
      "Clicca 'Download' sul modello scelto. Potrebbe richiedere qualche minuto a seconda della dimensione del modello (tipicamente 4-8 GB).",
      "Una volta scaricato, vai alla scheda 'Chat', seleziona il tuo modello e inizia a chattare! Funziona proprio come ChatGPT ma gira interamente sul tuo computer.",
      "Esplora le impostazioni per regolare temperatura (creatività), max token (lunghezza risposta) e prompt di sistema. Prova diversi modelli per trovare il tuo preferito."
    ],
    prompt: "Ho appena installato LM Studio e scaricato il mio primo LLM locale. Aiutami a capire: quali sono le impostazioni chiave con cui dovrei sperimentare (temperature, top-p, max tokens, system prompt)? Dammi una spiegazione adatta ai principianti per ciascuna e suggerisci esperimenti divertenti da provare.",
    promptTip: "Chiedi alla tua IA locale di scrivere codice, creare storie, spiegare concetti o aiutarti con i compiti — tutto completamente offline e privato. Prova a confrontare le risposte di diversi modelli.",
    tools: [
      "LM Studio",
      "Ollama"
    ],
    links: [
      {
        name: "LM Studio",
        url: "https://lmstudio.ai"
      },
      {
        name: "Ollama (alternativa)",
        url: "https://ollama.ai"
      }
    ]
  },
  {
    id: 112,
    title: "Estrai una Descrizione Dettagliata di un Video",
    subtitle: "Ottieni analisi tecniche dettagliate di qualsiasi contenuto video",
    category: "video",
    description: "L'IA può guardare un video e produrre una descrizione completa e tecnica di tutto ciò che contiene — angolazioni della camera, tecniche di editing, transizioni, color grading, design audio, ritmo, testo su schermo e struttura del contenuto. Incredibilmente utile per studenti di produzione video, lavoro di accessibilità, analisi dei contenuti e apprendimento delle tecniche cinematografiche.",
    steps: [
      "Carica o condividi il video con un'IA che supporta l'input video (come Gemini o ChatGPT con vision)",
      "Chiedi un'analisi tecnica dettagliata del video",
      "Specifica quali aspetti vuoi analizzare: cinematografia, editing, audio, contenuto, ritmo, ecc.",
      "Usa l'analisi per imparare tecniche, creare descrizioni di accessibilità o documentare contenuti video"
    ],
    prompt: "Analizza questo video in dettaglio e fornisci una descrizione tecnica completa che includa:\n- **Contenuto visivo**: Cosa appare su schermo, scena per scena\n- **Cinematografia**: Angolazioni della camera, movimenti, inquadrature, tipi di ripresa\n- **Editing**: Tempistica dei tagli, transizioni, ritmo\n- **Colore e illuminazione**: Palette colori, stile di grading, setup illuminazione\n- **Audio**: Musica, effetti sonori, voiceover, dialoghi, suono ambientale\n- **Testo e grafica**: Testo su schermo, titoli, lower third, animazioni\n- **Struttura generale**: Come il video è organizzato, arco narrativo, momenti chiave\n\nSii specifico e tecnico — questa analisi è per qualcuno che studia produzione video.",
    promptTip: "Puoi concentrare l'analisi su aspetti specifici: 'Concentrati solo sulle tecniche di editing' o 'Descrivi il color grading in dettaglio'. Per video più lunghi, chiedi all'IA di analizzare timestamp o segmenti specifici.",
    tools: [
      "Gemini",
      "ChatGPT",
      "Claude"
    ],
    links: [
      {
        name: "Gemini",
        url: "https://gemini.google.com"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 113,
    title: "Estrai una Descrizione Dettagliata di un'Immagine",
    subtitle: "Ottieni analisi tecnica e creativa di qualsiasi immagine",
    category: "art",
    description: "L'IA può analizzare qualsiasi immagine e produrre una descrizione ricca e dettagliata — coprendo composizione, teoria del colore, illuminazione, tecnica, stile, atmosfera e soggetto. Inestimabile per studenti d'arte, fotografi, designer e chiunque voglia capire cosa rende efficace un'immagine.",
    steps: [
      "Carica l'immagine in un'IA che supporta la visione (ChatGPT, Claude, Gemini)",
      "Chiedi un'analisi tecnica e artistica dettagliata",
      "Specifica il tipo di analisi: critica artistica, analisi tecnica, descrizione di accessibilità o tutto",
      "Usa gli insight per migliorare il tuo lavoro o creare descrizioni appropriate delle immagini"
    ],
    prompt: "Analizza questa immagine in dettaglio completo:\n\n**Analisi Tecnica:**\n- Composizione: Regola dei terzi, linee guida, simmetria, inquadratura\n- Colore: Palette dominante, armonia cromatica, contrasto, saturazione\n- Illuminazione: Direzione, qualità (dura/morbida), temperatura del colore, ombre\n- Fuoco e profondità di campo\n\n**Analisi Artistica:**\n- Stile e genere (fotografia, illustrazione, arte digitale, ecc.)\n- Atmosfera e mood\n- Narrazione visiva: Quale storia racconta questa immagine?\n- Influenze o riferimenti a movimenti artistici o stili\n\n**Descrizione del Contenuto:**\n- Descrizione dettagliata di tutto ciò che è visibile nell'immagine\n- Elementi in primo piano, piano medio e sfondo\n- Testo, simboli o dettagli notevoli\n\nFornisci un'analisi di livello professionale adatta a uno studente d'arte o design.",
    promptTip: "Per il lavoro di accessibilità, chiedi specificamente: 'Scrivi una descrizione alt-text per screen reader, sotto i 150 caratteri' seguita da 'Ora scrivi una descrizione più lunga per utenti ipovedenti'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 114,
    title: "Crea Schemi di Colori e Palette",
    subtitle: "Genera combinazioni di colori armoniose per qualsiasi progetto",
    category: "art",
    description: "Scegliere i colori giusti può fare la differenza in un design. L'IA può generare palette colori complete basate su umore, tema, personalità del brand o immagine di riferimento — con codici hex, valori RGB e indicazioni su come usare ogni colore.",
    steps: [
      "Descrivi l'atmosfera, il tema o lo scopo del tuo progetto",
      "Chiedi all'IA di generare una palette colori con codici hex specifici",
      "Richiedi linee guida d'uso: quale colore per sfondi, testo, accenti, ecc.",
      "Chiedi variazioni: versioni più chiare/scure, palette complementari o alternative accessibili"
    ],
    prompt: "Crea una palette colori completa per [PROGETTO: un sito web tech moderno / un brand per caffetteria accogliente / un libro per bambini / un'app fitness / un invito di nozze]. L'atmosfera deve essere [ATMOSFERA: professionale e affidabile / calda e invitante / giocosa ed energica / elegante e minimale / audace e grintosa].\n\nFornisci:\n- **Colore primario**: Il colore principale del brand (hex, RGB)\n- **Colore secondario**: Colore di supporto (hex, RGB)\n- **Colore accento**: Per pulsanti, link, evidenziazioni (hex, RGB)\n- **Colore sfondo**: Sfondo principale (hex, RGB)\n- **Colore testo**: Per leggibilità (hex, RGB)\n- **3 colori di supporto aggiuntivi** per varietà\n\nPer ogni colore, spiega PERCHÉ funziona per questo progetto e DOVE usarlo. Fornisci anche una versione dark mode della palette. Assicura che tutte le combinazioni testo/sfondo rispettino gli standard di accessibilità WCAG AA per il contrasto.",
    promptTip: "Chiedi palette ispirate a cose specifiche: 'Colori ispirati a un tramonto sull'oceano' o 'Una palette che sembra un giorno di pioggia a Tokyo'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Coolors"
    ],
    links: [
      {
        name: "Coolors",
        url: "https://coolors.co"
      },
      {
        name: "Adobe Color",
        url: "https://color.adobe.com"
      }
    ]
  },
  {
    id: 106,
    title: "Creare infografiche visive",
    subtitle: "Trasforma dati e idee in storie visive straordinarie",
    category: "art",
    description: "L'IA può creare infografiche visive attraenti e illustrative con testo accurato — trasformando dati complessi, processi o concetti in grafiche chiare e coinvolgenti. Usa Gemini con Imagen per infografiche puramente grafiche, o Claude per versioni HTML+SVG facili da modificare e personalizzare. Che tu debba spiegare un processo, confrontare opzioni, presentare statistiche o riassumere ricerche, le infografiche generate dall'IA rendono le tue informazioni visivamente convincenti e condivisibili.",
    steps: ["Raccogli i tuoi dati, punti chiave o l'argomento che vuoi visualizzare", "Scegli il tuo approccio: grafica pura (Gemini/ChatGPT) o HTML+SVG modificabile (Claude)", "Descrivi il layout, lo stile e il contenuto dell'infografica nel tuo prompt", "Rivedi il risultato e itera — regola colori, layout o testo secondo necessità"],
    prompt: "Crea un'infografica professionale su [ARGOMENTO]. L'infografica deve includere:\n\n1. **Titolo**: Un titolo accattivante che catturi l'attenzione\n2. **Statistiche chiave**: [ELENCA 3-5 PUNTI DATI O FATTI PRINCIPALI]\n3. **Stile visivo**: [STILE: moderno e minimalista / colorato e giocoso / aziendale e professionale / vintage e retrò / scuro ed elegante]\n4. **Sezioni**: Organizza le informazioni in [NUMERO] sezioni chiare con:\n   - Icone o illustrazioni per ogni sezione\n   - Testo breve e incisivo (elenchi puntati, non paragrafi)\n   - Gerarchia visiva che guidi lo sguardo dall'alto verso il basso\n5. **Palette colori**: Usa [COLORI O TEMA: colori del brand / toni caldi / blu e verdi freddi / alto contrasto]\n6. **Piè di pagina**: Attribuzione delle fonti e [IL TUO BRAND/NOME]\n\nL'infografica deve essere [ORIENTAMENTO: verticale/orizzontale] e adatta per [USO: social media / presentazione / stampa / sito web].\n\nRendi il testo accurato e leggibile. Usa elementi visivi (grafici, icone, illustrazioni) per rendere i dati facili da comprendere a colpo d'occhio.",
    promptTip: "Se stai creando un'infografica puramente grafica con ChatGPT o MidJourney e hai difficoltà con la generazione del testo, modifica il prompt per includere spazio per il testo (riquadri bianchi o aree adeguate) e aggiungi il testo manualmente usando la tua app grafica preferita, o anche Microsoft Word, PowerPoint, Google Docs o Google Slides. Per versioni modificabili, chiedi a Claude di generare un'infografica HTML+SVG che puoi modificare direttamente nel browser.",
    promptDemos: [{label: "Demos created with a Prompt", src: "https://xperto.media/infographics/"}],
    prompt2Label: "Provalo: Infografica HTML + SVG (Claude consigliato)",
    prompt2: "Crea un file HTML completo e autonomo che mostri un'infografica bella e professionale su \"L'Impatto dell'Intelligenza Artificiale sull'Istruzione\". L'infografica deve essere interamente costruita con HTML + SVG inline + CSS (nessuna immagine esterna o dipendenza).\n\nL'infografica deve includere:\n- Un banner del titolo accattivante in alto\n- 5 sezioni con icone (disegnate in SVG): \"Apprendimento Personalizzato\", \"Valutazione Automatizzata\", \"Tutoraggio Intelligente\", \"Creazione di Contenuti\" e \"Competenze del Futuro\"\n- Ogni sezione deve avere una piccola icona SVG illustrativa, un titolo e 2-3 punti elenco con statistiche o fatti reali\n- Una barra delle statistiche che mostra: \"L'85% degli educatori crede che l'IA trasformerà l'apprendimento\", \"3,68 miliardi di mercato globale EdTech entro il 2030\", \"60% di tempo risparmiato nelle attività amministrative\"\n- Una timeline che mostra l'adozione dell'IA nell'istruzione: 2020 → 2022 → 2024 → 2026 → 2030\n- Uno schema colori con blu profondo (#1a237e), teal (#00897b), ambra (#ff8f00) e bianco\n- Tipografia professionale con font di sistema (nessuna dipendenza da font esterni)\n- Design responsive che appaia perfetto su desktop e mobile\n- Un pattern di sfondo sottile o un gradiente\n- Un piè di pagina con \"Fonte: UNESCO, World Economic Forum, McKinsey\" e \"Creato con l'IA\"\n\nL'intera infografica deve essere in un singolo file HTML con tutto il CSS e SVG inline. Renderla adatta alla stampa. Il design deve essere di qualità editoriale.",
    tools: ["Gemini", "Claude", "ChatGPT", "MidJourney"],
    links: [{name: "Canva Creatore di Infografiche", url: "https://www.canva.com/infographics/"}]
  },
  {
    id: 115,
    title: "Crea Kit di Brand e Linee Guida Visive",
    subtitle: "Costruisci sistemi di identità visiva completi con l'IA",
    category: "business",
    description: "Un kit di brand è la base di qualsiasi identità visiva professionale — definisce l'uso del logo, la tipografia, la palette colori, lo stile delle immagini, il tono di voce e le regole di design. L'IA può aiutarti a creare linee guida di brand complete da zero.",
    steps: [
      "Descrivi il tuo brand: nome, missione, pubblico target, personalità e valori",
      "Chiedi all'IA di generare un kit di brand completo con tutte le linee guida visive",
      "Rivedi e perfeziona ogni sezione — regola colori, font e tono per adattarli alla tua visione",
      "Esporta le linee guida come documento di riferimento per chiunque crei contenuti per il tuo brand"
    ],
    prompt: "Crea un kit di brand completo e linee guida di identità visiva per [NOME BRAND], un [DESCRIZIONE: startup tech focalizzata sull'educazione / panificio locale / organizzazione studentesca / portfolio creativo personale / business di coaching fitness].\n\nPubblico target: [PUBBLICO]\nPersonalità del brand: [TRATTI: innovativo, amichevole, affidabile / audace, energico, giovanile / elegante, sofisticato, minimale]\n\nIncludi:\n\n**1. Panoramica del Brand**\n- Suggerimento dichiarazione di missione\n- Valori del brand (3-5)\n- Linee guida voce e tono del brand con esempi\n\n**2. Palette Colori**\n- Colori primari, secondari e accento con codici hex\n- Regole d'uso dei colori\n- Colori da evitare\n\n**3. Tipografia**\n- Font consigliato per titoli (con suggerimento Google Fonts)\n- Font consigliato per il corpo\n- Dimensioni font e gerarchia\n\n**4. Linee Guida Logo**\n- Regole di posizionamento del logo\n- Requisiti di dimensione minima\n- Requisiti di spazio libero\n\n**5. Stile Immagini**\n- Linee guida stile fotografico\n- Stile illustrazione (se applicabile)\n- Raccomandazioni stile icone\n\n**6. Linee Guida Social Media**\n- Raccomandazioni stile post\n- Strategia hashtag\n- Tono per diverse piattaforme",
    promptTip: "Per un kit più completo, fai il follow-up con: 'Ora crea post social di esempio seguendo queste linee guida' o 'Genera un riepilogo di una pagina del brand da condividere con i collaboratori'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Canva"
    ],
    links: [
      {
        name: "Canva Brand Kit",
        url: "https://www.canva.com/brand"
      },
      {
        name: "Coolors",
        url: "https://coolors.co"
      }
    ]
  },
  {
    id: 116,
    title: "Chiedi all'IA di Fare l'Avvocato del Diavolo",
    subtitle: "Rafforza le tue idee facendo sfidare le tue argomentazioni dall'IA",
    category: "productivity",
    description: "Uno dei modi più potenti di usare l'IA è chiederle di argomentare contro le tue idee. Invece di essere d'accordo con te (cosa che l'IA tende a fare), puoi istruirla a trovare difetti, sfidare le ipotesi e trovare falle nelle tue argomentazioni.",
    steps: [
      "Condividi la tua argomentazione, saggio, piano o idea con l'IA",
      "Chiedile di fare l'avvocato del diavolo e trovare ogni debolezza",
      "Rivedi le controargomentazioni — quali sono valide?",
      "Rafforza il tuo lavoro originale affrontando le migliori obiezioni",
      "Ripeti: chiedi all'IA di sfidare la versione migliorata per un altro round"
    ],
    prompt: "Voglio che tu faccia l'avvocato del diavolo. Ecco la mia [argomentazione / saggio / business plan / idea / proposta]:\n\n[INCOLLA IL TUO LAVORO QUI]\n\nIl tuo compito è:\n1. Trovare ogni punto debole, falla logica e affermazione non supportata\n2. Presentare le controargomentazioni più forti possibili\n3. Identificare le ipotesi che sto facendo che potrebbero essere sbagliate\n4. Indicare cosa direbbe qualcuno in disaccordo\n5. Suggerire modi specifici per rafforzare la mia argomentazione\n\nSii duro ma costruttivo. Non trattenerti — voglio feedback onesto e critico, non elogi. Dopo la critica, valuta la forza complessiva della mia argomentazione su una scala da 1 a 10 e dimmi il singolo miglioramento più grande che potrei fare.",
    promptTip: "Funziona brillantemente per saggi, preparazione ai dibattiti, pitch aziendali e qualsiasi decisione dove vuoi stress-testare il tuo ragionamento. Fai il follow-up con: 'Ora aiutami a riscrivere la mia argomentazione affrontando le tue tre obiezioni più forti'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 117,
    title: "Crea Dashboard Interattive dai Dati",
    subtitle: "Trasforma dati grezzi in dashboard visive professionali con grafici e statistiche",
    category: "business",
    description: "Carica un foglio di calcolo, digita i tuoi dati o semplicemente descrivi le informazioni che hai — e l'IA genererà una dashboard completamente interattiva con grafici professionali e statistiche. Dai report di vendite alle metriche di progetto, l'IA può trasformare qualsiasi dataset in una presentazione visivamente coinvolgente e interattiva.",
    steps: [
      "Prepara i tuoi dati: carica un file (Excel, CSV), incolla una tabella o descrivi i dati che vuoi visualizzare",
      "Chiedi all'IA di creare una dashboard HTML a pagina singola con grafici e statistiche",
      "Specifica quali metriche contano: totali, medie, tendenze, confronti, distribuzioni",
      "Chiedi elementi interattivi: filtri, intervalli di date, selettori di scenario",
      "Richiedi tipi di grafici specifici: barre, linee, torta, area, dispersione, o lascia scegliere all'IA",
      "Itera: chiedi all'IA di aggiungere KPI, codifica a colori, layout responsive o opzioni di esportazione"
    ],
    prompt: "Crea una dashboard interattiva di dati come singolo file HTML con JavaScript e CSS incorporati. Usa Chart.js (tramite CDN) per i grafici.\n\nEcco i miei dati:\n[INCOLLA I TUOI DATI / DESCRIVI IL TUO DATASET / CARICA FILE]\n\nLa dashboard deve includere:\n- Un layout pulito e professionale con header che mostra titolo e data\n- KPI (Indicatori Chiave di Performance) come numeri grandi in alto (totali, medie, % crescita)\n- Almeno 3 tipi diversi di grafici che rappresentino al meglio questi dati\n- Layout a griglia responsive che funziona su desktop e mobile\n- Sezioni codificate a colori per una rapida scansione visiva\n- Tooltip interattivi su tutti i grafici che mostrano i valori esatti\n- Un filtro o dropdown per passare tra diverse visualizzazioni o periodi temporali",
    promptTip: "Più specifici sono i tuoi dati, migliore sarà la dashboard. Puoi incollare una tabella direttamente, descrivere i tuoi dati verbalmente o caricare un file CSV/Excel.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 118,
    title: "Crea Simulazioni di Scenari Interattive",
    subtitle: "Costruisci modelli what-if dinamici con slider, input e risultati in tempo reale",
    category: "business",
    description: "L'IA può creare simulazioni di scenari completamente interattive dove regoli i parametri con slider, inserisci valori personalizzati o scegli tra scenari predefiniti — e vedi i risultati aggiornarsi in tempo reale. Perfetto per modellazione finanziaria, pianificazione aziendale, allocazione risorse o qualsiasi situazione dove devi rispondere a domande 'cosa succede se?'.",
    steps: [
      "Descrivi lo scenario che vuoi modellare: quali sono le variabili, quali sono i risultati?",
      "Fornisci i tuoi dati, intervalli e ipotesi (o chiedi all'IA di suggerire valori ragionevoli)",
      "Chiedi all'IA di creare una pagina HTML interattiva con slider, input e preset di scenario",
      "Specifica quali risultati mostrare: grafici, statistiche riassuntive, raccomandazioni, avvertimenti",
      "Chiedi commenti automatici che spieghino cosa significa ogni risultato",
      "Testa diversi scenari e itera"
    ],
    prompt: "Crea una simulazione di scenario interattiva come singolo file HTML con JavaScript e CSS incorporati. Usa Chart.js (tramite CDN) per le visualizzazioni.\n\nScenario: [DESCRIVI IL TUO SCENARIO]\n\nLa simulazione deve includere:\n- Slider per ogni variabile chiave con intervalli min/max etichettati\n- Campi di input numerico per inserimento manuale preciso\n- Almeno 3 preset di scenario predefiniti (es. Conservativo, Moderato, Aggressivo) come pulsanti cliccabili\n- Grafici che si aggiornano in tempo reale quando gli slider si muovono\n- Un pannello risultati con i risultati chiave\n- Commento automatico sotto i risultati che spiega cosa significa lo scenario corrente\n- Indicatori codificati a colori: verde per risultati favorevoli, giallo per cautela, rosso per rischio",
    promptTip: "Funziona magnificamente per pianificazione aziendale, modellazione finanziaria, allocazione risorse, strategie di prezzo e simulazioni educative.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 119,
    title: "Analizza Curriculum e Pre-Seleziona Candidati",
    subtitle: "Lascia che l'IA pre-selezioni, valuti e classifichi i candidati in base ai tuoi criteri",
    category: "business",
    description: "Definisci i requisiti del lavoro, i criteri di valutazione e le qualifiche specifiche da cercare — poi lascia che l'IA analizzi i curriculum, pre-valuti i candidati e li classifichi in livelli. L'IA può cercare esperienza rilevante, competenze, istruzione, certificazioni, segnali di allarme e indicatori di adattamento culturale. Nota importante: l'analisi IA non sostituisce la valutazione personale del carattere.",
    steps: [
      "Definisci il ruolo lavorativo, le competenze richieste, le qualifiche preferite e i requisiti imprescindibili",
      "Crea i tuoi criteri di punteggio: cosa conta di più?",
      "Incolla o carica i curriculum/CV da analizzare",
      "Chiedi all'IA di valutare ogni candidato rispetto ai tuoi criteri e classificarli",
      "Rivedi l'analisi dell'IA e segnala i candidati per un esame più approfondito",
      "Usa i risultati come punto di partenza — conduci sempre colloqui personali"
    ],
    prompt: "Sei un assistente esperto di screening HR. Devo analizzare i candidati per il seguente ruolo:\n\n**Posizione:** [TITOLO]\n**Dipartimento:** [DIPARTIMENTO]\n**Requisiti Chiave:**\n- [Requisito 1]\n- [Requisito 2]\n- [Requisito 3]\n\n**Preferibili:**\n- [Competenza preferita 1]\n- [Competenza preferita 2]\n\nEcco i curriculum da analizzare:\n[INCOLLA CURRICULUM O CARICA FILE]\n\nPer ogni candidato, fornisci:\n1. **Punteggio di Corrispondenza** (0-100)\n2. **Classificazione**: A (Forte), B (Buona), C (Parziale), D (Debole)\n3. **Punti di Forza**\n4. **Preoccupazioni**\n5. **Punti Salienti Chiave**\n6. **Raccomandazione**: Avanzare al colloquio / Forse / Scartare\n\nInfine, fornisci una **tabella comparativa classificata** di tutti i candidati.",
    promptTip: "Per i migliori risultati, sii molto specifico su ciò che valorizzi di più. Puoi anche chiedere all'IA di 'pesare le competenze tecniche al 40%, l'esperienza al 30%, l'istruzione al 20% e le soft skill al 10%'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 120,
    title: "Ricerca un Cliente o Prospect",
    subtitle: "Genera brief completi su prospect, clienti o brand per vincere business",
    category: "business",
    description: "Fai ricercare all'IA un prospect, cliente o brand e generare un brief professionale che ti aiuti a comprendere il loro business, identificare opportunità e prepararti per gli incontri.",
    steps: [
      "Fornisci il nome dell'azienda o della persona e i dettagli che già conosci",
      "Chiedi all'IA di ricercare e compilare un brief completo",
      "Specifica cosa ti serve: panoramica aziendale, persone chiave, notizie recenti, pain point, competitor",
      "Chiedi all'IA di suggerire punti di discussione e angolazioni per il tuo pitch",
      "Richiedi un riepilogo di una pagina da consultare prima di chiamate o presentazioni",
      "Aggiorna il brief regolarmente"
    ],
    prompt: "Ricerca la seguente [azienda / prospect / cliente / brand] e crea un brief completo di business intelligence:\n\n**Target:** [NOME AZIENDA]\n**Settore:** [SETTORE se noto]\n**Contesto:** [Perché stai ricercando]\n\nCrea un brief dettagliato che copra:\n\n1. **Panoramica Aziendale**: Cosa fanno, dimensione, fondazione, sede, mercati chiave\n2. **Prodotti e Servizi**: Offerte principali, modello di prezzo, clienti target\n3. **Posizione di Mercato**: Classifica vs competitor, quota di mercato, reputazione\n4. **Notizie e Sviluppi Recenti**: Ultimi annunci, lanci prodotti, cambi di leadership\n5. **Decision Maker Chiave**: CEO, VP/Direttori rilevanti\n6. **Sfide e Pain Point**: Quali problemi probabilmente affrontano\n7. **Competitor**: Top 3-5 competitor e come differiscono\n8. **Opportunità per Noi**: Dove potremmo aggiungere valore?\n9. **Punti di Discussione**: 5 spunti di conversazione personalizzati\n10. **Segnali di Allarme / Rischi**: Qualcosa da tenere d'occhio\n\nFormattalo come brief professionale di una pagina da scansionare rapidamente prima di un incontro.",
    promptTip: "Più contesto fornisci sul TUO business e ciò che vendi, meglio l'IA può personalizzare le opportunità e i punti di discussione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com"
      }
    ]
  },
  {
    id: 121,
    title: "Adatta l'Apprendimento al Tuo Stile Personale",
    subtitle: "Personalizza qualsiasi argomento in base a come impari meglio",
    category: "learning",
    description: "Tutti abbiamo preferenze e stili di apprendimento che rendono più facile e confortevole comprendere nuovi concetti. Alcuni imparano meglio ascoltando e parlando (uditivo), alcuni facendo o muovendosi (cinestetico), alcuni vedendo rappresentazioni visive o disegnando (visivo). L'IA può adattare qualsiasi argomento allo stile che funziona meglio per te.",
    steps: [
      "Identifica il tuo stile di apprendimento preferito (visivo, uditivo, cinestetico, lettura/scrittura, spaziale)",
      "Indica all'IA l'argomento che vuoi imparare e il tuo stile preferito",
      "Chiedi all'IA di presentare il materiale in quel formato",
      "Richiedi formati alternativi per rinforzare la comprensione",
      "Combina stili per una comprensione più profonda"
    ],
    prompt: "Voglio imparare [ARGOMENTO]. Il mio stile di apprendimento preferito è [STILE: visivo / uditivo / cinestetico / lettura-scrittura / spaziale].\n\nPer favore adatta la tua spiegazione al mio stile:\n\n- Se visivo: usa diagrammi (descritti in testo), grafici, codifica a colori, mappe mentali e immagini\n- Se uditivo: scrivilo come dialogo, copione podcast o storia da leggere ad alta voce; usa ritmo e ripetizione\n- Se cinestetico: progetta attività pratiche, esperimenti o analogie fisiche che posso mettere in pratica\n- Se lettura/scrittura: fornisci spiegazioni scritte dettagliate, elenchi, definizioni e scalette per prendere appunti\n- Se spaziale: usa mappe, analogie spaziali, descrizioni 3D e posizionamento relazionale\n\nDopo la spiegazione, dammi 3 esercizi pratici nel mio stile per rinforzare il concetto.",
    promptTip: "Non sei sicuro del tuo stile? Chiedi all'IA: 'Aiutami a scoprire il mio stile di apprendimento facendomi una serie di domande su come preferisco imparare'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "VARK Learning Styles",
        url: "https://vark-learn.com"
      }
    ]
  },
  {
    id: 122,
    title: "Crea Simulazioni Interattive di Argomenti di Studio",
    subtitle: "Costruisci modelli esplorabili di ciò che stai studiando",
    category: "learning",
    description: "L'IA può creare simulazioni interattive e rappresentazioni visive di argomenti di studio — trasformando concetti astratti in esperienze esplorabili e pratiche. Immagina di manipolare una simulazione di fisica, guardare reazioni chimiche svolgersi, esplorare timeline storiche o regolare modelli economici in tempo reale.",
    steps: [
      "Descrivi l'argomento o il concetto che vuoi simulare",
      "Chiedi all'IA di creare una simulazione HTML interattiva",
      "Specifica quali variabili vuoi controllare (slider, pulsanti, input)",
      "Richiedi rappresentazioni visive (grafici, animazioni, diagrammi)",
      "Apri il file HTML generato nel browser per interagire",
      "Modifica ed estendi la simulazione chiedendo all'IA aggiunte"
    ],
    prompt: "Crea una simulazione HTML interattiva autonoma che mi aiuti a comprendere [ARGOMENTO/CONCETTO].\n\nLa simulazione deve:\n- Essere un singolo file HTML con CSS e JavaScript incorporati\n- Includere controlli interattivi (slider, pulsanti o input) per regolare le variabili chiave\n- Mostrare feedback visivo in tempo reale quando cambio i parametri\n- Mostrare etichette chiare che spiegano cosa fa ogni controllo\n- Includere una breve sezione esplicativa che descrive il concetto simulato\n- Usare animazioni o grafici dinamici dove utile\n\nArgomento: [ARGOMENTO SPECIFICO — es. 'meccanica orbitale e gravità', 'curve di domanda e offerta', 'replicazione del DNA', 'circuiti elettrici']\n\nRendila educativa, visivamente coinvolgente e intuitiva da usare senza istruzioni.",
    promptTip: "Queste simulazioni funzionano per quasi qualsiasi materia: fisica (gravità, onde, ottica), chimica (interazioni molecolari, pH), biologia (ecosistemi, divisione cellulare), economia (modelli di mercato), matematica (grafici di funzioni, geometria), storia (timeline interattive).",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Claude",
        url: "https://claude.ai"
      },
      {
        name: "PhET Simulations",
        url: "https://phet.colorado.edu"
      }
    ]
  },
  {
    id: 123,
    title: "Impara a Suonare uno Strumento",
    subtitle: "Piani di apprendimento musicale personalizzati con l'IA",
    category: "music",
    description: "L'IA può creare un piano completo e personalizzato per imparare qualsiasi strumento musicale — da principiante assoluto a musicista avanzato. Valuterà il tempo che hai a disposizione, stabilirà aspettative realistiche, costruirà un programma settimana per settimana, consiglierà l'attrezzatura e genererà anche curiosità divertenti per mantenerti motivato. Che tu voglia suonare il primo accordo di chitarra o padroneggiare il pianoforte, l'IA trasforma il percorso travolgente dell'apprendimento musicale in un cammino chiaro, strutturato e realizzabile.",
    steps: [
      "Indica all'IA quale strumento vuoi imparare e il tuo livello di esperienza attuale",
      "Specifica quante ore a settimana puoi dedicare alla pratica",
      "Chiedi un piano di apprendimento completo con traguardi, lezioni e un calendario di pratica",
      "Richiedi consigli sull'attrezzatura, risorse esterne e curiosità divertenti",
      "Usa il prompt avanzato per generare un'app HTML autonoma che traccia i tuoi progressi"
    ],
    prompt: "Voglio imparare a suonare [STRUMENTO]. Il mio livello di esperienza è [LIVELLO: principiante assoluto / ho suonato un po' in passato / riprendo dopo anni / intermedio che vuole migliorare]. Posso dedicare circa [ORE A SETTIMANA: 1-2 / 3-5 / 5-10 / 10+] ore a settimana alla pratica. Il mio obiettivo musicale è [OBIETTIVO: suonare canzoni per divertimento / entrare in una band / esibirmi dal vivo / superare un esame di musica / livello professionale].\n\nCrea un piano di apprendimento completo che includa:\n\n1. **Introduzione a [STRUMENTO]**: Breve storia, come funziona, diversi tipi e varianti, cosa lo rende speciale e perché la gente ama suonarlo.\n\n2. **Gestione delle Aspettative**: Cosa dovrei realisticamente aspettarmi in ogni fase dell'apprendimento. Frustrazioni e stalli comuni e come superarli. Spiega che i progressi non sono sempre lineari.\n\n3. **Comprendere l'Impegno**: Cosa significa davvero praticare con costanza, come costruire un'abitudine quotidiana, la differenza tra pratica consapevole e semplice suonare, e cosa separa chi ha successo da chi molla.\n\n4. **Risultati Attesi per Livello di Impegno**: Crea una tabella dettagliata che mostri cosa posso aspettarmi di raggiungere in base a diverse intensità di pratica:\n\n| Ore/Settimana | Dopo 1 Mese | Dopo 3 Mesi | Dopo 6 Mesi | Dopo 1 Anno | Dopo 2 Anni |\n|---------------|-------------|-------------|-------------|-------------|-------------|\n| 1-2 ore       | ...         | ...         | ...         | ...         | ...         |\n| 3-5 ore       | ...         | ...         | ...         | ...         | ...         |\n| 5-10 ore      | ...         | ...         | ...         | ...         | ...         |\n| 10+ ore       | ...         | ...         | ...         | ...         | ...         |\n\nCompila ogni cella con competenze e traguardi specifici e concreti.\n\n5. **Piano di Apprendimento Dettagliato**: Un piano settimana per settimana per i primi 6 mesi, organizzato per mese. Per ogni settimana includi:\n   - Lezioni ed esercizi specifici\n   - Competenze su cui concentrarsi (tecnica, teoria musicale, ear training, repertorio)\n   - Canzoni o brani da imparare in ogni fase (dal facile all'intermedio)\n   - Struttura consigliata della sessione di pratica (riscaldamento, esercizi tecnici, materiale nuovo, ripasso, defaticamento)\n   - Checkpoint di progresso mensili con obiettivi specifici da festeggiare\n\n6. **Requisiti per Iniziare**: Tutto ciò che mi serve:\n   - Consigli sullo strumento a tre fasce di prezzo (economico, medio, qualità)\n   - Accessori essenziali (elenco con spiegazioni)\n   - Accessori opzionali ma utili\n   - Allestimento dello spazio per la pratica (ambiente silenzioso, illuminazione, seduta/postura, temperatura)\n   - App e strumenti digitali utili per la pratica (metronomo, accordatore, spartiti, basi musicali)\n\n7. **Consigli Personalizzati**: Suggerimenti per sfruttare al massimo ogni sessione di pratica:\n   - Come strutturare il tempo di pratica in modo efficace\n   - I momenti migliori della giornata per esercitarsi e come mantenere la costanza\n   - Come evitare infortuni fisici e affaticamento\n   - Approcci mentali: restare motivati, gestire la frustrazione, festeggiare i piccoli traguardi\n   - Quando valutare un insegnante rispetto all'autoapprendimento\n   - Come esercitarsi quando hai solo 10-15 minuti\n\n8. **Risorse Consigliate**: Libri specifici, canali YouTube, app, corsi online, community e siti web per chi sta imparando [STRUMENTO] al mio livello.\n\n9. **Approfondimenti**: Miti comuni sull'apprendimento della musica, la scienza di come la musica influenza il cervello, consigli per esibirsi davanti ad altri, come trovare compagni di jam session o ensemble, e qualsiasi altra cosa che un nuovo studente di [STRUMENTO] dovrebbe sapere.\n\n10. **10 Curiosità**: Condividi 10 fatti sorprendenti, interessanti o ispiranti su [STRUMENTO] o sulla sua famiglia di strumenti.\n\nFormatta l'output in modo chiaro con intestazioni, elenchi puntati e la tabella dell'impegno. Rendilo pratico, incoraggiante e onesto riguardo al percorso che si prospetta.\n\nInfine, fornisci il piano completo come contenuto scaricabile in questi formati:\n- Mostra il piano completo a schermo\n- Fornisci una versione Markdown pronta da copiare\n- Fornisci una versione HTML salvabile\n- Suggerisci come convertirlo in Word e PDF",
    promptTip: "Sostituisci [STRUMENTO] con qualsiasi strumento: chitarra, pianoforte, violino, batteria, ukulele, basso, flauto, sassofono, tromba, violoncello, ecc. Sii specifico riguardo ai tuoi obiettivi — 'voglio suonare canzoni attorno al falò' dà un piano molto diverso da 'voglio suonare recital di musica classica'. Puoi anche aggiungere vincoli come 'vivo in appartamento quindi il rumore è un problema' o 'ho un budget di 200€ per l'attrezzatura'.",
    prompt2Label: "Esempio: Piano Completo per Chitarra",
    prompt2: "Voglio imparare a suonare la chitarra acustica. Sono un principiante assoluto — non ho mai suonato nessuno strumento a corde prima d'ora. Posso dedicare circa 3-5 ore a settimana alla pratica (circa 30-45 minuti al giorno, 5-6 giorni a settimana). Il mio obiettivo è suonare canzoni per divertimento — canzoni da falò, brani pop da cantare insieme, e col tempo qualche pezzo in fingerpicking.\n\nCrea un piano di apprendimento completo che includa:\n\n1. **Introduzione alla Chitarra**: Breve storia della chitarra acustica, come produce il suono, la differenza tra chitarra acustica, classica ed elettrica, le parti della chitarra (paletta, meccaniche, capotasto, tastiera, tasti, corpo, buca, ponte, selletta, corde), e cosa rende la chitarra uno degli strumenti più popolari al mondo.\n\n2. **Gestione delle Aspettative**: Cosa dovrebbe realisticamente aspettarsi un principiante assoluto. Sii onesto riguardo al dolore alle dita (i calli si formano in 2-4 settimane), la frustrazione dei cambi di accordo, la fase del \"suono brutto\" e la tempistica tipica per suonare un'intera canzone. Spiega che tutti passano per questa fase e che migliora drasticamente.\n\n3. **Comprendere l'Impegno**: Come 30 minuti di pratica concentrata al giorno battano 3 ore nel weekend. La differenza tra strimpellare e pratica intenzionale. Come costruire l'abitudine: stesso orario, stesso posto, chitarra sempre accessibile. Perché chi impara la chitarra molla (di solito tra la settimana 3 e la 6) e come superare quel momento.\n\n4. **Risultati Attesi per Livello di Impegno**:\n\n| Ore/Settimana | Dopo 1 Mese | Dopo 3 Mesi | Dopo 6 Mesi | Dopo 1 Anno | Dopo 2 Anni |\n|---------------|-------------|-------------|-------------|-------------|-------------|\n| 1-2 ore | Accordi aperti di base (Em, Am), strumming semplice | 4-5 accordi, 1-2 canzoni semplici | 8+ accordi, 3-5 canzoni, ritmo base | Inizio accordi barré, 10+ canzoni | Ritmista sicuro |\n| 3-5 ore | Accordi Em, Am, G, C, D, pattern di strumming base | Cambi fluidi, 3-4 canzoni, fingerpicking base | Canzoni complete cantando, intro barré, teoria base | Barré solidi, pattern di fingerpicking, 20+ canzoni | Livello intermedio, qualche lead |\n| 5-10 ore | Tutti gli accordi aperti di base, 2-3 pattern di strumming, prima canzone | Transizioni fluide, 6-8 canzoni, teoria base, fingerpicking semplice | Accordi barré, uso del capotasto, 10+ canzoni, inizio improvvisazione | Basi di lead guitar, stili multipli, esibizioni | Intermedio avanzato, fingerpicking complesso, assoli |\n| 10+ ore | Accordi aperti e qualche barré, pattern di strumming multipli, 2-3 canzoni | Esecuzione sicura, scale base, 10+ canzoni, basi di teoria | Livello intermedio, improvvisazione, generi multipli, esibizioni | Tecniche avanzate, padronanza della teoria, composizione | Quasi livello avanzato, brani complessi, esibizioni sicure |\n\n5. **Piano di Apprendimento Dettagliato** (Settimana per settimana per 6 mesi):\n\n**Mese 1 — Fondamenta:**\n- Settimana 1: Anatomia della chitarra, posizione corretta per tenerla, accordatura (usa un accordatore a clip o un'app), movimento di strumming con la mano destra sulle corde a vuoto, basi del posizionamento delle dita\n- Settimana 2: Primi accordi — Em e Am. Pratica delle forme degli accordi, diteggiatura pulita, passaggio tra Em e Am. Pattern di strumming semplice in giù.\n- Settimana 3: Aggiungi l'accordo G. Transizioni Em→Am→G. Introduzione al tempo 4/4. Pattern di strumming Giù-Giù-Su. Prima mini-canzone: \"Horse With No Name\" (Em-D6/9, solo 2 posizioni)\n- Settimana 4: Aggiungi l'accordo C. Pratica di tutti e 4 gli accordi: Em, Am, G, C. Checkpoint mensile: suona Em→Am→G→C in modo fluido a tempo lento\n\n**Mese 2 — Costruire Fiducia:**\n- Settimana 5: Aggiungi l'accordo D. Transizioni C→G→D. Nuovo strumming: G-GSu-SuGSu. Prima canzone completa: \"Knockin' on Heaven's Door\" (G-D-Am / G-D-C)\n- Settimana 6: Introduzione alla lettura di diagrammi di accordi e fogli canzoni. Pratica di \"Let It Be\" (C-G-Am-Fmaj7). Esercizi per le dita per forza e agilità\n- Settimana 7: Aggiungi l'accordo E. Introduzione al concetto di tonalità. Pratica di transizione tra tutti e 7 gli accordi imparati. Canzone: intro di \"Wish You Were Here\"\n- Settimana 8: Mese di ripasso. Suona 3-4 canzoni complete con metronomo a un tempo confortevole. Checkpoint mensile: suona 2 canzoni dall'inizio alla fine senza fermarti\n\n**Mese 3 — Ampliare le Competenze:**\n- Settimana 9: Introduzione al fingerpicking — pattern base pollice-indice-medio (introduzione al Travis picking). Fingerpicking su Am, C, G\n- Settimana 10: Aggiungi accordi A e Dm. Sonorità minore vs maggiore. Canzone: versione semplificata di \"Dust in the Wind\" in fingerpicking\n- Settimana 11: Introduzione al capotasto — come funziona e perché è utile. Suona canzoni in nuove tonalità con il capotasto. Impara ad adattare le canzoni alla tua estensione vocale\n- Settimana 12: Introduzione alla teoria musicale base: nomi delle note sulle corde 5-6, significato dei nomi degli accordi, come sono costruiti gli accordi. Checkpoint mensile: un brano in fingerpicking, due canzoni strummate con sicurezza\n\n**Mese 4 — Fondamenta Intermedie:**\n- Settimana 13: Il temuto accordo F — inizia con Fmaj7 come trampolino, poi il semi-barré F. Esercizio giornaliero di barré (solo 2 minuti)\n- Settimana 14: Power chord — E5, A5. Introduzione al palm muting. Suona un brano rock con power chord\n- Settimana 15: Pattern di strumming in ottavi. Sincope. Canzone: \"Wonderwall\" con il pattern di strumming corretto\n- Settimana 16: Revisione e consolidamento. Costruisci una scaletta personale di 8-10 canzoni. Checkpoint mensile: esegui le tue 3 migliori canzoni per qualcuno o registrati\n\n**Mese 5 — Stile ed Espressione:**\n- Settimana 17: Hammer-on e pull-off. Abbellire gli accordi con queste tecniche\n- Settimana 18: Scala pentatonica (minore) — posizione 1. Improvvisazione base su un blues a 12 battute con base musicale\n- Settimana 19: Varietà di stili di strumming: folk, pop, reggae, country. Applica stili diversi alle canzoni che conosci\n- Settimana 20: Cantare e suonare contemporaneamente. Inizia con canzoni dallo strumming semplice. Checkpoint mensile: suona 2 canzoni cantando, improvvisa un assolo base\n\n**Mese 6 — Mettere Tutto Insieme:**\n- Settimana 21: Padronanza dei barré — F, Bm, B completi. Transizioni tra accordi aperti e barré nelle canzoni\n- Settimana 22: Fingerpicking avanzato — arpeggi, basso alternato. Canzone: \"Blackbird\" (Beatles) o intro di \"Stairway to Heaven\"\n- Settimana 23: Costruisci la tua scaletta definitiva. Pratica l'esibizione: recuperare dagli errori, transizioni tra canzoni, presenza scenica\n- Settimana 24: Registra le tue 5 migliori canzoni. Confronta con il Mese 1. Festeggia! Pianifica i prossimi 6 mesi. Checkpoint mensile: mini-concerto di 15 minuti (5 canzoni) per famiglia o amici\n\n**Struttura della Sessione di Pratica** (per una sessione di 30 minuti):\n- 3 min: Riscaldamento (stretching delle dita, esercizio cromatico)\n- 5 min: Esercizio tecnico (transizioni tra accordi, pratica di scale o pattern di fingerpicking)\n- 10 min: Materiale nuovo (imparare una nuova sezione di canzone, nuovo accordo o nuova tecnica)\n- 10 min: Ripasso del repertorio (suona le canzoni che conosci, concentrati sui punti deboli)\n- 2 min: Defaticamento (suona qualcosa che ami, suona libero)\n\n6. **Requisiti per Iniziare**:\n- **Chitarra** (Economica ~80-120€): Yamaha FG800, Fender FA-15 — (Media ~200-400€): Taylor Academy 10, Yamaha FG830 — (Qualità ~500€+): Taylor 114ce, Martin D-15M\n- **Accessori essenziali**: Accordatore a clip (10-15€), set di corde di ricambio (5-8€), plettri — confezione assortita di spessori diversi (3-5€), tracolla (8-15€), capotasto (8-12€)\n- **Extra utili**: Supporto a terra o gancio da parete (12-25€), app metronomo (gratis), esercitatore per dita/grip trainer (8-12€), leggio (15-30€), sedia comoda senza braccioli\n- **Spazio per la pratica**: Stanza tranquilla senza interruzioni, buona illuminazione, sedia senza braccioli, chitarra su un supporto (non nella custodia — chitarra in vista = più pratica)\n- **App**: GuitarTuna (accordatore gratuito), Justin Guitar app (lezioni gratuite), Ultimate Guitar (diagrammi accordi), Songsterr (tab interattive), Metronome Beats (gratuita)\n\n7. **Consigli Personalizzati**:\n- Tieni la chitarra fuori dalla custodia, su un supporto, nella stanza dove passi più tempo. Se la vedi, la prenderai in mano\n- Esercitati alla stessa ora ogni giorno — associa la pratica a un'abitudine esistente (dopo il caffè, dopo cena)\n- Registrati ogni mese. Non noterai i progressi giornalieri, ma le registrazioni mensili mostrano miglioramenti notevoli\n- Quando le dita fanno male, esercitati ancora 5 minuti, poi fermati. I calli si formano più velocemente con esposizioni brevi e costanti\n- Impara canzoni che ami davvero. La motivazione batte il metodo ogni volta\n- Suona insieme alle registrazioni o alle basi — è più divertente e allena il senso del ritmo\n- Non confrontare il tuo Giorno 30 con l'Anno 3 di qualcun altro. Confrontati con il TUO Giorno 1\n- Valuta un insegnante almeno per il primo mese per evitare cattive abitudini di postura e tecnica\n- Unisciti a r/guitar su Reddit o a un gruppo locale di chitarristi — la community ti tiene motivato\n- Quando raggiungi uno stallo (capita a tutti verso il mese 2-3), impara un genere di canzone completamente diverso per riaccendere l'entusiasmo\n\n8. **Risorse Consigliate**:\n- **YouTube**: Justin Guitar (miglior corso gratuito), Marty Music, Andy Guitar\n- **App**: Yousician (interattiva), Fender Play (corsi strutturati), Justin Guitar app\n- **Libri**: \"Hal Leonard Guitar Method\" (strutturato), \"Guitar Aerobics\" (esercizi giornalieri)\n- **Siti web**: Ultimate-Guitar.com (tab e accordi), Songsterr.com (tab interattive)\n- **Community**: r/guitarlessons, r/beginnerguitar, serate open mic locali\n\n9. **Approfondimenti**:\n- Mito: \"Serve talento naturale.\" Realtà: la chitarra è al 95% pratica, 5% predisposizione. Praticamente chiunque può imparare\n- Mito: \"Bisogna prima imparare a leggere lo spartito.\" Realtà: la maggior parte dei chitarristi usa tablature e diagrammi di accordi — impara la teoria gradualmente\n- Suonare musica riduce il cortisolo (ormone dello stress) e aumenta la dopamina — ti rende letteralmente più felice\n- Ti bastano 4 accordi (G, Em, C, D) per suonare centinaia di canzoni famose\n- Imparare la chitarra migliora la coordinazione occhio-mano, la memoria e persino il pensiero matematico\n- Il momento migliore per trovare compagni di jam session: dopo il mese 3-4, quando riesci a tenere le progressioni di accordi base\n\n10. **10 Curiosità sulla Chitarra**:\n1. Gli antenati della chitarra risalgono a oltre 4.000 anni fa nell'antica Babilonia\n2. La chitarra suonabile più grande del mondo è lunga 13 metri — costruita da studenti in Texas\n3. Jimi Hendrix era mancino ma suonava una chitarra per destri capovolta — la ricordava in modo che il Mi basso fosse sempre in alto\n4. La chitarra più costosa mai venduta è stata la Martin D-18E di Kurt Cobain per l'\"MTV Unplugged\", battuta a 6 milioni di dollari nel 2020\n5. Le corde in nylon (chitarra classica) sono in realtà fatte di fluorocarbonio o nylon, mentre le \"corde in acciaio\" sono spesso avvolte in bronzo\n6. La chitarra è lo strumento più popolare al mondo — circa 50 milioni di persone la suonano\n7. Servono circa 100 ore di pratica per formare calli permanenti sui polpastrelli\n8. I tasti della chitarra sono posizionati usando la radice dodicesima di 2 (≈1,05946) — la matematica pura crea l'armonia musicale\n9. Suonare la chitarra attiva entrambi gli emisferi cerebrali contemporaneamente — poche attività lo fanno\n10. La parola \"chitarra\" deriva dallo spagnolo \"guitarra\", che a sua volta viene dal greco \"kithara\" — un antico strumento a corde\n\nFormatta tutto con intestazioni chiare, elenchi puntati e la tabella dell'impegno. Rendilo pratico, incoraggiante e onesto.",
    prompt3Label: "Avanzato: Pianificatore Interattivo (App HTML)",
    prompt3: "Crea un file HTML completo e autonomo (un singolo file con tutti i CSS e JavaScript incorporati) che funzioni come applicazione \"Pianificatore di Apprendimento Musicale\". L'app deve essere bella, professionale e completamente funzionante.\n\nLo strumento per cui pianificare è: [STRUMENTO]\nIl livello di esperienza dell'utente è: [LIVELLO: principiante assoluto / qualche esperienza / intermedio]\nL'utente può esercitarsi: [ORE A SETTIMANA: 3-5] ore a settimana\n\nL'app HTML deve avere TRE sezioni principali, accessibili tramite una barra di navigazione a tab in alto:\n\n**TAB 1: IL MIO PROFILO E IMPOSTAZIONI**\n- Campi modificabili per: Nome Studente, Strumento, Livello di Esperienza (dropdown), Ore a Settimana (slider: 1-20), Data di Inizio (date picker), Obiettivo Musicale (input di testo)\n- Un calendario di pratica dove l'utente può spuntare i giorni della settimana in cui si esercita, con un calcolatore delle ore settimanali\n- Una sezione progressi con slider (0-100%) per: Tecnica, Teoria Musicale, Ear Training, Repertorio, Sicurezza nell'Esibizione\n- Un pulsante \"Aggiorna Piano\" che modifica il contenuto del Tab 2 in base a queste impostazioni\n- Tutti gli input devono essere pre-compilati con valori ragionevoli per [STRUMENTO]\n\n**TAB 2: IL MIO PIANO DI APPRENDIMENTO**\n- Generato in base alle impostazioni del Tab 1\n- Organizzato in sezioni comprimibili per mese (Mese 1-6)\n- Ogni mese contiene lezioni settimanali con:\n  - Competenze da imparare\n  - Esercizi e drill\n  - Canzoni/brani da praticare\n  - Concetti di teoria\n  - Traguardi da raggiungere\n- Una tabella impegno/risultati (ore/settimana vs. tempistica) che mostra i risultati attesi\n- Sezione requisiti: strumento, accessori, spazio, app\n- Sezione consigli e raccomandazioni\n- 10 curiosità sullo strumento\n- **Pulsanti azione in cima al Tab 2:**\n  - \"Stampa Piano\" — apre la finestra di stampa del browser con CSS ottimizzato per la stampa\n  - \"Esporta come Markdown\" — scarica il piano come file .md\n  - \"Esporta come Word\" — scarica il piano come file .docx (usando conversione base HTML-to-Word via Blob con HTML compatibile Word)\n  - \"Esporta come PDF\" — scarica il piano come PDF usando html2canvas (CDN: https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js) e jsPDF (CDN: https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)\n\n**TAB 3: DASHBOARD E PROGRESSI**\n- Dashboard visuale con grafici (usa Chart.js via CDN: https://cdn.jsdelivr.net/npm/chart.js)\n- Grafici da includere:\n  - Grafico radar che mostra i livelli di competenza (dagli slider di progresso del Tab 1)\n  - Grafico a linee che mostra i progressi previsti su 24 mesi in base alle ore/settimana di impegno\n  - Grafico a barre che mostra ore di pratica target vs effettive (vista settimanale)\n  - Grafico a ciambella che mostra la distribuzione del tempo consigliata (tecnica, teoria, repertorio, ear training)\n- Riepilogo progressi: giorni dall'inizio, ore di pratica stimate totali, stima del livello attuale\n- Sezione motivazionale: prossimo traguardo, contatore della serie, messaggio di incoraggiamento\n- Tutti i grafici si aggiornano dinamicamente quando cambiano i dati del Tab 1\n\n**SISTEMA DI IMPORTAZIONE/ESPORTAZIONE:**\n- Pulsante \"Esporta Dati\" (nell'header o nel footer) che salva TUTTE le preferenze, gli slider di progresso, le selezioni del calendario e le impostazioni in un file scaricabile con estensione `.cemimusic`\n- Il formato del file .cemimusic è JSON con questa struttura:\n  ```json\n  {\n    \version\: \"1.0\",\n    \app\: \"CemiMusicPlanner\",\n    \exportDate\: \"ISO-date-string\",\n    \profile\: { name, instrument, level, hoursPerWeek, startDate, goal },\n    \progress\: { technique, theory, earTraining, repertoire, confidence },\n    \calendar\: { practiceDays: [bool x 7], practiceLog: {} },\n    \customNotes\: \"\"\n  }\n  ```\n- Pulsante \"Importa Dati\" che carica un file .cemimusic e ripristina tutte le impostazioni, aggiornando tutti e tre i tab\n- Includi validazione all'importazione per assicurarsi che il formato del file sia corretto\n\n**DESIGN:**\n- Design moderno e pulito con palette di colori a tema musicale\n- Layout responsive che funziona su desktop e mobile\n- Transizioni fluide tra i tab con animazioni\n- Tipografia professionale (usa Google Fonts via CDN)\n- Elementi decorativi sottili a tema musicale (note, righi musicali, ecc. via CSS o SVG)\n- Toggle modalità chiara/scura",
    prompt4Label: "Provalo: Pianificatore Chitarra (Pre-compilato)",
    prompt4: "Crea un file HTML completo e autonomo (un singolo file con tutti i CSS e JavaScript incorporati) che funzioni come applicazione \"Pianificatore per Imparare la Chitarra\". L'app deve essere bella, professionale e completamente funzionante.\n\nLo strumento è: Chitarra Acustica\nIl livello di esperienza dell'utente è: Principiante Assoluto\nL'utente può esercitarsi: 4 ore a settimana (circa 35 minuti al giorno, 6 giorni a settimana)\n\nL'app HTML deve avere TRE sezioni principali, accessibili tramite una barra di navigazione a tab in alto:\n\n**TAB 1: IL MIO PROFILO E IMPOSTAZIONI**\n- Campi pre-compilati:\n  - Nome Studente: \"Studente di Chitarra\"\n  - Strumento: \"Chitarra Acustica\"\n  - Livello di Esperienza: \"Principiante Assoluto\" (dropdown con opzioni: Principiante Assoluto, Qualche Esperienza, Intermedio, Avanzato)\n  - Ore a Settimana: 4 (slider: 1-20)\n  - Data di Inizio: data odierna (date picker)\n  - Obiettivo Musicale: \"Suonare canzoni attorno al falò, imparare brani acustici famosi, col tempo fare fingerpicking\"\n- Calendario pratica pre-impostato: da lunedì a sabato spuntati, domenica riposo. Ore settimanali: 4.0\n- Slider di progresso pre-impostati a: Tecnica 0%, Teoria Musicale 0%, Ear Training 0%, Repertorio 0%, Sicurezza nell'Esibizione 0% (punto di partenza principiante)\n- Un pulsante \"Aggiorna Piano\" che modifica il contenuto del Tab 2 quando cambiano le impostazioni\n\n**TAB 2: IL MIO PIANO DI APPRENDIMENTO**\n- Pre-generato per chitarra acustica, principiante assoluto, 4 ore/settimana\n- Organizzato in sezioni comprimibili per mese (Mese 1-6)\n- Ogni mese contiene lezioni settimanali con:\n  - Competenze da imparare\n  - Esercizi e drill\n  - Canzoni/brani da praticare\n  - Concetti di teoria\n  - Traguardi da raggiungere\n- Una tabella impegno/risultati (ore/settimana vs. tempistica) che mostra i risultati attesi\n- Sezione requisiti: chitarra acustica raccomandata (budget 150-300€), accessori (accordatore, corde di ricambio, plettri, capotasto, supporto), spazio tranquillo per praticare, app (GuitarTuna, Ultimate Guitar)\n- Sezione consigli e raccomandazioni\n- 10 curiosità sulla chitarra acustica\n- **Pulsanti azione in cima al Tab 2:**\n  - \"Stampa Piano\" — apre la finestra di stampa del browser con CSS ottimizzato per la stampa\n  - \"Esporta come Markdown\" — scarica il piano come file .md\n  - \"Esporta come Word\" — scarica il piano come file .docx (usando conversione base HTML-to-Word via Blob con HTML compatibile Word)\n  - \"Esporta come PDF\" — scarica il piano come PDF usando html2canvas (CDN: https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js) e jsPDF (CDN: https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js)\n\n**TAB 3: DASHBOARD E PROGRESSI**\n- Grafici con Chart.js (CDN: https://cdn.jsdelivr.net/npm/chart.js):\n  - Grafico radar: livelli di competenza (Tecnica 0%, Teoria 0%, Ear Training 0%, Repertorio 0%, Sicurezza 0%)\n  - Grafico a linee: progressi previsti su 24 mesi a 4 ore/settimana (curva morbida con rapidi guadagni iniziali, poi miglioramento graduale)\n  - Grafico a barre: target pratica settimanale (4 ore) vs ore effettive (partenza a 0, l'utente può registrare)\n  - Grafico a ciambella: distribuzione del tempo consigliata — Tecnica 25%, Repertorio 35%, Teoria 15%, Ear Training 15%, Suono Libero 10%\n- Riepilogo progressi: 0 giorni dall'inizio, 0 ore totali, Livello: Principiante Assoluto\n- Prossimo traguardo: \"Impara il tuo primo accordo (Em) — Settimana 1\"\n- Messaggio motivazionale: \"Ogni chitarrista è partito esattamente da dove sei tu. Prendi la tua chitarra e suona la tua prima nota oggi!\"\n\n**SISTEMA DI IMPORTAZIONE/ESPORTAZIONE:**\n- Il pulsante \"Esporta Dati\" salva tutte le impostazioni in un file `.cemimusic` (formato JSON):\n  ```json\n  {\n    \version\: \"1.0\",\n    \app\: \"CemiMusicPlanner\",\n    \exportDate\: \"2025-01-15T10:00:00Z\",\n    \profile\: {\n      \name\: \"Studente di Chitarra\",\n      \instrument\: \"Chitarra Acustica\",\n      \level\: \"Principiante Assoluto\",\n      \hoursPerWeek\: 4,\n      \startDate\: \"2025-01-15\",\n      \goal\: \"Suonare canzoni attorno al falò, imparare brani acustici famosi, col tempo fare fingerpicking\"\n    },\n    \progress\: {\n      \technique\: 0,\n      \theory\: 0,\n      \earTraining\: 0,\n      \repertoire\: 0,\n      \confidence\: 0\n    },\n    \calendar\: {\n      \practiceDays\: [true, true, true, true, true, true, false],\n      \practiceLog\: {}\n    },\n    \customNotes\: \"\"\n  }\n  ```\n- Il pulsante \"Importa Dati\" carica un file .cemimusic e ripristina tutte le impostazioni su tutti e tre i tab\n- Valida il formato del file all'importazione, mostra un errore amichevole se non valido\n\n**DESIGN:**\n- Palette calda e acustica: tonalità legno (#8B6914, #D4A843), crema (#FFF8E7), marrone scuro (#3E2723), ambra accento (#FF8F00)\n- Layout responsive — funziona su desktop e mobile\n- Transizioni fluide tra i tab\n- Google Fonts: \"Inter\" per il corpo, \"Playfair Display\" per i titoli\n- Decorazioni SVG sottili a tema chitarra (silhouette di chitarra nell'header, note musicali come separatori)\n- Toggle modalità chiara/scura (default: chiaro, tema caldo)\n\nRendi tutto completamente funzionante. Tutte le esportazioni, importazioni, grafici, calcoli e pulsanti devono funzionare. Singolo file HTML autonomo, tutte le dipendenze via CDN.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ],
    links: [
      {
        name: "Justin Guitar",
        url: "https://www.justinguitar.com"
      },
      {
        name: "Ultimate Guitar",
        url: "https://www.ultimate-guitar.com"
      },
      {
        name: "Yousician",
        url: "https://yousician.com"
      },
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 124,
    title: "Spiega Qualsiasi Cosa Come Se Avessi 5 Anni",
    subtitle: "Trasforma qualsiasi argomento complesso in una spiegazione semplice e chiara",
    category: "quickwins",
    description: "Una delle cose più potenti che l'IA può fare è prendere qualsiasi argomento complesso — fisica quantistica, blockchain, geopolitica, contratti legali — e spiegarlo in modo così semplice che anche un bambino potrebbe capirlo. Non è solo per i bambini: scomporre la complessità è il modo in cui gli esperti testano davvero la propria comprensione. Resterai stupito da quanto diventino chiari anche gli argomenti più intimidatori.",
    steps: [
      "Scegli un argomento che hai sempre voluto capire",
      "Chiedi all'IA di spiegartelo come se avessi 5 anni",
      "Fai domande di approfondimento per andare più in profondità",
      "Provalo con argomenti del tuo lavoro o dei tuoi studi"
    ],
    prompt: "Spiega [ARGOMENTO] come se avessi 5 anni. Usa parole semplici, paragoni divertenti ed esempi concreti che un bambino capirebbe. Niente gergo tecnico. Fai in modo che sembri una conversazione amichevole.",
    promptTip: "Prova con argomenti che pensi siano impossibili da semplificare: 'l'entanglement quantistico', 'come funziona la borsa', 'cosa fa il DNA', 'perché gli aerei volano', 'come la crittografia protegge le mie password'. Resterai sorpreso da quanto diventino chiari. Puoi anche regolare il livello: 'spiega come se avessi 10 anni', 'spiega come se fossi un adolescente sveglio' o 'spiega come se fossi nuovo in questo campo'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 125,
    title: "Trasforma una Foto in Qualsiasi Stile Artistico",
    subtitle: "Trasforma le tue foto in dipinti, schizzi, anime e molto altro",
    category: "quickwins",
    description: "Dai una qualsiasi foto all'IA e guardala trasformarsi in un capolavoro in qualsiasi stile artistico tu possa immaginare — pittura a olio, acquerello, anime giapponese, pixel art, fumetto, Rinascimento, Art Déco, vetrata, schizzo a matita o persino nello stile di un artista specifico. I risultati sono istantanei e spesso sorprendenti.",
    steps: [
      "Scegli una foto che vorresti trasformare",
      "Caricala su uno strumento IA per immagini",
      "Descrivi lo stile artistico che desideri",
      "Genera e confronta diversi stili"
    ],
    prompt: "Trasforma questa foto in [STILE ARTISTICO]. Mantieni la composizione e il soggetto riconoscibili ma reimmaginali completamente in questo stile. Fai in modo che sembri un autentico pezzo in [STILE ARTISTICO], non un filtro.",
    promptTip: "Prova questi stili per risultati sorprendenti: 'anime Studio Ghibli', 'pittura a olio di Van Gogh', 'poster Art Déco', 'illustrazione ad acquerello', 'arte digitale cyberpunk', 'affresco rinascimentale', 'copertina di fumetto', 'pixel art', 'vetrata', 'schizzo a carboncino'. Puoi anche combinare gli stili: 'Art Nouveau incontra il cyberpunk'.",
    tools: [
      "ChatGPT (DALL-E)",
      "Midjourney",
      "Stable Diffusion",
      "Adobe Firefly"
    ]
  },
  {
    id: 126,
    title: "Scrivi una Storia per Bambini Personalizzata",
    subtitle: "Crea una storia magica con protagonista il tuo bambino, animale domestico o chiunque",
    category: "quickwins",
    description: "L'IA può scrivere una storia per bambini completa e originale con qualsiasi personaggio tu voglia — il tuo bambino, il tuo animale domestico, il figlio di un amico o un eroe completamente immaginario. Scegli l'ambientazione, la lezione, il tono e guarda una storia commovente prendere vita in pochi secondi. Perfetta per storie della buonanotte, regali o semplicemente puro divertimento.",
    steps: [
      "Scegli il personaggio principale (un bambino vero, un animale domestico o un eroe immaginario)",
      "Scegli un'ambientazione e un tipo di avventura",
      "Indica all'IA quale lezione o tema intrecciare nella storia",
      "Genera la storia e leggila ad alta voce o stampala"
    ],
    prompt: "Scrivi una storia per bambini dai [FASCIA D'ETÀ] anni con protagonista un/una [DESCRIZIONE DEL PERSONAGGIO — es. 'coraggiosa bambina di 6 anni di nome Sofia che adora i dinosauri']. La storia si svolge in [AMBIENTAZIONE — es. 'una biblioteca magica dove i libri prendono vita']. La lezione della storia è [TEMA — es. 'che essere diversi è un superpotere']. Rendila calda, divertente e di circa 800 parole con un finale soddisfacente.",
    promptTip: "Rendila ancora più speciale: aggiungi gli amici veri del bambino come personaggi secondari, includi il suo animale preferito o ambientala nella sua scuola o nel suo quartiere. Puoi chiedere una serie: 'Scrivi il Capitolo 1 di un'avventura in 5 capitoli.' Per i regali, abbinala a illustrazioni generate dall'IA di ogni scena.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 127,
    title: "Pianifica la Giornata Perfetta in Qualsiasi Città",
    subtitle: "Ottieni un itinerario dettagliato e personalizzato per qualsiasi destinazione",
    category: "quickwins",
    description: "Dimentica le guide turistiche generiche. L'IA può creare un piano giornaliero completamente personalizzato per qualsiasi città del mondo in base ai tuoi interessi, budget, ritmo, esigenze alimentari e stile di viaggio. Organizzerà la tua mattina, pomeriggio e sera con luoghi specifici, tempi di spostamento e consigli da insider — come avere un amico del posto che pianifica la tua giornata.",
    steps: [
      "Indica la città e la data o stagione della tua visita",
      "Descrivi i tuoi interessi e preferenze",
      "Chiedi un piano dettagliato ora per ora",
      "Perfezionalo: cambia locali, regola il ritmo, aggiungi pasti"
    ],
    prompt: "Pianifica la mia giornata perfetta a [CITTÀ] per [DATA/STAGIONE]. Adoro [INTERESSI — es. 'cibo di strada, luoghi nascosti, architettura e cultura locale']. Il mio budget è [LIVELLO DI BUDGET — economico/moderato/lusso]. Preferisco un ritmo [RITMO — rilassato/moderato/intenso]. Dammi un itinerario ora per ora dalla mattina alla sera con luoghi specifici, indirizzi, tempi di spostamento tra le tappe, costi stimati e consigli da insider che un turista non conoscerebbe.",
    promptTip: "Sii specifico su ciò che ami: 'odio le trappole per turisti', 'sono vegano', 'viaggio con un bambino piccolo', 'voglio posti instagrammabili', 'adoro la street art'. Prova: 'Pianifica una giornata di pioggia perfetta a Tokyo' o 'Pianifica una serata romantica a Parigi sotto i 100€'. Chiedi anche opzioni di riserva nel caso un posto sia chiuso.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: 128,
    title: "Crea una Canzone su Qualsiasi Cosa",
    subtitle: "Trasforma qualsiasi argomento, nome o ricordo in testi originali e musica",
    category: "quickwins",
    description: "L'IA può comporre una canzone originale su letteralmente qualsiasi cosa — una canzone di compleanno con il nome di qualcuno, una canzone d'amore per il tuo animale domestico, un rap sul tuo lavoro, una ninna nanna per il tuo bambino o un inno rock sulla pizza. Otterrai testi completi e, con gli strumenti IA musicali, una canzone completamente prodotta con voci in pochi minuti.",
    steps: [
      "Scegli il tuo argomento, persona o ricordo",
      "Scegli un genere musicale e un'atmosfera",
      "Chiedi all'IA di scrivere i testi",
      "Usa uno strumento IA musicale per generare la canzone vera e propria"
    ],
    prompt: "Scrivi una canzone [GENERE — es. pop/rock/country/rap/jazz/ninna nanna] originale su [ARGOMENTO]. L'atmosfera deve essere [MOOD — es. allegra/divertente/romantica/epica/nostalgica]. Includi un ritornello orecchiabile, due strofe e un bridge. Rendi i testi creativi, emotivamente coinvolgenti e cantabili.",
    promptTip: "Più è specifico e personale, meglio è: 'Scrivi una canzone country sul mio golden retriever Max che adora rubare i calzini' produrrà qualcosa di molto più sorprendente di 'scrivi una canzone su un cane'. Prova argomenti umoristici per divertimento immediato: 'una power ballad sul lunedì mattina' o 'un rap battle tra caffè e tè'. Poi incolla i testi in Suno o Udio per sentirli cantati.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Suno",
      "Udio"
    ],
    links: [
      {
        name: "Ascolta i nostri artisti potenziati dall'IA",
        url: "https://maimusic.org"
      }
    ]
  },
  {
    id: 129,
    title: "Riassumi Qualsiasi Testo Lungo Istantaneamente",
    subtitle: "Trasforma pagine di testo in un riassunto chiaro e conciso",
    category: "quickwins",
    description: "Hai un rapporto di 50 pagine, un articolo lungo, un denso paper di ricerca o un capitolo di un libro da capire velocemente? L'IA può leggere tutto e darti un riassunto preciso in pochi secondi — evidenziando i punti chiave, le argomentazioni principali, i dati importanti e le conclusioni operative. È come avere un assistente brillante che legge tutto al posto tuo.",
    steps: [
      "Incolla o carica il testo che vuoi riassumere",
      "Indica all'IA quanto lungo e dettagliato vuoi il riassunto",
      "Chiedi i punti chiave o le azioni da intraprendere",
      "Richiedi diversi formati: elenco puntato, riassunto esecutivo o un singolo paragrafo"
    ],
    prompt: "Riassumi il seguente testo in [FORMATO — es. '5 punti elenco' / 'un riassunto esecutivo di un paragrafo' / '10 punti chiave']. Concentrati sulle idee più importanti, le conclusioni e le informazioni operative. Tralascia riempitivi e ripetizioni.\n\n[INCOLLA IL TUO TESTO QUI]",
    promptTip: "Mosse avanzate: 'Riassumi questo E elenca tutto quello che devo fare in base ad esso', 'Riassumi questo paper di ricerca e dimmi se le conclusioni sono ben supportate', 'Dammi una versione da elevator pitch di 30 secondi di questo rapporto'. Funziona con articoli, email, documenti legali, trascrizioni di riunioni, paper accademici e persino interi libri (incolla i capitoli uno alla volta).",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: 130,
    title: "Chatta con Qualsiasi Personaggio Storico",
    subtitle: "Conversa con Einstein, Cleopatra o chiunque dalla storia",
    category: "quickwins",
    description: "L'IA può impersonare qualsiasi personaggio storico — rispondendo alle tue domande con la sua voce, le sue conoscenze, la sua personalità e la sua prospettiva. Chiedi a Leonardo da Vinci del suo processo creativo, discuti di filosofia con Socrate, ricevi consigli di leadership da Abraham Lincoln o chiedi a Cleopatra come governare un impero. È educazione e intrattenimento fusi in un'esperienza straordinaria.",
    steps: [
      "Scegli un personaggio storico che ti incuriosisce",
      "Chiedi all'IA di impersonare quella persona",
      "Avvia una conversazione — chiedigli qualsiasi cosa",
      "Prova a chiedere loro di argomenti moderni per intuizioni sorprendenti"
    ],
    prompt: "Tu sei [PERSONAGGIO STORICO]. Resta completamente nel personaggio. Parla come avrebbe parlato, con la sua personalità, conoscenze, valori e prospettiva. Avremo una conversazione.\n\nPrima, presentati brevemente — chi sei, per cosa sei conosciuto e cosa ti motiva. Poi aspetta le mie domande.",
    promptTip: "La magia avviene quando chiedi loro di cose moderne: 'Nikola Tesla, cosa pensi degli smartphone?' o 'Shakespeare, scrivimi un sonetto sui social media.' Prova i dibattiti: 'Aristotele e Confucio, discutete il significato di una buona vita.' Oppure ottieni consigli pratici: 'Benjamin Franklin, come dovrei gestire il mio tempo?' Puoi anche far dibattere due figure tra loro.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 131,
    title: "Trasforma Appunti Grezzi in un'Email Professionale",
    subtitle: "Trasforma pensieri disordinati in un messaggio professionale e chiaro",
    category: "quickwins",
    description: "Sai cosa vuoi dire, ma scriverlo in modo professionale richiede tempo. L'IA può prendere i tuoi appunti grezzi, elenchi puntati o pensieri confusi e trasformarli istantaneamente in un'email raffinata e ben strutturata con il tono giusto — che sia formale, amichevole, di scuse, persuasivo o urgente. Non fissare mai più un'email vuota.",
    steps: [
      "Scrivi i tuoi appunti grezzi o punti elenco",
      "Specifica il tono e a chi è destinata",
      "Lascia che l'IA crei l'email professionale",
      "Rivedi, modifica e invia"
    ],
    prompt: "Trasforma questi appunti grezzi in un'email professionale e curata. Il tono deve essere [TONO — es. formale/amichevole/diplomatico/urgente/di scuse]. Il destinatario è [DESTINATARIO — es. 'il mio capo', 'un cliente', 'un collega']. Mantienila concisa e chiara.\n\nI miei appunti:\n[INCOLLA QUI I TUOI APPUNTI GREZZI, PUNTI ELENCO O PENSIERI CONFUSI]",
    promptTip: "Funziona per qualsiasi tipo di messaggio: 'trasformalo in un messaggio Slack', 'rendilo un post LinkedIn', 'scrivilo come messaggio al mio team'. Specifica cosa ti serve: 'rendilo più breve', 'fai in modo che suoni meno aggressivo', 'aggiungi una call to action', 'includi una scadenza'. Ottimo anche per email difficili: 'trasforma questi appunti in una risposta diplomatica a un reclamo'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 132,
    title: "Ottieni un Piatto Personalizzato con Quello che Hai nel Frigo",
    subtitle: "Trasforma ingredienti casuali in una ricetta deliziosa",
    category: "quickwins",
    description: "Apri il frigo, elenca quello che vedi e l'IA creerà una ricetta completa usando esattamente quegli ingredienti. Basta sprecare cibo, basta pasti noiosi, basta 'non c'è niente da mangiare'. Riceverai istruzioni passo passo, porzioni, tempi di preparazione e persino informazioni nutrizionali — tutto su misura per quello che hai davvero.",
    steps: [
      "Apri il frigo e la dispensa ed elenca quello che vedi",
      "Indica all'IA eventuali restrizioni alimentari o preferenze",
      "Ottieni una ricetta completa con istruzioni",
      "Chiedi varianti o alternative più semplici"
    ],
    prompt: "Ho questi ingredienti: [ELENCA I TUOI INGREDIENTI — es. 'cosce di pollo, riso, peperoni, aglio, salsa di soia, uova, formaggio, cipolla, pomodori']. Le mie preferenze/restrizioni alimentari: [EVENTUALI RESTRIZIONI — es. 'nessuna' / 'senza glutine' / 'vegetariano' / 'low-carb']. Suggeriscimi una ricetta deliziosa che posso preparare con questi ingredienti. Includi istruzioni passo passo, tempo di preparazione, tempo di cottura, porzioni e livello di difficoltà.",
    promptTip: "Rendilo più divertente: 'Fanne un piatto gourmet alla Gordon Ramsay', 'Dammi un pasto da 15 minuti per studenti universitari', 'Rendilo adatto ai bambini', 'Dammi 3 opzioni di ricette classificate per difficoltà'. Puoi anche specificare la cucina: 'Rendilo italiano', 'Dammi qualcosa di ispirazione asiatica'. Per il meal prep: 'Usa questi ingredienti per pianificare 5 cene diverse per la settimana'.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: 133,
    title: "Riscrivi Qualsiasi Testo nello Stile di un Personaggio Famoso",
    subtitle: "Ascolta il tuo messaggio con la voce di Shakespeare, Hemingway o chiunque",
    category: "quickwins",
    description: "Ti sei mai chiesto come suonerebbe la tua email di lavoro se l'avesse scritta Shakespeare? O il tuo curriculum nello stile asciutto di Hemingway? L'IA può prendere qualsiasi testo e riscriverlo con la voce, il vocabolario e lo stile distintivo di qualsiasi scrittore, oratore o personaggio famoso. È educativo, divertente e a volte sorprendentemente utile.",
    steps: [
      "Incolla qualsiasi testo che vuoi trasformare",
      "Scegli lo stile di un personaggio famoso",
      "Lascia che l'IA lo riscriva con la sua voce",
      "Confronta diversi stili per divertimento o ispirazione"
    ],
    prompt: "Riscrivi il seguente testo nello stile di [PERSONAGGIO FAMOSO — es. 'Shakespeare', 'Hemingway', 'Obama', 'Yoda', 'un pirata', 'Morgan Freeman che narra']. Mantieni lo stesso messaggio di fondo ma trasforma completamente la voce, il vocabolario, la struttura delle frasi e la personalità per corrispondere al suo stile.\n\nTesto originale:\n[INCOLLA IL TUO TESTO QUI]",
    promptTip: "Prova combinazioni assurde: la tua lista della spesa come sonetto shakespeariano, i tuoi appunti di riunione come racconto breve di Hemingway, una lettera di reclamo nello stile del Signor Rogers, il tuo curriculum scritto da un pirata. Per uso pratico: 'riscrivi questo nello stile dei migliori TED Talk' o 'riscrivi questo documento tecnico nello stile di un insegnante amichevole'. Prova lo stesso testo in 3 stili diversi per vedere come la voce cambia tutto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 134,
    title: "Trova i Pro e i Contro di Qualsiasi Situazione",
    subtitle: "Ottieni un'analisi equilibrata e approfondita di qualsiasi decisione o argomento",
    category: "quickwins",
    description: "Hai una decisione difficile da prendere? L'IA può generare istantaneamente un'analisi completa dei pro e contro di qualsiasi situazione — cambiare lavoro, trasferirsi in un'altra città, comprare o affittare, adottare una tecnologia, avviare un'attività o persino scegliere tra due ristoranti. Considera angolazioni che potresti non vedere e le presenta in modo chiaro ed equilibrato così puoi decidere con sicurezza.",
    steps: [
      "Descrivi la decisione o la situazione che stai valutando",
      "Chiedi all'IA un'analisi dettagliata dei pro e contro",
      "Chiedi di pesare i fattori o classificarli per importanza",
      "Fai domande di approfondimento su preoccupazioni specifiche"
    ],
    prompt: "Dammi un'analisi approfondita dei pro e contro di [SITUAZIONE — es. 'passare da un lavoro aziendale al freelance', 'trasferirmi da Milano a un piccolo paese', 'imparare Python vs JavaScript come primo linguaggio']. Considera fattori finanziari, emotivi, pratici e a lungo termine. Organizzali chiaramente e classifica i 3 fattori più importanti per ciascun lato.",
    promptTip: "Rendila personale: 'Ho 35 anni con due figli e un mutuo — pro e contro di lasciare il lavoro per avviare un'attività'. Chiedi un'analisi ponderata: 'Dai un punteggio da 1 a 10 per importanza a ogni fattore e dammi una raccomandazione finale'. Prova la modalità comparativa: 'Pro e contro dell'Opzione A vs Opzione B vs Opzione C in una tabella'. Ottimo per: decisioni di carriera, acquisti importanti, cambiamenti di stile di vita, scelte tecnologiche e dilemmi relazionali.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: 135,
    title: "Esplora Alternative che Non Avevi Considerato",
    subtitle: "Scopri opzioni e possibilità che non sapevi esistessero",
    category: "quickwins",
    description: "Quando sei bloccato su un problema o ancorato a un solo modo di pensare, l'IA può stupirti suggerendo alternative a cui non avevi mai pensato. Che si tratti di percorsi di carriera, strumenti, approcci a un progetto, destinazioni di vacanza, modelli di business o decisioni di vita — l'IA attinge da una vasta conoscenza per mostrarti porte che non sapevi nemmeno esistessero.",
    steps: [
      "Descrivi la tua situazione attuale o la decisione che devi affrontare",
      "Indica all'IA cosa hai già considerato",
      "Chiedi alternative creative che potresti aver perso",
      "Approfondisci le opzioni più interessanti"
    ],
    prompt: "Attualmente sto [DESCRIVI LA TUA SITUAZIONE — es. 'considerando un cambio di carriera dalla contabilità']. Finora ho considerato [OPZIONI CHE CONOSCI — es. 'consulenza finanziaria e analisi dati']. Quali sono 10 percorsi, opzioni o approcci alternativi che probabilmente non ho considerato? Per ognuno, spiega perché potrebbe essere un'ottima scelta, cosa comporta e cosa lo rende sorprendente o non ovvio.",
    promptTip: "Funziona per tutto: 'Ho bisogno di una vacanza ma ho solo 500€ — quali destinazioni non ho considerato?', 'Voglio imparare una nuova competenza — quali abilità insolite hanno un grande impatto?', 'Sto risolvendo [problema tecnico] usando [approccio] — quali approcci completamente diversi esistono?'. Spingi oltre: 'Ora dammi 5 opzioni davvero audaci e non convenzionali a cui la maggior parte delle persone non penserebbe mai'. Ottimo anche per: idee regalo, strategie aziendali, miglioramenti della casa e progetti creativi.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "Perplexity"
    ]
  },
  {
    id: 136,
    title: "Pianifica una Giornata Speciale con Tuo Figlio o Tua Figlia",
    subtitle: "Progetta una giornata significativa insieme — non solo divertimento, ma vera connessione",
    category: "family",
    description: "Una giornata speciale non è questione di spendere soldi o spuntare attrazioni turistiche da una lista — è creare uno spazio in cui tuo figlio senta la tua presenza totale e indivisa. La ricerca in psicologia dello sviluppo mostra che le esperienze condivise — soprattutto quelle che coinvolgono risate, novità e piccole sfide — rilasciano ossitocina e costruiscono connessioni neurali di fiducia che durano decenni. L'obiettivo non è una giornata perfetta. È una giornata presente. L'IA può aiutarti a progettare una giornata su misura per l'età, la personalità e il momento emotivo di tuo figlio — ma presentarti ed esserci? Quello dipende interamente da te. Non è un evento unico. È una pratica. Più lo fai, più il legame si approfondisce.",
    steps: [
      "Condividi l'età, gli interessi, la personalità di tuo figlio e cosa sta attraversando in questo momento",
      "Descrivi il tuo contesto: budget, posizione, stagione, tempo disponibile",
      "Racconta all'IA lo stato attuale della vostra relazione — siete vicini? vi state riavvicinando? state ricominciando da zero?",
      "Ottieni un piano personalizzato per la giornata che dia priorità alla connessione rispetto al consumo"
    ],
    prompt: "Voglio pianificare una giornata significativa e divertente con [mio figlio/mia figlia], età [ETÀ]. Si chiama [NOME] e al momento è appassionato/a di [INTERESSI — es. 'dinosauri, Minecraft, disegno, calcio']. La sua personalità è [PERSONALITÀ — es. 'introverso/a e riflessivo/a', 'energico/a e avventuroso/a', 'creativo/a e sensibile']. La nostra relazione attualmente è [STATO DELLA RELAZIONE — es. 'forte e vicina', 'ci siamo allontanati ultimamente', 'stiamo ricostruendo dopo un periodo difficile', 'buona ma non passiamo abbastanza tempo da soli insieme'].\n\nContesto: Siamo a [LUOGO/CITTÀ], è [STAGIONE/METEO], il mio budget è [BUDGET — es. '0€ — solo attività gratuite', 'sotto i 50€', 'flessibile'], e abbiamo [TEMPO — es. 'tutta la giornata', 'solo il pomeriggio', '3 ore'].\n\nPer favore crea un piano per la giornata che:\n- Dia priorità alla connessione genuina rispetto all'intrattenimento o al consumo\n- Includa spunti di conversazione naturali inseriti nelle attività (non forzati)\n- Preveda almeno un momento di sfida o collaborazione condivisa (non competizione)\n- Includa un'attività di 'decompressione' alla fine che favorisca la riflessione o la tranquillità insieme\n- Tenga conto della fase di sviluppo e dei bisogni emotivi di un/a bambino/a di [ETÀ] anni\n- Suggerisca come gestire i momenti in cui le cose non vanno come previsto (perché succederà)\n\nRicordami: questa giornata non è per essere un genitore perfetto. È per essere un genitore presente. L'obiettivo non è impressionare mio figlio, ma vederlo — vederlo davvero — per chi è oggi.",
    promptTip: "Ricorda: le giornate migliori non sono le più elaborate — sono quelle in cui tuo figlio si è sentito veramente visto. Ripeti regolarmente. Una giornata mensile 'solo nostra' diventa una tradizione che tuo figlio ricorderà per sempre. Dopo la giornata, chiedi a tuo figlio qual è stato il suo momento preferito. Non è quasi mai quello che ti aspetti. Quella risposta è oro — ti dice cosa significa la connessione per LUI/LEI.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 137,
    title: "Trova Argomenti di Conversazione con Tuo Figlio o Tua Figlia",
    subtitle: "Rompi il silenzio con spunti di conversazione che funzionano davvero",
    category: "family",
    description: "'Com'è andata a scuola?' 'Bene.' Ti suona familiare? Il problema non è che tuo figlio non vuole parlare — è che le domande generiche ottengono risposte generiche. Bambini e adolescenti hanno molte più probabilità di aprirsi quando le domande sono specifiche, inaspettate, a bassa pressione e nascono da curiosità genuina piuttosto che da un interrogatorio. Anche il momento conta enormemente: i viaggi in auto, le passeggiate, cucinare insieme e l'ora della buonanotte sono momenti psicologicamente più sicuri rispetto al faccia a faccia a tavola. L'IA può generare spunti di conversazione adatti all'età e alla personalità — ma la vera magia accade quando ascolti la risposta senza giudicare, correggere o deviare. La connessione non è una tecnica. È un impegno che rinnovi ogni singolo giorno.",
    steps: [
      "Condividi l'età, la personalità e il contesto di vita attuale di tuo figlio",
      "Descrivi cosa è stato difficile nella comunicazione ultimamente",
      "Racconta all'IA quali argomenti vorresti esplorare con tuo figlio",
      "Ottieni spunti di conversazione personalizzati organizzati per contesto e umore"
    ],
    prompt: "Ho bisogno di aiuto per iniziare conversazioni vere con [mio figlio/mia figlia], età [ETÀ]. Si chiama [NOME]. La sua personalità è [PERSONALITÀ — es. 'silenzioso/a e riservato/a', 'chiacchierone/a ma evita i temi profondi', 'ansioso/a e pensa troppo', 'sicuro/a di sé ma non condivide i sentimenti']. Al momento sta [CONTESTO — es. 'iniziando le medie', 'affrontando problemi con le amicizie', 'ossessionato/a dai videogiochi', 'attraversando una fase lunatica', 'allontanandosi da me'].\n\nLa sfida che sto affrontando è: [LA TUA SFIDA — es. 'risponde con una sola parola', 'vuole parlare solo dei suoi interessi, non dei sentimenti', 'eravamo vicini ma sta diventando adolescente', 'non so più cosa succede nella sua vita'].\n\nPer favore dammi:\n1. 10 spunti di conversazione specifici per momenti casuali (viaggi in auto, passeggiate, cucinare insieme)\n2. 5 domande più profonde per momenti tranquilli (ora della buonanotte, sere tranquille, tempo da soli)\n3. 3 approcci creativi (giochi, 'preferiresti...', situazioni ipotetiche) che rendano il parlare un gioco\n4. Cose che dovrei SMETTERE di dire o fare che potrebbero bloccare le conversazioni\n5. Come rispondere quando finalmente si apre (il momento che la maggior parte dei genitori rovina per sbaglio)\n\nTutti i suggerimenti devono essere calibrati per la fase di sviluppo e la capacità emotiva di un/a bambino/a di [ETÀ] anni. Ricordami che ascoltare non è aspettare il mio turno per parlare — è far sentire a mio figlio che quello che ha detto è arrivato davvero.",
    promptTip: "La tecnica di conversazione più potente con i bambini: dopo che dicono qualcosa, fai una pausa. Non rispondere immediatamente, non consigliare, non collegare alla tua esperienza. Lascia che il silenzio resti per 3 secondi. Quasi sempre diranno di più. Inoltre: condividi prima le TUE storie. La vulnerabilità è contagiosa. Quando racconti a tuo figlio di una volta in cui hai fallito o hai avuto paura, gli dai il permesso di fare lo stesso.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 138,
    title: "Crea una Strategia di Connessione con Tuo Figlio o Tua Figlia",
    subtitle: "Costruisci un piano a lungo termine per approfondire la vostra relazione — settimana dopo settimana, mese dopo mese",
    category: "family",
    description: "Non gestiresti un'azienda senza un piano. Non ti alleneresti per una maratona senza un programma. Eppure la maggior parte dei genitori affronta la relazione più importante della propria vita — quella con il proprio figlio — senza alcuna struttura intenzionale. Non si tratta di programmare l'amore in un calendario. Si tratta di riconoscere che la connessione non avviene per caso, soprattutto man mano che i figli crescono, gli impegni si accumulano e gli schermi si moltiplicano. Una strategia di connessione è un insieme di piccoli, costanti depositi nella vostra relazione — micro-momenti quotidiani, rituali settimanali, avventure mensili e tradizioni stagionali. La ricerca mostra che non sono i grandi gesti a costruire un attaccamento sicuro. Sono i piccoli momenti prevedibili e ripetuti in cui un bambino pensa: 'Il mio genitore mi vede. Il mio genitore mi sceglie. Il mio genitore si fa presente.' L'IA può aiutarti a progettare questa strategia. Viverla — ogni giorno, anche quando è difficile, anche quando ti respingono — quello è il tuo compito.",
    steps: [
      "Descrivi tuo figlio, la struttura della tua famiglia e i tuoi impegni settimanali",
      "Sii onesto su dove si trova la relazione in questo momento",
      "Identifica gli ostacoli principali alla connessione nella tua vita quotidiana",
      "Ottieni un piano di connessione personalizzato settimanale, mensile e stagionale"
    ],
    prompt: "Aiutami a creare una strategia di connessione a lungo termine per la mia relazione con [mio figlio/mia figlia], [NOME], età [ETÀ].\n\nContesto familiare: [STRUTTURA FAMILIARE — es. 'famiglia con due genitori', 'sono un papà single con affido condiviso', 'famiglia allargata con fratellastri', 'viaggio spesso per lavoro']. Altri figli: [FRATELLI — es. 'nessuno', 'sorella maggiore di 14 anni', 'fratello gemello']. I miei impegni settimanali: [PROGRAMMA — es. 'lavoro 9-17 da lunedì a venerdì', 'faccio turni e il mio orario cambia ogni settimana', 'sono a casa ma sopraffatto dalle responsabilità'].\n\nStato attuale della relazione: [VALUTAZIONE ONESTA — es. 'siamo vicini ma voglio essere più intenzionale', 'ci siamo allontanati dopo il divorzio', 'preferiscono l'altro genitore', 'litighiamo spesso', 'conviviamo ma non ci connettiamo veramente'].\n\nOstacoli principali alla connessione: [OSTACOLI — es. 'schermi e dispositivi', 'la mia stanchezza', 'il loro programma pieno di attività extrascolastiche', 'non so come relazionarmi con i loro interessi', 'abbiamo personalità molto diverse'].\n\nPer favore crea:\n1. **Micro-connessioni quotidiane** (2-5 minuti): piccoli momenti ripetibili da inserire in ogni giornata\n2. **Rituali settimanali** (30-60 minuti): un tempo protetto a settimana che diventi 'la nostra cosa'\n3. **Avventure mensili** (mezza giornata o giornata intera): esperienze più profonde per rafforzare il legame\n4. **Tradizioni stagionali** (trimestrali): momenti più grandi che creano ricordi familiari duraturi\n5. **Piano di riconnessione d'emergenza**: cosa fare quando le cose vanno male — quando abbiamo litigato, quando si chiude, quando ho sbagliato\n6. **Indicatori di progresso**: come capire se la connessione si sta davvero approfondendo (senza trasformare mio figlio in un progetto)\n\nRicordami: questa è una maratona, non uno sprint. Mancherò dei giorni. Fallirò. Fa parte del processo. Ciò che conta è che continuo a farmi presente. Mio figlio non ha bisogno di un genitore perfetto — ha bisogno di un genitore costante.",
    promptTip: "Stampa il tuo piano e mettilo dove lo vedrai ogni giorno. Riesaminalo ogni mese. La trappola più grande: farlo per qualche settimana, vedere miglioramenti e poi tornare al pilota automatico. La connessione è come il fitness — la perdi quando ti fermi. Inoltre, coinvolgi tuo figlio nella pianificazione. Chiedigli: 'Se avessimo un'ora a settimana solo nostra, cosa vorresti fare?' La risposta potrebbe sorprenderti — e crea un senso di appartenenza nella relazione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 139,
    title: "Stabilite Obiettivi, Sfide e Compiti Insieme",
    subtitle: "Costruite qualcosa di significativo fianco a fianco — la psicologia dello scopo condiviso",
    category: "family",
    description: "Quando un genitore e un figlio lavorano insieme verso qualcosa — non il genitore che fissa obiettivi PER il figlio, ma che li co-crea genuinamente — succede qualcosa di potente. Il bambino sperimenta autonomia ('le mie idee contano'), competenza ('ce la posso fare') e relazione ('siamo in questo insieme'). Questi sono i tre pilastri della Teoria dell'Autodeterminazione, il quadro più robusto della psicologia motivazionale. La parola chiave è INSIEME. Non si tratta di assegnare compiti o di guidare segretamente la tua agenda attraverso una finta collaborazione. I bambini lo capiscono immediatamente. Si tratta di trovare qualcosa che interessi a entrambi, fare un piano, affrontare le difficoltà e festeggiare i successi — come partner. L'IA può aiutarti a progettare obiettivi adatti all'età, sfide divertenti e compiti significativi. Ma la partnership? Quella nasce dalla tua scelta di essere un compagno di squadra, non un manager.",
    steps: [
      "Scegli se volete stabilire un obiettivo, una sfida o un compito insieme",
      "Condividi l'età, gli interessi di tuo figlio e cosa lo motiva",
      "Descrivi su cosa vorreste lavorare insieme e perché",
      "Ottieni un piano strutturato che dia a tuo figlio vera responsabilità"
    ],
    prompt: "Voglio [STABILIRE UN OBIETTIVO / CREARE UNA SFIDA / PIANIFICARE UN COMPITO] insieme a [mio figlio/mia figlia], [NOME], età [ETÀ].\n\nI suoi interessi: [INTERESSI]. Cosa lo/la motiva: [MOTIVAZIONI — es. 'la competizione', 'la creatività', 'aiutare gli altri', 'guadagnare ricompense', 'padroneggiare nuove abilità', 'dimostrare di saper fare cose difficili']. Cosa lo/la demotiva: [DEMOTIVAZIONI — es. 'sentirsi controllato/a', 'paura di fallire', 'noia', 'troppa pressione', 'confronto con i fratelli'].\n\nL'area su cui vorremmo lavorare insieme: [AREA — es. 'imparare a cucinare 5 piatti', 'allenarci insieme per una corsa di 5 km', 'costruire qualcosa con le nostre mani', 'leggere 10 libri quest'estate', 'risparmiare per qualcosa di speciale', 'imparare insieme una nuova abilità da zero', 'completare un progetto di miglioramento della casa'].\n\nPer favore aiutami a:\n1. Presentare questo come una vera partnership (non un genitore che assegna un lavoro a un bambino)\n2. Suddividerlo in tappe che sembrino raggiungibili per un/a bambino/a di [ETÀ] anni\n3. Inserire momenti di celebrazione (non solo alla fine — lungo il percorso)\n4. Includere un modo per dare a mio figlio vero potere decisionale e di contributo\n5. Pianificare per le battute d'arresto — cosa fare quando la motivazione cala (perché succederà)\n6. Suggerire come rendere il PROCESSO più prezioso del risultato\n\nImportante: questo deve sembrare qualcosa che facciamo INSIEME — non qualcosa che gli/le faccio fare. Se mio figlio percepisce che in realtà è la mia agenda, si disinteresserà. Aiutami a verificare le mie motivazioni e assicurarmi che sia davvero collaborativo.",
    promptTip: "Gli obiettivi che creano più legame sono quelli in cui anche il GENITORE è un principiante. Imparare ad andare sullo skateboard insieme, cucinare una cucina sconosciuta a entrambi, costruire mobili senza esperienza — quando tuo figlio ti vede in difficoltà e fallire accanto a lui, la relazione si equilibra in un modo unico. Inoltre: lascia che tuo figlio fissi un obiettivo per TE. 'Papà deve imparare 5 balli di TikTok' potrebbe non essere il tuo sogno, ma cambia la dinamica di potere in modo sano.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 140,
    title: "Stabilisci Regole, Limiti e Confini",
    subtitle: "L'arte di dire no con amore — la struttura come atto di cura",
    category: "family",
    description: "I bambini non vogliono davvero libertà illimitata — vogliono sapere dove sono i muri, perché i muri rendono il mondo sicuro. Decenni di ricerca sugli stili genitoriali mostrano costantemente che la genitorialità autorevole (calorosa E ferma) produce i migliori risultati su ogni dimensione misurabile: salute emotiva, rendimento scolastico, competenze sociali e resilienza. Il problema non è stabilire i limiti. Il problema è COME li stabiliamo. I limiti imposti con rabbia, controllo o giochi di potere danneggiano la fiducia. I limiti stabiliti con calma, empatia per i sentimenti del bambino e coerenza nel tempo costruiscono sicurezza. La parte più difficile: mantenere il confine quando tuo figlio resiste (e lo farà) senza cedere né esplodere. L'IA può aiutarti a formulare regole adatte all'età, spiegare i limiti con un linguaggio sensibile allo sviluppo e pianificare per l'inevitabile resistenza — ma restare calmo nella tempesta? Quello è il tuo lavoro interiore.",
    steps: [
      "Identifica la situazione specifica in cui devi stabilire una regola, un limite o un confine",
      "Condividi l'età di tuo figlio e come reagisce tipicamente ai limiti",
      "Descrivi cosa non funziona nel tuo approccio attuale",
      "Ottieni un approccio strutturato ed empatico con le parole esatte da usare"
    ],
    prompt: "Ho bisogno di aiuto per stabilire [una regola / un limite / un confine] con [mio figlio/mia figlia], [NOME], età [ETÀ].\n\nLa situazione: [DESCRIVI IL PROBLEMA SPECIFICO — es. 'il tempo sugli schermi è fuori controllo', 'si rifiuta di fare i compiti senza litigare', 'l'ora della nanna è diventata una battaglia ogni sera', 'parla in modo irrispettoso quando è arrabbiato/a', 'non rispetta lo spazio personale', 'spende troppi soldi', 'la sua camera è un disastro'].\n\nCome reagisce tipicamente ai limiti: [SCHEMA DI REAZIONE — es. 'crisi di pianto', 'muro di silenzio', 'negozia all'infinito', 'accetta e poi ignora la regola', 'dice che sono ingiusto/a e fa confronti con gli altri genitori', 'rabbia e porte sbattute'].\n\nCosa ho provato: [APPROCCI PRECEDENTI — es. 'urlare, di cui non vado fiero', 'togliere cose come punizione', 'lunghe prediche', 'cedere perché sono esausto/a', 'essere incoerente — severo/a un giorno, permissivo/a il giorno dopo'].\n\nPer favore aiutami a:\n1. Capire PERCHÉ mio figlio potrebbe resistere a questo confine specifico (il bisogno che sta dietro al comportamento)\n2. Formulare la regola/il limite in un linguaggio chiaro, semplice e non negoziabile appropriato per [ETÀ] anni\n3. Scrivere le parole esatte da usare per SPIEGARE il confine con empatia (riconoscendo i suoi sentimenti mantenendo la fermezza)\n4. Anticipare la sua probabile resistenza e darmi risposte calme e preparate\n5. Definire la conseguenza naturale o logica se il confine viene superato (non punizione — conseguenza)\n6. Creare un piano di applicazione coerente per 2-4 settimane (il confine non significa nulla se lo applico a volte sì e a volte no)\n7. Includere una strategia di riparazione per quando inevitabilmente gestirò la cosa in modo imperfetto (perché succederà)\n\nRicordami: il confine è il regalo. Mantenerlo con calma è l'amore. Mio figlio potrebbe non ringraziarmi oggi, ma sta imparando che il mondo ha una struttura — e che questa struttura viene da qualcuno a cui importa abbastanza da mantenerla.",
    promptTip: "Il segreto dei confini: mostra empatia PRIMA di applicare. 'So che vorresti continuare a giocare. Ti capisco — il gioco è entusiasmante. E adesso è ora di smettere.' L'uso di 'E' invece di 'MA' non è banale — dice a tuo figlio che entrambe le cose sono vere: il suo desiderio è valido E il limite resta. Inoltre: il confine più importante da stabilire è con te stesso. Se hai detto 'un altro episodio', mantienilo. Ogni volta che cedi, insegni a tuo figlio che le tue parole non significano quello che dicono.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 141,
    title: "Impara ad Ascoltare Tuo Figlio o Tua Figlia",
    subtitle: "La competenza genitoriale più potente non è parlare — è sentire cosa c'è sotto le parole",
    category: "family",
    description: "La maggior parte dei genitori pensa di ascoltare. La maggior parte dei figli dice il contrario. Il divario è enorme — e non riguarda l'udito. Senti le parole benissimo. Il problema è cosa ne FAI. Quando tuo figlio dice 'la scuola era noiosa', il tuo istinto è correggere ('Hai provato a parlare con l'insegnante?'), sminuire ('Almeno puoi andare a scuola') o deviare ('E le cose belle?'). Ognuna di queste risposte, per quanto ben intenzionata, invia lo stesso messaggio: 'Quello che senti non va bene così com'è. Lascia che lo aggiusti.' Ascoltare veramente — quello che gli psicologi chiamano sintonizzazione — significa ricevere le parole di tuo figlio, rifletterle e stare con il sentimento senza bisogno di cambiarlo. È, senza esagerazione, la singola competenza più importante nella genitorialità. E la più difficile. Perché ascoltare significa tollerare il tuo disagio quando tuo figlio è infelice, e non affrettarti a far sparire quel disagio (e la tua ansia).",
    steps: [
      "Rifletti onestamente sulle tue abitudini di ascolto — cosa fai di solito quando tuo figlio parla?",
      "Identifica i momenti in cui la comunicazione si interrompe",
      "Chiedi all'IA tecniche di ascolto specifiche adatte all'età di tuo figlio",
      "Pratica una tecnica alla volta — questa è un'abilità, non un interruttore"
    ],
    prompt: "Voglio diventare un ascoltatore migliore per [mio figlio/mia figlia], [NOME], età [ETÀ].\n\nAutovalutazione onesta — quando mio figlio mi parla, tendo a: [LE TUE ABITUDINI — es. 'offrire immediatamente soluzioni', 'distrarmi con il telefono', 'ascoltare a metà mentre faccio altre cose', 'interrompere con le mie storie', 'minimizzare i loro problemi perché sembrano piccoli rispetto a quelli degli adulti', 'mettermi sulla difensiva se mi criticano', 'trasformare tutto in una predica'].\n\nMomenti in cui la comunicazione si interrompe: [ESEMPI — es. 'quando è triste e cerco di tirarlo/a su', 'quando mi racconta problemi con gli amici', 'quando condivide qualcosa con cui non sono d'accordo', 'quando è arrabbiato/a con me'].\n\nPer favore aiutami a:\n1. Capire gli errori specifici di ascolto che sto facendo e PERCHÉ allontanano mio figlio\n2. Insegnarmi la tecnica fondamentale dell'ascolto riflessivo adattata per un/a bambino/a di [ETÀ] anni\n3. Darmi frasi esatte da usare al posto delle mie risposte predefinite (un confronto prima/dopo)\n4. Spiegare cosa fare con il mio disagio quando mio figlio condivide qualcosa di doloroso e non posso risolverlo\n5. Creare una 'pratica di ascolto' quotidiana da 5 minuti per costruire questa abilità gradualmente\n6. Descrivere com'è quando un bambino si sente veramente ascoltato (così so cosa sto cercando di raggiungere)\n7. Avvisarmi del plateau — il momento in cui penso 'lo sto facendo bene ma ANCORA non si apre' (perché la fiducia si ricostruisce lentamente)\n\nRicordami: ascoltare non è passivo. È la cosa più attiva e impegnativa che posso fare come genitore. Mi richiede di mettere giù il mio ego, la mia agenda, il mio bisogno di risolvere — e semplicemente essere presente con l'esperienza di un altro essere umano. Mio figlio non ha bisogno che risolva i suoi problemi. Ha bisogno di sapere che i suoi problemi contano per me.",
    promptTip: "Prova la 'tecnica del telecronista' con i bambini piccoli: descrivi quello che vedi senza giudicare. 'Noto che sembri frustrato. Stai stringendo le mani. È successo qualcosa che non ti fa stare bene.' Questo dice al bambino: 'Ti vedo.' Per gli adolescenti: a volte il miglior ascolto avviene quando NON sei faccia a faccia. Le attività fianco a fianco (guidare, cucinare, camminare) eliminano la pressione del contatto visivo e creano uno spazio più sicuro per parlare. La conversazione che aspettavi arriverà nel momento più inopportuno — molla tutto.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 142,
    title: "Organizza un'Attività in Famiglia",
    subtitle: "Crea esperienze condivise che riuniscano tutti — indipendentemente da età e interessi",
    category: "family",
    description: "Le attività familiari falliscono quando sono progettate per l'idea di divertimento del genitore, imposte a partecipanti riluttanti o rovinate dalla pressione di rendere tutto perfetto. Funzionano quando coinvolgono collaborazione (non solo esistenza parallela), quando ogni membro della famiglia ha un ruolo che conta, e quando c'è abbastanza flessibilità perché le cose vadano storte senza che nessuno perda la testa. Il potere psicologico delle attività familiari sta nel creare una storia condivisa — 'Ti ricordi quando...' diventa il collante dell'identità familiare. Questi ricordi non si costruiscono con il tempo davanti agli schermi o la routine. Si costruiscono con la novità, le risate e la splendida confusione di fare qualcosa insieme dove nessuno è un esperto.",
    steps: [
      "Descrivi la tua famiglia: età, interessi, personalità e livelli di energia",
      "Condividi eventuali limiti: budget, posizione, mobilità, tempo",
      "Racconta all'IA che tipo di attività hanno funzionato (o fallito) in passato",
      "Ottieni suggerimenti creativi di attività su misura per la TUA famiglia specifica"
    ],
    prompt: "Aiutami a pianificare un'attività familiare per la nostra famiglia:\n\nMembri della famiglia: [ELENCA OGNI PERSONA — es. 'Io (papà, 42, ama la vita all'aperto e cucinare), Mamma (39, creativa, ama la musica), Figlia (14, artistica, introversa), Figlio (10, energico, competitivo, ama lo sport), Figlia (6, giocherellona, vuole fare tutto quello che fanno i fratelli)'].\n\nVincoli: [BUDGET, LUOGO, TEMPO, LIMITAZIONI FISICHE, METEO — es. 'Abbiamo circa 30€, siamo a casa, è una domenica pomeriggio piovosa, circa 3 ore'].\n\nSuccessi passati: [COSA HA FUNZIONATO — es. 'gare di cucina', 'escursioni', 'serate giochi da tavolo']. Fallimenti passati: [COSA NON HA FUNZIONATO — es. 'qualsiasi cosa che richieda a tutti di stare fermi', 'attività in cui la bambina di 6 anni viene lasciata indietro', 'giochi competitivi che finiscono in lacrime'].\n\nPer favore suggerisci 5 attività familiari creative che:\n- Diano a ogni membro della famiglia (incluso il più piccolo) un ruolo significativo\n- Creino momenti di risate naturali e connessione spontanea\n- Non richiedano che tutti abbiano lo stesso livello di abilità o interesse\n- Abbiano flessibilità integrata (così se qualcuno non è dell'umore, l'attività si adatta)\n- Finiscano con qualcosa che crei un ricordo condiviso ('Ti ricordi quando...')\n\nPer ogni attività, includi: tempo di preparazione, cosa serve, come coinvolgere ogni membro della famiglia nello specifico, e come gestire il momento in cui qualcuno dice 'Mi annoio' (perché qualcuno lo dirà).",
    promptTip: "L'ingrediente segreto delle attività familiari: il caos controllato. Le attività che le persone ricordano con più affetto non sono quelle eseguite alla perfezione — sono quelle in cui la torta è crollata, papà è caduto nel fango o la zattera fatta in casa è affondata. Datti il permesso di fallire in modo spettacolare insieme. Inoltre: ruotate chi sceglie l'attività. Quando la bambina di 6 anni sceglie e tutti si impegnano al massimo, insegna rispetto e costruisce la sua fiducia in sé.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 143,
    title: "Crea una Tradizione o un Rituale Familiare",
    subtitle: "Costruisci i fili invisibili che dicono 'apparteniamo gli uni agli altri'",
    category: "family",
    description: "Tradizioni e rituali non sono la stessa cosa delle abitudini. Un'abitudine è lavarsi i denti. Un rituale è il modo specifico in cui la vostra famiglia si dà la buonanotte — la frase, il gesto, la sequenza che significa 'questo siamo NOI.' Gli psicologi dello sviluppo hanno scoperto che i rituali familiari sono uno dei predittori più forti della resilienza emotiva dei bambini, del senso di identità e del sentimento di sicurezza. Non devono essere elaborati. Una colazione settimanale con le frittelle, una routine speciale per la mattina del compleanno, un 'venerdì sera avventura', un cerchio di gratitudine prima di cena, una stretta di mano buffa — questi piccoli atti ripetuti di intenzionale stare insieme creano l'architettura invisibile dell'appartenenza. Il potere sta nella ripetizione. La prima volta che lo fai, è un'attività. La decima volta, è una tradizione. La centesima volta, è chi siete.",
    steps: [
      "Pensa a cosa la vostra famiglia apprezza, ama e di cosa ha più bisogno",
      "Considera il ritmo: quotidiano, settimanale, stagionale o annuale",
      "Condividi cosa avete provato prima e cosa è sembrato naturale vs. forzato",
      "Ottieni idee di tradizioni personalizzate che si adattino alla personalità della VOSTRA famiglia"
    ],
    prompt: "Aiutami a creare tradizioni o rituali familiari significativi per la nostra famiglia.\n\nLa nostra famiglia: [MEMBRI E ETÀ]. I nostri valori: [COSA CI STA A CUORE — es. 'gratitudine', 'avventura', 'creatività', 'fede', 'umorismo', 'apprendimento', 'generosità']. La personalità della nostra famiglia: [ATMOSFERA FAMILIARE — es. 'rumorosa e caotica', 'tranquilla e accogliente', 'competitiva e giocosa', 'amante della natura', 'famiglia di buongustai', 'famiglia di narratori'].\n\nCosa facciamo già che sembra speciale: [RITUALI ESISTENTI — es. 'cartoni animati la domenica mattina', 'colazione a letto per i compleanni', 'niente — è per questo che sono qui']. Cosa manca: [COSA VUOI DI PIÙ — es. 'non stiamo mai insieme senza schermi', 'non abbiamo nessun punto fermo settimanale', 'le feste sembrano generiche', 'abbiamo perso la nostra identità come famiglia da quando i ragazzi sono diventati adolescenti'].\n\nPer favore suggerisci:\n1. 3 **micro-rituali quotidiani** (meno di 5 minuti) — piccoli momenti di connessione intrecciati in ogni giornata\n2. 3 **tradizioni settimanali** (30-60 minuti) — un punto fisso in ogni settimana su cui la famiglia può contare\n3. 3 **tradizioni stagionali o festive** — occasioni speciali che diventano unicamente NOSTRE\n4. 1 **tradizione solo nostra** così unica da sembrare strana a chi è fuori dalla famiglia (quelle sono le migliori)\n\nPer ogni suggerimento, spiega: cos'è, come iniziare, come mantenerla viva quando l'entusiasmo cala, e PERCHÉ funziona psicologicamente (quale bisogno soddisfa per i bambini a diverse età).\n\nRicordami: una tradizione non diventa tradizione da un giorno all'altro. Lo diventa attraverso il gesto silenzioso e non glamour di presentarsi e rifarla — anche quando sembra che a nessuno importi. Soprattutto allora. Perché un giorno, quando saranno grandi, diranno: 'Ti ricordi quando facevamo...' e quella frase conterrà più amore di qualsiasi parola tu abbia mai detto.",
    promptTip: "Le tradizioni più potenti sono quelle che create insieme, non quelle che imponi. Tieni una riunione di famiglia e chiedi: 'Qual è una cosa che dovremmo fare ogni settimana che sia solo nostra?' Inoltre: non abbandonare una tradizione solo perché gli adolescenti alzano gli occhi al cielo. Alzare gli occhi al cielo è una tappa dello sviluppo, non un rifiuto. Continua. Quando avranno i loro figli, la riporteranno.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 144,
    title: "Crea un Gioco di Famiglia",
    subtitle: "Inventa un gioco personalizzato che rifletta le battute interne, le storie e la personalità della vostra famiglia",
    category: "family",
    description: "I migliori giochi di famiglia non sono quelli che compri in negozio — sono quelli che inventate insieme. Un gioco che fa riferimento alle battute interne, ai tormentoni, alle storie imbarazzanti e ai ricordi condivisi della vostra famiglia crea qualcosa che il denaro non può comprare: un senso di 'noi.' Quando una famiglia ride insieme — risate genuine e incontenibili — resetta il clima emotivo in modi che ore di conversazione seria non possono eguagliare. La risata scioglie la tensione, ripara le fratture e ricorda a tutti che sotto lo stress, le battaglie per i compiti e le discussioni sul tempo davanti agli schermi, vi piacete davvero. L'IA può aiutarti a progettare un gioco perfettamente su misura per la vostra famiglia. Ma la magia accade quando ci giocate — quando il bambino di 8 anni batte la mamma nel round di domande sulle vacanze familiari, o quando papà non riesce a smettere di ridere del suo disegno terribile.",
    steps: [
      "Elenca i membri della famiglia, le loro età e cosa fa ridere ciascuno",
      "Condividi le battute interne, i tormentoni e i ricordi preferiti della famiglia",
      "Scegli un formato di gioco: gioco da tavolo, gioco di carte, quiz, fisico, creativo",
      "Ottieni un gioco personalizzato completo con regole, lista materiali e varianti"
    ],
    prompt: "Aiutami a creare un gioco di famiglia personalizzato per la nostra famiglia.\n\nMembri della famiglia: [ELENCA CON ETÀ E COSA PIACE A CIASCUNO — es. 'Papà (45, ama le battute da papà e i quiz), Mamma (42, creativa e competitiva), Adolescente (15, umorismo sarcastico, ama le sfide), Bambino (9, energico, ama fare lo scemo)'].\n\nLe battute interne o i tormentoni della nostra famiglia: [RIFERIMENTI CONDIVISI — es. 'Diciamo sempre \"classico momento da papà\" quando qualcuno fa qualcosa di goffo', 'Abbiamo una battuta ricorrente sul disastro del campeggio del 2024'].\n\nPreferenze di gioco: [COSA FUNZIONA — es. 'amiamo i quiz ma abbiamo bisogno anche di attività fisica', 'niente di troppo complicato — il bambino di 9 anni deve poter competere', 'ci piacciono i giochi creativi/di disegno', 'ci serve qualcosa che funzioni in 20-30 minuti'].\n\nPer favore progetta un gioco di famiglia completo che includa:\n1. Un nome divertente per il gioco (che faccia riferimento alla nostra famiglia se possibile)\n2. Regole chiare e semplici che un bambino di [ETÀ PIÙ PICCOLA] anni possa capire\n3. Meccaniche di gioco che diano a ogni età le stesse possibilità di vincere (non solo il più intelligente o il più veloce)\n4. Momenti integrati che generino risate (sfide, sorprese, compiti buffi)\n5. Contenuto specifico della famiglia: domande sulla nostra storia familiare, sfide basate sulle particolarità di ciascuno\n6. Materiali necessari e come realizzarli (preferibilmente con cose che abbiamo già)\n7. Varianti per mantenerlo fresco nel tempo\n8. Un formato stampabile/salvabile per poterci rigiocare",
    promptTip: "Il vero gioco è quello che si evolve. Dopo aver giocato, aggiungete nuove regole, nuove categorie e nuove battute interne NATE dal gioco stesso. In pochi mesi avrete qualcosa di così personale che nessuno fuori dalla vostra famiglia capirebbe nemmeno le regole. Questo è il bello. Inoltre: lascia che i tuoi figli aggiungano al gioco. Quando un bambino di 9 anni scrive una domanda sul peggior disastro culinario della mamma, quella non è solo una carta da gioco — è connessione.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 145,
    title: "Crea un Rituale di Complicità tra Te e Tuo Figlio",
    subtitle: "Qualcosa che appartiene solo a voi due — il vostro mondo privato",
    category: "family",
    description: "Ogni bambino ha bisogno di sentirsi scelto individualmente — non solo amato come parte del gruppo, ma valorizzato in modo unico, specifico e insostituibile da ciascun genitore. Nelle famiglie con più figli, questo bisogno è ancora più acuto. Un rituale di complicità tra te e un solo figlio non è favoritismo — è amore mirato. È la colazione mensile insieme, la stretta di mano segreta, la serie TV che guardate solo voi due, la passeggiata che fate, la parola in codice che significa 'ti voglio bene' in pubblico senza che nessun altro lo sappia. Questi rituali privati creano uno spazio psicologico sicuro — una relazione dentro la relazione — dove tuo figlio sa: 'C'è una parte del mio genitore che appartiene solo a me.' Questo diventa un punto di ancoraggio durante le tempeste — l'adolescenza, i conflitti familiari, i cambiamenti — che nessuno dei due può rompere facilmente.",
    steps: [
      "Scegli per quale figlio stai creando questa tradizione",
      "Pensa a cosa condividete in modo unico voi due (interessi, ricordi, tratti della personalità)",
      "Considera il suo linguaggio dell'amore: tempo di qualità, parole, affetto fisico, gesti di servizio, regali",
      "Ottieni idee personalizzate di rituali di complicità per la vostra specifica dinamica genitore-figlio"
    ],
    prompt: "Aiutami a creare un rituale di complicità speciale tra me e [mio figlio/mia figlia], [NOME], età [ETÀ]. Deve essere qualcosa che appartenga SOLO a noi — non condiviso con fratelli, l'altro genitore o chiunque altro.\n\nLa nostra dinamica unica: [DESCRIVI LA VOSTRA RELAZIONE — es. 'Siamo molto simili — entrambi introversi e amanti dei libri', 'Abbiamo personalità opposte e a volte ci scontriamo', 'Eravamo inseparabili ma l'adolescenza sta creando distanza', 'Non abbiamo abbastanza tempo da soli perché il fratellino richiede più attenzione'].\n\nCosa ci è piaciuto fare insieme in passato: [STORIA CONDIVISA — es. 'costruire set Lego', 'esperimenti in cucina', 'lunghe conversazioni in auto', 'guardare documentari sulla natura', 'niente di specifico ancora — è per questo che ne ho bisogno']. Il suo linguaggio dell'amore: [COME SI SENTE AMATO/A — es. 'tempo di qualità senza distrazioni', 'affetto fisico', 'parole di affermazione', 'piccole sorprese', 'non ne sono ancora sicuro'].\n\nPer favore suggerisci:\n1. 3 **rituali di complicità regolari** (settimanali o bisettimanali, 30-60 minuti) che possano diventare 'la nostra cosa'\n2. 2 **codici o gesti segreti** — piccoli segnali privati di connessione che solo noi capiamo\n3. 1 **tradizione annuale** — qualcosa di più grande che segni ogni anno e si evolva man mano che cresce\n4. Come iniziare senza che sembri forzato o artificiale\n5. Come proteggere questo tempo quando la vita diventa frenetica (perché succederà)\n6. Come questa tradizione può evolversi man mano che cresce da [ETÀ] anni fino all'adolescenza e oltre\n\nRicordami: la tradizione in sé conta meno della costanza. Non è COSA facciamo — è il fatto che continuiamo a farlo. Che lo proteggiamo. Che quando avrà 25 anni e vivrà dall'altra parte del paese, potrà dire: 'Mio [papà/mamma] e io — avevamo questa cosa...'",
    promptTip: "Inizia in piccolo. Le tradizioni troppo ambiziose muoiono per prime. Un rituale di 10 minuti prima della nanna che mantieni per 3 anni batte un'avventura mensile che abbandoni dopo 2 mesi. E questa è la verità difficile: tuo figlio potrebbe sembrare indifferente alla tradizione mentre la vivete. Potrebbe persino resistervi a volte. Continua. Il valore dei rituali si comprende col senno di poi, non nel momento.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 146,
    title: "Parla con Tuo Figlio della Sua Giornata",
    subtitle: "Trasforma 'Bene' in una vera conversazione — la connessione quotidiana che conta di più",
    category: "family",
    description: "'Com'è andata la giornata?' è la domanda più posta e meno efficace della genitorialità. Non è che la domanda sia sbagliata — è che è troppo grande, troppo vaga e troppo prevedibile. Tuo figlio ha risposto a domande sul suo rendimento tutto il giorno a scuola. Quando torna a casa, l'ultima cosa che vuole è un altro interrogatorio. La psicologia delle conversazioni 'Com'è andata la giornata?' è controintuitiva: meno spingi, più ottieni. Le migliori conversazioni avvengono indirettamente — durante un'altra attività, senza la pressione del contatto visivo, e quando il bambino inizia spontaneamente piuttosto che rispondere. Il tuo compito è creare le condizioni per la condivisione, non estrarre informazioni. Pensa a te stesso come a un giardino, non come a un detective. Crei le condizioni giuste e aspetti.",
    steps: [
      "Rifletti su come chiedi attualmente della sua giornata e che risposte ottieni",
      "Considera il momento e il contesto migliore per tuo figlio per parlare",
      "Chiedi all'IA alternative adatte all'età per 'Com'è andata la giornata?'",
      "Pratica un nuovo approccio ogni settimana e nota cosa cambia"
    ],
    prompt: "Aiutami ad avere conversazioni quotidiane migliori con [mio figlio/mia figlia], [NOME], età [ETÀ], sulla sua giornata.\n\nAttualmente cosa succede: [SCHEMA ATTUALE — es. 'chiedo com'è andata a scuola, risponde bene, fine della conversazione', 'torna a casa sopraffatto/a e ha bisogno di stare solo/a prima di parlare', 'mi racconta tutto di corsa all'ora della nanna quando è troppo tardi per ascoltare davvero', 'parla solo quando ha bisogno di qualcosa', 'finisco per interrogarlo/a e si chiude'].\n\nLa sua energia dopo scuola: [ENERGIA — es. 'esausto/a e di malumore', 'agitato/a e iperattivo/a', 'silenzioso/a e ritirato/a', 'affamato/a e distratto/a', 'varia molto'].\n\nPer favore dammi:\n1. 10 domande specifiche da sostituire a 'Com'è andata la giornata?' — domande sorprendenti, concrete, che invitino a raccontare storie piuttosto che risposte monosillabiche (calibrate per [ETÀ] anni)\n2. Il MOMENTO e il contesto MIGLIORE per questa conversazione con un/a bambino/a di [ETÀ] anni (basato su ciò che sappiamo della psicologia infantile)\n3. Un 'piano di decompressione' — cosa fare nei primi 15 minuti dopo il rientro a casa (suggerimento: probabilmente non parlare)\n4. Come condividere la MIA giornata in un modo che modelli la vulnerabilità e inviti la reciprocità\n5. Cosa fare nei giorni in cui genuinamente non vuole parlare (e perché a volte è sano)\n6. Le 3 risposte che uccidono la conversazione più velocemente (così posso smettere di usarle)\n7. Come gestire la grande rivelazione — quando la chiacchierata quotidiana fa emergere qualcosa di serio ('Mamma, qualcuno mi tratta male')\n\nRicordami: non ho il diritto di sapere tutto della giornata di mio figlio. Man mano che cresce, la privacy diventa un bisogno, non una ribellione. L'obiettivo non è ottenere un resoconto quotidiano — è mantenere un canale aperto così che SAPPIA che può venire da me quando conta davvero.",
    promptTip: "La domanda magica che i ricercatori hanno scoperto funzionare a tutte le età: 'Qual è stata la parte più difficile della tua giornata?' È specifica, invita alla condivisione emotiva e ti dà una finestra sul mondo interiore di tuo figlio. Prosegui con: 'Come l'hai gestita?' — questo dice a tuo figlio che ti fidi delle sue capacità. Inoltre: condividi prima la TUA parte più difficile. 'Sai cosa è stato difficile per me oggi?' mette tutti sullo stesso piano e mostra che anche gli adulti fanno fatica.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 147,
    title: "Parla con Tuo Figlio delle Relazioni",
    subtitle: "Naviga amicizie, cotte, conflitti e senso di appartenenza — il mondo sociale di tuo figlio conta profondamente",
    category: "family",
    description: "Il mondo sociale di tuo figlio non è un contorno alla 'vita vera' — per lui, È la vita vera. Amicizie, gerarchie sociali, cotte, tradimenti, esclusione e appartenenza consumano più energia emotiva di qualsiasi cosa scolastica. Eppure la maggior parte dei genitori o sminuisce ('Ignorali'), cerca di risolvere ('Vuoi che chiami i loro genitori?') o va nel panico ('Chi è questa persona con cui esci?'). La psicologia delle relazioni dei bambini cambia drammaticamente con l'età — l'amicizia di un bambino di 6 anni riguarda le attività condivise, quella di un dodicenne la lealtà e la fiducia, e quella di un sedicenne l'identità e l'intimità. Ogni fase richiede una conversazione completamente diversa. Cosa resta costante: tuo figlio ha bisogno di sentire che il suo dolore sociale è reale, valido e preso seriamente — anche quando il problema sembra banale a te.",
    steps: [
      "Identifica cosa sta navigando tuo figlio socialmente in questo momento",
      "Considera la sua età e fase di sviluppo",
      "Condividi cosa ti preoccupa o incuriosisce",
      "Ottieni una guida alla conversazione adatta all'età che rispetti la sua autonomia"
    ],
    prompt: "Voglio parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di [TEMA RELAZIONALE — es. 'amicizie e integrazione', 'un conflitto specifico con un amico', 'la sua prima cotta', 'essere escluso/a da un gruppo', 'amicizie online vs. nella vita reale', 'un'amicizia tossica', 'pressione dei coetanei', 'relazioni sentimentali', 'una delusione amorosa'].\n\nContesto: [COSA STA SUCCEDENDO — es. 'È tornato/a a casa piangendo perché il suo migliore amico ora esce con qualcun altro', 'Ha menzionato un ragazzo/una ragazza con disinvoltura e non so come reagire', 'Lo/la vedo influenzato/a da un amico di cui non mi fido', 'Sembra solo/a ma non lo ammette', 'È incollato/a ai social confrontandosi con gli altri'].\n\nLa mia preoccupazione: [COSA TI PREOCCUPA — es. 'non voglio reagire in modo esagerato e allontanarlo/a', 'voglio aiutare ma non controllare', 'ho paura che faccia i miei stessi errori', 'non capisco il suo mondo sociale'].\n\nPer favore aiutami a:\n1. Capire cosa è normalmente appropriato per il mondo sociale di un/a bambino/a di [ETÀ] anni (così posso calibrare la mia reazione)\n2. Aprire questa conversazione senza che sembri un interrogatorio o una predica\n3. Condividere saggezza rilevante senza proiettare le mie esperienze sulla sua situazione\n4. Sapere quando intervenire e quando fare un passo indietro (la decisione più difficile nella genitorialità)\n5. Insegnargli/le specifiche competenze socio-emotive senza essere moralista (come gestire i conflitti, stabilire i propri confini, riconoscere dinamiche malsane)\n6. Gestire le mie emozioni (paura, protettività, frustrazione) senza scaricarle su mio figlio\n\nRicordami: il mio compito non è gestire la vita sociale di mio figlio. È essere il porto sicuro a cui torna quando il mare si fa agitato. Se giudico i suoi amici, prendo in giro le sue cotte o minimizzo le sue delusioni, perdo il porto — e navigherà le tempeste da solo.",
    promptTip: "La regola d'oro: reagisci alle relazioni come vorresti che qualcuno reagisse alle tue. Se tuo figlio adolescente menziona una cotta e lo prendi in giro, non sentirai mai parlare della prossima. Se il tuo bambino di 8 anni ti racconta di un litigio con il migliore amico e dici 'Troverai altri amici', gli hai appena detto che il suo dolore non conta. Allineati alla sua temperatura emotiva. Se per lui è importante, è importante.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 148,
    title: "Parla con Tuo Figlio del Divorzio",
    subtitle: "Affronta la conversazione familiare più difficile con onestà, amore e attenzione adeguata all'età",
    category: "family",
    description: "Il divorzio è una delle esperienze più significative nella vita di un bambino — non perché sia necessariamente dannoso, ma perché il modo in cui viene gestito determina se il bambino ne uscirà sentendosi sicuro o distrutto. La ricerca è chiara: i bambini superano bene il divorzio quando mantengono relazioni forti con entrambi i genitori, non vengono messi in mezzo ai conflitti degli adulti, ricevono spiegazioni oneste e adatte alla loro età, e vengono rassicurati ripetutamente che il divorzio NON è colpa loro (i bambini sotto i 12 anni sono particolarmente inclini all'autocolpevolizzazione). Questa conversazione non è un evento unico. È una serie di conversazioni che si sviluppano nel corso di mesi e anni, evolvendosi man mano che la comprensione e i bisogni emotivi del bambino cambiano. La parte più difficile per i genitori: gestire il proprio dolore, la rabbia e il senso di colpa, rimanendo allo stesso tempo emotivamente disponibili per il proprio figlio. Questa non è solo genitorialità — è eroismo.",
    steps: [
      "Considera l'età, il temperamento e la comprensione attuale della situazione di tuo figlio",
      "Pensa a cosa ha bisogno di sapere adesso rispetto a dopo",
      "Identifica il tuo stato emotivo e i tuoi punti ciechi",
      "Ottieni un quadro guidato per la conversazione — cosa dire, cosa non dire mai, e come dare seguito"
    ],
    prompt: "Ho bisogno di aiuto per parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di [FASE DEL DIVORZIO — es. 'il nostro divorzio imminente — non sa ancora nulla', 'il divorzio in corso', 'aiutarlo/a ad adattarsi dopo il divorzio', 'presentare un nuovo partner dopo il divorzio', 'le sfide della co-genitorialità a cui assiste', 'i suoi sentimenti riguardo al vivere tra due case'].\n\nContesto: [SITUAZIONE — es. 'Ci stiamo separando in modo amichevole ma ne sarà devastato/a', 'Il divorzio è conflittuale e si trova in mezzo', 'È passato un anno e fa ancora fatica', 'Si dà la colpa', 'È arrabbiato/a con me', 'Si rifiuta di andare a casa dell'altro genitore', 'Un nuovo partner sta entrando in scena'].\n\nLo stato emotivo attuale del bambino: [EMOZIONI — es. 'spaventato/a e appiccicoso/a', 'arrabbiato/a e ribelle', 'apparentemente tranquillo/a ma so che non lo è', 'chiuso/a e silenzioso/a', 'fa tante domande a cui non so rispondere'].\n\nPer favore aiutami a:\n1. Capire cosa un/a bambino/a di [ETÀ] anni elabora cognitivamente ed emotivamente riguardo al divorzio (cosa può e non può capire)\n2. Darmi le parole esatte per spiegare cosa sta succedendo — oneste ma protettive, chiare ma non cariche\n3. Elencare le cose che NON devo MAI dire (anche se le penso — specialmente riguardo all'altro genitore)\n4. Prepararmi alle sue probabili domande e reazioni con risposte adatte all'età\n5. Creare un quadro di rassicurazione — i messaggi fondamentali che devo ripetere costantemente nel tempo:\n   - Non è colpa tua\n   - Entrambi i genitori ti amano — questo non cambierà mai\n   - Sei autorizzato/a ad amare entrambi\n   - I tuoi sentimenti — tutti quanti — vanno bene\n6. Suggerire rituali continui o pratiche di verifica per mantenere la comunicazione aperta mentre elabora\n7. Aiutarmi a riconoscere i segnali d'allarme che indicano il bisogno di supporto professionale\n\nRicordami: non posso controllare come mio figlio si sente riguardo a questo. Posso solo controllare quanto lo faccio sentire al sicuro nel provare qualsiasi cosa provi. Anche il mio dolore è reale — ma in questa conversazione, la sua sicurezza emotiva viene prima. Questa non è una conversazione unica. È una conversazione che evolverà per anni.",
    promptTip: "Tre regole che proteggono i bambini durante il divorzio: 1) Non parlare MAI negativamente dell'altro genitore davanti a loro (sono per il 50% quella persona — stai insultando metà di ciò che sono). 2) Non usarli MAI come messaggeri, spie o confidenti. 3) Non farli MAI scegliere da che parte stare. Se riesci a seguire solo queste tre regole, tuo figlio starà bene. Inoltre: cerca supporto per te stesso. Non puoi versare da una tazza vuota. Un terapeuta, un gruppo di supporto, un amico fidato — hai bisogno di qualcuno che accolga il TUO dolore così che tu possa accogliere il loro.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 149,
    title: "Parla con Tuo Figlio della Sessualità",
    subtitle: "Costruisci una conversazione continua, senza vergogna, su corpi, identità, consenso e amore",
    category: "family",
    description: "'Il Discorso' è un mito — e uno dannoso. L'educazione alla sessualità non è un'unica, sudata e mortificante conversazione. È una serie di centinaia di piccole conversazioni naturali, adatte all'età, che iniziano nella prima infanzia (nomi corretti delle parti del corpo, autonomia corporea, consenso) e si evolvono attraverso l'infanzia (pubertà, relazioni, educazione ai media) fino all'adolescenza (intimità, identità, sicurezza, valori). La ricerca mostra costantemente che i bambini che ricevono un'educazione alla sessualità aperta e senza vergogna dai genitori — non solo fatti biologici ma contesto emotivo, valori e quadri sul consenso — ritardano l'attività sessuale, fanno scelte più sicure quando diventano sessualmente attivi e hanno relazioni più sane. L'ostacolo più grande? Il tuo disagio. Tuo figlio percepisce la tua ansia, il tuo imbarazzo e il tuo evitamento. Impara: 'Questo argomento è pericoloso. Non dovrei chiederne.' E poi va su internet a cercare risposte. L'IA può aiutarti a preparare esattamente cosa dire a ogni età. Ma normalizzare l'argomento — trattarlo con la stessa naturalezza con cui parleresti di alimentazione o amicizie — quello è un lavoro che spetta a te.",
    steps: [
      "Identifica l'età di tuo figlio e cosa sa o chiede attualmente",
      "Riconosci il tuo disagio o le tue preoccupazioni su questo argomento",
      "Scegli l'aspetto specifico che devi affrontare adesso",
      "Ottieni un quadro di conversazione adatto all'età con un linguaggio preciso"
    ],
    prompt: "Ho bisogno di aiuto per parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di [ASPETTO SPECIFICO — es. 'nomi corretti delle parti del corpo e autonomia corporea (3-5 anni)', 'da dove vengono i bambini (5-8 anni)', 'pubertà e cambiamenti del corpo (9-12 anni)', 'consenso e confini (qualsiasi età)', 'orientamento sessuale e identità di genere', 'pornografia e educazione ai media', 'relazioni sentimentali sane (adolescenti)', 'contraccezione e sicurezza (adolescenti)', 'sexting e sicurezza online', 'valori riguardo all'intimità e alle relazioni'].\n\nCosa ha scatenato questo: [MOTIVO — es. 'ha fatto una domanda diretta per cui non ero pronto/a', 'ho notato l'inizio della pubertà', 'è stato/a esposto/a a qualcosa di inappropriato per la sua età online', 'un episodio a scuola', 'ha menzionato una cotta', 'mi rendo conto di aver evitato troppo a lungo', 'proattivo — voglio anticipare i tempi'].\n\nIl mio livello di comfort: [ONESTÀ — es. 'molto a disagio — nessuno mi ha mai parlato di questo', 'abbastanza a mio agio con la biologia, meno con le emozioni', 'ho valori forti che voglio condividere senza essere giudicante', 'ho paura di dire la cosa sbagliata', 'voglio essere aperto/a ma non so dove sia il limite'].\n\nPer favore aiutami a:\n1. Capire cosa è appropriato discutere con un/a bambino/a di [ETÀ] anni dal punto di vista dello sviluppo\n2. Darmi un linguaggio specifico, calmo e diretto da usare (non clinico, non eufemistico — semplicemente onesto)\n3. Aiutarmi a inquadrare questo nei miei valori senza far sentire mio figlio giudicato o svergognato\n4. Prepararmi alle domande successive che potrebbe fare (e come gestire quelle per cui non sono pronto/a)\n5. Spiegare come creare una continua 'porta aperta' perché venga da me con domande future invece che da internet\n6. Affrontare specificamente il consenso — come insegnare sia 'il tuo corpo ti appartiene' sia 'il corpo degli altri appartiene a loro'\n7. Aiutarmi a gestire IL MIO disagio perché non diventi LA SUA vergogna\n\nRicordami: se non ho io questa conversazione, la avrà qualcun altro — e quel qualcuno potrebbe essere un compagno di classe, internet o la pornografia. Posso scegliere se la prima fonte di informazione di mio figlio sul proprio corpo e sulle relazioni sia qualcuno che lo ama o qualcuno che non sa nemmeno che esiste.",
    promptTip: "Inizia prima di quanto pensi. I 3 anni non sono troppo presto per le parole corrette dell'anatomia e 'nessuno ti tocca senza il tuo permesso.' Gli 8 anni non sono troppo presto per 'il tuo corpo cambierà ed è normale e bello.' Le conversazioni si costruiscono una sull'altra. Se salti quelle iniziali, le conversazioni da adolescente sembreranno improvvise e invadenti. Inoltre: usa i momenti didattici. Un bacio in un film, un'amica incinta, una notizia — 'Cosa ne pensi?' apre porte senza la pressione di una conversazione formale.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 150,
    title: "Parla con Tuo Figlio delle Abitudini Sane",
    subtitle: "Aiutalo a costruire una relazione con la cura di sé che duri tutta la vita",
    category: "family",
    description: "Le abitudini sane non si insegnano con le prediche — si assorbono attraverso l'ambiente e l'esempio. Se dici a tuo figlio di mangiare le verdure mentre tu salti i pasti, predichi l'esercizio fisico mentre vivi sul divano, o fai la lezione sul sonno mentre scrolli il telefono a mezzanotte — impara la lezione che stai insegnando con il tuo comportamento, non con le tue parole. La psicologia della formazione delle abitudini nei bambini riguarda fondamentalmente l'identità, non la forza di volontà. Un bambino che pensa 'Sono una persona che si prende cura del proprio corpo' farà scelte più sane di uno a cui è stato detto 'DOVRESTI fare esercizio.' Il tuo ruolo non è fare il poliziotto della salute. È creare un ambiente dove le scelte sane siano il percorso di minore resistenza, e mostrare la realtà imperfetta e umana del prendersi cura di sé — inclusi i giorni in cui non ce la fai.",
    steps: [
      "Identifica quale area delle abitudini sane ha bisogno di attenzione",
      "Sii onesto riguardo alle tue abitudini in quest'area",
      "Considera quali messaggi tuo figlio sta già ricevendo",
      "Ottieni un quadro di conversazione che ispiri piuttosto che fare la predica"
    ],
    prompt: "Voglio parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di [AREA DELLE ABITUDINI SANE — es. 'costruire abitudini sane in generale', 'equilibrio del tempo sugli schermi', 'attività fisica', 'salute mentale e benessere emotivo', 'igiene', 'immagine corporea e accettazione di sé', 'routine di cura di sé'].\n\nLa situazione attuale: [CONTESTO — es. 'passa tutto il tempo libero davanti agli schermi', 'rifiuta qualsiasi attività fisica', 'sta sviluppando un'immagine corporea negativa', 'non si occupa dell'igiene di base senza che glielo ricordi', 'voglio costruire proattivamente buone abitudini prima che sorgano problemi', 'è stressato/a e non ha strumenti per gestirlo'].\n\nLa mia riflessione onesta: [LE TUE ABITUDINI — es. 'Do il buon esempio in questo', 'Faccio fatica anch'io — non posso predicare quello che non pratico', 'Sto lavorando sulle mie abitudini e vorrei che crescessimo insieme', 'Sono troppo severo/a riguardo alla salute'].\n\nPer favore aiutami a:\n1. Avere una conversazione su [AREA] che ispiri piuttosto che fare la predica, appropriata per [ETÀ] anni\n2. Inquadrare le abitudini sane come atti di rispetto verso sé stessi, non punizione o obbligo\n3. Affrontare qualsiasi sensibilità sull'immagine corporea — soprattutto nelle conversazioni su esercizio e alimentazione\n4. Creare un piano pratico e adatto all'età che possiamo implementare INSIEME (non uno che impongo)\n5. Suggerire come modificare il nostro ambiente per rendere le scelte sane più facili (senza affidarsi alla forza di volontà)\n6. Aiutarmi a dare l'esempio in modo genuino — inclusa l'onestà sulle mie imperfezioni\n7. Riconoscere i segnali d'allarme che la conversazione è scivolata nella vergogna, nell'ansia o nel pensiero disturbato\n\nRicordami: la relazione di mio figlio con il proprio corpo e la salute si sta formando adesso, in questi anni, da quello che dico e — ancora più importante — da quello che faccio. Sto piantando semi il cui raccolto potrei non vedere mai. Piantali con amore, non con paura.",
    promptTip: "La cosa più potente che puoi dire sulla salute: 'Mi prendo cura del mio corpo perché mi piace come mi fa sentire, non perché devo avere un certo aspetto.' Inquadra tutto in termini di sensazioni, energia e capacità — mai peso, aspetto o confronti. Inoltre: lascia che tuo figlio ti veda in difficoltà. 'Oggi non ho proprio voglia di andare a camminare, ma so che dopo mi sentirò meglio. Vuoi venire con me?' Questo è più potente di qualsiasi predica.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 151,
    title: "Parla con Tuo Figlio delle Sostanze",
    subtitle: "Affronta droghe, alcol e fumo con onestà, non con paura — una conversazione continua, non un singolo avvertimento",
    category: "family",
    description: "Il vecchio approccio — spaventarli con storie dell'orrore e 'dì semplicemente no' — non funziona. Decenni di ricerca mostrano che l'educazione antidroga basata sulla paura è inefficace e può persino essere controproducente. Cosa FUNZIONA: conversazioni oneste, continue e adatte all'età che riconoscano la realtà (queste sostanze le INCONTRERANNO), costruiscano pensiero critico (non obbedienza cieca), sviluppino abilità di rifiuto (pratiche, non teoriche) e mantengano il canale di comunicazione aperto (così che vengano da te quando sono nei guai, non si nascondano). La parte più difficile: rispondere onestamente quando chiedono 'Tu l'hai mai fatto...?' La tua risposta conta meno della tua autenticità. I ragazzi percepiscono una bugia, e una bugia chiude la porta. Non devi loro ogni dettaglio del tuo passato, ma devi loro l'onestà. Questa non è una conversazione unica. È una conversazione che inizia a 8-10 anni e si evolve attraverso l'adolescenza.",
    steps: [
      "Considera l'età di tuo figlio e a cosa è stato esposto finora",
      "Sii onesto riguardo alla tua storia e cosa vuoi condividere",
      "Identifica cosa ti preoccupa specificamente in questo momento",
      "Ottieni un quadro di conversazione adatto all'età e basato sull'evidenza"
    ],
    prompt: "Devo parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di [TEMA SULLE SOSTANZE — es. 'droghe e alcol in generale — una conversazione introduttiva', 'l'alcol nello specifico — hanno visto adulti bere', 'la marijuana — è legale dove viviamo e fanno domande', 'le sigarette elettroniche — i loro amici le usano', 'la pressione dei coetanei a provare sostanze', 'sospetto che abbiano già sperimentato', 'l'abuso di sostanze di un familiare', 'la sicurezza con i farmaci da prescrizione', 'il legame tra sostanze e salute mentale'].\n\nCosa ha scatenato questo: [MOTIVO — es. 'proattivo — voglio anticipare la pressione dei coetanei', 'hanno chiesto perché gli adulti bevono', 'ho trovato qualcosa nella loro stanza', 'un loro amico ha avuto problemi', 'hanno menzionato che altri ragazzi svapano a scuola', 'una situazione familiare che coinvolge la dipendenza'].\n\nLa mia storia personale: [LA TUA VERITÀ — es. 'ho sperimentato da adolescente e voglio condividerlo onestamente', 'ho una storia di dipendenza e voglio essere aperto/a al riguardo', 'bevo socialmente e devo affrontare il doppio standard', 'non ho mai usato sostanze e temo di sembrare moralista', 'c'è dipendenza nella nostra famiglia'].\n\nPer favore aiutami a:\n1. Avere una conversazione onesta e adatta all'età calibrata per la comprensione di un/a bambino/a di [ETÀ] anni\n2. Condividere fatti senza usare tattiche terroristiche (che con gli adolescenti hanno l'effetto opposto)\n3. Sviluppare il loro pensiero critico piuttosto che pretendere obbedienza (aiutarli a pensare, non solo a obbedire)\n4. Insegnare abilità pratiche di rifiuto — parole e strategie concrete per situazioni reali di pressione dei coetanei\n5. Affrontare la domanda 'Ma tu l'hai fatto' con autenticità e senza ipocrisia\n6. Stabilire un 'accordo di rete di sicurezza' — come possono chiamarmi per chiedere aiuto in qualsiasi situazione senza paura di punizioni\n7. Mantenere la porta aperta perché questa diventi una conversazione continua, non una predica una tantum che ignorano\n8. Riconoscere i segnali d'allarme di sperimentazione o uso problematico\n\nRicordami: il mio obiettivo non è controllare cosa fa mio figlio quando non ci sono. Il mio obiettivo è costruire la sua bussola interiore — la voce nella sua testa che lo aiuta a prendere decisioni ponderate. Quella bussola si calibra con l'onestà, non con la paura. Con la fiducia, non con la sorveglianza. Con le conversazioni, non con le prediche.",
    promptTip: "L'accordo 'rete di sicurezza' è non negoziabile: tuo figlio può chiamarti da QUALSIASI situazione — una festa, un'auto con un guidatore ubriaco, un amico che sta male — e tu andrai a prenderlo SENZA fare domande quella sera. Le conseguenze si discutono il giorno dopo. Questo accordo salva vite. Inoltre: non aspettare che chiedano. Inizia a 8-10 anni con 'Sai come alcuni adulti bevono birra e vino? Parliamo di cosa fa realmente al tuo corpo.' Onestà adeguata all'età, iniziata presto, costruisce la riserva di fiducia di cui avrai disperatamente bisogno a 15 anni.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 152,
    title: "Parla con Tuo Figlio dell'Alimentazione",
    subtitle: "Costruisci un rapporto sano con il cibo — senza sensi di colpa, senza restrizioni, solo comprensione e gioia",
    category: "family",
    description: "Il modo in cui parli di cibo con tuo figlio plasmerà il suo rapporto con l'alimentazione per il resto della vita. Nessuna pressione. In un mondo di cultura delle diete, confronti corporei sui social media e consigli nutrizionali contraddittori, i bambini hanno bisogno di un genitore che sappia tagliare il rumore con un messaggio semplice e potente: il cibo è carburante, il cibo è piacere, il cibo è cultura e il cibo è connessione. Non è mai un premio, una punizione o una misura del tuo valore. La ricerca sull'alimentazione infantile è inequivocabile: i bambini che crescono con un rapporto positivo e rilassato con il cibo — esposti alla varietà senza pressione, che mangiano insieme alla famiglia e che non vengono mai svergognati per il loro appetito — sviluppano modelli alimentari più sani dei bambini cresciuti con restrizioni e regole sul cibo.",
    steps: [
      "Pensa all'argomento specifico sull'alimentazione che vuoi affrontare",
      "Rifletti sul tuo rapporto con il cibo e come influenza i tuoi messaggi",
      "Considera i modelli alimentari e gli atteggiamenti attuali di tuo figlio",
      "Ottieni un quadro di conversazione positivo e senza vergogna"
    ],
    prompt: "Voglio parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di alimentazione.\n\nFocus specifico: [TEMA — es. 'costruire un rapporto generalmente sano con il cibo', 'è molto schizzinoso/a con il cibo', 'mangia troppo quando è stressato/a o annoiato/a', 'confronta il suo corpo con i coetanei o i social media', 'vuole mettersi a dieta ed è troppo giovane', 'mangiamo troppo cibo da fast food e voglio migliorare la nostra alimentazione familiare', 'si rifiuta di provare cibi nuovi', 'salta i pasti', 'voglio insegnare a cucinare e l'educazione alimentare', 'un allenatore sportivo ha fatto commenti sul suo peso'].\n\nIl nostro ambiente alimentare attuale: [CONTESTO — es. 'mangiamo insieme come famiglia quasi ogni sera', 'ognuno mangia per conto suo a orari diversi', 'mangiamo spesso fuori', 'cucino piatti sani ma vuole solo cibo spazzatura', 'ho il mio rapporto complicato con il cibo'].\n\nPer favore aiutami a:\n1. Avere una conversazione sul cibo e l'alimentazione che sia positiva, curiosa e completamente libera da sensi di colpa o vergogna\n2. Inquadrare l'alimentazione in termini di energia, forza e come i cibi ti FANNO SENTIRE — mai peso o aspetto\n3. Affrontare la sua situazione specifica senza creare ansia intorno al cibo\n4. Suggerire modi pratici per esplorare il cibo insieme (cucinare, fare la spesa, assaggiare) che rendano l'alimentazione divertente, non clinica\n5. Aiutarmi a evitare le parole, le frasi e gli approcci che accidentalmente creano disturbi alimentari\n6. Creare una filosofia alimentare familiare che adottiamo insieme (non regole che impongo)\n7. Sapere quando il rapporto di un bambino con il cibo richiede attenzione professionale (segnali d'allarme dei disturbi alimentari)\n\nRicordami: il mio rapporto con il cibo è visibilmente rumoroso per mio figlio. Se conto le calorie ad alta voce, commento il mio corpo, etichetto i cibi come 'buoni' o 'cattivi', o uso il cibo come premio o punizione — quello è il programma che sto insegnando, indipendentemente da quello che dico. Guarire la mia storia con il cibo fa parte dell'aiutarlo a costruire la sua.",
    promptTip: "Non etichettare mai i cibi come 'buoni' o 'cattivi.' Prova 'cibi di tutti i giorni' (frutta, verdura, cereali integrali) e 'cibi delle occasioni' (caramelle, patatine, bibite). Questo elimina il giudizio morale dal mangiare. Inoltre: la Divisione delle Responsabilità di Ellyn Satter è lo standard di riferimento — il genitore decide QUALE cibo viene offerto, QUANDO e DOVE. Il bambino decide SE mangiare e QUANTO. Sembra controintuitivo ma funziona notevolmente bene a tutte le età.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 153,
    title: "Parla con Tuo Figlio dell'Esercizio Fisico",
    subtitle: "Aiutalo a trovare il movimento che ama — non punizione, non obbligo, ma gioia nel proprio corpo",
    category: "family",
    description: "Ecco cosa sbagliano la maggior parte degli adulti riguardo ai bambini e l'esercizio: i bambini non hanno bisogno di 'allenarsi.' Hanno bisogno di MUOVERSI — in modi che sembrino gioco, avventura, esplorazione e divertimento. Nel momento in cui l'esercizio diventa un obbligo, diventa il nemico. Il bambino costretto a correre in cerchio crescerà odiando la corsa. Il bambino che scopre che il suo corpo può arrampicarsi sugli alberi, ballare scatenato, nuotare come un pesce o segnare un gol svilupperà una relazione per la vita con il movimento come gioia. Il tuo ruolo non è essere il suo allenatore o sergente. È aiutarlo a scoprire cosa fa sentire vivo il suo corpo — e questo potrebbe non assomigliare per niente a ciò che l'esercizio significa per te. Un bambino che ama ballare sta facendo esercizio. Un bambino che ama lo skateboard sta facendo esercizio. Un bambino che ama costruire fortini in giardino sta facendo esercizio. Aiutalo a trovare la SUA cosa.",
    steps: [
      "Considera verso cosa tuo figlio gravita naturalmente dal punto di vista fisico",
      "Rifletti su come l'esercizio fisico era presentato nella tua infanzia",
      "Pensa a quali ostacoli esistono (tempo davanti agli schermi, impegni, imbarazzo)",
      "Ottieni idee personalizzate per rendere il movimento una parte gioiosa della sua vita"
    ],
    prompt: "Voglio aiutare [mio figlio/mia figlia], [NOME], età [ETÀ], a sviluppare un rapporto sano con l'attività fisica.\n\nSituazione attuale: [CONTESTO — es. 'sta seduto/a tutto il giorno e resiste a qualsiasi attività fisica', 'è attivo/a nello sport ma sta diventando troppo competitivo e stressante', 'amava giocare fuori ma ora preferisce gli schermi', 'è insicuro/a del proprio corpo e evita l'ora di educazione fisica', 'ha una limitazione fisica con cui dobbiamo fare i conti', 'è interessato/a allo sport ma ha paura di non essere abbastanza bravo/a'].\n\nCosa gli/le piace naturalmente: [INTERESSI — es. 'ballare in camera, nuotare, qualsiasi cosa con gli animali', 'non ha ancora trovato nulla', 'gli/le piace essere attivo/a con gli amici ma non gli sport strutturati', 'movimento creativo — gli/le piace arrampicarsi, costruire, esplorare'].\n\nIl mio approccio all'esercizio fisico: [ONESTÀ — es. 'sono attivo/a e voglio condividerlo', 'non faccio esercizio e mi sento un ipocrita', 'spingo troppo e devo fare un passo indietro', 'vorrei che fossimo attivi insieme'].\n\nPer favore aiutami a:\n1. Riformulare l'esercizio come movimento e gioco — non punizione, non requisito per la salute, solo la gioia di avere un corpo che può FARE cose\n2. Suggerire 10 modi creativi per inserire il movimento nella vita quotidiana che non sembrino 'esercizio' per un/a bambino/a di [ETÀ] anni\n3. Aiutarmi a trovare la SUA attività — abbinando opzioni fisiche alla sua personalità e ai suoi interessi\n4. Affrontare il tempo sugli schermi vs. il movimento senza farne una battaglia o una transazione\n5. Gestire la sensibilità sull'immagine corporea — se la sua resistenza riguarda l'insicurezza, non la pigrizia\n6. Creare rituali familiari di movimento che siano divertenti per tutti (non solo per gli sportivi)\n7. Sapere quando insistere gentilmente e quando fare del tutto un passo indietro\n\nRicordami: l'obiettivo non è un bambino in forma. L'obiettivo è un adulto che, tra decenni, muove il proprio corpo perché gli fa stare bene — non perché è stato svergognato per farlo. Ogni giro di pista forzato sottrae a quel futuro. Ogni ballo in cucina lo costruisce.",
    promptTip: "Il miglior predittore di un bambino attivo: genitori attivi che lo fanno sembrare divertente, non un dovere. Non dire 'Vai a giocare fuori.' Dì 'Andiamo fuori — ti sfido a una corsa fino all'albero.' Inoltre: rispetta il suo no. Se odia il calcio, non costringerlo a finire la stagione 'perché si è impegnato.' Un bambino forzato in uno sport che odia impara a odiare lo sport. Aiutalo a smettere con grazia e a provare qualcos'altro. L'attività giusta esiste — semplicemente non l'hai ancora trovata.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 154,
    title: "Parla con Tuo Figlio del Sonno",
    subtitle: "Proteggi le fondamenta della sua salute fisica e mentale — una sera alla volta",
    category: "family",
    description: "Il sonno non è un lusso. È la base su cui poggia ogni aspetto dello sviluppo di tuo figlio — regolazione emotiva, consolidamento della memoria, crescita fisica, funzione immunitaria e salute mentale. Un bambino cronicamente privato del sonno è un bambino che fatica a imparare, regolare le emozioni, mantenere le amicizie e resistere alle malattie. Eppure, nell'era degli schermi, dei programmi sovraccarichi e del culto della produttività, i bambini dormono meno di qualsiasi generazione precedente. La scienza è implacabile: i bambini dai 6 ai 12 anni hanno bisogno di 9-12 ore di sonno; gli adolescenti ne hanno bisogno di 8-10 (e il loro ritmo circadiano si sposta più tardi, il che significa che biologicamente non possono addormentarsi presto — non è pigrizia). Il tuo ruolo è essere il guardiano del loro sonno — il che spesso significa essere quello 'cattivo' che impone orari impopolari per andare a letto e spegnere gli schermi. È uno degli atti d'amore più grandi che puoi fare.",
    steps: [
      "Valuta i modelli di sonno attuali e i problemi di tuo figlio",
      "Identifica i principali disturbatori del sonno nella sua routine",
      "Considera le tue abitudini serali e la cultura del sonno in casa",
      "Ottieni un piano personalizzato di conversazione e routine del sonno"
    ],
    prompt: "Voglio affrontare il tema del sonno con [mio figlio/mia figlia], [NOME], età [ETÀ].\n\nSituazione attuale del sonno: [CONTESTO — es. 'combatte l'ora della nanna ogni sera', 'sta davanti agli schermi fino a mezzanotte', 'non riesce ad addormentarsi — mente che corre per l'ansia', 'dorme bene ma non abbastanza — troppe attività', 'ha incubi o terrori notturni', 'adolescente che non si sveglia per la scuola', 'il suo programma di sonno è caotico senza alcuna coerenza'].\n\nPrincipali disturbatori del sonno: [DISTURBATORI — es. 'telefono in camera da letto', 'compiti che si protraggono', 'ansia per la scuola', 'gioca online con gli amici di notte', 'programma incoerente nei fine settimana', 'condivide la stanza con un fratello'].\n\nPer favore aiutami a:\n1. Spiegare a un/a bambino/a di [ETÀ] anni PERCHÉ il sonno è importante in un linguaggio che gli/le parli (non noiosi fatti sulla salute — cosa fa il sonno per le cose che A LUI/LEI interessano)\n2. Creare una routine della nanna adatta all'età che seguirà davvero\n3. Affrontare il tempo sugli schermi prima di dormire con regole pratiche e applicabili\n4. Gestire la negoziazione e la resistenza senza che diventi una battaglia ogni sera\n5. Per gli adolescenti: spiegare lo spostamento circadiano e lavorare CON la loro biologia, non contro\n6. Affrontare i problemi di sonno legati all'ansia con tecniche calmanti che possano usare in autonomia\n7. Creare una checklist dell'ambiente del sonno (sistemazione della stanza per un sonno ottimale)\n8. Stabilire un programma coerente che tenga conto di giorni feriali, fine settimana e occasioni speciali\n\nRicordami: proteggere il sonno di mio figlio non è essere controllante — è essere responsabile. L'impopolarità a breve termine di imporre l'ora della nanna non è nulla in confronto al regalo a lungo termine di un cervello e un corpo ben riposati. Sono il guardiano di qualcosa che loro non possono ancora apprezzare da soli.",
    promptTip: "L'ora senza schermi prima di dormire è la collina su cui morire. La luce blu e la stimolazione da dopamina degli schermi sopprimono attivamente la melatonina e attivano il cervello. Fai della camera da letto una zona senza schermi (incluso il TUO telefono). Per gli adolescenti che insistono di non riuscire a dormire: suggerisci un 'libro noioso' (niente di emozionante — manuale scolastico, romanzo denso, dizionario) e la regola: 'Non devi dormire, ma devi stare a letto senza schermi.' Si addormenteranno in 20 minuti.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 155,
    title: "Parla con Tuo Figlio dello Stress",
    subtitle: "Insegnagli a nominarlo, affrontarlo e attraversarlo — la competenza emotiva che cambia tutto",
    category: "family",
    description: "I bambini vivono lo stress. Tutti quanti, a ogni età. Il bambino piccolo sopraffatto da un ambiente nuovo, il bambino di 8 anni ansioso per una verifica, il dodicenne che naviga le gerarchie sociali, il sedicenne sommerso dalle aspettative — lo stress non aspetta l'età adulta. Eppure alla maggior parte dei bambini non viene mai insegnato come identificare, nominare o gestire il proprio stress. Gli viene detto di 'calmarsi' (che non ha mai calmato nessuno nella storia dell'umanità), 'non preoccuparti' (che gli dice che i loro sentimenti sono sbagliati), o 'andrà tutto bene' (che sminuisce la loro esperienza). Ciò di cui i bambini hanno davvero bisogno è un genitore che dica: 'Vedo che sei stressato. Ha senso. Cerchiamo di capire cosa senti e cosa potrebbe aiutare.' Questa è la co-regolazione — il processo attraverso cui un adulto calmo e presente aiuta il sistema nervoso di un bambino stressato a tornare all'equilibrio. Col tempo, la co-regolazione diventa auto-regolazione. Ma solo se ti fai presente. Ancora e ancora.",
    steps: [
      "Osserva cosa sta causando stress nella vita di tuo figlio in questo momento",
      "Nota come esprime lo stress (raramente è 'Sono stressato')",
      "Rifletti su come gestisci il tuo stress davanti a loro",
      "Ottieni strumenti adatti all'età per comprendere e gestire lo stress insieme"
    ],
    prompt: "Voglio aiutare [mio figlio/mia figlia], [NOME], età [ETÀ], a comprendere e gestire il suo stress.\n\nCosa lo/la stressa: [FATTORI DI STRESS — es. 'la pressione scolastica e i voti', 'le dinamiche sociali e l'integrazione', 'cambiamenti familiari (divorzio, trasloco, nuovo fratellino)', 'troppi impegni — troppe attività', 'perfezionismo e paura di fallire', 'eventi mondiali di cui è consapevole', 'non me lo dice ma lo vedo nel suo comportamento'].\n\nCome mostra lo stress: [SEGNALI — es. 'capricci e crisi', 'mal di stomaco e mal di testa', 'difficoltà a dormire', 'chiusura e silenzio', 'irritabilità e litigi', 'appiccicoso/a e ansioso/a', 'regressione a comportamenti infantili', 'preoccupazione eccessiva', 'sembra tranquillo/a in superficie ma sento che qualcosa non va'].\n\nCome gestisco il mio stress: [ONESTÀ — es. 'do il buon esempio con strategie sane', 'tendo a reprimerlo e andare avanti', 'divento brusco/a e lo vedono', 'lavoro troppo e assorbono la tensione', 'sono stressato/a anch'io ed è difficile essere la loro ancora'].\n\nPer favore aiutami a:\n1. Aiutare mio figlio a NOMINARE il suo stress — dargli un vocabolario per i sentimenti oltre a 'bene' e 'male' (un vocabolario emotivo adatto a [ETÀ] anni)\n2. Insegnargli la scienza dello stress in un linguaggio adatto ai bambini (cosa succede nel cervello e nel corpo)\n3. Fornire 5 tecniche di gestione adatte all'età che possa usare in autonomia\n4. Insegnarmi a co-regolare — come essere la calma nella sua tempesta senza sminuire o correggere\n5. Aiutarmi a distinguere tra stress normale (che costruisce resilienza) e stress tossico (che necessita di intervento)\n6. Affrontare i miei modelli di stress — come smettere di trasferire la mia ansia su mio figlio\n7. Creare un 'kit anti-stress' — un insieme personalizzato di strategie che costruiamo insieme e teniamo in un posto visibile\n8. Sapere quando lo stress sconfina nell'ansia o nella depressione e serve aiuto professionale\n\nRicordami: non posso proteggere mio figlio dallo stress. Posso solo insegnargli che lo stress è sopravvivibile, che i sentimenti sono temporanei e che ha una persona che si siederà con lui nel disagio senza cercare di farlo uscire di fretta. Quella persona è il suo strumento di coping più grande — e quella persona sono io.",
    promptTip: "Lo strumento di gestione dello stress più sottovalutato per i bambini: dare un nome al sentimento ad alta voce. La ricerca mostra che l'atto di etichettare un'emozione ('Mi sento sopraffatto') ne riduce l'intensità nel cervello fino al 50%. Aiuta i bambini piccoli con una ruota delle emozioni o una tabella dei sentimenti. Per i più grandi: 'Su una scala da 1 a 10, quanto sei stressato adesso? Cos'è un 10? Cos'è un 1? Dove sei?' Questo dà loro calibrazione e linguaggio. Inoltre: non dire mai 'Non piangere.' Piangere È il meccanismo di coping. Lascialo funzionare.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 156,
    title: "Parla con Tuo Figlio del Denaro",
    subtitle: "Costruisci alfabetizzazione finanziaria, valori e saggezza — una conversazione alla volta",
    category: "family",
    description: "Il denaro è uno degli argomenti più tabù nelle famiglie — molti genitori che possono parlare di sesso, droga e morte si rifiutano ancora di parlare apertamente delle proprie finanze. Ma l'alfabetizzazione finanziaria non si impara in classe. Si impara a tavola, al supermercato, nei momenti in cui un bambino chiede 'Siamo ricchi?' o 'Posso avere quello?' La tua risposta a queste domande — e le migliaia di piccole decisioni finanziarie a cui assistono — plasma tutto il loro rapporto con il denaro, la sicurezza, la generosità e il senso di sé. I bambini hanno bisogno di capire che il denaro è uno strumento, non una misura del valore. Che spendere è una scelta, non una compulsione. Che risparmiare non è privazione ma libertà. Che la generosità non è una perdita ma connessione. E hanno bisogno di impararlo al LORO livello — non gravati dallo stress finanziario degli adulti, ma nemmeno protetti dalla realtà che le risorse richiedono delle scelte.",
    steps: [
      "Considera l'età di tuo figlio e la sua comprensione attuale del denaro",
      "Rifletti sulle tue convinzioni sul denaro e quali messaggi stai inconsciamente trasmettendo",
      "Identifica la lezione o conversazione finanziaria specifica necessaria",
      "Ottieni un quadro adatto all'età che costruisca saggezza, non ansia"
    ],
    prompt: "Voglio parlare con [mio figlio/mia figlia], [NOME], età [ETÀ], di soldi.\n\nTema specifico: [FOCUS — es. 'introdurre il concetto di denaro e valore (bambini piccoli)', 'paghetta e guadagno', 'risparmiare per qualcosa che desidera', 'perché non possiamo comprare tutto quello che vuole', 'bisogni vs. desideri', 'confronta la nostra famiglia con amici più benestanti', 'insegnare a dare e la generosità', 'il suo primo lavoro o guadagnare soldi', 'budget e pianificazione finanziaria per adolescenti', 'prestiti studenteschi e costi universitari', 'come rispondere a \"Siamo ricchi?\" o \"Siamo poveri?\"'].\n\nIl nostro contesto finanziario: [CONTESTO — es. 'stiamo bene ma voglio che capiscano il valore delle cose', 'i soldi sono stretti e sta iniziando a notarlo', 'siamo benestanti e mi preoccupo del senso di diritto', 'abbiamo valori finanziari diversi tra co-genitori', 'pensa che i soldi crescano sugli alberi'].\n\nLe mie convinzioni sul denaro: [RIFLESSIONE — es. 'sono cresciuto/a in povertà e compenso dandogli tutto', 'sono ansioso/a riguardo ai soldi e penso che lo percepiscano', 'sono tirchio/a all'eccesso e temo di trasmettere una mentalità di scarsità', 'non sono mai stato/a bravo/a con i soldi e voglio di meglio per loro'].\n\nPer favore aiutami a:\n1. Avere una conversazione adatta all'età su [FOCUS] che costruisca comprensione senza creare ansia\n2. Introdurre concetti finanziari al livello di comprensione di un/a bambino/a di [ETÀ] anni con esempi concreti\n3. Affrontare la sua domanda o situazione specifica con onestà che protegga il suo senso di sicurezza\n4. Suggerire attività pratiche con il denaro adatte alla sua età (guadagnare, risparmiare, spendere, donare)\n5. Aiutarmi a esaminare e correggere i messaggi inconsci sul denaro che sto già inviando\n6. Creare un piano progressivo di alfabetizzazione finanziaria che cresca con lui/lei (cosa insegnare a ogni età)\n7. Bilanciare l'onestà sulle finanze familiari con confini appropriati all'età (non ha bisogno di sapere l'importo del mutuo — ha bisogno di capire che le scelte comportano dei compromessi)\n\nRicordami: mio figlio sta imparando cose sul denaro che io lo insegni o no. Sta guardando cosa compro, di cosa mi preoccupo, cosa apprezzo e cosa regalo. La domanda non è se gli sto insegnando qualcosa sul denaro — è se gli sto insegnando quello che voglio che impari.",
    promptTip: "Il sistema dei tre barattoli (o buste) funziona benissimo dai 5 anni in su: ogni euro ricevuto viene diviso in SPENDERE, RISPARMIARE e DONARE. Insegna che il denaro ha degli scopi, non solo un saldo. Per gli adolescenti: dai loro un budget reale per qualcosa che conta per loro (acquisti per la scuola, una gita con gli amici) e lascia che prendano TUTTE le decisioni. Le lezioni che imparano spendendo tutto il budget in scarpe e non avendo più niente per il resto insegnano più di qualsiasi predica. Inoltre: non svergognarli mai per il desiderio di avere delle cose. Il desiderio è umano. Aiutali a imparare a dare priorità, non a reprimere.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 157,
    title: "Scatta un Selfie con l'IA da Qualsiasi Parte del Mondo",
    subtitle: "Carica una tua foto reale e lascia che l'IA ti posizioni ovunque — dalla Torre Eiffel alla superficie di Marte",
    category: "social",
    description: "Hai mai desiderato una foto di te stesso in piedi sulla Grande Muraglia Cinese, sdraiato su una spiaggia delle Maldive o fluttuante nello spazio — senza alzarti dal divano? La generazione di immagini con l'IA può ora prendere un vero selfie o ritratto che fornisci e inserirti perfettamente in qualsiasi scena, luogo o scenario tu possa immaginare. I risultati variano da impressionantemente realistici a esilarantemente surreali, a seconda dello strumento e del prompt. Ma ecco cosa la maggior parte delle persone impara a proprie spese: i generatori di immagini IA hanno ancora problemi con certi dettagli — dita in più, tratti del viso asimmetrici, denti leggermente sbagliati, illuminazione innaturale sulla pelle, accessori che si fondono nella carne. La chiave per un ottimo selfie IA è sapere come promptare CONTRO questi artefatti comuni. Questo elemento ti insegna sia il divertimento creativo che il know-how tecnico per ottenere risultati che sembrino davvero convincenti.",
    steps: [
      "Scegli un selfie o ritratto chiaro e ben illuminato come immagine di base",
      "Decidi il luogo o lo scenario dei tuoi sogni",
      "Caricalo su uno strumento di immagini IA e crea un prompt dettagliato",
      "Controlla il risultato alla ricerca di artefatti IA comuni e itera"
    ],
    prompt: "Voglio creare una foto realistica generata dall'IA di me stesso/a in un luogo in cui non sono mai stato/a.\n\nEcco il mio selfie/foto: [CARICA LA TUA FOTO]\n\nPosizionami in: [LUOGO/SCENARIO — es. 'in piedi davanti alla Torre Eiffel all'ora dorata', 'seduto/a in un caffè a Tokyo con i ciliegi in fiore', 'su una spiaggia alle Maldive al tramonto', 'in piedi sulla superficie di Marte in tuta spaziale', 'in cima a Machu Picchu all'alba', 'in una sala del trono di un castello medievale', 'in uno stadio gremito a guardare un concerto'].\n\nPreferenze di stile: [STILE — es. 'il più realistico e naturale possibile', 'leggermente cinematografico con illuminazione drammatica', 'look da foto di viaggio casual', 'qualità da ritratto professionale', 'divertente e sopra le righe'].\n\nIMPORTANTE — Presta particolare attenzione ad evitare gli artefatti IA comuni:\n1. Mani e dita — assicurati che ci sia il numero corretto di dita (5 per mano), posizione naturale, nessun dito fuso o in più\n2. Simmetria facciale — gli occhi devono essere allineati uniformemente, le orecchie simmetriche, nessuna distorsione\n3. Denti — aspetto naturale, nessun dente in più o deforme\n4. Coerenza dell'illuminazione — l'illuminazione sul mio viso/corpo deve corrispondere alla direzione della luce e alla temperatura colore della scena\n5. Accessori — occhiali, gioielli, cappelli devono apparire naturali e non fondersi nella pelle o nei capelli\n6. Integrazione con lo sfondo — i miei contorni devono fondersi naturalmente con la scena, nessun effetto ritaglio evidente o alone\n7. Texture della pelle — deve apparire naturale, non plastica o eccessivamente levigata\n8. Abbigliamento — deve cadere naturalmente ed essere coerente con il contesto della scena\n\nGenera l'immagine tenendo a mente queste linee guida per la prevenzione degli artefatti. Se compaiono problemi, dimmi cosa modificare in un prompt successivo.",
    promptTip: "Per risultati migliori: usa una foto frontale, ben illuminata, con sfondo semplice. Evita gli occhiali da sole (l'IA ha problemi con i riflessi). Se riscontri artefatti, prova ad aggiungere 'fotorealistico, illuminazione naturale, mani anatomicamente corrette, 5 dita per mano' al tuo prompt. Gemini con Imagen e Ideogram tendono a gestire testo e dettagli fini meglio di DALL-E per i compositi fotorealistici. Ingrandisci sempre e controlla mani, denti e occhi prima di condividere.",
    tools: [
      "ChatGPT",
      "Gemini",
      "Ideogram"
    ]
  },
  {
    id: 158,
    title: "Crea Biglietti d'Auguri Personalizzati",
    subtitle: "Progetta biglietti belli e personalizzati per ogni occasione — con arte generata dall'IA e testo perfettamente reso",
    category: "social",
    description: "I biglietti comprati in negozio sono generici. Quelli fatti a mano richiedono un talento artistico che potresti non avere. I biglietti generati dall'IA sono il compromesso perfetto: profondamente personali, visivamente straordinari, e li puoi creare in pochi minuti. Che sia un compleanno, una festività, un anniversario, un ringraziamento, congratulazioni, una pronta guarigione o un biglietto 'perché sì' — l'IA può generare illustrazioni personalizzate su misura per la personalità del destinatario, i suoi interessi e il tuo rapporto con lui/lei, con testo e messaggi splendidamente integrati. La vera svolta è la resa del testo nelle immagini. Storicamente, i generatori di immagini IA erano pessimi nell'inserire testo leggibile nelle immagini — producendo parole incomprensibili e piene di errori. Questo è cambiato drasticamente. Gemini di Google con Imagen è particolarmente forte nel rendere testo pulito e accurato nelle immagini generate, rendendolo ideale per i biglietti d'auguri dove il messaggio conta tanto quanto l'aspetto visivo. Puoi creare biglietti che sembrano progettati professionalmente, con il nome del destinatario, un messaggio personale e un'illustrazione che riflette esattamente quello che vuoi dire.",
    steps: [
      "Decidi l'occasione e per chi è il biglietto",
      "Pensa agli interessi del destinatario, alla sua personalità e a cosa lo farebbe sorridere",
      "Scegli uno stile (illustrato, fotorealistico, acquerello, minimalista, umoristico)",
      "Genera il biglietto con l'IA, specificando il testo da includere"
    ],
    prompt: "Voglio creare un biglietto d'auguri personalizzato usando immagini generate dall'IA.\n\nOccasione: [OCCASIONE — es. 'compleanno', 'Natale/festività', 'anniversario', 'ringraziamento', 'congratulazioni per un nuovo lavoro', 'pronta guarigione', 'pensavo a te', 'San Valentino', 'laurea', 'nascita di un bambino', 'condoglianze'].\n\nPer: [DESTINATARIO — es. 'mia mamma che ama il giardinaggio e i gatti', 'il mio migliore amico che è un grande fan di Star Wars', 'il/la mio/a partner che ama il mare', 'il mio collega che va in pensione dopo 30 anni', 'mio nipote di 7 anni che è ossessionato dai dinosauri'].\n\nTesto da includere sul biglietto:\n- Fronte: [TESTO FRONTE — es. 'Buon Compleanno, Mamma!', 'Buon Natale alla Nostra Famiglia', 'Grazie di Tutto']\n- Interno/retro (opzionale): [TESTO INTERNO — es. 'Ti auguro un anno pieno di giardini fioriti e gatti che fanno le fusa. Con amore, [Nome]']\n\nStile: [STILE — es. 'illustrazione ad acquerello calda', 'elegante e minimalista', 'divertente e a fumetti', 'scena naturalistica fotorealistica', 'estetica vintage/retrò', 'look disegnato a mano e fantasioso', 'audace e moderno focalizzato sulla tipografia'].\n\nPreferenza di palette colori: [COLORI — es. 'pastelli caldi', 'audaci e vivaci', 'elegante oro e blu navy', 'il colore preferito del destinatario è il viola', 'colori tradizionali delle feste'].\n\nPer favore genera un design del biglietto che:\n1. Integri il testo naturalmente nel design (non come un ripensamento)\n2. Rifletta la personalità e gli interessi del destinatario\n3. Risulti personale e intenzionale, non generico\n4. Abbia una resa del testo pulita e leggibile con ortografia corretta\n5. Sia adatto alla stampa in formato biglietto standard (5x7 pollici o A5)",
    promptTip: "Gemini con Imagen è attualmente lo strumento migliore per i biglietti d'auguri grazie alla sua resa superiore del testo nelle immagini — può scrivere correttamente i nomi e integrare i messaggi splendidamente nel design. Per un risultato rifinito, genera l'arte in Gemini, poi usa Canva per aggiungere eventuali ritocchi finali al testo, adattare il layout per la stampa ed esportare come PDF ad alta risoluzione. Consiglio pro: chiedi il biglietto in un layout piatto (fronte e retro affiancati) così puoi piegarlo dopo la stampa.",
    tools: [
      "Gemini",
      "ChatGPT",
      "Canva"
    ]
  },
  {
    id: 159,
    title: "Riconnettiti con un Vecchio Amico o Parente",
    subtitle: "Scrivi un messaggio premuroso a qualcuno con cui hai perso i contatti — caloroso, genuino e senza imbarazzo",
    category: "social",
    description: "Stai pensando a loro. Magari sono passati mesi, magari anni, magari decenni. Un vecchio amico dell'università, un cugino con cui eri molto legato, un ex collega, un amico d'infanzia che si è allontanato. Vorresti contattarlo, ma ogni volta che inizi a scrivere, ti blocchi. Cosa puoi dire dopo tutto questo tempo? Non sarà strano? E se non rispondono? L'imbarazzo della riconnessione è una delle barriere sociali più comuni tra gli adulti — ed è quasi interamente nella nostra testa. La ricerca mostra costantemente che le persone sovrastimano enormemente quanto sarà imbarazzante contattare qualcuno per l'altra persona. In realtà, ricevere un messaggio inaspettato da qualcuno con cui hai perso i contatti fa quasi sempre piacere — significa che qualcuno ha pensato a te. La sfida non è se apprezzeranno il gesto. È trovare le parole giuste — un messaggio che riconosca il tempo trascorso senza soffermarcisi, che sia caloroso senza essere eccessivo, che apra una porta senza fare pressione per attraversarla. L'IA è notevolmente brava ad aiutarti a trovare questo tono.",
    steps: [
      "Pensa a chi vuoi ricontattare e perché",
      "Considera cosa sai della sua vita attuale (se qualcosa)",
      "Decidi il mezzo (messaggio, email, DM sui social, lettera scritta a mano)",
      "Ottieni una bozza di messaggio che suoni come TE, non come un robot"
    ],
    prompt: "Voglio riconnettermi con qualcuno con cui ho perso i contatti e ho bisogno di aiuto per scrivere il messaggio perfetto.\n\nChi: [RELAZIONE — es. 'il mio compagno di stanza dell'università', 'un cugino con cui ero molto legato da piccolo', 'un ex collega che mi piaceva molto', 'il mio migliore amico d'infanzia', 'un vecchio mentore', 'un amico del mio vecchio quartiere', 'un/a ex con cui sono in buoni rapporti ma ci siamo allontanati'].\n\nTempo dall'ultimo contatto: [TEMPO — es. '2 anni', '5 anni', 'più di 10 anni', 'abbiamo litigato 3 anni fa e non ci siamo più parlati'].\n\nCosa ha dato lo spunto: [MOTIVO — es. 'ho visto un suo post sui social', 'qualcosa me l'ha ricordato', 'ho saputo che ha attraversato un momento difficile', 'sto vivendo un cambiamento di vita e mi sono reso/a conto che mi manca', 'nessun motivo specifico — ci sto solo pensando', 'visiterò presto la sua città'].\n\nCosa so della sua vita attuale: [CONTESTO — es. 'si è sposato/a e ha figli', 'si è trasferito/a in un altro paese', 'non so molto — non siamo collegati sui social', 'sembra che stia andando bene professionalmente', 'ho saputo che ha perso un genitore di recente'].\n\nMezzo: [CANALE — es. 'messaggio di testo', 'DM su Instagram', 'email', 'WhatsApp', 'messaggio su Facebook', 'lettera scritta a mano'].\n\nIl mio stile: [TONO — es. 'casual e leggero', 'caloroso e sincero', 'breve e senza pressioni', 'tendo a usare l'umorismo', 'sono un comunicatore abbastanza formale'].\n\nPer favore aiutami a scrivere un messaggio che:\n1. Riconosca il tempo trascorso in modo naturale senza scusarsi troppo o farne un dramma\n2. Suoni genuinamente come me, non come un modello preimpostato o un generico 'Ehi straniero!'\n3. Faccia riferimento a qualcosa di specifico della nostra storia condivisa (riempirò io i dettagli)\n4. Apra la porta alla riconnessione senza creare pressione per una risposta immediata\n5. Sia appropriato per il mezzo (breve per testo/DM, può essere più lungo per email/lettera)\n6. Eviti le trappole comuni: essere troppo formali, troppo casuali, troppo apologetici o troppo bisognosi\n7. Se c'è stata una rottura o un finale imbarazzante, lo affronti con garbo senza soffermarcisi",
    promptTip: "I migliori messaggi di riconnessione hanno tre ingredienti: (1) un ricordo condiviso specifico che dimostra che ci pensi davvero ('Ti ricordi quando...'), (2) genuina curiosità per la sua vita attuale ('Mi piacerebbe sapere cosa combini'), e (3) una chiusura senza pressioni ('Nessun obbligo di rispondere — volevo solo farti sapere che stavo pensando a te'). Tienilo più corto di quanto pensi debba essere. Un messaggio di 3-4 frasi colpisce più di una lunga email. E non pensarci troppo sul tempismo — non esiste il momento perfetto. Mandalo adesso.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },
  {
    id: 160,
    title: "Crea la Tua Bio per i Social Media",
    subtitle: "Scrivi la bio perfetta per qualsiasi piattaforma — concisa, memorabile e autenticamente te",
    category: "social",
    description: "La tua bio sui social media è il pezzo di scrittura più sottovalutato che pubblicherai mai. Viene letta più spesso di qualsiasi altra cosa tu posti. È la prima impressione per ogni nuovo visitatore del profilo, potenziale follower, datore di lavoro, cliente, collaboratore o appuntamento che ti cerca. E la bio della maggior parte delle persone è terribile — o una lista generica di ruoli ('Mamma | Moglie | Amante del Caffè | Dog Person'), una citazione motivazionale imbarazzante, o proprio niente. Una grande bio fa tre cose in pochissimi caratteri: dice alle persone chi sei, cosa ti sta a cuore e dà loro un motivo per seguirti o connettersi. Ogni piattaforma ha la propria cultura, limiti di caratteri e aspettative — quello che funziona su LinkedIn sarebbe bizzarro su TikTok, e quello che spacca su Twitter/X cadrebbe piatto su Instagram. L'IA può aiutarti a creare bio specifiche per ogni piattaforma che siano incisive, memorabili e suonino come la versione di te che vuoi davvero presentare al mondo — non quella che fissa un cursore lampeggiante per 20 minuti e si accontenta di 'Vivo la mia vita.'",
    steps: [
      "Scegli per quale/i piattaforma/e vuoi le bio",
      "Pensa a come vuoi essere percepito/a su ogni piattaforma",
      "Raccogli i tuoi dettagli chiave (professione, interessi, tratti della personalità, obiettivi)",
      "Genera e perfeziona bio che ti rappresentino autenticamente"
    ],
    prompt: "Ho bisogno di aiuto per creare bio per i social media che siano incisive, memorabili e che mi rappresentino davvero.\n\nPiattaforma/e: [PIATTAFORME — es. 'LinkedIn', 'Instagram', 'X/Twitter', 'TikTok', 'tutte le precedenti', 'YouTube', 'Threads', 'sito web personale'].\n\nSu di me: [DETTAGLI — es. 'sono un graphic designer che fa anche musica nel tempo libero', 'sono un insegnante di liceo che allena basket', 'sono un fondatore di startup nel settore IA', 'sono un genitore casalingo che tiene un blog sulla vita sostenibile', 'sono un neolaureato che cerca di entrare nel marketing'].\n\nCosa voglio trasmettere: [VIBE — es. 'professionale ma accessibile', 'creativo/a e un po' irriverente', 'autorevole ed esperto/a', 'caloroso/a e con cui è facile identificarsi', 'divertente e memorabile', 'minimalista e misterioso/a'].\n\nLa mia personalità: [TRATTI — es. 'umorismo secco', 'entusiasta e pieno/a di energia', 'riflessivo/a e introspettivo/a', 'sarcastico/a ma gentile', 'diretto/a e senza fronzoli'].\n\nCose chiave da includere: [MUST-HAVE — es. 'il mio titolo lavorativo', 'la mia posizione', 'un risultato specifico', 'una call to action (link al mio lavoro)', 'la mia nicchia o area di competenza', 'qualcosa di personale che mi renda umano/a'].\n\nCose da evitare: [DA EVITARE — es. 'frasi fatte come \"vivo la mia vita al massimo\"', 'troppe emoji', 'qualsiasi cosa troppo aziendale', 'elencare ogni ruolo che ricopro', 'citazioni motivazionali'].\n\nPer favore crea:\n1. 3 opzioni di bio per piattaforma, che vadano da sicura/professionale ad audace/creativa\n2. Ogni bio deve rispettare i limiti di caratteri della piattaforma (LinkedIn: 220 caratteri titolo, 2600 caratteri Informazioni; Instagram: 150 caratteri; X/Twitter: 160 caratteri; TikTok: 80 caratteri)\n3. Tono e convenzioni appropriati per la piattaforma (LinkedIn è professionale, TikTok è casual, X è arguto, Instagram è visivo/lifestyle)\n4. Una breve nota che spiega cosa rende efficace ogni opzione e a chi piacerebbe\n5. Suggerimenti per emoji, interruzioni di riga o trucchi di formattazione specifici per ogni piattaforma",
    promptTip: "Le migliori bio infrangono una regola: sacrificano la completezza per la memorabilità. Non hai bisogno di elencare tutto quello che sei — devi dire UNA cosa che resti impressa. La bio LinkedIn che dice 'Aiuto le piccole imprese a smettere di buttare soldi in pubblicità che non funzionano' è infinitamente migliore di 'Professionista del Marketing | MBA | 10+ Anni di Esperienza | Appassionato di Crescita.' Per Instagram e TikTok, le interruzioni di riga e il posizionamento strategico delle emoji contano più delle parole stesse. Testa la tua bio leggendola ad alta voce — se suona come una persona che parla, è buona. Se suona come un curriculum, riscrivila.",
    tools: [
      "ChatGPT",
      "Claude",
      "Gemini"
    ]
  },

  // ===== RICERCA LAVORO (161-163) =====
  {id:161, title:"Creare una lettera di presentazione personale", subtitle:"Scrivi una lettera di introduzione su misura che colleghi le tue competenze all'azienda e al ruolo", category:"jobs",
    description:"Una buona lettera di presentazione fa molto di più che elencare le tue qualifiche — racconta la storia del perché TU sei la persona giusta per QUESTO ruolo in QUESTA azienda. Il problema? La maggior parte delle persone scrive lettere generiche che potrebbero applicarsi a qualsiasi lavoro, o passa ore a rimuginare su ogni frase per poi produrre qualcosa di rigido e dimenticabile. L'IA cambia drasticamente questa equazione. Può ricercare la missione dell'azienda, le notizie recenti e la cultura, e poi aiutarti a redigere una lettera che colleghi genuinamente la tua esperienza e competenze specifiche a ciò di cui l'azienda ha realmente bisogno. Il risultato si legge come se avessi passato giorni a ricercare e scrivere — perché l'IA ha fatto il lavoro pesante mentre tu hai fornito i dettagli autentici che solo tu conosci. La chiave è dare all'IA abbastanza contesto su di te e sull'azienda target affinché possa creare connessioni genuine, non generiche.",
    steps:["Raccogli informazioni sull'azienda target e la posizione","Elenca le tue competenze rilevanti, esperienza e cosa ti motiva in questo ruolo","Fornisci questo contesto all'IA e lascia che crei la prima bozza","Rivedi e personalizza — aggiungi aneddoti specifici e la tua voce autentica"],
    prompt:"Ho bisogno di aiuto per scrivere una lettera di presentazione personale convincente per una candidatura.\n\nAzienda target: [NOME AZIENDA — es., 'Google', 'un'agenzia di marketing locale chiamata BrightSpark', 'una startup nel settore fintech'].\n\nPosizione: [TITOLO — es., 'Senior Software Engineer', 'Marketing Manager', 'Data Analyst Junior'].\n\nRequisiti chiave dell'annuncio: [REQUISITI — incolla i requisiti principali dall'annuncio, o riassumili: es., '5+ anni di esperienza in Python, leadership di team, esperienza con infrastruttura cloud'].\n\nSu di me:\n- Situazione attuale: [STATUS — es., 'Sviluppatore software con 4 anni di esperienza in un'azienda di medie dimensioni', 'Neolaureato/a con esperienza di tirocinio', 'Cambio di carriera dall'insegnamento alla tecnologia']\n- Competenze rilevanti: [COMPETENZE — es., 'Python, AWS, team leader per 2 progetti', 'analisi dati, Excel, SQL, Tableau']\n- Risultati chiave: [RISULTATI — es., 'Ho guidato una migrazione che ha ridotto i costi del 30%', 'Ho creato una dashboard usata da 50+ stakeholder']\n- Perché questa azienda: [MOTIVAZIONE — es., 'Ammiro i loro contributi open-source', 'La loro missione di democratizzare l'educazione risuona con il mio percorso', 'Voglio lavorare in un'azienda più piccola dove posso avere più impatto']\n- Perché questo ruolo: [MOTIVAZIONE — es., 'Combina le mie competenze tecniche con il mio desiderio di guidare un team', 'È un match perfetto per le mie competenze sui dati e la mia conoscenza del settore sanitario']\n\nTono: [TONO — es., 'professionale ma caloroso', 'sicuro ed entusiasta', 'formale', 'conversazionale e genuino'].\n\nPer favore:\n1. Ricerca ciò che sai su questa azienda (missione, valori, sviluppi recenti) e intreccia connessioni rilevanti nella lettera\n2. Scrivi un'apertura convincente che mostri subito che ho fatto le mie ricerche — niente 'Vi scrivo per candidarmi alla posizione di...' generico\n3. Collega le mie competenze e risultati specifici ai loro requisiti con esempi concreti\n4. Mostra entusiasmo genuino per l'azienda e il ruolo senza essere adulatorio\n5. Chiudi con una conclusione sicura ma non presuntuosa\n6. Mantienila a una pagina (circa 300-400 parole)\n7. Fornisci 2 versioni: una più formale, una più conversazionale, così posso scegliere quella che si adatta alla cultura aziendale",
    promptTip:"L'errore più grande nelle lettere di presentazione è essere generici. Non dire mai 'sono appassionato di tecnologia' — di' invece 'ho passato i miei weekend a costruire uno strumento che automatizza la pianificazione dei pasti perché credo che il software debba risolvere problemi reali della vita quotidiana.' Lo specifico batte l'impressionante, sempre. Inoltre, ricerca l'azienda oltre la pagina Chi siamo: controlla il blog, i comunicati stampa recenti e i profili LinkedIn delle persone del team a cui ti uniresti. Menzionare qualcosa di specifico ('Ho notato che il vostro team ha recentemente lanciato X — quell'approccio a Y è esattamente il tipo di lavoro che voglio fare') ti separa istantaneamente dal 95% dei candidati.",
    tools:["ChatGPT","Claude","Gemini"]},

  {id:162, title:"Creare un piano di ricerca lavoro", subtitle:"Costruisci un piano strutturato e attuabile con obiettivi, traguardi e calendario per organizzare la tua ricerca", category:"jobs",
    description:"Cercare lavoro senza un piano è come navigare senza mappa — finisci per candidarti a caso, perdere traccia delle candidature, saltare le scadenze di follow-up e esaurirti per la mancanza di struttura. Un buon piano di ricerca lavoro trasforma un processo stressante e caotico in un progetto gestibile con fasi chiare, obiettivi settimanali e traguardi misurabili. L'IA può aiutarti a costruire un piano completo su misura per la tua situazione — che tu sia un neolaureato che entra nel mercato per la prima volta, un professionista che vuole cambiare settore, o qualcuno che rientra nel mondo del lavoro dopo una pausa. Il piano copre tutto: autovalutazione, ricerca di aziende target, preparazione di CV e portfolio, strategia di networking, monitoraggio delle candidature, preparazione ai colloqui e negoziazione. Puoi scegliere di ricevere il piano come documento modificabile (Word, Excel, CSV) o come versione formattata stampabile (HTML, PDF) — qualunque cosa funzioni meglio per il tuo flusso di lavoro.",
    steps:["Valuta la tua situazione attuale: livello di esperienza, settore target, tempistica, vincoli","Indica all'IA le tue preferenze per formato e livello di dettaglio","Rivedi il piano generato e personalizza i traguardi in base alla tua realtà","Stabilisci dei check-in settimanali con te stesso per monitorare i progressi"],
    prompt:"Ho bisogno di aiuto per creare un piano di ricerca lavoro completo e strutturato.\n\nLa mia situazione:\n- Stato attuale: [STATO — es., 'occupato/a ma in cerca di cambiamento', 'licenziato/a di recente', 'neolaureato/a', 'rientro dopo una pausa di 2 anni', 'freelancer che vuole passare a tempo indeterminato']\n- Ruolo/i target: [RUOLI — es., 'Product Manager in un'azienda tech', 'qualsiasi ruolo nel marketing', 'Data Scientist o ML Engineer', 'non sono sicuro/a — ho bisogno di aiuto per capirlo']\n- Settore target: [SETTORE — es., 'tech', 'sanità', 'finanza', 'aperto a tutto', 'specificatamente startup']\n- Livello di esperienza: [LIVELLO — es., 'entry-level', 'metà carriera (5-7 anni)', 'senior (10+ anni)', 'dirigente']\n- Tempistica: [TEMPISTICA — es., 'voglio un nuovo lavoro entro 3 mesi', 'nessuna fretta — esploro nei prossimi 6 mesi', 'urgente — ho bisogno di reddito entro 4 settimane']\n- Vincoli geografici: [POSIZIONE — es., 'solo remoto', 'disponibile a trasferirmi ovunque', 'devo restare nell'area di Milano', 'aperto a ibrido a Roma']\n- Sfide principali: [SFIDE — es., 'ho dei buchi nel CV', 'sto cambiando settore senza esperienza diretta', 'non ricevo risposte', 'non so come fare networking', 'mi blocco ai colloqui']\n\nCosa voglio nel piano:\n1. Un approccio per fasi (preparazione → ricerca attiva → colloqui → negoziazione/chiusura)\n2. Obiettivi settimanali e azioni specifiche per ogni fase\n3. Un tracker dei traguardi per vedere i progressi\n4. Strategia di networking (chi contattare, cosa dire, come fare follow-up)\n5. Sistema di monitoraggio candidature (aziende, date, stato, contatti, prossimi passi)\n6. Checklist di preparazione ai colloqui\n7. Ricerca salariale e preparazione alla negoziazione\n8. Consigli di benessere e motivazione per evitare il burnout durante la ricerca\n\nFormato di output: [FORMATO — scegli uno o più: 'struttura documento Word modificabile', 'foglio Excel/CSV per il tracking', 'pagina HTML che posso stampare o salvare come PDF', 'markdown semplice da incollare in Notion/Obsidian', 'un piano testuale dettagliato da consultare quotidianamente'].\n\nPer favore, rendi il piano realistico e attuabile — non una checklist generica, ma qualcosa di personalizzato sulla mia situazione specifica con prossimi passi concreti che posso iniziare oggi.",
    promptTip:"I cercatori di lavoro più efficaci trattano la loro ricerca come un progetto con KPI. Monitora metriche come: candidature inviate a settimana, tasso di risposta, colloqui programmati, conversazioni di networking effettuate. Se il tuo tasso di risposta è inferiore al 10%, il tuo CV o il tuo targeting ha bisogno di lavoro — non di più volume. Blocca tempo dedicato nel tuo calendario per la ricerca lavoro (es., 9-12 ogni giorno se disoccupato, 1 ora ogni sera se occupato). E non trascurare il 'mercato nascosto del lavoro' — fino al 70% delle posizioni vengono coperte tramite networking prima di essere pubblicate. Il tuo piano dovrebbe dedicare almeno il 30% del tuo sforzo al networking, non solo alle candidature.",
    tools:["ChatGPT","Claude","Gemini"]},

  {id:163, title:"Pianificatore avanzato ricerca lavoro", subtitle:"Genera una pagina HTML interattiva tutto-in-uno per tracciare aziende, contatti, preparazione e progressi", category:"jobs",
    description:"Questo è lo strumento definitivo per chi cerca lavoro seriamente. Invece di destreggiarti tra fogli di calcolo, post-it e segnalibri del browser, chiedi all'IA di generare una pagina HTML/CSS/JS interattiva completa e autonoma che funga da centro di comando personale per la ricerca lavoro. La pagina generata include un tracker delle aziende (con campi per nome azienda, posizione, persona di contatto, email, data di candidatura, stato e note), una sezione di preparazione ai colloqui (domande frequenti, note di ricerca per azienda, le tue storie STAR), una dashboard dei progressi con indicatori visivi e una vista calendario con scadenze e follow-up imminenti. La funzionalità chiave: salva e carica i tuoi dati come file .cemijob (un file JSON o XML con estensione personalizzata) così i tuoi progressi persistono tra le sessioni. Apri il file HTML in qualsiasi browser, carica il tuo file .cemijob, aggiorna i tuoi progressi e salva di nuovo. Nessun server necessario, nessun account richiesto, nessun abbonamento — solo un file HTML e il tuo file dati. Tutta la tua ricerca lavoro in due file che puoi portare su una chiavetta USB.",
    steps:["Descrivi le tue esigenze di ricerca lavoro e cosa vuoi tracciare","Chiedi all'IA di generare la pagina HTML interattiva completa","Salva il file HTML e aprilo nel tuo browser","Usa la pagina per tracciare le candidature, preparare i colloqui e monitorare i progressi — salva regolarmente i tuoi dati come file .cemijob"],
    prompt:"Voglio che tu crei una pagina HTML interattiva completa e autonoma che funga da mio centro di comando personale per la ricerca lavoro. Deve essere un singolo file HTML con tutti i CSS e JavaScript inline — nessuna dipendenza esterna.\n\nLa pagina deve includere queste sezioni:\n\n1. **Tracker aziende** (sezione principale)\n   - Aggiungere/modificare/eliminare aziende che sto considerando o a cui mi sono candidato\n   - Campi per ogni voce: Nome azienda, Titolo posizione, Nome contatto, Email/LinkedIn contatto, Data candidatura, Stato attuale (dropdown: In ricerca, Candidato, Screening telefonico, Colloquio programmato, Colloquio fatto, Offerta, Rifiutato, Nessuna risposta), Range salariale, Note\n   - Vista tabella ordinabile e filtrabile\n   - Indicatori di stato colorati\n   - Statistiche rapide in alto (totale tracciati, candidature inviate, colloqui programmati, offerte ricevute)\n\n2. **Preparazione colloqui**\n   - Sezione per memorizzare le mie storie STAR (Situazione, Compito, Azione, Risultato) per le domande comportamentali frequenti\n   - Note di ricerca specifiche per azienda collegate a ogni azienda nel tracker\n   - Banca di domande frequenti per colloqui con spazio per le mie risposte preparate\n\n3. **Dashboard progressi**\n   - Pipeline visuale che mostra quante aziende sono in ogni fase\n   - Log attività settimanale (cosa ho fatto questa settimana)\n   - Obiettivi vs. realtà (es., obiettivo: 10 candidature/settimana, reale: 7)\n\n4. **Calendario/Timeline**\n   - Colloqui in arrivo, promemoria di follow-up e scadenze\n   - Vista timeline visuale o vista lista\n\n5. **Persistenza dati**\n   - Un pulsante 'Salva progressi' che scarica tutti i miei dati come file `.cemijob` (formato JSON con estensione .cemijob)\n   - Un pulsante 'Carica progressi' che mi permette di caricare un file `.cemijob` salvato in precedenza per ripristinare i miei dati\n   - Promemoria automatico di salvataggio se ho modifiche non salvate\n\nRequisiti di design:\n- Tema scuro e professionale (sfondo scuro, tipografia pulita)\n- Responsive — funziona su desktop e mobile\n- Transizioni fluide e aspetto curato\n- Navigazione chiara tra le sezioni\n- Accessibile (label corretti, navigazione da tastiera)\n\nGenera il file HTML completo. Rendilo di qualità produzione — è uno strumento che userò quotidianamente per mesi.",
    promptTip:"Dopo che l'IA ha generato il file HTML, salvalo come 'job-planner.html' e aprilo nel browser. Testa tutte le funzionalità: aggiungi alcune aziende, cambia gli stati, salva un file .cemijob, chiudi la pagina, riaprila e carica il file per verificare che la persistenza dei dati funzioni. Se vuoi personalizzare il design o aggiungere funzionalità, incolla l'intero HTML di nuovo nell'IA con le tue richieste di modifica — essendo un singolo file, l'IA può modificarlo facilmente. Consiglio pro: fai backup del tuo file .cemijob (copialo su cloud storage o invialo via email a te stesso) — è l'intera cronologia della tua ricerca lavoro in un piccolo file.",
    tools:["ChatGPT","Claude","Gemini"]}
];