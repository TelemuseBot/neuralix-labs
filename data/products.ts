export type ProductStatus = 'live' | 'building' | 'next';

export interface Product {
  slug: string;
  name: string;
  category: string;
  status: ProductStatus;
  statusLabel: string;
  description: string;
  overview: string;
  capabilities: string[];
  useCases: string[];
  faq: { q: string; a: string }[];
}

export const products: Product[] = [
  {
    slug: 'verity',
    name: 'Verity',
    category: 'Applied NLP',
    status: 'live',
    statusLabel: 'Live',
    description:
      'A misinformation-detection engine that scores text credibility using a trained NLP pipeline, served through a lightweight production API.',
    overview:
      'Verity takes a piece of text and returns a credibility signal in real time. It was built to explore how far a disciplined, classical NLP pipeline — not a large model — could go on a well-defined classification task, deployed end to end as a real product rather than a notebook.',
    capabilities: [
      'TF-IDF vectorization tuned for short-form text',
      'Logistic regression classifier trained on labeled news data',
      'Flask API with request validation and structured responses',
      'Static frontend calling the API directly, no server-rendered coupling',
    ],
    useCases: [
      'Quick credibility check before sharing an article',
      'Reference implementation for lightweight text classification',
    ],
    faq: [
      {
        q: 'Does Verity use a large language model?',
        a: 'No. It deliberately uses a classical TF-IDF plus logistic regression pipeline, to see how far disciplined feature engineering goes before reaching for a larger model.',
      },
      {
        q: 'Is the source available?',
        a: 'Yes, the backend is open source. The link is on this page.',
      },
    ],
  },
  {
    slug: 'sara-ai',
    name: 'SARA AI',
    category: 'AI Assistant',
    status: 'building',
    statusLabel: 'In development',
    description:
      'An AI assistant built by Neuralix Labs, currently in active development. Full details and links are on the way.',
    overview:
      'SARA AI is the newest product coming out of the studio. We\u2019re building it the same way we build everything else — starting from a real use case, not a feature list — and will share the full picture, demo, and source links as soon as it\u2019s ready to show.',
    capabilities: [
      'In active development \u2014 capabilities will be detailed here as they\u2019re built',
    ],
    useCases: [
      'To be announced',
    ],
    faq: [
      {
        q: 'When will SARA AI be available?',
        a: 'It\u2019s in active development. Links, a demo, and full details will be added here as soon as they\u2019re ready.',
      },
      {
        q: 'Can I get notified when it launches?',
        a: 'Yes \u2014 use the notify form on this page and we\u2019ll reach out the moment there\u2019s something to show.',
      },
    ],
  },
  {
    slug: 'signal-graph',
    name: 'Signal Graph',
    category: 'AI Agents',
    status: 'building',
    statusLabel: 'In development',
    description:
      'A framework for composing retrieval-augmented agents that reason over private knowledge bases with traceable, inspectable steps.',
    overview:
      'Signal Graph is being built around one idea: an agent is only trustworthy if you can see how it got its answer. It combines a vector-indexed retrieval layer with an explicit reasoning trace, so every response can be traced back to source documents.',
    capabilities: [
      'Retrieval-augmented generation over FAISS-indexed documents',
      'Explicit, inspectable reasoning steps',
      'Pluggable LLM backend',
      'Source-attributed responses',
    ],
    useCases: [
      'Internal knowledge assistants',
      'Document-grounded customer support',
    ],
    faq: [
      {
        q: 'What makes this different from a typical RAG chatbot?',
        a: 'Most RAG demos hide their reasoning. Signal Graph surfaces the retrieval and reasoning steps as a visible trace, so an answer can be checked against its sources.',
      },
      {
        q: 'When will this be available?',
        a: 'It is in active development. There is no public release date yet.',
      },
    ],
  },
];
