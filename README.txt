ALI SARAERTOOSI — RESEARCH WEBSITE

Open index.html for English, fr/index.html for French, or fa/index.html for Persian.
The EN / FR / فارسی switch keeps the current section when changing languages.
English is the default. French and Persian include translated summaries, interface
labels, video captions, and accessibility text. The Persian page uses a
right-to-left layout and Ali's confirmed name: علی سرائرطوسی. Publication and
patent titles, author lists, citations, and official project names remain in their
original language. Scientific figures and comparison videos retain their original
orientation. The French page links to a French CV, translated from the two-page
English CV with the same research and professional content and section order.
The Persian page links to a Persian CV with the same content and a right-to-left
layout. Official publication titles and venue names retain their original form.
All three public CVs omit the phone number and include
https://alisaraertoosi.github.io as a clickable personal website link.
Each website language links to the corresponding CV language.
PhD advisors are Aviad Levis and David Lindell, as confirmed by the user. Both
advisors are listed in the website profile and research experience and in each
public CV's PhD research and education entries.
The About section also lists the user's spoken languages: English, French, and
Persian. The heading and language names are localized in each website version.
Research experience and education headings include locally stored affiliation
logos. Original sources and emblem details are in assets/logos/SOURCES.txt.

The site also works on any static web host,
including GitHub Pages, Netlify, and Vercel. No installation or build step is needed.

EDITING
English profile, experience, talks, education, and contact: index.html
French profile, experience, talks, education, and contact: fr/index.html
Persian profile, experience, talks, education, and contact: fa/index.html
Publication titles, authors, links, citations, figures, and translated summaries:
script.js (Persian summaries and figure descriptions are in persianPublications)
Patent entries, inventors, dates, status labels, and translated summaries:
script.js (patents array). Add a new object for each future invention.
Shared English/French/Persian interface messages: script.js (labels)
Colors, spacing, typography, and mobile layout: styles.css
Portrait, project videos, publication figures, and downloadable resume: assets/
English CV: assets/Ali_SaraerToosi_resume.pdf
French CV: assets/Ali_SaraerToosi_CV_fr.pdf

CONTENT SOURCES
The user-provided Ali_SaraerToosi_resume.pdf is the primary source for this version.
Public research pages were checked on November 14, 2026:
https://scholar.google.com/citations?user=lmCaJEsAAAAJ&hl=en&pagesize=100
https://ali-saraertoosi.vercel.app/
https://tcig.ca/people
https://pi-vision.github.io/people/
https://compimaging.dgp.toronto.edu/publications
https://neuraldmd.vercel.app/
https://bhcast.cs.toronto.edu/
https://orcid.org/0009-0003-4620-8448

RESEARCH GROUP LINKS
The About section links to Ali's member entry in both research groups:
https://pi-vision.github.io/people/#ali
https://tcig.ca/people#:~:text=Ali%20SaraerToosi
PI-Vision exposes a stable member anchor. TCIG has no member anchors, so its link
uses a browser text fragment to scroll to and highlight Ali's name. Browsers that
do not support text fragments still open the TCIG People page. Both links open
in a new tab. Destinations were checked on November 14, 2026.

The portrait came from Ali's existing personal website.
The flow background is decorative. Research cards use original experiment videos
from the NeuralDMD and BHCast project pages. The displayed comparisons are
simulations, labeled as ground truth and reconstruction / forecast.

VIDEO SOURCES
assets/neuraldmd-ground-truth.mp4:
https://neuraldmd.vercel.app/videos/eht2017/ground_truth.mp4
assets/neuraldmd-reconstruction.mp4:
https://neuraldmd.vercel.app/videos/eht2017/neuraldmd.mp4
assets/bhcast-ground-truth.mp4:
https://bhcast.cs.toronto.edu/static/videos/gt_movie.mp4
assets/bhcast-forecast.mp4:
https://bhcast.cs.toronto.edu/static/videos/ours_movie.mp4

The project videos play silently and have individual controls plus a shared
play/pause button for each pair. Automatic playback respects reduced-motion
preferences. All videos are included locally; the website needs no external
services to render or play them.

PUBLICATION FIGURES
Every selected publication includes an original representative figure. Click a
preview to enlarge it, with a caption and a link to its source. Captions and
accessibility labels are available in English, French, and Persian. Figures are stored
locally as lossless WebP images, resized proportionally without cropping.

assets/pub-neuraldmd.webp (overview from Ali's personal website):
https://ali-saraertoosi.vercel.app/pubs/ndmd_outline.png
assets/pub-bhcast.webp (pipeline from the project website):
https://bhcast.cs.toronto.edu/static/images/bhcast_pipeline_fallback.jpeg
assets/pub-calibration.webp (simulation/model comparison from Ali's website):
https://ali-saraertoosi.vercel.app/pubs/robustness_test_outline.png
assets/pub-scattering.webp (image comparison from Ali's website):
https://ali-saraertoosi.vercel.app/pubs/irim_outline.png
assets/pub-alinet.webp (image reconstruction/generation from Ali's website):
https://ali-saraertoosi.vercel.app/pubs/alinet_outline.png
assets/pub-floquet.webp (Figure 2 from the paper):
https://arxiv.org/html/2504.13257v3/zfig2main.png
Figure caption and context: https://arxiv.org/html/2504.13257v3#S3.F2

assets/pub-eht-m87.webp (Figure 1, EHT Collaboration et al., RNAAS 10, 324):
https://www.astroexplorer.org/details/rnaasaebd91f1
https://s3.amazonaws.com/aasie/images/2515-5172/10/11/null/rnaasaebd91f1_hr.jpg
Article DOI: https://doi.org/10.3847/2515-5172/aebd91
assets/pub-eht-jet.webp (Figure 1 in the preprint, H. Müller et al.):
https://arxiv.org/html/2607.16104v1#S2.F1
https://arxiv.org/html/2607.16104v1/Figures/multifrequency.png
Published article DOI: https://doi.org/10.1051/0004-6361/202660360
assets/pub-eht-broadband.webp (Figure 5, G. Principe et al.):
https://arxiv.org/html/2606.25868v2#S3.F5
https://arxiv.org/html/2606.25868v2/figs/sed_3C279_2017_EHT_C00_Swift_bowtie.png
Published article DOI: https://doi.org/10.1051/0004-6361/202659551
These three figures are used under CC BY 4.0; attribution, DOI, and license are
shown in the enlarged figure viewer. Resizing and WebP conversion are the only
changes. Original titles, author lists, volumes, pages, and DOIs were verified
against the publisher's Crossref records.

SCHOLAR COVERAGE
The site includes all nine unique research papers listed on Ali's Google Scholar
profile when checked on November 14, 2026. NeuralDMD's preprint and conference
entry are represented by one paper. The patent application has its own Patents
section and is also linked under 1QBit in Research experience. The VizieR catalog
is linked as Data catalog beside its
associated 3C 279 jet paper, rather than counted as an additional paper:
https://cdsarc.cds.unistra.fr/viz-bin/cat/J/A%2BA/713/A274
NeuralDMD, BHCast, Learning to See, ALINet, and Validation and Calibration appear
in both the Computer vision and Astrophysics filters.

ALINet's earlier NeurIPS 2023 Machine Learning and the Physical Sciences workshop
version is listed alongside its 2024 journal publication, with a direct paper link.
The two versions share one publication entry. Official workshop program:
https://ml4physicalsciences.github.io/2023/
Workshop paper:
https://ml4physicalsciences.github.io/2023/files/NeurIPS_ML4PS_2023_184.pdf

PATENT SOURCE
Title, publication number, publication date, inventor list, and assignee:
https://patents.google.com/patent/US20260030532A1/en
The entry is labeled as a published US patent application. The original title
is retained in English in all three language versions.

PERSIAN FONT
Vazirmatn by Saber Rastikerdar is bundled locally under the SIL Open Font License 1.1:
https://github.com/rastikerdar/vazirmatn
Font: assets/Vazirmatn-Variable.woff2
License: assets/Vazirmatn-OFL.txt
The standalone HTML previews also embed the font and its license.

Visual direction inspired by https://amirsamandar.github.io/.

The package includes the public English and French CVs as PDFs, without the phone
number. The user's original source PDF is retained separately and is not packaged.
