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
];
