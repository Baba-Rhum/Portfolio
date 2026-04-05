/* ═══════════════════════════════════
   DONNÉES PROJETS
═══════════════════════════════════ */

const PROJECTS = {
  rfid: {
    meta: {
      cat: 'secu',
      images: ['images/rfid-1.jpg', 'images/rfid-2.jpg', 'images/rfid-3.jpg'],
      status: 'ongoing',
      period: { start: { y: 2026, m: 1 }, end: null },
    },

    fr: {
      catLabel: 'Sécurité & Embarqué',
      title: 'Contrôle d\'accès RFID embarqué',
      date: 'Jan. 2026 · Projet personnel — en prod',
      context: 'Projet personnel solo · Déployé à l\'ESIEA · ~20 utilisateurs actifs',

      objective: 'Concevoir et déployer un système embarqué complet de contrôle d\'accès physique — du firmware au boîtier — avec interface d\'administration web et gestion des badges en temps réel.',

      description: 'Firmware développé sur ESP32 (C/C++) exposant un Access Point WiFi autonome. Lecture des badges RFID, vérification en base SQLite (LittleFS), contrôle d\'un servo 180° bloquant mécaniquement la poignée — conçu fail-safe : reste fermé hors alimentation. Serveur web embarqué avec deux interfaces : admin (authentification login/mdp + token de session aléatoire, gestion des badges, logs complets) et utilisateur (état de la porte en temps réel). Logs horodatés : ouvertures, refus, connexions admin. Projet physique complet : câblage, soudures, intégration boîtier.',

      features: [
        'Access Point WiFi autonome — aucune dépendance réseau externe',
        'Auth admin : login/mdp + token de session aléatoire par requête',
        'CRUD badges : ajout (UID + nom), suppression, liste',
        'Logs horodatés : accès accordés/refusés + sessions admin',
        'Vue utilisateur : état porte en temps réel',
        'Ouverture à distance depuis l\'interface admin',
        'Servo fail-safe : position fermée par défaut sans alimentation',
        'Déployé en production — ~20 utilisateurs, en croissance',
      ],

      impact: 'Système en production réelle à l\'ESIEA. Remplace un accès non contrôlé par un système tracé, administrable à distance et physiquement sécurisé. Roadmap sécurité active : hashage des UIDs en cours, rolling codes (FireClaw) en développement pour remplacer les UIDs statiques par des tokens à usage unique.',

      skills: 'Développement embarqué full-stack de bout en bout, conception fail-safe, déploiement en conditions réelles, autonomie totale sur un projet physique complexe.',

      tech: ['C/C++', 'ESP32', 'Arduino IDE', 'RFID RC522', 'SQLite / LittleFS', 'Serveur web embarqué', 'HTML/CSS', 'Servo PWM', 'WiFi AP'],
    },

    en: {
      catLabel: 'Security & Embedded',
      title: 'Embedded RFID access control system',
      date: 'Jan. 2026 · Personal project — in production',
      context: 'Solo personal project · Deployed at ESIEA · ~20 active users',

      objective: 'Design and deploy a complete embedded access control system — from firmware to enclosure — with a web administration interface and real-time badge management.',

      description: 'Firmware built on ESP32 (C/C++) exposing an autonomous WiFi Access Point. Reads RFID badges, checks against a SQLite database (LittleFS), controls a 180° servo mechanically blocking the door handle — fail-safe design: stays locked when unpowered. Embedded web server with two interfaces: admin (login/password + random session token auth, badge management, full logs) and user (real-time door status). Timestamped logs: openings, rejections, admin sessions. Full physical build: wiring, soldering, enclosure integration.',

      features: [
        'Autonomous WiFi Access Point — no external network dependency',
        'Admin auth: login/password + per-request random session token',
        'Badge CRUD: add (UID + name), delete, list',
        'Timestamped logs: granted/denied access + admin sessions',
        'User view: real-time door status',
        'Remote door control from admin interface',
        'Fail-safe servo: locked position by default when unpowered',
        'Live in production — ~20 users and growing',
      ],

      impact: 'Running in production at ESIEA. Replaces uncontrolled access with a traceable, remotely administrable, physically secured system. Active security roadmap: UID hashing in progress, rolling codes (FireClaw) in development to replace static UIDs with single-use tokens.',

      skills: 'Full-stack embedded development end-to-end, fail-safe design, real-time deployment, complete autonomy on a complex physical project.',

      tech: ['C/C++', 'ESP32', 'Arduino IDE', 'RFID RC522', 'SQLite / LittleFS', 'Embedded web server', 'HTML/CSS', 'Servo PWM', 'WiFi AP'],
    },
  },
  discord: {
    meta: {
      cat: 'dev',
      image: 'images/discord.jpg',
      status: 'ongoing',
      period: { start: { y: 2025, m: 11 }, end: null },
    },

    fr: {
      catLabel: 'Développement',
      title: 'Bot Discord — Architecture événementielle & IA',
      date: 'Nov. 2025 · Projet personnel — en prod',
      context: 'Binôme au démarrage · Architecture, loaders et IA : moi seul · VPS perso',

      objective: 'Développer un bot Discord structuré, maintenable et extensible, avec une architecture orientée événements pensée pour faciliter l\'ajout de fonctionnalités, et intégration d\'un chatbot IA via API Mistral.',

      description: 'Bot Node.js déployé sur VPS perso, exposé via token sécurisé (.env). Architecture basée sur un système de loaders qui scanne et charge dynamiquement les fichiers de commandes et d\'événements au démarrage — chaque commande est un module indépendant. Slash commands Discord natifs (/). Menu d\'aide auto-généré : lit les métadonnées de chaque commande et construit l\'interface sans intervention manuelle. Intégration d\'un chatbot IA (API Mistral) comme commande native. Logs applicatifs pour le suivi en production.',

      features: [
        'Loader dynamique : scan et chargement automatique des commandes et événements',
        'Chaque commande = module isolé, ajout sans toucher au core',
        'Slash commands Discord natifs (/)',
        'Menu d\'aide auto-généré depuis les métadonnées des commandes',
        'Chatbot IA intégré — API Mistral',
        'Déployé sur VPS perso — 2 serveurs, ~10 utilisateurs',
        'Modules actifs : modération + fun, extensible à volonté',
      ],

      impact: 'Architecture pensée pour durer : ajouter une commande = créer un fichier, rien d\'autre. Le menu d\'aide se met à jour seul. Base saine pour scaler le bot sans dette technique.',

      skills: 'Architecture logicielle orientée événements, modularité et maintenabilité, intégration d\'API externe (Mistral), déploiement VPS, travail en binôme avec Git.',

      tech: ['Node.js', 'JavaScript', 'Discord.js', 'API Mistral', 'Git', 'VPS', '.env / config'],
    },

    en: {
      catLabel: 'Development',
      title: 'Discord Bot — Event-driven architecture & AI',
      date: 'Nov. 2025 · Personal project — in production',
      context: 'Pair at start · Architecture, loaders and AI: solo · Personal VPS',

      objective: 'Build a structured, maintainable and extensible Discord bot with a clean event-driven architecture designed for easy feature additions, and an integrated AI chatbot via Mistral API.',

      description: 'Node.js bot deployed on a personal VPS, secured via token (.env). Architecture built around a loader system that dynamically scans and loads command and event files at startup — each command is an independent module. Native Discord slash commands (/). Auto-generated help menu: reads each command\'s metadata and builds the interface automatically. AI chatbot integrated via Mistral API as a native command. Application logs for production monitoring.',

      features: [
        'Dynamic loader: automatic scan and loading of commands and events',
        'Each command = isolated module, add without touching core',
        'Native Discord slash commands (/)',
        'Auto-generated help menu from command metadata',
        'Integrated AI chatbot — Mistral API',
        'Deployed on personal VPS — 2 servers, ~10 users',
        'Active modules: moderation + fun, freely extensible',
      ],

      impact: 'Architecture built to last: adding a command means creating one file, nothing else. Help menu updates itself. Clean foundation to scale without technical debt.',

      skills: 'Event-driven software architecture, modularity and maintainability, external API integration (Mistral), VPS deployment, pair work with Git.',

      tech: ['Node.js', 'JavaScript', 'Discord.js', 'Mistral API', 'Git', 'VPS', '.env / config'],
    },
  },
  pairse_mbot: {
    meta: {
      cat: 'edu',
      image: 'images/pairsec.jpg',
      status: 'done',
      period: { start: { y: 2024, m: 10 }, end: { y: 2025, m: 6 } },
      genially: 'https://view.genially.com/6786611d6afaf917a51085b1',
    },

    fr: {
      catLabel: 'Pédagogie & Leadership',
      title: 'PAIRSE — Initiation robotique & cybersécurité',
      date: 'Oct. 2024 – Juin 2025 · Projet ESIEA',
      context: 'Chef de groupe · Équipe de 6 étudiants · Collège partenaire',

      objective: 'Accompagner des collégiens en préparation de la compétition RoboRave 53 tout en leur transmettant des bases en cybersécurité, cryptographie et prévention aux dangers d\'internet.',

      description: 'Planification et animation des séances d\'intervention au collège. Contenu pédagogique créé from scratch : initiation à la cryptographie (chiffrement, concepts de base), sensibilisation aux dangers d\'internet, supports Genially. Organisation d\'une visite de lycée pour accompagner les élèves dans leur choix d\'orientation (filières SIN et STI2D). Coordination de l\'équipe de 6 étudiants, gestion du planning et des livrables sur 9 mois.',

      features: [
        'Séances régulières d\'intervention en collège sur 9 mois',
        'Contenu pédagogique créé : cryptographie, cybersécurité, prévention',
        'Support de cours interactif Genially',
        'Visite lycée organisée — orientation SIN / STI2D',
        'Préparation RoboRave : suivi de ligne, parcours, sumo',
        'Coordination d\'une équipe de 6 étudiants',
      ],

      impact: 'Résultats concrets en compétition : 2ème au suivi de ligne (binôme de 3ème), 2ème et 3ème au challenge sumo. Belle réussite collective pour une première participation.',

      skills: 'Pédagogie et vulgarisation technique, communication avec un public non expert, gestion de projet long terme, leadership, coordination d\'équipe.',

      tech: ['Canva', 'Genially', 'LibreOffice', 'Matériel robotique'],
    },

    en: {
      catLabel: 'Education & Leadership',
      title: 'PAIRSE — Robotics & cybersecurity initiation',
      date: 'Oct. 2024 – Jun. 2025 · ESIEA project',
      context: 'Team leader · Group of 6 students · Partner middle school',

      objective: 'Support middle school students preparing for the RoboRave 53 competition while teaching them cybersecurity basics, cryptography and internet safety.',

      description: 'Planned and ran intervention sessions at the school. Pedagogical content created from scratch: cryptography initiation (encryption, basic concepts), internet safety awareness, Genially interactive materials. Organised a high school visit to help students choose their academic track (SIN and STI2D streams). Coordinated a team of 6 students, managed schedule and deliverables over 9 months.',

      features: [
        'Regular school intervention sessions over 9 months',
        'Custom pedagogical content: cryptography, cybersecurity, safety',
        'Interactive Genially course material',
        'High school visit organised — SIN / STI2D orientation',
        'RoboRave preparation: line following, course, sumo',
        'Coordination of a 6-student team',
      ],

      impact: 'Concrete competition results: 2nd in line following (Year 9 pair), 2nd and 3rd in sumo challenge. Strong collective achievement on first participation.',

      skills: 'Pedagogy and technical communication, non-expert audience communication, long-term project management, leadership, team coordination.',

      tech: ['Canva', 'Genially', 'LibreOffice', 'Robotics equipment'],
    },
  },

  pairse_expo: {
    meta: {
      cat: 'edu',
      image: 'images/pairse_expo.jpg',
      status: 'ongoing',
      period: { start: { y: 2025, m: 10 }, end: { y: 2026, m: 6 } },
      instagram: 'https://www.instagram.com/exposciencem53/',
      eventDate: '26-27 mai 2026',
    },

    fr: {
      catLabel: 'Communication & Gestion de projet',
      title: 'PAIRSE — Exposciences 53',
      date: 'Oct. 2025 – Juin 2026 · Projet ESIEA · En cours',
      context: 'Coordinateur · Équipe de 5 étudiants · Événement public 26-27 mai 2026',

      objective: 'Contribuer à l\'organisation de l\'Exposciences 53 — exposition publique scientifique jeunesse (6-25 ans) — en recrutant des participants, sponsors et bénévoles, et en gérant la communication de l\'événement.',

      description: 'Démarchage d\'entreprises, d\'écoles et de groupes internes à l\'ESIEA pour les engager comme participants, sponsors, bénévoles ou visiteurs. Gestion des publications sur les réseaux sociaux officiels de l\'événement (Instagram). Coordination des 5 membres de l\'équipe et suivi de l\'avancement. Résultat actuel : 3 groupes PAIRSE de l\'ESIEA engagés, 2-3 écoles recrutées, communication active.',

      features: [
        'Démarchage entreprises, écoles et groupes internes ESIEA',
        'Recrutement participants, sponsors, bénévoles et visiteurs',
        'Gestion des réseaux sociaux officiels — Instagram',
        '3 groupes PAIRSE ESIEA engagés',
        '2-3 écoles recrutées grâce à l\'équipe',
        'Coordination équipe de 5 sur 9 mois',
      ],

      impact: 'Événement prévu les 26-27 mai 2026. Projet en bonne avance : partenaires recrutés, communication lancée, équipes engagées. Première expérience de coordination d\'un événement public à portée départementale.',

      skills: 'Gestion de projet, démarchage et relations extérieures, communication institutionnelle, réseaux sociaux, coordination d\'équipe.',

      tech: ['Canva', 'Instagram', 'LibreOffice', 'Google Workspace'],
    },

    en: {
      catLabel: 'Communication & Project management',
      title: 'PAIRSE — Exposciences 53',
      date: 'Oct. 2025 – Jun. 2026 · ESIEA project · Ongoing',
      context: 'Coordinator · Team of 5 students · Public event 26-27 May 2026',

      objective: 'Contribute to organising Exposciences 53 — a public science exhibition for young people (ages 6-25) — by recruiting participants, sponsors and volunteers, and managing event communications.',

      description: 'Reached out to companies, schools and internal ESIEA groups to engage them as participants, sponsors, volunteers or visitors. Managed official event social media (Instagram). Coordinated 5 team members and tracked progress. Current results: 3 ESIEA PAIRSE groups engaged, 2-3 schools recruited, active communication ongoing.',

      features: [
        'Outreach to companies, schools and internal ESIEA groups',
        'Recruitment of participants, sponsors, volunteers and visitors',
        'Official social media management — Instagram',
        '3 ESIEA PAIRSE groups engaged',
        '2-3 schools recruited by the team',
        'Team of 5 coordinated over 9 months',
      ],

      impact: 'Event scheduled 26-27 May 2026. Project on track: partners recruited, communications live, teams engaged. First experience coordinating a public event at département level.',

      skills: 'Project management, outreach and external relations, institutional communication, social media, team coordination.',

      tech: ['Canva', 'Instagram', 'LibreOffice', 'Google Workspace'],
    },
  },
  jeu_space_invader: {
    meta: {
      cat: 'dev',
      image: 'images/space_invader.jpg',
      status: 'done',
      period: { start: { y: 2025, m: 1 }, end: { y: 2025, m: 1 } },
    },

    fr: {
      catLabel: 'Développement',
      title: 'Space Invader — Premier jeu en C',
      date: 'Jan. 2025 · Projet de partiel',
      context: 'Projet individuel · Basecode fourni (structure de base SDL2)',

      objective: 'Compléter et enrichir un Space Invader en C à partir d\'un basecode minimal, en ajoutant gameplay complet, variété ennemis et polish.',

      description: 'Basecode fourni : boucle de jeu SDL2, un personnage animé, une balle sans dégâts ni mort. Tout le reste développé from scratch : système de dégâts, conditions de fin, vagues d\'ennemis avec patterns de déplacement et de tir, tirs aléatoires, variété d\'ennemis, animations complètes.',

      features: [
        'Système de dégâts et conditions de victoire/défaite',
        'Vagues d\'ennemis avec patterns de déplacement variés',
        'Tirs ennemis aléatoires et patterns de balles',
        'Variété d\'ennemis avec comportements distincts',
        'Animations complètes',
      ],

      impact: 'Premier projet jeu en C — poser les bases du développement gameplay from scratch à partir d\'un socle minimal.',

      skills: 'Prise en main rapide d\'un basecode existant, développement gameplay C, gestion des états de jeu, SDL2.',

      tech: ['C', 'SDL2', 'Git'],
    },

    en: {
      catLabel: 'Development',
      title: 'Space Invader — First game in C',
      date: 'Jan. 2025 · Exam project',
      context: 'Solo project · Basecode provided (basic SDL2 structure)',

      objective: 'Complete and extend a Space Invader in C from a minimal basecode, adding full gameplay, enemy variety and polish.',

      description: 'Provided basecode: SDL2 game loop, one animated character, a bullet with no damage or death logic. Everything else built from scratch: damage system, end conditions, enemy waves with movement and shooting patterns, random fire, enemy variety, full animations.',

      features: [
        'Damage system and win/lose conditions',
        'Enemy waves with varied movement patterns',
        'Random enemy fire and bullet patterns',
        'Enemy variety with distinct behaviours',
        'Full animations',
      ],

      impact: 'First game project in C — laying the foundations of gameplay development from scratch on top of a minimal base.',

      skills: 'Quick onboarding onto existing codebase, C gameplay development, game state management, SDL2.',

      tech: ['C', 'SDL2', 'Git'],
    },
  },
  jeu_super_pixel_smash: {
    meta: {
      cat: 'dev',
      image: 'images/sps.jpg',
      status: 'done',
      period: { start: { y: 2025, m: 6 }, end: { y: 2025, m: 6 } },
    },

    fr: {
      catLabel: 'Développement',
      title: 'Super Pixel Smash — Jeu de combat 2D',
      date: 'Juin 2025 · Projet de partiel',
      context: 'Projet individuel · Sans basecode',

      objective: 'Développer un jeu de combat 2D type Brawlhalla en C sans basecode, avec système de combat complet, bots et gestion de structures de données.',

      description: 'Jeu de combat 2D développé entièrement from scratch. Personnages avec attaques et hitbox distinctes, smash personnalisés, plateformes. Bots avec plusieurs niveaux de difficulté dont un mode "God" capable de true combos, basé sur des arbres décisionnels. Gestion des entités et états via structures de données.',

      features: [
        'Personnages avec attaques, hitbox et smash distincts',
        'Plateformes et déplacements',
        'Bots multi-niveaux dont God mode (true combos)',
        'Arbres décisionnels pour l\'IA des bots',
        'Gestion des entités via structures de données',
      ],

      impact: 'Premier jeu C sans basecode — conception et architecture entièrement autonomes. L\'IA bot avec arbres décisionnels est le point technique fort du projet.',

      skills: 'Architecture from scratch, IA comportementale (arbres décisionnels), gestion des états et entités, C avancé, SDL2.',

      tech: ['C', 'SDL2', 'Git'],
    },

    en: {
      catLabel: 'Development',
      title: 'Super Pixel Smash — 2D fighting game',
      date: 'Jun. 2025 · Exam project',
      context: 'Solo project · No basecode',

      objective: 'Build a Brawlhalla-style 2D fighting game in C from scratch, with a full combat system, bots and data structure management.',

      description: 'Full 2D fighting game built entirely from scratch. Characters with distinct attacks and hitboxes, custom smash moves, platforms. Bots with multiple difficulty levels including a God mode capable of true combos, powered by decision trees. Entity and state management via data structures.',

      features: [
        'Characters with distinct attacks, hitboxes and smash moves',
        'Platforms and movement',
        'Multi-level bots including God mode (true combos)',
        'Decision trees for bot AI',
        'Entity management via data structures',
      ],

      impact: 'First C game with no basecode — fully autonomous design and architecture. Bot AI with decision trees is the technical highlight of the project.',

      skills: 'From-scratch architecture, behavioural AI (decision trees), entity and state management, advanced C, SDL2.',

      tech: ['C', 'SDL2', 'Git'],
    },
  },

jeu_rok: {
  meta: {
    cat: 'dev',
    image: 'images/rok.jpg',
    status: 'done',
    period: { start: { y: 2026, m: 1 }, end: { y: 2026, m: 2 } },
  },

  fr: {
    catLabel: 'Développement',
    title: 'Rok passe partout — Puzzle game avec solveur BFS',
    date: 'Jan. 2026 · Projet de partiel',
    context: 'Binôme · Contribution partagée sur l\'ensemble du projet',

    objective: 'Développer en 2 semaines un puzzle game physique en C avec génération procédurale de niveaux et solveur automatique, sans basecode.',

    description: 'Adaptation du jeu de plateau "Rok passe partout" en 2D. Génération procédurale de niveaux : l\'algorithme teste toutes les solutions depuis la sortie avec les objets disponibles, en vérifiant la faisabilité à chaque étape. Solveur intégré via BFS (Breadth-First Search) : trouve et affiche la solution optimale. Inventaire (casque, marteau, clé, bottes), animations, sprites et son. Migration SDL2 → SDL3 (sortie contemporaine au projet).',

    features: [
      'Génération procédurale — exploration exhaustive depuis la sortie',
      'Solveur BFS intégré — solution optimale calculée et affichée',
      'Vérification de faisabilité à chaque étape de génération',
      'Inventaire : casque, marteau, clé, bottes',
      'Animations, sprites et son',
      'Migration SDL3 (adoption au moment de sa sortie)',
    ],

    impact: 'Le solveur BFS est le cœur technique du projet — garantit que chaque niveau généré est faisable et résolvable de manière optimale. Première utilisation de SDL3 en conditions réelles.',

    skills: 'Algorithmique (BFS, exploration exhaustive), génération procédurale, vérification de contraintes, SDL3, travail en binôme.',

    tech: ['C', 'SDL3', 'Git'],
  },

  en: {
    catLabel: 'Development',
    title: 'Rok passe partout — Puzzle game with BFS solver',
    date: 'Jan. 2026 · Exam project',
    context: 'Pair · Shared contribution across the full project',

    objective: 'Build in 2 weeks a physical puzzle game in C with procedural level generation and an automatic solver, with no basecode.',

    description: 'Digital adaptation of the "Rok passe partout" board game. Procedural level generation: algorithm exhaustively tests all solutions from the exit using available objects, checking feasibility at each step. Integrated BFS solver: finds and displays the optimal solution. Inventory system (helmet, hammer, key, boots), animations, sprites and audio. SDL2 → SDL3 migration (released concurrently with the project).',

    features: [
      'Procedural generation — exhaustive exploration from the exit',
      'Integrated BFS solver — optimal solution computed and displayed',
      'Feasibility check at each generation step',
      'Inventory: helmet, hammer, key, boots',
      'Animations, sprites and audio',
      'SDL3 migration (adopted at release)',
    ],

    impact: 'The BFS solver is the technical core — guarantees every generated level is both feasible and optimally solvable. First real-world use of SDL3.',

    skills: 'Algorithmics (BFS, exhaustive search), procedural generation, constraint checking, SDL3, pair work.',

    tech: ['C', 'SDL3', 'Git'],
  },
},
  
};

/* ═══════════════════════════════════
   MILESTONES PAR PROJET
═══════════════════════════════════ */

/* ═══════════════════════════════════
   MILESTONES PAR PROJET
═══════════════════════════════════ */

const PROJ_MILESTONES = {
  rfid: {
    cat: 'secu',
    ongoing: true,
    start: { y: 2026, m: 1 },
    end: null,
    steps: [
      { y: 2026, m: 1,    fr: 'Câblage, soudures & intégration boîtier',  en: 'Wiring, soldering & enclosure build' },
      { y: 2026, m: 2,    fr: 'Firmware ESP32 — lecture badge & contrôle servo', en: 'ESP32 firmware — badge reading & servo control' },
      { y: 2026, m: 2.5,  fr: 'Serveur web embarqué — auth, logs, CRUD badges', en: 'Embedded web server — auth, logs, badge CRUD' },
      { y: 2026, m: 3,    fr: 'Déploiement prod (~20 users) — améliorations en cours', en: 'Production deploy (~20 users) — ongoing improvements' },
    ]
  },

  discord: {
    cat: 'dev',
    ongoing: true,
    start: { y: 2025, m: 11 },
    end: null,
    steps: [
      { y: 2025, m: 11,   fr: 'Architecture loaders — chargement dynamique commandes & events', en: 'Loader architecture — dynamic command & event loading' },
      { y: 2025, m: 12,   fr: 'Slash commands & menu d\'aide auto-généré', en: 'Slash commands & auto-generated help menu' },
      { y: 2026, m: 1,    fr: 'Intégration chatbot IA — API Mistral', en: 'AI chatbot integration — Mistral API' },
      { y: 2026, m: 2,    fr: 'Déploiement VPS & logs prod — évolutions en cours', en: 'VPS deployment & prod logs — ongoing improvements' },
    ]
  },

  jeu_space_invader: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2025, m: 1 },
    end: { y: 2025, m: 2 },
    steps: [
      { y: 2025, m: 1,    fr: 'Prise en main basecode SDL2', en: 'SDL2 basecode onboarding' },
      { y: 2025, m: 1.3,  fr: 'Système de dégâts & conditions de fin', en: 'Damage system & end conditions' },
      { y: 2025, m: 1.6,  fr: 'Vagues ennemis, patterns & variété', en: 'Enemy waves, patterns & variety' },
      { y: 2025, m: 1.9,  fr: 'Rendu final — partiel', en: 'Final build — exam' },
    ]
  },

  jeu_super_pixel_smash: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2025, m: 6 },
    end: { y: 2025, m: 7 },
    steps: [
      { y: 2025, m: 6,    fr: 'Architecture from scratch — sans basecode', en: 'From-scratch architecture — no basecode' },
      { y: 2025, m: 6.3,  fr: 'Personnages, hitbox & système de combat', en: 'Characters, hitboxes & combat system' },
      { y: 2025, m: 6.6,  fr: 'Bots & arbres décisionnels (God mode)', en: 'Bots & decision trees (God mode)' },
      { y: 2025, m: 6.9,  fr: 'Rendu final — partiel', en: 'Final build — exam' },
    ]
  },

  jeu_rok: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2026, m: 1 },
    end: { y: 2026, m: 2 },
    steps: [
      { y: 2026, m: 1,    fr: 'Architecture & adaptation du jeu de plateau', en: 'Architecture & board game adaptation' },
      { y: 2026, m: 1.4,  fr: 'Génération procédurale & vérification faisabilité', en: 'Procedural generation & feasibility check' },
      { y: 2026, m: 1.7,  fr: 'Solveur BFS — solution optimale', en: 'BFS solver — optimal solution' },
      { y: 2026, m: 2,    fr: 'Inventaire, animations, son — rendu final', en: 'Inventory, animations, audio — final build' },
    ]
  },

  pairse_mbot: {
    cat: 'edu',
    ongoing: false,
    start: { y: 2024, m: 10 },
    end: { y: 2025, m: 6 },
    steps: [
      { y: 2024, m: 10,   fr: 'Lancement équipe & création supports pédagogiques', en: 'Team launch & pedagogical content creation' },
      { y: 2024, m: 12,   fr: 'Séances collège — cryptographie & cybersécurité', en: 'School sessions — cryptography & cybersecurity' },
      { y: 2025, m: 2,    fr: 'Visite lycée organisée — orientation SIN / STI2D', en: 'High school visit — SIN / STI2D orientation' },
      { y: 2025, m: 4,    fr: 'Préparation RoboRave & entraînements', en: 'RoboRave prep & training sessions' },
      { y: 2025, m: 6,    fr: 'Compétition — 2ème suivi de ligne, 2ème & 3ème sumo', en: 'Competition — 2nd line following, 2nd & 3rd sumo' },
    ]
  },

  pairse_expo: {
    cat: 'edu',
    ongoing: true,
    start: { y: 2025, m: 10 },
    end: { y: 2026, m: 6 },
    steps: [
      { y: 2025, m: 10,   fr: 'Lancement — coordination équipe & stratégie', en: 'Launch — team coordination & strategy' },
      { y: 2025, m: 12,   fr: 'Démarchage entreprises, écoles & groupes ESIEA', en: 'Outreach to companies, schools & ESIEA groups' },
      { y: 2026, m: 2,    fr: 'Communication active — gestion Instagram', en: 'Active communication — Instagram management' },
      { y: 2026, m: 4,    fr: '3 groupes PAIRSE + 2-3 écoles engagés', en: '3 PAIRSE groups + 2-3 schools engaged' },
      { y: 2026, m: 6,    fr: 'Exposciences 53 — 26-27 mai 2026', en: 'Exposciences 53 — 26-27 May 2026' },
    ]
  },
};

/* ═══════════════════════════════════
   ÉVÉNEMENTS TIMELINE CENTRALE
═══════════════════════════════════ */

const EVENTS = [
  {
    id: 'rfid',
    cat: 'secu',
    side: 'right',
    month: { y: 2026, m: 2 },
    ongoing: true,
    label:    { fr: 'Fév. 2026 → en cours',       en: 'Feb 2026 → ongoing' },
    sublabel: { fr: 'Système RFID embarqué — prod', en: 'Embedded RFID system — prod' },
    projectId: 'rfid'
  },
  {
    id: 'jeu_rok',
    cat: 'dev',
    side: 'left',
    month: { y: 2026, m: 1 },
    label:    { fr: 'Jan. 2026',                        en: 'Jan 2026' },
    sublabel: { fr: 'Puzzle game — solveur BFS en C',   en: 'Puzzle game — BFS solver in C' },
    projectId: 'jeu_rok'
  },
  {
    id: 'discord',
    cat: 'dev',
    side: 'left',
    month: { y: 2025, m: 11 },
    ongoing: true,
    label:    { fr: 'Nov. 2025 → en cours',         en: 'Nov 2025 → ongoing' },
    sublabel: { fr: 'Bot Discord — Node.js & IA',   en: 'Discord Bot — Node.js & AI' },
    projectId: 'discord'
  },
  {
    id: 'pairse_expo',
    cat: 'edu',
    side: 'right',
    month: { y: 2025, m: 10 },
    ongoing: true,
    label:    { fr: 'Oct. 2025 → Juin 2026',        en: 'Oct 2025 → Jun 2026' },
    sublabel: { fr: 'PAIRSE — Exposciences 53',     en: 'PAIRSE — Exposciences 53' },
    projectId: 'pairse_expo'
  },
  {
    id: 'slm',
    cat: 'sys',
    side: 'right',
    month: { y: 2025, m: 8 },
    label:    { fr: 'Août – Sept. 2025',                        en: 'Aug – Sep 2025' },
    sublabel: { fr: 'Manutentionnaire — S.L.M (logistique)',    en: 'Warehouse operative — S.L.M (logistics)' },
    detail:   { fr: 'Étiquetage, conditionnement & palettisation', en: 'Labelling, packaging & palletising' }
  },
  {
    id: 'terrena',
    cat: 'sys',
    side: 'left',
    month: { y: 2025, m: 7 },
    label:    { fr: 'Juil. – Août 2025',                            en: 'Jul – Aug 2025' },
    sublabel: { fr: 'Agent de silo — Terrena (contrat étudiant)',   en: 'Silo operator — Terrena (student contract)' },
    detail:   { fr: 'Réception céréales, pesée, stockage, engins', en: 'Grain intake, weighing, storage, machinery' }
  },
  {
    id: 'jeu_super_pixel_smash',
    cat: 'dev',
    side: 'right',
    month: { y: 2025, m: 6 },
    label:    { fr: 'Juin 2025',                            en: 'Jun 2025' },
    sublabel: { fr: 'Jeu de combat 2D — IA & arbres décisionnels', en: '2D fighting game — AI & decision trees' },
    projectId: 'jeu_super_pixel_smash'
  },
  {
    id: 'jeu_space_invader',
    cat: 'dev',
    side: 'left',
    month: { y: 2025, m: 1 },
    label:    { fr: 'Jan. 2025',            en: 'Jan 2025' },
    sublabel: { fr: 'Space Invader — C',    en: 'Space Invader — C' },
    projectId: 'jeu_space_invader'
  },
  {
    id: 'pairse_mbot',
    cat: 'edu',
    side: 'right',
    month: { y: 2024, m: 10 },
    label:    { fr: 'Oct. 2024 → Juin 2025',            en: 'Oct 2024 → Jun 2025' },
    sublabel: { fr: 'PAIRSE — Robotique & cybersécurité', en: 'PAIRSE — Robotics & cybersecurity' },
    projectId: 'pairse_mbot'
  },
  {
    id: 'lactalis',
    cat: 'sys',
    side: 'left',
    month: { y: 2024, m: 8 },
    label:    { fr: 'Août – Sept. 2024',                en: 'Aug – Sep 2024' },
    sublabel: { fr: 'Agent d\'affinage — Lactalis',     en: 'Cheese affineur — Lactalis' },
    detail:   { fr: 'Réception fromages, empilage, contrôle ligne de production', en: 'Cheese intake, stacking, production line monitoring' }
  },
];