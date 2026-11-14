'use strict';

const isFrench = document.documentElement.lang === 'fr';
const isPersian = document.documentElement.lang === 'fa';
const formatDigits = value => isPersian ? String(value).replace(/\d/g, digit => '۰۱۲۳۴۵۶۷۸۹'[digit]) : String(value);
const localized = (record, field) => record[field + (isPersian ? 'Fa' : isFrench ? 'Fr' : '')] || record[field];
const labels = isPersian ? {
  firstAuthor: 'نویسندهٔ اول', paper: 'مقاله', project: 'پروژه', code: 'کد', dataCatalog: 'کاتالوگ داده‌ها',
  workshopPaper: 'مقالهٔ کارگاه', inventors: 'مخترعان', assignee: 'دارندهٔ حقوق',
  published: 'تاریخ انتشار (میلادی)', patentRecord: 'مشاهدهٔ سند اختراع',
  copy: 'کپی BibTeX', copyFor: 'کپی ارجاع BibTeX برای', copied: 'کپی شد ✓',
  copiedToast: 'ارجاع BibTeX کپی شد.', downloadedToast: 'فایل ارجاع BibTeX دریافت شد.',
  count: number => `${formatDigits(number)} مقالهٔ برگزیده`,
  themeAction: dark => dark ? 'تغییر به پوستهٔ روشن' : 'تغییر به پوستهٔ تیره',
  light: 'روشن', dark: 'تیره', play: 'پخش ویدئوها ▶', pause: 'توقف ویدئوها Ⅱ',
  videoAction: (playing, project) => `${playing ? 'توقف' : 'پخش'} ویدئوهای ${project}`,
  videoToast: 'برای پخش جداگانه، از کنترل‌های هر ویدئو استفاده کنید.',
  enlarge: 'بزرگ‌نمایی شکل مقالهٔ', closeFigure: 'بستن تصویر', sourceFigure: 'منبع اصلی شکل ↗'
} : isFrench ? {
  firstAuthor: 'Premier auteur', paper: 'Article', project: 'Projet', code: 'Code', dataCatalog: 'Catalogue de données',
  workshopPaper: 'Article de l’atelier', inventors: 'Inventeurs', assignee: 'Titulaire',
  published: 'Publication', patentRecord: 'Consulter le brevet',
  copy: 'Copier le BibTeX', copyFor: 'Copier la référence BibTeX de', copied: 'Copié ✓',
  copiedToast: 'Référence BibTeX copiée.', downloadedToast: 'Référence téléchargée au format BibTeX.',
  count: number => `${number} publication${number === 1 ? '' : 's'} sélectionnée${number === 1 ? '' : 's'}`,
  themeAction: dark => `Passer au thème ${dark ? 'clair' : 'sombre'}`,
  light: 'Clair', dark: 'Sombre', play: 'Lire les vidéos ▶', pause: 'Pause Ⅱ',
  videoAction: (playing, project) => `${playing ? 'Mettre en pause' : 'Lire'} les vidéos de ${project}`,
  videoToast: 'Utilisez les commandes des vidéos pour les lire individuellement.',
  enlarge: 'Agrandir la figure de', closeFigure: 'Fermer la figure', sourceFigure: 'Figure originale ↗'
} : {
  firstAuthor: 'First author', paper: 'Paper', project: 'Project', code: 'Code', dataCatalog: 'Data catalog',
  workshopPaper: 'Workshop paper', inventors: 'Inventors', assignee: 'Assignee',
  published: 'Published', patentRecord: 'Patent record',
  copy: 'Copy BibTeX', copyFor: 'Copy BibTeX for', copied: 'Copied ✓',
  copiedToast: 'BibTeX copied to clipboard', downloadedToast: 'Citation downloaded as a BibTeX file',
  count: number => `${number} selected paper${number === 1 ? '' : 's'}`,
  themeAction: dark => `Switch to ${dark ? 'light' : 'dark'} theme`,
  light: 'Light', dark: 'Dark', play: 'Play videos ▶', pause: 'Pause videos Ⅱ',
  videoAction: (playing, project) => `${playing ? 'Pause' : 'Play'} ${project} videos`,
  videoToast: 'Use the video controls to play individual clips.',
  enlarge: 'Enlarge figure for', closeFigure: 'Close figure', sourceFigure: 'Original figure ↗'
};

// Language links use ordinary pages, and keep the current section when followed.
document.querySelectorAll('.language-switch a').forEach(link => {
  link.addEventListener('click', () => {
    const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
    const sections = [...document.querySelectorAll('main>section[id]')];
    let visibleHeight = 0;
    let current;
    sections.forEach(section => {
      const bounds = section.getBoundingClientRect();
      const visible = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, headerBottom));
      if (visible > visibleHeight) { current = section; visibleHeight = visible; }
    });
    link.hash = current ? current.id : window.location.hash;
  });
});

// Publication content is kept here so papers and links are easy to update.
const publications = [
  {
    title: 'NeuralDMD: Interpretable Neural Representation of Dynamics from Sparse and Noisy Measurements',
    authors: 'Ali SaraerToosi, R. Tu, E. Y. H. Lin, K. Azizzadenesheli, A. Levis',
    venue: 'ECCV', year: 2026, first: true, category: 'vision astro',
    summary: 'Interpretable neural representations of physical dynamics, evaluated on wind fields and interferometric black-hole measurements.',
    summaryFr: 'Représentations neuronales interprétables de dynamiques physiques, évaluées sur des champs de vent et des mesures interférométriques de trous noirs.',
    url: 'https://doi.org/10.1007/978-3-032-37447-9_1', doi: '10.1007/978-3-032-37447-9_1',
    project: 'https://neuraldmd.vercel.app/', code: 'https://github.com/as2c/NeuralDMD',
    figure: {
      src: 'assets/pub-neuraldmd.webp', width: 2000, height: 1636,
      alt: 'NeuralDMD overview: telescope and weather measurements are used to reconstruct physical dynamics.',
      altFr: 'Vue d’ensemble de NeuralDMD : reconstruction de dynamiques physiques à partir de mesures télescopiques et météorologiques.',
      caption: 'NeuralDMD overview', captionFr: 'Vue d’ensemble de NeuralDMD',
      source: 'https://ali-saraertoosi.vercel.app/pubs/ndmd_outline.png'
    },
    bibtype: 'inproceedings', bibkey: 'saraertoosi2026neuraldmd',
    bibvenue: 'European Conference on Computer Vision'
  },
  {
    title: 'BHCast: Unlocking Black Hole Plasma Dynamics from a Single Blurry Image with Long-Term Forecasting',
    authors: 'R. Tu, Ali SaraerToosi, N. S. Conroy, G. Pekhimenko, A. Levis',
    venue: 'CVPR', year: 2026, first: false, category: 'vision astro',
    summary: 'Forecasting high-resolution plasma dynamics from a blurred snapshot and inferring black-hole properties from the predicted motion.',
    summaryFr: 'Prédiction de la dynamique du plasma à haute résolution à partir d’une image floue, puis inférence des propriétés du trou noir à partir du mouvement prédit.',
    url: 'https://arxiv.org/abs/2603.26777',
    project: 'https://bhcast.cs.toronto.edu/',
    figure: {
      src: 'assets/pub-bhcast.webp', width: 2000, height: 720,
      alt: 'BHCast pipeline showing forecasting, feature extraction, and inference of black-hole properties.',
      altFr: 'Chaîne de traitement de BHCast : prédiction, extraction de caractéristiques et inférence des propriétés du trou noir.',
      caption: 'Forecasting and physical inference', captionFr: 'Prédiction et inférence physique',
      source: 'https://bhcast.cs.toronto.edu/static/images/bhcast_pipeline_fallback.jpeg'
    },
    bibtype: 'inproceedings', bibkey: 'tu2026bhcast',
    bibvenue: 'Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition'
  },
  {
    "title": "A First-look Image of M87* from the 2026 EHT Monitoring Campaign",
    "authors": "Event Horizon Telescope Collaboration (including Ali SaraerToosi)",
    "authorsFr": "Collaboration Event Horizon Telescope (dont Ali SaraerToosi)",
    "venue": "Research Notes of the AAS",
    "year": 2026,
    "first": false,
    "category": "astro",
    "summary": "A first-look image of M87* from a four-minute scan in the 2026 EHT monitoring campaign, demonstrating faster observation-to-image turnaround.",
    "summaryFr": "Première image de M87* issue d’un enregistrement de quatre minutes de la campagne de suivi EHT de 2026, illustrant un délai réduit entre observation et reconstruction.",
    "url": "https://doi.org/10.3847/2515-5172/aebd91",
    "doi": "10.3847/2515-5172/aebd91",
    "figure": {
      "src": "assets/pub-eht-m87.webp",
      "width": 1913,
      "height": 871,
      "alt": "Figure 1: the M87* ring reconstructed from a four-minute EHT observation on April 3, 2026, beside the corresponding interferometric baseline coverage.",
      "altFr": "Figure 1 : anneau de M87* reconstruit à partir de quatre minutes d’observation EHT le 3 avril 2026, avec la couverture interférométrique correspondante.",
      "caption": "M87* image and baseline coverage · Fig. 1",
      "captionFr": "Image de M87* et couverture interférométrique · Fig. 1",
      "source": "https://www.astroexplorer.org/details/rnaasaebd91f1",
      "credit": "EHT Collaboration et al., RNAAS 10, 324 (2026). DOI: 10.3847/2515-5172/aebd91. CC BY 4.0."
    },
    "bibtype": "article",
    "bibkey": "eht2026firstlook",
    "bibvenue": "Research Notes of the AAS",
    "bibAuthors": "{The Event Horizon Telescope Collaboration} and Akiyama, Kazunori and Albentosa-Ruíz, Ezequiel and Alberdi, Antxon and Alef, Walter and Algaba, Juan Carlos and Amanaganti, Rohan Ganesh and Anantua, Richard and Antonopoulou, Eleni and Asada, Keiichi and Azulay, Rebecca and Baczko, Anne-Kathrin and Ball, David and Bandyopadhyay, Bidisha and Barrett, John and Bauböck, Michi and Benson, Bradford A. and Bintley, Dan and Blackburn, Lindy and Blundell, Raymond and Bouman, Katherine L. and Bower, Geoffrey C. and Bremer, Michael and Brissenden, Roger and Britzen, Silke and Broderick, Avery E. and Broguiere, Dominique and Bronzwaer, Thomas and Bustamante, Sandra and Carlos, Douglas F. and Carlstrom, John E. and Chael, Andrew and Chan, Chi-kwan and Chang, Chin-Shin and Chang, Dominic O. and Chatterjee, Koushik and Chavez, Erandi and Chen, Ming-Tang and Chen 陈, Yongjun 永军 and Cheng, Xiaopeng and Chichura, Paul and Cho, Ilje and Conroy, Nicholas S. and Conway, John E. and Crawford, Thomas M. and Crew, Geoffrey B. and Cruz-Osorio, Alejandro and Cui 崔, Yuzhu 玉竹 and Curd, Brandon and Dahale, Rohan and Davelaar, Jordy and de Kleuver, Joost and De Laurentis, Mariafelicia and Deane, Roger and Dexter, Jason and Dhruv, Vedant and Dihingia, Indu K. and Doeleman, Sheperd S. and Dzib, Sergio A. and Emami, Razieh and Falcke, Heino and Farah, Joseph R. and Fish, Vincent L. and Fomalont, Edward and Ford, H. Alyson and Foschi, Marianna and Fraga-Encinas, Raquel and Freeman, William T. and Friberg, Per and Fromm, Christian M. and Fuentes, Antonio and Galison, Peter and Gammie, Charles F. and García, Roberto and Gentaz, Olivier and Georgiev, Boris and Goddi, Ciriaco and Gold, Roman and Gómez-Ruiz, Arturo I. and Gomez Miller, Brissa and Gómez, José L. and Gu 顾, Minfeng 敏峰 and Gurwell, Mark and Hada, Kazuhiro and Haggard, Daryl and Hesper, Ronald and Heumann, Dirk and Ho 何, Luis C. 子山 and Ho, Paul and Hoak, Daniel and Honma, Mareki and Huang, Chih-Wei L. and Huang 黄, Lei 磊 and Hughes, David H. and Ikeda, Shiro and Impellizzeri, C. M. Violette and Inoue, Makoto and Issaoun, Sara and Iwata, Yuhei and James, David J. and Jannuzi, Buell T. and Janssen, Michael and Jeter, Britton and Jiang 江, Wu 悟 and Jiménez-Rosales, Alejandra and Johnson, Michael D. and Jorstad, Svetlana and Jones, Adam C. and Joshi, Abhishek V. and Jung, Taehyun and Kawashima, Tomohisa and Keating, Garrett K. and Kettenis, Mark and Kim, Dong-Jin and Kim, Jae-Young and Kim, Jongsoo and Kim, Junhan and Kino, Motoki and Knollmüller, Jakob and Koay, Jun Yi and Kocherlakota, Prashant and Kofuji, Yutaro and Koch, Patrick M. and Koyama, Shoko and Kramer, Carsten and Kramer, Joana A. and Kramer, Michael and Krichbaum, Thomas P. and Kuo, Cheng-Yu and La Bella, Noemi and Lee, Deokhyeong and Lee, Sang-Sung and Levis, Aviad and Li, Shaoliang and Li 李, Zhiyuan 志远 and Lico, Rocco and Lindahl, Greg and Lindqvist, Michael and Lisakov, Mikhail and Liu 刘, Jun 俊 and Liu, Kuo and Liuzzo, Elisabetta and Lo, Wen-Ping and Lobanov, Andrei P. and Loinard, Laurent and Lonsdale, Colin J. and Lowitz, Amy E. and Lu 路, Ru-Sen 如森 and MacDonald, Nicholas R. and Mao 毛, Jirong 基荣 and Marchili, Nicola and Markoff, Sera and Marrone, Daniel P. and Marscher, Alan P. and Martí-Vidal, Iván and Matsushita, Satoki and Matthews, Lynn D. and Medeiros, Lia and Menten, Karl M. and Messias, Hugo and Mizuno, Izumi and Mizuno, Yosuke and Montgomery, Joshua and Moriyama, Kotaro and Moscibrodzka, Monika and Mulaudzi, Wanga and Müller, Cornelia and Müller, Hendrik and Mus, Alejandro and Musoke, Gibwa and Myserlis, Ioannis and Nagai, Hiroshi and Nagar, Neil M. and Nair, Dhanya G. and Nakamura, Masanori and Narayanan, Gopal and Natarajan, Iniyan and Nathanail, Antonios and Navarro Fuentes, Santiago and Neilsen, Joey and Ni, Chunchong and Nilipour, Andy and Nowak, Michael A. and Okino, Hiroki and Olivares Sánchez, Héctor Raúl and Özel, Feryal and Palumbo, Daniel C. M. and Paraschos, Georgios Filippos and Park, Jongho and Parsons, Harriet and Patel, Nimesh and Pen, Ue-Li and Pesce, Dominic W. and Piétu, Vincent and Plavin, Alexander and PopStefanija, Aleksandar and Porth, Oliver and Prather, Cora and Principe, Giacomo and Psaltis, Dimitrios and Pu, Hung-Yi and Rahlin, Alexandra and Ramakrishnan, Venkatessh and Rao, Ramprasad and Rawlings, Mark G. and Rezzolla, Luciano and Ricarte, Angelo and Ricci, Luca and Ripperda, Bart and Röder, Jan and Roelofs, Freek and Romero-Cañizales, Cristina and Ros, Eduardo and Roshanineshat, Arash and Rottmann, Helge and Roy, Alan L. and Ruiz, Ignacio and Ruszczyk, Chet and Rygl, Kazi L. J. and Salas, León D. S. and Sánchez, Salvador and Sánchez-Argüelles, David and Sánchez-Portal, Miguel and SaraerToosi, Ali and Sasada, Mahito and Satapathy, Kaushik and Saurabh,  and Savolainen, Tuomas and Schuster, Karl-Friedrich and Shen 沈, Zhiqiang 志强 and Silpa, Sasikumar and Smith, Randall and Sohn, Bong Won and SooHoo, Jason and Souccar, Kamal and Stanway, Joshua S. and Sun 孙, He 赫 and Tetarenko, Alexandra J. and Tiede, Paul and Tilanus, Remo P. J. and Titus, Michael and Toma, Kenji and Torne, Pablo and Toscano, Teresa and Traianou, Efthalia and Trippe, Sascha and Turk, Matthew and Uniyal, Akhil and van Bemmel, Ilse and van den Berg, Bram and van Langevelde, Huib Jan and van Rossum, Daniel R. and von Fellenberg, Sebastiano D. and Vos, Jesse and Wagner, Jan and Wang, Zhiren and Ward-Thompson, Derek and Wardle, John and Washington, Jasmin E. and Weintroub, Jonathan and Wielgus, Maciek and Wiik, Kaj and Wondrak, Michael F. and Wong, George N. and Wongphexhauxsorn, Jompoj and Wu 吴, Qingwen 庆文 and Yamaguchi, Paul and Yfantis, Aristomenis and Yoon, Doosoo and Young, André and Younsi, Ziri and Yu 于, Wei 威 and Yuan 袁, Feng 峰 and Yuan 袁, Ye-Fei 业飞 and Zeng 曾, Ai-Ling 艾玲 and Zensus, J. Anton and Zhang, Shuo and Zhao, Brandon and Zhao, Guang-Yao and Ahmid, Rema and Azagra, Francisco and Batta, Aldo and Castillo-Fraile, Manuel and Chang, Chung-Chen and Donoso, Esteban and Dumke, Michael and Garcia, Jorge and Gómez, Víctor and Han, Chih-Chiang and De Huang, Yau- and Hung, Yu and Ibrahim, Omar and Jiang, Pengfei and John, Dave and Kam, Minchul and Koumpia, Evgenia and Kubo, Derek and Liu, Hauyu Baobab and Martin-Cocher, Pierre and Merello, Manuel and Michail, Joseph M. and Murthy, Suma and O, Franc and Obermeyer, Emmanuel and Peña, Harold and Perez-Beaupuits, Juan-Pablo and Raffin, Philippe A. and Rebolledo, David and Rodríguez Montoya, Iván and Saintonge, Amelie and Wei, Li-Ling and Yang, Er-Ching and Zaw, Ingyin",
    "bibvolume": "10",
    "bibpages": "324"
  },
  {
    "title": "Dynamics and geometry of the inner sub-parsec-scale jet in 3C 279 observed with the Event Horizon Telescope",
    "authors": "H. Müller et al. · Event Horizon Telescope Collaboration (including Ali SaraerToosi)",
    "authorsFr": "H. Müller et al. · Collaboration Event Horizon Telescope (dont Ali SaraerToosi)",
    "venue": "Astronomy & Astrophysics",
    "year": 2026,
    "first": false,
    "category": "astro",
    "summary": "EHT and complementary radio observations resolve the inner jet of 3C 279, constraining its geometry, component motions, and strong bending toward the observer.",
    "summaryFr": "Les observations de l’EHT et d’autres radiotélescopes résolvent la région interne du jet de 3C 279 et contraignent sa géométrie, le mouvement de ses composantes et sa courbure vers l’observateur.",
    "url": "https://doi.org/10.1051/0004-6361/202660360",
    "doi": "10.1051/0004-6361/202660360",
    "figure": {
      "src": "assets/pub-eht-jet.webp",
      "width": 1702,
      "height": 583,
      "alt": "Figure 1: contour images of the 3C 279 jet at 43, 86, and 230 GHz from observations in April 2021.",
      "altFr": "Figure 1 : images en contours du jet de 3C 279 à 43, 86 et 230 GHz, issues d’observations d’avril 2021.",
      "caption": "The jet at 43, 86, and 230 GHz · Fig. 1",
      "captionFr": "Le jet à 43, 86 et 230 GHz · Fig. 1",
      "source": "https://arxiv.org/html/2607.16104v1#S2.F1",
      "credit": "H. Müller et al., A&A 713, A274 (2026). DOI: 10.1051/0004-6361/202660360. CC BY 4.0."
    },
    "bibtype": "article",
    "bibkey": "muller2026dynamics",
    "bibvenue": "Astronomy & Astrophysics",
    "bibAuthors": "Müller, Hendrik and von Fellenberg, Sebastiano D. and Zeng, Ai-Ling and Tiede, Paul and Krichbaum, Thomas P. and Gold, Roman and Savolainen, Tuomas and Kim, Jae-Young and Peng, Sijia and Toscano, Teresa and Janssen, Michael and Georgiev, Boris and Nair, Dhanya G. and Natarajan, Iniyan and Blackburn, Lindy and {The Event Horizon Telescope Collaboration} and Akiyama, Kazunori and Albentosa-Ruíz, Ezequiel and Alberdi, Antxon and Alef, Walter and Carlos Algaba, Juan and Amanaganti, Rohan Ganesh and Anantua, Richard and Antonopoulou, Eleni and Asada, Keiichi and Azulay, Rebecca and Baczko, Anne-Kathrin and Ball, David and Bandyopadhyay, Bidisha and Barrett, John and Bauböck, Michi and Benson, Bradford A. and Bintley, Dan and Blundell, Raymond and Bouman, Katherine L. and Bower, Geoffrey C. and Bremer, Michael and Brissenden, Roger and Britzen, Silke and Broderick, Avery E. and Broguiere, Dominique and Bronzwaer, Thomas and Bustamante, Sandra and Carlos, Douglas F. and Carlstrom, John E. and Chael, Andrew and Chan, Chi-kwan and Chang, Chin-Shin and Chang, Dominic O. and Chatterjee, Koushik and Chavez, Erandi and Chen, Ming-Tang and Chen, Yongjun and Cheng, Xiaopeng and Chichura, Paul and Cho, Ilje and Conroy, Nicholas S. and Conway, John E. and Crawford, Thomas M. and Crew, Geoffrey B. and Cruz-Osorio, Alejandro and Cui, Yuzhu and Curd, Brandon and Dahale, Rohan and Davelaar, Jordy and de Kleuver, Joost and De Laurentis, Mariafelicia and Deane, Roger and Dexter, Jason and Dhruv, Vedant and Dihingia, Indu K. and Doeleman, Sheperd S. and Dzib, Sergio A. and Emami, Razieh and Falcke, Heino and Farah, Joseph and Fish, Vincent L. and Fomalont, Edward and Alyson Ford, H. and Foschi, Marianna and Fraga-Encinas, Raquel and Freeman, William T. and Friberg, Per and Fromm, Christian M. and Fuentes, Antonio and Galison, Peter and Gammie, Charles F. and García, Roberto and Gentaz, Olivier and Goddi, Ciriaco and Gómez-Ruiz, Arturo I. and Gomez Miller, Brissa and Gómez, José L. and Gu, Minfeng and Gurwell, Mark and Hada, Kazuhiro and Haggard, Daryl and Hesper, Ronald and Heumann, Dirk and Ho, Luis C. and Ho, Paul and Honma, Mareki and Huang, Chih-Wei L. and Huang, Lei and Hughes, David H. and Ikeda, Shiro and Violette Impellizzeri, C. M. and Inoue, Makoto and Issaoun, Sara and Iwata, Yuhei and James, David J. and Jannuzi, Buell T. and Jeter, Britton and Jiang, Wu and Jiménez-Rosales, Alejandra and Johnson, Michael D. and Jorstad, Svetlana and Jones, Adam C. and Joshi, Abhishek V. and Jung, Taehyun and Kawashima, Tomohisa and Keating, Garrett K. and Kettenis, Mark and Kim, Dong-Jin and Kim, Jongsoo and Kim, Junhan and Kino, Motoki and Knollmüller, Jakob and Koay, Jun Yi and Kocherlakota, Prashant and Kofuji, Yutaro and Koch, Patrick M. and Koyama, Shoko and Kramer, Carsten and Kramer, Joana A. and Kramer, Michael and Kuo, Cheng-Yu and La Bella, Noemi and Lee, Deokhyeong and Lee, Sang-Sung and Levis, Aviad and Li, Shaoliang and Li, Zhiyuan and Lico, Rocco and Lindahl, Greg and Lindqvist, Michael and Lisakov, Mikhail and Liu, Jun and Liu, Kuo and Liuzzo, Elisabetta and Lo, Wen-Ping and Lobanov, Andrei P. and Loinard, Laurent and Lonsdale, Colin J. and Lowitz, Amy E. and Lu, Ru-Sen and MacDonald, Nicholas R. and Mao, Jirong and Marchili, Nicola and Markoff, Sera and Marrone, Daniel P. and Marscher, Alan P. and Martí-Vidal, Iván and Matsushita, Satoki and Matthews, Lynn D. and Medeiros, Lia and Menten, Karl M. and Messias, Hugo and Mizuno, Izumi and Mizuno, Yosuke and Montgomery, Joshua and Moriyama, Kotaro and Moscibrodzka, Monika and Mulaudzi, Wanga and Müller, Cornelia and Mus, Alejandro and Musoke, Gibwa and Myserlis, Ioannis and Nagai, Hiroshi and Nagar, Neil M. and Nakamura, Masanori and Narayanan, Gopal and Nathanail, Antonios and Navarro Fuentes, Santiago and Neilsen, Joey and Ni, Chunchong and Nilipour, Andy and Nowak, Michael A. and Okino, Hiroki and Olivares Sánchez, Héctor Raúl and Özel, Feryal and Palumbo, Daniel C. M. and Filippos Paraschos, Georgios and Park, Jongho and Parsons, Harriet and Patel, Nimesh and Pen, Ue-Li and Pesce, Dominic W. and Piétu, Vincent and Plavin, Alexander and PopStefanija, Aleksandar and Porth, Oliver and Prather, Cora and Principe, Giacomo and Psaltis, Dimitrios and Pu, Hung-Yi and Rahlin, Alexandra and Ramakrishnan, Venkatessh and Rao, Ramprasad and Rawlings, Mark G. and Rezzolla, Luciano and Ricarte, Angelo and Ricci, Luca and Ripperda, Bart and Röder, Jan and Roelofs, Freek and Romero-Cañizales, Cristina and Ros, Eduardo and Roshanineshat, Arash and Rottmann, Helge and Roy, Alan L. and Ruiz, Ignacio and Ruszczyk, Chet and Rygl, Kazi L. J. and Salas, León D. S. and Sánchez, Salvador and Sánchez-Argüelles, David and Sánchez-Portal, Miguel and SaraerToosi, Ali and Sasada, Mahito and Satapathy, Kaushik and Saurabh,  and Schuster, Karl-Friedrich and Shen, Zhiqiang and Silpa, Sasikumar and Smith, Randall and Sohn, Bong Won and SooHoo, Jason and Souccar, Kamal and Stanway, Joshua S. and Sun, He and Tetarenko, Alexandra J. and Tilanus, Remo P. J. and Titus, Michael and Toma, Kenji and Torne, Pablo and Traianou, Efthalia and Trippe, Sascha and Turk, Matthew and Uniyal, Akhil and van Bemmel, Ilse and van den Berg, Bram and van Langevelde, Huib Jan and van Rossum, Daniel R. and Vos, Jesse and Wagner, Jan and Wang, Zhiren and Ward-Thompson, Derek and Wardle, John and Washington, Jasmin E. and Weintroub, Jonathan and Wielgus, Maciek and Wiik, Kaj and Wondrak, Michael F. and Wong, George N. and Wongphexhauxsorn, Jompoj and Wu, Qingwen and Yamaguchi, Paul and Yfantis, Aristomenis and Yoon, Doosoo and Young, André and Younsi, Ziri and Yu, Wei and Yuan, Feng and Yuan, Ye-Fei and Zensus, J. Anton and Zhang, Shuo and Zhao, Brandon and Zhao, Guang-Yao",
    "bibvolume": "713",
    "bibpages": "A274",
    "dataUrl": "https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A%2BA/713/A274"
  },
  {
    "title": "Broadband multiwavelength properties of the archetypal blazar 3C 279 during the 2017 Event Horizon Telescope campaign",
    "authors": "G. Principe et al. · Event Horizon Telescope Collaboration (including Ali SaraerToosi)",
    "authorsFr": "G. Principe et al. · Collaboration Event Horizon Telescope (dont Ali SaraerToosi)",
    "venue": "Astronomy & Astrophysics",
    "year": 2026,
    "first": false,
    "category": "astro",
    "summary": "Coordinated radio-to-gamma-ray observations of 3C 279 during the 2017 EHT campaign connect broadband variability, jet structure, and emission models.",
    "summaryFr": "Des observations coordonnées de 3C 279, des ondes radio aux rayons gamma, relient variabilité, structure du jet et modèles d’émission pendant la campagne EHT de 2017.",
    "url": "https://doi.org/10.1051/0004-6361/202659551",
    "doi": "10.1051/0004-6361/202659551",
    "figure": {
      "src": "assets/pub-eht-broadband.webp",
      "width": 958,
      "height": 729,
      "alt": "Figure 5: the broadband spectral energy distribution of 3C 279 during the 2017 EHT campaign, with measurements from radio through gamma rays.",
      "altFr": "Figure 5 : distribution spectrale d’énergie de 3C 279 pendant la campagne EHT de 2017, avec des mesures allant des ondes radio aux rayons gamma.",
      "caption": "Broadband spectral energy distribution · Fig. 5",
      "captionFr": "Distribution spectrale d’énergie · Fig. 5",
      "source": "https://arxiv.org/html/2606.25868v2#S3.F5",
      "credit": "G. Principe et al., A&A 712, A224 (2026). DOI: 10.1051/0004-6361/202659551. CC BY 4.0."
    },
    "bibtype": "article",
    "bibkey": "principe2026broadband",
    "bibvenue": "Astronomy & Astrophysics",
    "bibAuthors": "Principe, G. and Algaba, J. C. and Aviano, E. and Cheong, W. Y. and Hada, K. and Haggard, D. and Hahn, A. and Jorstad, S. G. and Kravchenko, E. V. and Kovalev, Y. and Lee, S. S. and Lisakov, M. and Markoff, S. and Marscher, A. P. and Sasada, M. and Voitsik, P. and {(The Event Horizon Telescope Collaboration)} and Akiyama, Kazunori and Albentosa-Ruíz, Ezequiel and Alberdi, Antxon and Alef, Walter and Amanaganti, Rohan Ganesh and Anantua, Richard and Antonopoulou, Eleni and Asada, Keiichi and Azulay, Rebecca and Baczko, Anne-Kathrin and Ball, David and Bandyopadhyay, Bidisha and Barrett, John and Bauböck, Michi and Benson, Bradford A. and Bintley, Dan and Blackburn, Lindy and Blundell, Raymond and Bouman, Katherine L. and Bower, Geoffrey C. and Bremer, Michael and Brissenden, Roger and Britzen, Silke and Broderick, Avery E. and Broguiere, Dominique and Bronzwaer, Thomas and Bustamante, Sandra and Carlos, Douglas F. and Carlstrom, John E. and Chael, Andrew and Chan, Chi-kwan and Chang, Chin-Shin and Chang, Dominic O. and Chatterjee, Koushik and Chavez, Erandi and Chen, Ming-Tang and Chen, Yongjun and Cheng, Xiaopeng and Chichura, Paul and Cho, Ilje and Conroy, Nicholas S. and Conway, John E. and Crawford, Thomas M. and Crew, Geoffrey B. and Cruz-Osorio, Alejandro and Cui, Yuzhu and Curd, Brandon and Dahale, Rohan and Davelaar, Jordy and de Kleuver, Joost and De Laurentis, Mariafelicia and Deane, Roger and Dexter, Jason and Dhruv, Vedant and Dihingia, Indu K. and Doeleman, Sheperd S. and Dzib, Sergio A. and Emami, Razieh and Falcke, Heino and Farah, Joseph and Fish, Vincent L. and Fomalont, Edward and Alyson Ford, H. and Foschi, Marianna and Fraga-Encinas, Raquel and Freeman, William T. and Friberg, Per and Fromm, Christian M. and Fuentes, Antonio and Galison, Peter and Gammie, Charles F. and García, Roberto and Gentaz, Olivier and Georgiev, Boris and Goddi, Ciriaco and Gold, Roman and Gómez-Ruiz, Arturo I. and Gomez Miller, Brissa and Gómez, José L. and Gu, Minfeng and Gurwell, Mark and Hesper, Ronald and Heumann, Dirk and Ho, Luis C. and Ho, Paul and Honma, Mareki and Huang, Chih-Wei L. and Huang, Lei and Hughes, David H. and Ikeda, Shiro and Violette Impellizzeri, C. M. and Inoue, Makoto and Issaoun, Sara and Iwata, Yuhei and James, David J. and Jannuzi, Buell T. and Janssen, Michael and Jeter, Britton and Jiang, Wu and Jiménez-Rosales, Alejandra and Johnson, Michael D. and Jones, Adam C. and Joshi, Abhishek V. and Jung, Taehyun and Kawashima, Tomohisa and Keating, Garrett K. and Kettenis, Mark and Kim, Dong-Jin and Kim, Jae-Young and Kim, Jongsoo and Kim, Junhan and Kino, Motoki and Knollmüller, Jakob and Yi Koay, Jun and Kocherlakota, Prashant and Kofuji, Yutaro and Koch, Patrick M. and Koyama, Shoko and Kramer, Carsten and Kramer, Joana A. and Kramer, Michael and Krichbaum, Thomas P. and Kuo, Cheng-Yu and La Bella, Noemi and Lee, Deokhyeong and Levis, Aviad and Li, Shaoliang and Li, Zhiyuan and Lico, Rocco and Lindahl, Greg and Lindqvist, Michael and Liu, Jun and Liu, Kuo and Liuzzo, Elisabetta and Lo, Wen-Ping and Lobanov, Andrei P. and Loinard, Laurent and Lonsdale, Colin J. and Lowitz, Amy E. and Lu, Ru-Sen and MacDonald, Nicholas R. and Mao, Jirong and Marchili, Nicola and Marrone, Daniel P. and Martí-Vidal, Iván and Matsushita, Satoki and Matthews, Lynn D. and Medeiros, Lia and Menten, Karl M. and Messias, Hugo and Mizuno, Izumi and Mizuno, Yosuke and Montgomery, Joshua and Moriyama, Kotaro and Moscibrodzka, Monika and Mulaudzi, Wanga and Müller, Cornelia and Müller, Hendrik and Mus, Alejandro and Musoke, Gibwa and Myserlis, Ioannis and Nagai, Hiroshi and Nagar, Neil M. and Nair, Dhanya G. and Nakamura, Masanori and Narayanan, Gopal and Natarajan, Iniyan and Nathanail, Antonios and Nvarro Fuentes, Santiago and Neilsen, Joey and Ni, Chunchong and Nilipour, Andy and Nowak, Michael A. and Okino, Hiroki and Olivares Sánchez, Héctor Raúl and Özel, Feryal and Palumbo, Daniel C. M. and Paraschos, Georgios Filippos and Park, Jongho and Parsons, Harriet and Patel, Nimesh and Pen, Ue-Li and Pesce, Dominic W. and Piétu, Vincent and Plavin, Alexander and PopStefanija, Aleksandar and Porth, Oliver and Prather, Cora and Psaltis, Dimitrios and Pu, Hung-Yi and Rahlin, Alexandra and Ramakrishnan, Venkatessh and Rao, Ramprasad and Rawlings, Mark G. and Ricarte, Angelo and Ricci, Luca and Ripperda, Bart and Röder, Jan and Roelofs, Freek and Romero-Cañzales, Cristina and Ros, Eduardo and Roshanineshat, Arash and Rottmann, Helge and Roy, Alan L. and Ruiz, Ignacio and Ruszczyk, Chet and Rygl, Kazi L. J. and Salas, León D. S. and Sánchez, Salvador and Sánchez-Argüelles, David and Sánchez-Portal, Miguel and SaraerToosi, Ali and Satapathy, Kaushik and Saurabh,  and Savolainen, Tuomas and Schuster, Karl-Friedrich and Shen, Zhiqiang and Silpa, Sasikumar and Smith, Randall and Won Sohn, Bong and SooHoo, Jason and Souccar, Kamal and Stanway, Joshua S. and Sun, He and Tetarenko, Alexandra J. and Tiede, Paul and Tilanus, Remo P. J. and Titus, Michael and Toma, Kenji and Torne, Pablo and Toscano, Teresa and Traianou, Efthalia and Trippe, Sascha and Turk, Matthew and Uniyal, Akhil and van Bemmel, Ilse and van den Berg, Bram and van Langevelde, Huib Jan and van Rossum, Daniel R. and von Fellenberg, Sebastiano D. and Vos, Jesse and Wagner, Jan and Wang, Zhiren and Ward-Thompson, Derek and Wardle, John and Washington, Jasmin E. and Weintroub, Jonathan and Wielgus, Maciek and Wiik, Kaj and Wondrak, Michael F. and Wong, George N. and Wongphexhauxsorn, Jompoj and Wu, Qingwen and Yamaguchi, Paul and Yfantis, Aristomenis and Yoon, Doosoo and Young, André and Younsi, Ziri and Yu, Wei and Yuan, Feng and Yuan, Ye-Fei and Zeng, Ai-Ling and Anton Zensus, J. and Zhang, Shuo and Zhao, Brandon and Zhao, Guang-Yao and {(The MAGIC collaboration)} and Abhir, J. and Abhishek, A. and Acciari, V. A. and Aguasca-Cabot, A. and Agudo, I. and Albanese, I. and Aniello, T. and Ansoldi, S. and Antonelli, L. A. and Arbet Engels, A. and Arcaro, C. and Arnesen, T. T. H. and Babić, A. and Bakshi, C. and Barres de Almeida, U. and Barrio, J. A. and Barrios-Jiménez, L. and Batković, I. and Becerra González, J. and Bednarek, W. and Bernardini, E. and Bernete, J. and Berti, A. and Besenrieder, J. and Bigongiari, C. and Biland, A. and Blanch, O. and Bonnoli, G. and Bošnjak, Ž. and Bronzini, E. and Burelli, I. and Campoy-Ordaz, A. and Carosi, A. and Carosi, R. and Carretero-Castrillo, M. and Castro-Tirado, A. J. and Cerasole, D. and Ceribella, G. and Cerviño, A. and Chai, Y. and Chon, G. and Contreras, J. L. and Cortina, J. and Covino, S. and Da Vela, P. and Dazzi, F. and De Angelis, A. and De Lotto, B. and Delfino, M. and Delgado, J. and Delgado Mendez, C. and Di Pierro, F. and Di Tria, R. and Di Venere, L. and Dinesh, A. and Dominis Prester, D. and Donini, A. and Dorner, D. and Doro, M. and Eisenberger, L. and Elsaesser, D. and Foffano, L. and Font, L. and Frías García-Lago, F. and Fröse, S. and Fukazawa, Y. and Gasparyan, S. and Gaug, M. and Giesbrecht Paiva, J. G. and Giglietto, N. and Giordano, F. and Gliwny, P. and Gradetzke, T. and Grau, R. and Green, J. G. and Günther, P. and Hadasch, D. and Harutyunyan, G. and Herrera Llorente, J. and Hrupec, D. and Israyelyan, D. and Jahanvi, J. and Jiménez Martínez, I. and Jiménez Quiles, J. and Kankkunen, S. and Kayanoki, T. and Konrad, J. and Kouch, P. M. and Kubo, H. and Kushida, J. and Láinez, M. and Lamastra, A. and Lindfors, E. and Lombardi, S. and Longo, F. and López-Coto, R. and López-Moya, M. and López-Oramas, A. and Loporchio, S. and Lulić, L. and Majumdar, P. and Makariev, M. and Mallamaci, M. and Maneva, G. and Manganaro, M. and Mangano, S. and Mannheim, K. and Marchesi, S. and Mariotti, M. and Martínez, M. and Maruševec, P. and Mazin, D. and Menchiari, S. and Méndez Gallego, J. and Menon, S. and Miceli, D. and Miranda, J. M. and Mirzoyan, R. and Molero González, M. and Molina, E. and Mondal, H. A. and Moralejo, A. and Nanci, C. and Negro, A. and Neustroev, V. and Nigro, C. and Nikolić, L. and Noda, K. and Nozaki, S. and Okumura, A. and Otero-Santos, J. and Paiano, S. and Paneque, D. and Paoletti, R. and Paredes, J. M. and Peresano, M. and Persic, M. and Pihet, M. and Pirola, G. and Podobnik, F. and Prada Moroni, P. G. and Prandini, E. and Ribó, M. and Rico, J. and Roy, A. and Sahakyan, N. and Saturni, F. G. and Schiavone, F. and Schmitz, K. and Sciaccaluga, A. and Silvestri, G. and Simongini, A. and Sitarek, J. and Sliusar, V. and Sobczynska, D. and Stamerra, A. and Strišković, J. and Strom, D. and Suda, Y. and Takahashi, M. and Takeishi, R. and Tartera Barberà, J. and Temnikov, P. and Terzić, T. and Teshima, M. and Tutone, A. and Ubach, S. and Ventura, S. and Verna, G. and Viale, I. and Vigliano, A. and Vigorito, C. F. and Visentin, E. and Vitale, V. and Vorbrugg, M. and Vovk, I. and Walter, R. and Walther, C. and Wersig, F. and Yeung, P. K. H. and {(Other Authors)} and Acharyya, A. and Aharonian, F. and Ashkar, H. and Backes, M. and Barnard, M. and Becherini, Y. and Böttcher, M. and Bolmont, J. and Bruno, B. and Bylund, T. and Casanova, S. and Chernyakova, M. and Chibueze, J. O. and Chibueze, O. and Cornejo, B. and Damascene Mbarubucyeye, J. and Davids, I. D. and de Assis Scarpin, J. and de Naurois, M. and Dmytriiev, A. and Egberts, K. and Fegan, S. and Feijen, K. and Filipovic, M. D. and Fontaine, G. and Gabici, S. and Glicenstein, J. F. and Goswami, P. and Heckmann, L. and Heß, B. and Holler, M. and Horns, D. and Kasai, E. and Katarzyński, K. and Kerszberg, D. and Khélifi, B. and Kosack, K. and Lang, R. G. and Lazarević, S. and Liniewicz, P. and Luashvili, A. and Malyshev, D. and Malyshev, D. and Mayer, M. G. F. and Meyer, M. and Mikhno, A. and Moulin, E. and Ndiyavala, H. and Niemiec, J. and Pichard, P. and Preis, T. and Pühlhofer, G. and Quirrenbach, A. and Reimer, A. and Reimer, O. and Reis, I. and Rudak, B. and Sabri, K. and Sahakian, V. and Santangelo, A. and Sasaki, M. and Shebalkova, I. and Si Said, W. and Stawarz, Ł. and Steenkamp, R. and Tanaka, T. and Taylor, G. L. and Terrier, R. and Tian, Y. and Tluczykont, M. and Venter, C. and Vink, J. and Voitsekhovskyi, V. and Wagner, S. J. and Wierzcholska, A. and Zacharias, M. and Zdziarski, A. A.",
    "bibvolume": "712",
    "bibpages": "A224"
  },
  {
    title: 'Validation and Calibration of Semianalytical Models for the Event Horizon Telescope Observations of Sagittarius A*',
    authors: 'Ali SaraerToosi, A. E. Broderick',
    venue: 'The Astrophysical Journal', year: 2025, first: true, category: 'vision astro',
    summary: 'Using a learned generative image model to calibrate physical-parameter estimates and uncertainties under scattering, intrinsic variability, and model mismatch.',
    summaryFr: 'Utilisation d’un modèle génératif d’images appris pour calibrer les estimations de paramètres physiques et leurs incertitudes en présence de diffusion, de variabilité intrinsèque et d’erreurs de modèle.',
    url: 'https://doi.org/10.3847/1538-4357/adf6b7', doi: '10.3847/1538-4357/adf6b7',
    figure: {
      src: 'assets/pub-calibration.webp', width: 2000, height: 1431,
      alt: 'Simulated black-hole images compared with fitted thick- and thin-disk models for mean and variable GRMHD data.',
      altFr: 'Images simulées de trous noirs comparées aux ajustements de modèles de disques épais et minces, pour des données GRMHD moyennes et variables.',
      caption: 'Simulations and fitted models', captionFr: 'Simulations et modèles ajustés',
      source: 'https://ali-saraertoosi.vercel.app/pubs/robustness_test_outline.png'
    },
    bibtype: 'article', bibkey: 'saraertoosi2025calibration', bibvenue: 'The Astrophysical Journal'
  },
  {
    title: 'Learning to See: Applying Inverse Recurrent Inference Machines to See through Refractive Scattering',
    authors: 'A. Kouroshnia, K. Nguyen, C. Ni, Ali SaraerToosi, A. E. Broderick',
    venue: 'The Astrophysical Journal', year: 2025, first: false, category: 'vision astro',
    summary: 'Recurrent neural inference for image restoration: mitigating refractive scattering in black-hole imaging.',
    summaryFr: 'Inférence neuronale récurrente pour la restauration d’images : atténuation de la diffusion réfractive en imagerie des trous noirs.',
    url: 'https://doi.org/10.3847/1538-4357/adcabf', doi: '10.3847/1538-4357/adcabf',
    figure: {
      src: 'assets/pub-scattering.webp', width: 809, height: 259,
      alt: 'Four black-hole images compare scattering, deblurring, IRIM reconstruction, and the true image.',
      altFr: 'Quatre images d’un trou noir comparent la diffusion, la correction du flou, la reconstruction par IRIM et l’image de référence.',
      caption: 'Removing refractive scattering', captionFr: 'Correction de la diffusion réfractive',
      source: 'https://ali-saraertoosi.vercel.app/pubs/irim_outline.png'
    },
    bibtype: 'article', bibkey: 'kouroshnia2025learning', bibvenue: 'The Astrophysical Journal'
  },
  {
    title: 'Autoencoding Labeled Interpolator, Inferring Parameters from Image and Image from Parameters',
    authors: 'Ali SaraerToosi, A. E. Broderick',
    venue: 'The Astrophysical Journal', year: 2024, first: true, category: 'vision astro',
    workshop: {
      venue: 'NeurIPS 2023 · Machine Learning and the Physical Sciences workshop',
      venueFr: 'NeurIPS 2023 · Atelier Machine Learning and the Physical Sciences',
      url: 'https://ml4physicalsciences.github.io/2023/files/NeurIPS_ML4PS_2023_184.pdf'
    },
    summary: 'A variational autoencoder for image reconstruction, image generation, and physical-parameter inference, reducing black-hole image-generation time from about a minute to milliseconds.',
    summaryFr: 'Un autoencodeur variationnel pour la reconstruction et la génération d’images ainsi que l’inférence de paramètres physiques, qui réduit le temps de génération d’images de trous noirs d’environ une minute à quelques millisecondes.',
    url: 'https://doi.org/10.3847/1538-4357/ad3e76', doi: '10.3847/1538-4357/ad3e76',
    figure: {
      src: 'assets/pub-alinet.webp', width: 2000, height: 1429,
      alt: 'ALINet compares original black-hole images with reconstructed images and images generated from physical parameters.',
      altFr: 'ALINet compare des images originales de trous noirs aux images reconstruites et aux images générées à partir de paramètres physiques.',
      caption: 'Reconstruction and image generation', captionFr: 'Reconstruction et génération d’images',
      source: 'https://ali-saraertoosi.vercel.app/pubs/alinet_outline.png'
    },
    bibtype: 'article', bibkey: 'saraertoosi2024autoencoding', bibvenue: 'The Astrophysical Journal'
  },
  {
    title: 'Resonant fragility and nonresonant robustness of Floquet eigenstates in kicked spin systems',
    authors: 'J. A. Segura-Landa, M. Kumari, D. J. Nader, S. Hüsnügil, Ali SaraerToosi, S. Lerma-Hernández',
    venue: 'Physical Review E', year: 2026, first: false, category: 'physics',
    summary: 'Exploring the stability of Floquet eigenstates in driven quantum spin systems.',
    summaryFr: 'Étude de la stabilité des états propres de Floquet dans des systèmes de spins quantiques soumis à des impulsions.',
    url: 'https://doi.org/10.1103/2mv9-46cc', doi: '10.1103/2mv9-46cc',
    figure: {
      src: 'assets/pub-floquet.webp', width: 573, height: 336,
      alt: 'Figure 2: classical phase-space trajectories above Husimi distributions of quantum eigenstates near resonance.',
      altFr: 'Figure 2 : trajectoires dans l’espace des phases classique et distributions de Husimi d’états propres quantiques près de la résonance.',
      caption: 'Phase space and eigenstates · Fig. 2', captionFr: 'Espace des phases et états propres · Fig. 2',
      source: 'https://arxiv.org/html/2504.13257v3#S3.F2'
    },
    bibtype: 'article', bibkey: 'seguralanda2026resonant', bibvenue: 'Physical Review E'
  }
];

// Persian research summaries and figure descriptions.
const persianPublications = {
  "saraertoosi2026neuraldmd": {
    "summary": "بازنمایی‌های عصبی تفسیرپذیر برای دینامیک سیستم‌های فیزیکی، با ارزیابی روی میدان‌های باد و اندازه‌گیری‌های تداخل‌سنجی سیاه‌چاله‌ها.",
    "alt": "نمای کلی NeuralDMD: بازسازی دینامیک سیستم‌های فیزیکی از اندازه‌گیری‌های تلسکوپی و هواشناسی.",
    "caption": "نمای کلی NeuralDMD"
  },
  "tu2026bhcast": {
    "summary": "پیش‌بینی دینامیک پلاسمای پرجزئیات از یک تصویر تار و استنباط ویژگی‌های سیاه‌چاله از حرکت پیش‌بینی‌شده.",
    "alt": "مراحل BHCast شامل پیش‌بینی، استخراج ویژگی و استنباط ویژگی‌های سیاه‌چاله است.",
    "caption": "پیش‌بینی و استنباط ویژگی‌های فیزیکی"
  },
  "eht2026firstlook": {
    "summary": "تصویر اولیهٔ M87* از یک ثبت چهار‌دقیقه‌ای در کارزار پایش EHT در سال ۲۰۲۶؛ نمایشی از کاهش زمان میان رصد و بازسازی تصویر.",
    "alt": "شکل ۱: حلقهٔ M87* بازسازی‌شده از چهار دقیقه رصد EHT در ۳ آوریل ۲۰۲۶، در کنار پوشش خطوط مبنای تداخل‌سنجی.",
    "caption": "تصویر M87* و پوشش خطوط مبنا · شکل ۱"
  },
  "muller2026dynamics": {
    "summary": "رصدهای EHT و دیگر رادیوتلسکوپ‌ها ساختار درونی جت 3C 279 را آشکار می‌کنند و هندسه، حرکت مؤلفه‌ها و خمیدگی شدید آن به سوی ناظر را محدود می‌کنند.",
    "alt": "شکل ۱: تصاویر کانتوری جت 3C 279 در بسامدهای ۴۳، ۸۶ و ۲۳۰ گیگاهرتز، از رصدهای آوریل ۲۰۲۱.",
    "caption": "جت در بسامدهای ۴۳، ۸۶ و ۲۳۰ گیگاهرتز · شکل ۱"
  },
  "principe2026broadband": {
    "summary": "رصدهای هماهنگ 3C 279 از امواج رادیویی تا پرتوهای گاما در کارزار EHT سال ۲۰۱۷، تغییرپذیری در طول موج‌های مختلف را به ساختار جت و مدل‌های تابش مرتبط می‌کنند.",
    "alt": "شکل ۵: توزیع طیفی انرژی 3C 279 در کارزار EHT سال ۲۰۱۷، با اندازه‌گیری‌هایی از امواج رادیویی تا پرتوهای گاما.",
    "caption": "توزیع طیفی انرژی · شکل ۵"
  },
  "saraertoosi2025calibration": {
    "summary": "استفاده از یک مدل مولد تصویرِ آموخته‌شده برای کالیبره‌کردن برآورد پارامترهای فیزیکی و عدم قطعیت آن‌ها در حضور پراکندگی، تغییرپذیری ذاتی و خطای مدل.",
    "alt": "تصاویر شبیه‌سازی‌شدهٔ سیاه‌چاله در مقایسه با برازش مدل‌های دیسک ضخیم و نازک، برای داده‌های میانگین و متغیر GRMHD.",
    "caption": "شبیه‌سازی‌ها و مدل‌های برازش‌شده"
  },
  "kouroshnia2025learning": {
    "summary": "استنباط عصبی بازگشتی برای ترمیم تصویر: کاهش اثر پراکندگی انکساری در تصویربرداری سیاه‌چاله‌ها.",
    "alt": "چهار تصویر سیاه‌چاله، تصویر پراکنده‌شده، رفع تاری، بازسازی IRIM و تصویر مرجع را مقایسه می‌کنند.",
    "caption": "کاهش اثر پراکندگی انکساری"
  },
  "saraertoosi2024autoencoding": {
    "summary": "یک خودرمزگذار واریاسیونی برای بازسازی و تولید تصویر و استنباط پارامترهای فیزیکی که زمان تولید تصویر سیاه‌چاله را از حدود یک دقیقه به چند میلی‌ثانیه کاهش می‌دهد.",
    "alt": "ALINet تصاویر اصلی سیاه‌چاله‌ها را با تصاویر بازسازی‌شده و تصاویر تولیدشده از پارامترهای فیزیکی مقایسه می‌کند.",
    "caption": "بازسازی و تولید تصویر"
  },
  "seguralanda2026resonant": {
    "summary": "بررسی پایداری حالت‌های ویژهٔ فلوکه در سیستم‌های اسپین کوانتومی تحت تحریک ضربه‌ای.",
    "alt": "شکل ۲: مسیرهای فضای فاز کلاسیکی و توزیع‌های هوسیمیِ حالت‌های ویژهٔ کوانتومی در نزدیکی تشدید.",
    "caption": "فضای فاز و حالت‌های ویژه · شکل ۲"
  }
};
if (isPersian) publications.forEach(paper => {
  const translation = persianPublications[paper.bibkey];
  if (!translation) return;
  paper.summaryFa = translation.summary;
  paper.figure.altFa = translation.alt;
  paper.figure.captionFa = translation.caption;
  if (paper.workshop) paper.workshop.venueFa = 'NeurIPS ۲۰۲۳ · کارگاه یادگیری ماشین و علوم فیزیکی';
});
// End Persian publication translations.

const list = document.querySelector('#publication-list');
document.querySelector('.filter[data-filter="all"] span').textContent = formatDigits(publications.length);
document.querySelector('#publication-count').textContent = labels.count(publications.length);
const external = ' target="_blank" rel="noopener"';

// Add future patent entries here; the same list renders in all three languages.
const patents = [
  {
    title: 'Methods for synthesizing boolean circuits for a quantum error correction decoder and a quantum error correction decoder chip using thereof',
    number: 'US20260030532A1',
    url: 'https://patents.google.com/patent/US20260030532A1/en',
    published: '2026-01-29',
    status: 'Published US patent application',
    statusFr: 'Demande de brevet américain publiée',
    statusFa: 'درخواست ثبت اختراع منتشرشده در آمریکا',
    inventors: ['Bohdan Kulchytskyy', 'Miles Xavian Kramer', 'Gebremedhin Asrat Dagnew', 'Ali SaraerToosi', 'Pooya Ronagh'],
    assignee: '1QB Information Technologies Inc.',
    summary: 'Methods for translating quantum error-correction decoders, including recurrent neural models, into Boolean circuits for hardware implementation.',
    summaryFr: 'Méthodes de conversion de décodeurs de correction d’erreurs quantiques, notamment de modèles neuronaux récurrents, en circuits booléens pour une mise en œuvre matérielle.',
    summaryFa: 'روش‌هایی برای تبدیل رمزگشاهای تصحیح خطای کوانتومی، از جمله مدل‌های عصبی بازگشتی، به مدارهای بولی برای پیاده‌سازی سخت‌افزاری.'
  }
];
patents.forEach((patent, index) => {
  const article = document.createElement('article');
  article.className = 'patent-entry';
  article.setAttribute('aria-labelledby', `patent-title-${index}`);
  const date = new Intl.DateTimeFormat(isPersian ? 'fa-IR-u-ca-gregory' : isFrench ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${patent.published}T00:00:00Z`));
  article.innerHTML = `<div class="patent-meta"><a class="patent-number" href="${patent.url}" dir="ltr"${external}>${patent.number} ↗</a><span class="patent-status">${localized(patent, 'status')}</span><p class="patent-date">${labels.published}<time datetime="${patent.published}">${date}</time></p></div><div class="patent-content"><h3 id="patent-title-${index}" lang="en" dir="ltr"><a href="${patent.url}"${external}>${patent.title}</a></h3><div class="patent-inventors"><span>${labels.inventors}</span><p lang="en" dir="ltr">${patent.inventors.join(', ').replace('Ali SaraerToosi', '<strong>Ali SaraerToosi</strong>')}</p></div><p class="patent-summary">${localized(patent, 'summary')}</p><p class="patent-assignee"><span>${labels.assignee}</span><bdi lang="en" dir="ltr">${patent.assignee}</bdi></p><a class="text-link patent-record" href="${patent.url}"${external}>${labels.patentRecord} ↗</a></div>`;
  document.querySelector('#patent-list').appendChild(article);
});
const figureDialog = document.createElement('dialog');
figureDialog.className = 'figure-dialog';
figureDialog.setAttribute('aria-labelledby', 'figure-dialog-title');
figureDialog.innerHTML = `<div class="figure-dialog-bar"><h2 id="figure-dialog-title" lang="en" dir="ltr"></h2><button class="figure-close" type="button" aria-label="${labels.closeFigure}" autofocus>×</button></div><img class="figure-full" alt=""><div class="figure-dialog-caption"><p></p><a${external}>${labels.sourceFigure}</a></div>`;
document.body.appendChild(figureDialog);
figureDialog.querySelector('.figure-close').addEventListener('click', () => figureDialog.close());
figureDialog.addEventListener('close', () => document.body.classList.remove('figure-open'));
figureDialog.addEventListener('click', event => {
  const bounds = figureDialog.getBoundingClientRect();
  if (event.target === figureDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) figureDialog.close();
});
function imageSource(src) {
  return src.startsWith('data:') ? src : `${isFrench || isPersian ? '../' : ''}${src}`;
}
publications.forEach((paper, index) => {
  const figure = paper.figure;
  const figureAlt = localized(figure, 'alt');
  const figureCaption = localized(figure, 'caption');
  const article = document.createElement('article');
  article.className = 'publication';
  article.dataset.category = paper.category;
  article.dataset.first = String(paper.first);
  article.innerHTML = `<span class="pub-number" aria-hidden="true">${formatDigits(String(index + 1).padStart(2, '0'))}</span>
    <figure class="pub-figure"><button class="pub-image-button" type="button" aria-label="${labels.enlarge} ${paper.title}" aria-haspopup="dialog"><img src="${imageSource(figure.src)}" alt="${figureAlt}" width="${figure.width}" height="${figure.height}" loading="lazy"><span class="zoom-hint" aria-hidden="true">⤢</span></button><figcaption>${figureCaption}</figcaption></figure>
    <div class="pub-content"><div class="pub-top"><span class="pub-venue" dir="ltr"><bdi lang="en">${paper.venue}</bdi> · ${formatDigits(paper.year)}</span>${paper.first ? `<span class="pub-badge">${labels.firstAuthor}</span>` : ''}</div>
    ${paper.workshop ? `<p class="pub-version"><a href="${paper.workshop.url}"${external}>${localized(paper.workshop, 'venue')} ↗</a></p>` : ''}
    <h3 class="pub-title" dir="ltr"><a href="${paper.url}" lang="en"${external}>${paper.title}</a></h3>
    <p class="pub-authors" dir="ltr" lang="${isFrench ? 'fr' : 'en'}">${(isFrench && paper.authorsFr ? paper.authorsFr : paper.authors).replace('Ali SaraerToosi', '<strong>Ali SaraerToosi</strong>')}</p>
    <p class="pub-summary">${localized(paper, 'summary')}</p><div class="pub-actions"><a href="${paper.url}"${external}>${labels.paper} ↗</a>${paper.workshop ? `<a href="${paper.workshop.url}"${external}>${labels.workshopPaper} ↗</a>` : ''}${paper.project ? `<a href="${paper.project}"${external}>${labels.project} ↗</a>` : ''}${paper.code ? `<a href="${paper.code}"${external}>${labels.code} ↗</a>` : ''}${paper.dataUrl ? `<a href="${paper.dataUrl}"${external}>${labels.dataCatalog} ↗</a>` : ''}<button class="bib-button" type="button" aria-label="${labels.copyFor} ${paper.title}">${labels.copy}</button></div></div>`;
  article.querySelector('.pub-image-button').addEventListener('click', () => {
    figureDialog.querySelector('h2').textContent = paper.title;
    const image = figureDialog.querySelector('.figure-full');
    image.src = imageSource(figure.src);
    image.alt = figureAlt;
    image.width = figure.width;
    image.height = figure.height;
    const caption = figureDialog.querySelector('.figure-dialog-caption p');
    caption.textContent = figureCaption;
    if (figure.credit) {
      caption.appendChild(document.createTextNode(' — '));
      const credit = document.createElement('bdi');
      credit.dir = 'ltr'; credit.lang = 'en'; credit.textContent = figure.credit;
      caption.appendChild(credit);
    }
    figureDialog.querySelector('.figure-dialog-caption a').href = figure.source;
    document.body.classList.add('figure-open');
    figureDialog.showModal();
  });
  article.querySelector('.bib-button').addEventListener('click', async (event) => {
    const venueField = paper.bibtype === 'article' ? 'journal' : 'booktitle';
    const bib = `@${paper.bibtype}{${paper.bibkey},\n  title = {${paper.title}},\n  author = {${paper.bibAuthors || paper.authors.split(', ').join(' and ')}},\n  ${venueField} = {${paper.bibvenue}},\n  year = {${paper.year}},\n${paper.bibvolume ? `  volume = {${paper.bibvolume}},\n` : ''}${paper.bibpages ? `  pages = {${paper.bibpages}},\n` : ''}${paper.doi ? `  doi = {${paper.doi}},\n` : ''}  url = {${paper.url}}\n}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(bib);
      } else {
        const field = document.createElement('textarea');
        field.value = bib;
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand('copy');
        field.remove();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      event.target.textContent = labels.copied;
      showToast(labels.copiedToast);
      setTimeout(() => { event.target.textContent = labels.copy; }, 2200);
    } catch {
      const blob = new Blob([bib], { type: 'application/x-bibtex' });
      const url = URL.createObjectURL(blob);
      const download = document.createElement('a');
      download.href = url;
      download.download = `${paper.bibkey}.bib`;
      download.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      showToast(labels.downloadedToast);
    }
  });
  list.appendChild(article);
});

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    document.querySelectorAll('.publication').forEach(paper => {
      const matches = filter === 'all' || (filter === 'first' ? paper.dataset.first === 'true' : paper.dataset.category.split(' ').includes(filter));
      paper.hidden = !matches;
      if (matches) visible++;
    });
    document.querySelector('#publication-count').textContent = labels.count(visible);
  });
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3000);
}

const themeButton = document.querySelector('.theme-toggle');
function updateThemeButton() {
  const dark = document.documentElement.dataset.theme !== 'light';
  themeButton.setAttribute('aria-label', labels.themeAction(dark));
  themeButton.querySelector('.theme-label').textContent = dark ? labels.light : labels.dark;
  themeButton.querySelector('.theme-symbol').textContent = dark ? '☼' : '☾';
}
themeButton.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('ali-theme', next); } catch {}
  updateThemeButton();
});
updateThemeButton();

// Each comparison uses the original result clips from its project website.
document.querySelectorAll('.project-media').forEach(figure => {
  const videos = [...figure.querySelectorAll('video')];
  const button = figure.querySelector('.media-toggle');
  const project = figure.dataset.project;
  function updateMediaButton() {
    const playing = videos.some(video => !video.paused && !video.ended);
    button.textContent = playing ? labels.pause : labels.play;
    button.setAttribute('aria-label', labels.videoAction(playing, project));
  }
  videos.forEach(video => {
    video.addEventListener('play', updateMediaButton);
    video.addEventListener('pause', updateMediaButton);
    video.addEventListener('ended', updateMediaButton);
  });
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videos.forEach(video => { video.autoplay = false; video.pause(); });
  }
  button.addEventListener('click', async () => {
    if (videos.some(video => !video.paused && !video.ended)) {
      videos.forEach(video => video.pause());
    } else {
      const time = Math.min(...videos.map(video => video.currentTime));
      videos.forEach(video => { video.currentTime = time; });
      const results = await Promise.allSettled(videos.map(video => video.play()));
      if (results.some(result => result.status === 'rejected')) {
        showToast(labels.videoToast);
      }
    }
    updateMediaButton();
  });
  updateMediaButton();
});

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => { if (!event.target.closest('.header-inner')) closeMenu(); });

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a[href^="#"]').forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('current', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('main>section[id]').forEach(section => observer.observe(section));
}

// A static, decorative flow field echoes the visual language of physical dynamics.
// It redraws only on resize and does not run an animation loop.
const canvas = document.querySelector('#flow-field');
const context = canvas.getContext('2d');
function drawFlow() {
  if (!context) return;
  const w = window.innerWidth, h = window.innerHeight;
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = w * scale; canvas.height = h * scale;
  context.setTransform(scale, 0, 0, scale, 0, 0);
  context.clearRect(0, 0, w, h);
  const total = Math.min(300, Math.ceil(w / 5));
  for (let i = 0; i < total; i++) {
    const base = (i / total) * (w + 350) - 175;
    const hue = 203 + 58 * Math.sin(i * .018);
    context.beginPath();
    for (let y = -30; y <= h + 30; y += 12) {
      const t = y / h;
      const bend = 95 * Math.sin(t * 4 + base / w * 3) + 38 * Math.sin(t * 7 + base / w * 2);
      const x = base + bend;
      if (y === -30) context.moveTo(x, y); else context.lineTo(x, y);
    }
    context.strokeStyle = `hsla(${hue},62%,68%,${.08 + (Math.sin(i * 2.7) + 1) * .045})`;
    context.lineWidth = i % 9 === 0 ? 1 : .55;
    context.stroke();
  }
}
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { drawFlow(); if (window.innerWidth > 760) closeMenu(); }, 120);
});
drawFlow();
