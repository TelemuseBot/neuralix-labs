export interface Solution {
  name: string;
  description: string;
  examples: string[];
}

export const solutions: Solution[] = [
  {
    name: 'Generative AI',
    description: 'Applications built around a generative model at their core, not bolted on as a feature.',
    examples: ['Content and copy generation tools', 'AI-assisted design workflows'],
  },
  {
    name: 'RAG Systems',
    description: 'Retrieval-augmented pipelines that ground model output in your own documents and data.',
    examples: ['Internal knowledge assistants', 'Document Q&A over private data'],
  },
  {
    name: 'AI Agents',
    description: 'Multi-step, tool-using agents that can plan and act rather than answer a single prompt.',
    examples: ['Research and reporting agents', 'Task automation agents'],
  },
  {
    name: 'LLM Applications',
    description: 'Production applications with an LLM as a core dependency — properly evaluated and monitored.',
    examples: ['Customer support copilots', 'Internal tooling copilots'],
  },
  {
    name: 'Computer Vision',
    description: 'Systems that extract structured information from images and video.',
    examples: ['Document and form extraction', 'Visual quality inspection'],
  },
  {
    name: 'NLP',
    description: 'Text classification, extraction, and understanding — including low-resource and code-mixed languages.',
    examples: ['Sentiment and intent classification', 'Hinglish / code-mixed text processing'],
  },
  {
    name: 'Predictive Systems',
    description: 'Models that forecast an outcome from historical and structured data.',
    examples: ['Demand and trend forecasting', 'Risk and anomaly scoring'],
  },
  {
    name: 'Workflow Automation',
    description: 'Removing repetitive manual work by connecting systems and reasoning over the data that flows between them.',
    examples: ['Document processing pipelines', 'Cross-system data sync'],
  },
  {
    name: 'AI SaaS',
    description: 'Full products with AI at the center, built and shipped as a real service — not a prototype.',
    examples: ['Vertical AI tools for a specific workflow', 'API-first AI products'],
  },
  {
    name: 'Data Intelligence',
    description: 'Turning raw data into something a team can actually query, trust, and act on.',
    examples: ['Analytics dashboards backed by AI summarization', 'Data cleaning and structuring pipelines'],
  },
];
