export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  technology: string[];
  result: string;
  links?: { label: string; href: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'verity',
    name: 'Verity',
    category: 'AI-powered misinformation detection',
    summary:
      'An end-to-end NLP pipeline — model training, API deployment, and a production-ready frontend — for scoring the credibility of news text.',
    challenge:
      'Most misinformation-detection demos stop at a Jupyter notebook. The goal was to ship something a real user could open in a browser and get an answer from in under a second.',
    approach:
      'Text is cleaned and vectorized with TF-IDF, then scored by a logistic regression model trained on labeled news data. The model is served behind a Flask API with input validation, and a static frontend calls the API directly — no unnecessary middle layer.',
    technology: ['Python', 'scikit-learn', 'Flask', 'Render', 'Netlify'],
    result:
      'A working public tool: paste an article, get a credibility read. Built end to end, deployed, and maintained as a real service rather than a one-off script.',
    links: [
      { label: 'View demo', href: 'https://checkverity.netlify.app' },
      { label: 'View source', href: 'https://github.com/TelemuseBot/verify-backend' },
    ],
  },
  {
    slug: 'raincheck',
    name: 'RainCheck',
    category: 'Urban waterlogging prediction',
    summary:
      'An AI-powered platform that predicts urban waterlogging risk for Delhi-NCR by fusing satellite imagery, terrain data, and drainage infrastructure.',
    challenge:
      'Delhi-NCR floods unpredictably every monsoon, and existing alerts are reactive — they tell people after water has already collected. The brief, built for Smart India Hackathon 2026, was to predict waterlogging-prone zones before the rain, using data that is actually available for Indian cities.',
    approach:
      'Sentinel-1 SAR satellite imagery is used to detect standing water and terrain saturation independent of cloud cover, layered with PostGIS-based drainage and elevation data. A scikit-learn model scores risk per zone, served through a FastAPI backend and visualized on a React map interface so civic teams can see risk before it becomes a problem, not after.',
    technology: ['React.js', 'FastAPI', 'Scikit-learn', 'PostGIS', 'Sentinel-1 SAR'],
    result:
      'Delivered as a working prototype and full SIH 2026 submission with team "The Route Rebels" — architecture, model, and interface built and demoed end to end, not just slides.',
  },
  {
    slug: 'samurify',
    name: 'Samurify',
    category: 'Bank statement conversion',
    summary:
      'A browser-based tool that converts messy PDF bank statements into clean, structured data — no manual re-typing, no spreadsheet wrangling.',
    challenge:
      'Bank statements come as inconsistent, often scanned PDFs with different layouts per bank. Anyone reconciling finances by hand ends up re-typing rows into Excel, which is slow and error-prone.',
    approach:
      'A Flask backend parses PDF statements, detects transaction tables across differing bank formats, and normalizes them into clean rows a user can export directly. The frontend runs entirely in-browser for the upload and preview flow, so a statement never needs to leave the user\u2019s control until they choose to process it.',
    technology: ['Python', 'Flask', 'PDF parsing', 'JavaScript'],
    result:
      'A working converter that turns a multi-page bank statement into structured, exportable data in seconds instead of an hour of manual entry.',
  },
  {
    slug: 'page-pulse',
    name: 'Page Pulse',
    category: 'URL audit & security service',
    summary:
      'A production-grade Flask API that audits URLs for safety and health — with SSRF protection, caching, and rate limiting built in from day one.',
    challenge:
      'Built for a Digital Heroes SDE hiring assignment: design and ship a URL-auditing service the way a real engineering team would, not a script that only works on the happy path.',
    approach:
      'The service validates and audits submitted URLs behind SSRF guards so it can\u2019t be tricked into hitting internal infrastructure, with TTL-based response caching to keep repeat lookups fast and cheap, and per-client rate limiting to prevent abuse. A full pytest suite and GitHub Actions CI run on every change, with the service packaged for one-click Render deployment.',
    technology: ['Python', 'Flask', 'Pytest', 'GitHub Actions', 'Render'],
    result:
      'A complete, test-covered service with a documented scale-out architecture — the kind of submission that shows production judgment, not just a working demo.',
  },
];
