/* ═══════════════════════════════════
   DONNÉES PROJETS
═══════════════════════════════════ */

const PROJECTS = {
  rfid: {
    cat: 'secu',
    image: 'images/rfid.jpg',
    fr: {
      catLabel: 'Sécurité & Embarqué',
      title: 'Contrôle d\'accès RFID embarqué',
      date: '2025 · Projet personnel',
      period: '2025',
      context: 'Projet personnel, réalisé seul',
      objective: 'Concevoir de A à Z un système embarqué sécurisé permettant de contrôler l\'accès physique à un open lab de l\'ESIEA, avec interface d\'administration distante.',
      what: 'Développement complet du firmware sur ESP32 (C/C++) : lecture des badges RFID, vérification des droits, contrôle de la porte. Hébergement d\'un serveur web embarqué permettant l\'affichage des logs d\'accès en temps réel, l\'ouverture à distance et la gestion de la liste des badges autorisés. Base de données SQLite locale pour la persistance.',
      skills: 'Authentification par badge, contrôle des habilitations, traçabilité et gestion de logs, développement embarqué full-stack, autonomie totale sur un projet de bout en bout.',
      tech: ['C/C++', 'ESP32', 'Arduino IDE', 'HTML/CSS', 'SQLite', 'RFID', 'Réseau local', 'Serveur web embarqué']
    },
    en: {
      catLabel: 'Security & Embedded',
      title: 'Embedded RFID access control system',
      date: '2025 · Personal project',
      period: '2025',
      context: 'Personal project, built solo',
      objective: 'Design end-to-end an embedded security system to control physical access to an ESIEA open lab, with a remote administration interface.',
      what: 'Full firmware development on ESP32 (C/C++): RFID badge reading, access rights checking, door control. Embedded web server for real-time access log display, remote door control, and badge list management. Local SQLite database for data persistence.',
      skills: 'Badge authentication, access rights management, traceability and log management, full-stack embedded development, complete end-to-end autonomy.',
      tech: ['C/C++', 'ESP32', 'Arduino IDE', 'HTML/CSS', 'SQLite', 'RFID', 'Local network', 'Embedded web server']
    }
  },
  discord: {
    cat: 'dev',
    image: 'images/discord.jpg',
    fr: {
      catLabel: 'Développement',
      title: 'Bot Discord — Architecture événementielle',
      date: 'Novembre 2025 · Projet personnel en binôme',
      period: 'Nov. 2025',
      context: 'Binôme — Mon rôle : architecture loaders + commandes',
      objective: 'Développer un bot Discord structuré et maintenable avec une architecture propre orientée événements, pensée pour faciliter les évolutions futures.',
      what: 'Mise en place du système de chargement dynamique des commandes et des événements via des loaders. Création des commandes utilisateur et d\'un menu d\'aide auto-généré qui se met à jour automatiquement. Implémentation des logs applicatifs pour le suivi en production.',
      skills: 'Architecture logicielle orientée événements, programmation orientée objet, organisation du code et maintenabilité, travail en binôme avec Git.',
      tech: ['Node.js', 'JavaScript', 'Discord.js', 'Git', 'Python']
    },
    en: {
      catLabel: 'Development',
      title: 'Discord Bot — Event-driven architecture',
      date: 'November 2025 · Personal project in pair',
      period: 'Nov. 2025',
      context: 'Pair — My role: loader architecture + commands',
      objective: 'Build a structured, maintainable Discord bot with a clean event-driven architecture designed for easy future extensions.',
      what: 'Implemented dynamic command and event loading system via loaders. Created user commands and an auto-generated help menu that updates itself automatically. Set up application logs for production monitoring.',
      skills: 'Event-driven software architecture, object-oriented programming, code organisation and maintainability, pair work with Git.',
      tech: ['Node.js', 'JavaScript', 'Discord.js', 'Git', 'Python']
    }
  },
  jeu: {
    cat: 'dev',
    image: 'images/jeu.jpg',
    fr: {
      catLabel: 'Développement',
      title: 'Jeu vidéo 2D en C',
      date: 'Janvier 2025 · Projet de partiel',
      period: 'Jan. 2025',
      context: 'Binôme — Mon rôle : gameplay, animations, génération, son',
      objective: 'Développer un jeu vidéo 2D fonctionnel en langage C dans un délai contraint (partiel de programmation).',
      what: 'Développement du gameplay complet avec gestion des interactions joueur. Implémentation du système d\'animations de sprites. Mise en place d\'une génération procédurale aléatoire pour les niveaux. Intégration de la gestion du son. Organisation de la logique applicative (états de jeu, événements).',
      skills: 'Rigueur de structuration du code en C, créativité technique, gestion des contraintes de temps, travail en binôme.',
      tech: ['C', 'Git', 'SDL2']
    },
    en: {
      catLabel: 'Development',
      title: '2D video game in C',
      date: 'January 2025 · Exam project',
      period: 'Jan. 2025',
      context: 'Pair — My role: gameplay, animations, generation, sound',
      objective: 'Develop a functional 2D video game in C under tight time constraints (programming exam).',
      what: 'Full gameplay development with player interaction handling. Sprite animation system implementation. Procedural random level generation. Sound management integration. Application logic structure (game states, events).',
      skills: 'C code structuring discipline, technical creativity, time constraint management, pair work.',
      tech: ['C', 'Git', 'SDL2']
    }
  },
  pairse_mbot: {
    cat: 'edu',
    image: 'images/pairsec.jpg',
    genially: 'https://view.genially.com/6786611d6afaf917a51085b1',
    fr: {
      catLabel: 'Pédagogie & Leadership',
      title: 'PAIRSE — Intervention en collège',
      date: 'Oct. 2024 – Juin 2025 · Projet ESIEA',
      period: 'Oct. 2024 – Juin 2025',
      context: 'Chef de groupe · Équipe de 6 étudiants',
      objective: 'Accompagner des élèves de collège dans la préparation de la compétition RoboRave tout en leur transmettant des notions de sécurité numérique et de cryptographie.',
      what: 'Planification et animation des séances d\'intervention en collège. Vulgarisation de concepts de sécurité numérique et de cryptographie auprès d\'élèves non experts. Organisation d\'une visite de lycée. Coordination de l\'équipe de 6 étudiants, gestion du planning et des livrables.',
      skills: 'Pédagogie et vulgarisation technique, communication avec un public non expert, gestion de projet, leadership, coordination d\'équipe.',
      tech: ['Canva', 'LibreOffice', 'Matériel robotique']
    },
    en: {
      catLabel: 'Education & Leadership',
      title: 'PAIRSE — Middle school intervention',
      date: 'Oct. 2024 – Jun. 2025 · ESIEA project',
      period: 'Oct. 2024 – Jun. 2025',
      context: 'Team leader · Group of 6 students',
      objective: 'Support middle school students in preparing for the RoboRave competition while teaching them cybersecurity and cryptography concepts.',
      what: 'Planned and ran intervention sessions at the school. Explained cybersecurity and cryptography concepts to non-expert students. Organised a high school visit. Coordinated a team of 6 students, managed schedule and deliverables.',
      skills: 'Pedagogy and technical communication, communicating with non-expert audiences, project management, leadership, team coordination.',
      tech: ['Canva', 'LibreOffice', 'Robotics equipment']
    }
  },
  pairse_expo: {
    cat: 'edu',
    image: 'images/pairse_expo.jpg',
    fr: {
      catLabel: 'Communication scientifique',
      title: 'PAIRSE — Exposciences 53',
      date: 'Oct. 2025 – Juin 2026 · Projet ESIEA',
      period: 'Oct. 2025 – Juin 2026',
      context: 'Coordinateur · Équipe de 5 étudiants',
      objective: 'Participer à l\'Exposciences 53, événement de valorisation de projets scientifiques, en représentant l\'ESIEA et en gérant les relations extérieures.',
      what: 'Organisation et planification des actions de communication scientifique. Gestion des relations avec les établissements scolaires et les partenaires extérieurs. Coordination des 5 membres de l\'équipe, suivi des délais et de l\'avancement du projet.',
      skills: 'Gestion de projet, travail en équipe, communication institutionnelle, organisation et planification.',
      tech: ['Canva', 'LibreOffice', 'Google Workspace']
    },
    en: {
      catLabel: 'Science communication',
      title: 'PAIRSE — Exposciences 53',
      date: 'Oct. 2025 – Jun. 2026 · ESIEA project',
      period: 'Oct. 2025 – Jun. 2026',
      context: 'Coordinator · Team of 5 students',
      objective: 'Participate in Exposciences 53, a science project showcase, representing ESIEA and managing external relationships.',
      what: 'Organised and planned science communication activities. Managed relationships with schools and external partners. Coordinated 5 team members, tracked deadlines and project progress.',
      skills: 'Project management, teamwork, institutional communication, organisation and planning.',
      tech: ['Canva', 'LibreOffice', 'Google Workspace']
    }
  },
  jeu2: {
    cat: 'dev',
    fr: {
      catLabel: 'Développement',
      title: 'Jeu vidéo — Structures de données',
      date: 'Juin 2025 · Projet de partiel',
      period: 'Juin 2025',
      context: 'Projet individuel — sans basecode',
      objective: 'Développer un jeu vidéo en C avec des structures de données avancées, sans basecode fourni.',
      what: 'Implémentation complète du jeu à partir de zéro. Utilisation de tables de hachage (hash maps) et d\'arbres pour gérer efficacement les données de jeu : inventaire, états, entités. Architecture entièrement conçue et codée de manière autonome.',
      skills: 'Maîtrise des structures de données (hash map, arbres), algorithmique, architecture logicielle, C avancé.',
      tech: ['C', 'Git', 'SDL2']
    },
    en: {
      catLabel: 'Development',
      title: 'Video game — Data structures',
      date: 'June 2025 · Exam project',
      period: 'Jun. 2025',
      context: 'Solo project — no basecode',
      objective: 'Develop a video game in C leveraging advanced data structures, with no basecode provided.',
      what: 'Complete game implementation from scratch. Use of hash maps and trees to efficiently manage game data: inventory, states, entities. Architecture entirely designed and coded autonomously.',
      skills: 'Data structures mastery (hash map, trees), algorithms, software architecture, advanced C.',
      tech: ['C', 'Git', 'SDL2']
    }
  },
  jeu3: {
    cat: 'dev',
    fr: {
      catLabel: 'Développement',
      title: 'Jeu vidéo — Algorithmique avancée',
      date: 'Janvier 2026 · Projet de partiel',
      period: 'Jan. 2026',
      context: 'Projet individuel — sans basecode',
      objective: 'Développer un jeu vidéo en C avec des structures de données complexes, sans basecode fourni.',
      what: 'Conception et développement complet du jeu en partant de zéro. Utilisation intensive de tables de hachage et d\'arbres (BST, arbres de recherche) pour l\'optimisation des mécaniques de jeu. Gestion mémoire rigoureuse en C.',
      skills: 'Structures de données avancées (hash map, arbres), optimisation algorithmique, gestion mémoire C, autonomie.',
      tech: ['C', 'Git', 'SDL2']
    },
    en: {
      catLabel: 'Development',
      title: 'Video game — Advanced algorithms',
      date: 'January 2026 · Exam project',
      period: 'Jan. 2026',
      context: 'Solo project — no basecode',
      objective: 'Develop a video game in C with complex data structures, with no basecode provided.',
      what: 'Full game design and development from scratch. Heavy use of hash maps and trees for game mechanics optimisation. Rigorous memory management in C.',
      skills: 'Advanced data structures (hash map, trees), algorithmic optimisation, C memory management, autonomy.',
      tech: ['C', 'Git', 'SDL2']
    }
  }
};

/* ═══════════════════════════════════
   MILESTONES PAR PROJET
═══════════════════════════════════ */

const PROJ_MILESTONES = {
  rfid: {
    cat: 'secu',
    ongoing: true,
    start: { y: 2026, m: 1},
    end: null,
    steps: [
      { y: 2026, m: 1, fr: 'Câblage & premier test RFID', en: 'Wiring & first RFID test' },
      { y: 2026, m: 1.75, fr: 'Firmware ESP32 — lecture badge', en: 'ESP32 firmware — badge reading' },
      { y: 2026, m: 2.5, fr: 'Serveur web embarqué & logs', en: 'Embedded web server & logs' },
      { y: 2026, m: 3, fr: 'Interface admin — en cours', en: 'Admin interface — ongoing' },
    ]
  },
  discord: {
    cat: 'dev',
    ongoing: true,
    start: { y: 2025, m: 11 },
    end: null,
    steps: [
      { y: 2025, m: 11, fr: 'Architecture loaders & events', en: 'Loaders & events architecture' },
      { y: 2025, m: 12, fr: 'Commandes & aide auto-générée', en: 'Commands & auto-generated help' },
      { y: 2026, m: 1, fr: 'Logs applicatifs & déploiement', en: 'App logs & deployment' },
      { y: 2026, m: 3, fr: 'Évolutions en cours', en: 'Ongoing improvements' },
    ]
  },
  jeu: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2025, m: 1 },
    end: { y: 2025, m: 2 },
    steps: [
      { y: 2025, m: 1, fr: 'Initialisation SDL2 & structure', en: 'SDL2 init & structure' },
      { y: 2025, m: 1.25, fr: 'Gameplay & sprites', en: 'Gameplay & sprites' },
      { y: 2025, m: 1.5, fr: 'Génération procédurale & son', en: 'Procedural generation & sound' },
      { y: 2025, m: 1.75, fr: 'Rendu final — partiel', en: 'Final build — exam' },
    ]
  },
  jeu2: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2025, m: 6 },
    end: { y: 2025, m: 7 },
    steps: [
      { y: 2025, m: 6, fr: 'Conception architecture sans basecode', en: 'Architecture design — no basecode' },
      { y: 2025, m: 6.25, fr: 'Implémentation hash map', en: 'Hash map implementation' },
      { y: 2025, m: 6.5, fr: 'Intégration arbres de recherche', en: 'Search tree integration' },
      { y: 2025, m: 6.75, fr: 'Rendu final — partiel', en: 'Final build — exam' },
    ]
  },
  jeu3: {
    cat: 'dev',
    ongoing: false,
    start: { y: 2026, m: 1 },
    end: { y: 2026, m: 2 },
    steps: [
      { y: 2026, m: 1, fr: 'Conception architecture sans basecode', en: 'Architecture design — no basecode' },
      { y: 2026, m: 1.25, fr: 'Hash map & optimisations', en: 'Hash map & optimisations' },
      { y: 2026, m: 1.5, fr: 'Arbres BST — logique de jeu', en: 'BST trees — game logic' },
      { y: 2026, m: 1.75, fr: 'Rendu final — partiel', en: 'Final build — exam' },
    ]
  },
  pairse_mbot: {
    cat: 'edu',
    ongoing: false,
    start: { y: 2024, m: 9 },
    end: { y: 2025, m: 6 },
    steps: [
      { y: 2024, m: 9, fr: 'Lancement équipe & planning', en: 'Team launch & planning' },
      { y: 2024, m: 10, fr: 'Premières séances collège', en: 'First school sessions' },
      { y: 2025, m: 2, fr: 'Visite lycée organisée', en: 'High school visit organised' },
      { y: 2025, m: 4, fr: 'Préparation RoboRave', en: 'RoboRave preparation' },
      { y: 2025, m: 6, fr: 'Bilan & clôture', en: 'Review & close' },
    ]
  },
  pairse_expo: {
    cat: 'edu',
    ongoing: true,
    start: { y: 2025, m: 10 },
    end: { y: 2026, m: 6 },
    steps: [
      { y: 2025, m: 10, fr: 'Lancement & coordination équipe', en: 'Launch & team coordination' },
      { y: 2025, m: 12, fr: 'Relations partenaires & engagement étudiant', en: 'Partner relations & student engagement' },
      { y: 2026, m: 2, fr: 'Communication scientifique', en: 'Science communication' },
      { y: 2026, m: 6, fr: 'Exposciences — en cours', en: 'Exposciences — ongoing' },
    ]
  },
};

/* ═══════════════════════════════════
   ÉVÉNEMENTS TIMELINE CENTRALE
═══════════════════════════════════ */

const EVENTS = [
  { id: 'rfid', cat: 'secu', side: 'right', month: 14, ongoing: true, label: { fr: 'Fév. 2026 → en cours', en: 'Feb 2026 → ongoing' }, sublabel: { fr: 'Système RFID embarqué', en: 'Embedded RFID system' }, projectId: 'rfid' },
  { id: 'jeu3', cat: 'dev', side: 'left', month: 13, label: { fr: 'Jan. 2026', en: 'Jan 2026' }, sublabel: { fr: 'Jeu — Algorithmique avancée', en: 'Game — Advanced algorithms' }, projectId: 'jeu3' },
  { id: 'pairse_expo', cat: 'edu', side: 'right', month: 11, ongoing: true, label: { fr: 'Oct. 2025 → Juin 2026', en: 'Oct 2025 → Jun 2026' }, sublabel: { fr: 'PAIRSE — Exposciences 53', en: 'PAIRSE — Exposciences 53' }, projectId: 'pairse_expo' },
  { id: 'discord', cat: 'dev', side: 'left', month: 12, ongoing: true, label: { fr: 'Nov. 2025 → en cours', en: 'Nov 2025 → ongoing' }, sublabel: { fr: 'Bot Discord — Node.js', en: 'Discord Bot — Node.js' }, projectId: 'discord' },
  { id: 'slm', cat: 'sys', side: 'left', month: 8, label: { fr: 'Août – Sept. 2025', en: 'Aug – Sep 2025' }, sublabel: { fr: 'Manutentionnaire — S.L.M', en: 'Warehouse operative — S.L.M' } },
  { id: 'terrena', cat: 'sys', side: 'right', month: 7, label: { fr: 'Juil. – Août 2025', en: 'Jul – Aug 2025' }, sublabel: { fr: 'Agent de silo — Terrena', en: 'Silo operator — Terrena' } },
  { id: 'jeu2', cat: 'dev', side: 'left', month: 6, label: { fr: 'Juin 2025', en: 'Jun 2025' }, sublabel: { fr: 'Jeu — Structures de données', en: 'Game — Data structures' }, projectId: 'jeu2' },
  { id: 'jeu', cat: 'dev', side: 'right', month: 1, label: { fr: 'Jan. 2025', en: 'Jan 2025' }, sublabel: { fr: 'Jeu vidéo 2D — C', en: '2D video game — C' }, projectId: 'jeu' },
  { id: 'pairse_mbot', cat: 'edu', side: 'left', month: -2, label: { fr: 'Oct. 2024 → Juin 2025', en: 'Oct 2024 → Jun 2025' }, sublabel: { fr: 'PAIRSE — Intervention collège', en: 'PAIRSE — School intervention' }, projectId: 'pairse_mbot' },
  { id: 'lactalis', cat: 'sys', side: 'right', month: -4, label: { fr: 'Août – Sept. 2024', en: 'Aug – Sep 2024' }, sublabel: { fr: 'Agent de production — Lactalis', en: 'Production operator — Lactalis' } },
];
