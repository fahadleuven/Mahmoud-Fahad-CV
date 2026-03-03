
    const defaultConfig = {
      full_name: 'Your Name',
      job_title: 'Professional Title',
      about_text: 'Passionate professional with extensive experience in delivering high-quality results. Dedicated to continuous learning and growth, with a strong commitment to excellence in every project undertaken.',
      primary_color: '#1e3a5f',
      secondary_color: '#2d5a87',
      accent_color: '#c9a227',
      text_color: '#4a5568',
      background_color: '#f0f4f8',
      font_family: 'DM Sans',
      language: 'en'
      
    };

    let config = { ...defaultConfig };

    const translations = {
      en: {
        aboutMe: 'About Me',
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        aboutMeHeading: 'About Me',
        personalDetails: 'Personal Details',
        drivingLicense: 'Driving License',
        languages: 'Languages',
        websites: 'Websites & Social Links',
        references: 'References',
        workExperience: 'Work Experience',
        educationHeading: 'Education',
        certifications: '🏆 Certifications',
        technicalSkills: 'Technical Skills',
        softSkills: 'Soft Skills',
        toolsAndTechnologies: 'Tools & Technologies',
        programmingLanguages: 'Programming Languages',
        webAndDatabase: 'Web & Database',
        aiAndDataScience: 'AI & Data Science',
        other: 'Other',
        dateOfBirth: 'Date of Birth',
        nationality: 'Nationality',
        address: 'Address',
        maritalStatus: 'Marital Status',
        classB: 'Class B - Car',
        classA: 'Class A - Motorcycle',
        native: 'Native',
        professional: 'Professional',
        intermediate: 'Intermediate',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        portfolio: 'Portfolio',
        aboutParagraph: 'As a highly motivated professional eager to embrace new challenges, I bring a robust work ethic, adaptability, and exceptional communication skills to the table. I excel in unsupervised work environments and am adept at swiftly mastering new skills. My proficiency in communicating complex technical details to non-technical stakeholders sets me apart, ensuring seamless collaboration and understanding across diverse teams.',
        belgian:'Belgian',
        single:'Single',
        english:'English',
        dutch:'Dutch',
        french:'French', 
        arabic:'Arabic',
        present:'2025-Present',
        experience1:'Worked as a Full-Stack Developer at KU Leuven – Group T within the Smart Polymeric Biomaterials Research Group, developing and maintaining web-based applications to support research activities. Collaborated with multidisciplinary teams to translate research requirements into technical solutions, contributing to data management, visualization, and efficient research workflows.',
        experience2:'Data Analyst Intern at RiskConcile, working with Power BI, Tableau, Excel, and Python to analyze and visualize data for informed decision-making.',
        experience3:'Partnered with VTS Editor to create advanced 3D simulations, delivering immersive, Metaverse-like assessments for enhanced student exam experiences.',
        experience4:'Completed a master’s thesis, “An Empirical Study of Few-Shot Named Entity Recognition Baselines,” applying machine learning and NLP. Built and tested Python/PyTorch models on multilingual datasets (English, German, Chinese), analyzing cross-language performance and adaptability.',
        experience5:'Created "Spotifit," a Java-based human-machine interaction software that analyzes Spotify profiles to recommend music. Integrated user feedback across age groups to refine and enhance functionality.',
        experience6:'Developed "Browsr," a lightweight browser using Java and HTML, supporting basic web page display with features like scrolling, page splitting, and bookmarks.',
        experience7:'Handled IT infrastructure by troubleshooting hardware, software, and network issues, managing user accounts, ensuring connectivity, implementing security measures, performing data backups, and providing user training and documentation for seamless operations.',
        master1title:'Master in Information Management',
        summrymaster1:'Focuses on combining business and technology. It specializes in data management, digital transformation, business analytics, and aligning IT with business strategy.',
        master2title:'Master in Applied Informatics',
        summrymaster2:'Focuses on the practical application of informatics principles in real-world scenarios, emphasizing software development, data analysis, and digital solutions.',
        COMPUS19title:'Software Developing',
        summryCOMPUS19:'Participated in a hands-on coding and software development programme, learning through real projects, peer collaboration, and practical challenges to build skills in software engineering and IT problem-solving.',
        bridgingtitle:'Bridging Programme in Applied Informatics',
        summrybridging:'A preparatory programme covering mathematics, programming, computer science fundamentals, and introductory AI.',
        bachelortitle:'Bachelor in Computer Science',
        summrybachelor:'Solid foundation in programming, algorithms, databases, and software development.',
        other:'Other',
        ledership:'Leadership',
        communication:'Communication',
        problemSolving:'Problem Solving',
        teamCollaboration:'Team Collaboration',
        timeManagement:'Time Management',
        criticalThinking:'Critical Thinking',
        adaptability:'Adaptability',
        creativity:'Creativity'
      },
      nl: {
        aboutMe: 'Over Mij',
        experience: 'Ervaring',
        education: 'Onderwijs',
        skills: 'Vaardigheden',
        aboutMeHeading: 'Over Mij',
        personalDetails: 'Persoonlijke Gegevens',
        drivingLicense: 'Rijbewijs',
        languages: 'Talen',
        websites: 'Websites & Sociale Media',
        references: 'Referenties',
        workExperience: 'Werkervaring',
        educationHeading: 'Onderwijs',
        certifications: '🏆 Certificeringen',
        technicalSkills: 'Technische Vaardigheden',
        softSkills: 'Soft Vaardigheden',
        toolsAndTechnologies: 'Gereedschappen & Technologieën',
        programmingLanguages: 'Programmeertalen',
        webAndDatabase: 'Web & Database',
        aiAndDataScience: 'AI & Data Science',
        other: 'Overig',
        dateOfBirth: 'Geboortedatum',
        nationality: 'Nationaliteit',
        address: 'Adres',
        maritalStatus: 'Burgerlijke Status',
        classB: 'Klasse B - Auto',
        classA: 'Klasse A - Motorfiets',
        native: 'Moedertaal',
        professional: 'Professioneel',
        intermediate: 'Intermediair',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        portfolio: 'Portfolio',
        aboutParagraph: 'Als een zeer gemotiveerde professional die graag nieuwe uitdagingen aangaat, breng ik een sterke werkethiek, aanpassingsvermogen en uitstekende communicatieve vaardigheden mee. Ik presteer goed in zelfstandige werkomgevingen en leer snel nieuwe vaardigheden. Mijn vermogen om complexe technische details duidelijk uit te leggen aan niet-technische stakeholders zorgt voor naadloze samenwerking en begrip binnen diverse teams.',
        belgian: 'Belgisch',
        single: 'Ongehuwd',
        english: 'Engels',
        dutch: 'Nederlands',
        french: 'Frans',
        arabic: 'Arabisch',
        present: '2025-Heden',
        experience1: 'Werkte als Full-Stack Developer bij KU Leuven – Group T binnen de Smart Polymeric Biomaterials Research Group, waar ik webgebaseerde applicaties ontwikkelde en onderhoudde ter ondersteuning van onderzoeksactiviteiten. Samenwerking met multidisciplinaire teams om onderzoeksvereisten te vertalen naar technische oplossingen, wat bijdroeg aan datamanagement, visualisatie en efficiënte onderzoeksworkflows.',
        experience2: 'Data Analyst Stagiair bij RiskConcile, waar ik met Power BI, Tableau, Excel en Python werkte om data te analyseren en visualiseren voor geïnformeerde besluitvorming.',
        experience3: 'Samenwerking met VTS Editor om geavanceerde 3D-simulaties te creëren, die meeslepende, Metaverse-achtige beoordelingen leveren voor verbeterde examenervaringen van studenten.',
        experience4: 'Voltooide een masterproef, "An Empirical Study of Few-Shot Named Entity Recognition Baselines," waarbij machine learning en NLP werden toegepast. Bouwde en testte Python/PyTorch-modellen op meertalige datasets (Engels, Duits, Chinees), waarbij de prestaties en aanpasbaarheid tussen talen werden geanalyseerd.',
        experience5: 'Creëerde "Spotifit," een Java-gebaseerde software voor mens-machine interactie die Spotify-profielen analyseert om muziek aan te bevelen. Integreerde gebruikersfeedback van verschillende leeftijdsgroepen om de functionaliteit te verfijnen en te verbeteren.',
        experience6: 'Ontwikkelde "Browsr," een lichtgewicht browser met Java en HTML, die basisweergave van webpagina’s ondersteunt met functies zoals scrollen, paginaverdeling en bladwijzers.',
        experience7: 'Behandelde IT-infrastructuur door hardware-, software- en netwerkproblemen op te lossen, gebruikersaccounts te beheren, connectiviteit te waarborgen, beveiligingsmaatregelen te implementeren, gegevensback-ups uit te voeren en gebruikersopleiding en documentatie te bieden voor naadloze operaties.',
        master1title: 'Master in Informatiemanagement',
        summrymaster1: 'Richt zich op het combineren van business en technologie. Het specialiseerde zich in datamanagement, digitale transformatie, business analytics en het afstemmen van IT op bedrijfsstrategie.',
        master2title: 'Master in Toegepaste Informatica',
        summrymaster2: 'Richt zich op de praktische toepassing van informatica principes in real-world scenario’s, met nadruk op softwareontwikkeling, data-analyse en digitale oplossingen.',
        COMPUS19title: 'Software Ontwikkeling',
        summryCOMPUS19: 'Deelgenomen aan een hands-on coding en software ontwikkelingsprogramma, waarbij geleerd werd door middel van echte projecten, samenwerking met peers en praktische uitdagingen om vaardigheden in software engineering en IT-probleemoplossing op te bouwen.',
        bridgingtitle: 'Schakelprogramma in Toegepaste Informatica',
        summrybridging: 'Een voorbereidend programma dat wiskunde, programmeren, informatica fundamentals en inleidende AI behandelt.',
        bachelortitle: 'Bachelor in Computerwetenschappen',
        summrybachelor: 'Solide basis in programmeren, algoritmen, databases en softwareontwikkeling.',
        other: 'Andere',
        ledership: 'Leiderschap',
        communication: 'Communicatie',
        problemSolving: 'Probleemoplossing',
        teamCollaboration: 'Teamwerk',
        timeManagement: 'Tijdbeheer',
        criticalThinking: 'Kritisch Denken',
        adaptability: 'Aanpassingsvermogen',
        creativity: 'Creativiteit'
      }
    };

    function setLanguage(lang) {
      config.language = lang;
      updateLanguage(lang);
      
      // Update language buttons
      document.getElementById('lang-en').style.background = lang === 'en' ? 'linear-gradient(135deg, #c9a227 0%, #dbb847 100%)' : 'white';
      document.getElementById('lang-en').style.color = lang === 'en' ? 'white' : '#1e3a5f';
      
      document.getElementById('lang-nl').style.background = lang === 'nl' ? 'linear-gradient(135deg, #c9a227 0%, #dbb847 100%)' : 'white';
      document.getElementById('lang-nl').style.color = lang === 'nl' ? 'white' : '#1e3a5f';
    }

    function updateLanguage(lang) {

  // Update tab buttons
  document.querySelectorAll('.tab-text').forEach((el, index) => {
    const tabNames = ['aboutMe', 'experience', 'education', 'skills'];
    const key = tabNames[index];

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all elements with data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');

    if (translations[lang] && translations[lang][key]) {
      // Use innerHTML to allow long text and formatting
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');

    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update title attributes (if you use them later)
  document.querySelectorAll('[data-translate-title]').forEach(el => {
    const key = el.getAttribute('data-translate-title');

    if (translations[lang] && translations[lang][key]) {
      el.title = translations[lang][key];
    }
  });
}
    function showTab(tabName) {
      // Hide all content
      document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
      });
      
      // Remove active from all tabs
      document.querySelectorAll('[id^="tab-"]').forEach(el => {
        el.classList.remove('tab-active');
        el.classList.add('tab-inactive');
      });
      
      // Show selected content
      document.getElementById('content-' + tabName).classList.remove('hidden');
      
      // Activate selected tab
      const activeTab = document.getElementById('tab-' + tabName);
      activeTab.classList.remove('tab-inactive');
      activeTab.classList.add('tab-active');
    }

    async function onConfigChange(cfg) {
      const customFont = cfg.font_family || defaultConfig.font_family;
      const baseFontStack = 'DM Sans, sans-serif';
      
      document.getElementById('display-name').textContent = cfg.full_name || defaultConfig.full_name;
      document.getElementById('display-name').style.fontFamily = `${customFont}, Crimson Pro, serif`;
      
      document.getElementById('display-title').textContent = cfg.job_title || defaultConfig.job_title;
      document.getElementById('display-title').style.fontFamily = `${customFont}, ${baseFontStack}`;
      
      document.getElementById('display-about').textContent = cfg.about_text || defaultConfig.about_text;
      document.getElementById('display-about').style.fontFamily = `${customFont}, ${baseFontStack}`;
      
      document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    }

    function mapToCapabilities(cfg) {
      return {
        recolorables: [
          {
            get: () => cfg.background_color || defaultConfig.background_color,
            set: (value) => {
              cfg.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => cfg.primary_color || defaultConfig.primary_color,
            set: (value) => {
              cfg.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            }
          },
          {
            get: () => cfg.text_color || defaultConfig.text_color,
            set: (value) => {
              cfg.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => cfg.accent_color || defaultConfig.accent_color,
            set: (value) => {
              cfg.accent_color = value;
              window.elementSdk.setConfig({ accent_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => cfg.font_family || defaultConfig.font_family,
          set: (value) => {
            cfg.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: undefined
      };
    }

    function mapToEditPanelValues(cfg) {
      return new Map([
        ['full_name', cfg.full_name || defaultConfig.full_name],
        ['job_title', cfg.job_title || defaultConfig.job_title],
        ['about_text', cfg.about_text || defaultConfig.about_text]
      ]);
    }

    // Initialize Element SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
  