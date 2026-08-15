export interface EngineeringGroup {
  category: string;
  items: string[];
}

export const engineeringGroups: EngineeringGroup[] = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Python', 'Flask', 'FastAPI', 'Node.js'] },
  { category: 'AI / ML', items: ['scikit-learn', 'PyTorch basics', 'Model evaluation', 'Fine-tuning workflows'] },
  { category: 'Generative AI', items: ['LLM APIs', 'RAG pipelines', 'Prompt engineering', 'Vector databases'] },
  { category: 'Cloud & Infra', items: ['Render', 'Vercel', 'Docker', 'GitHub Actions'] },
  { category: 'Data', items: ['PostgreSQL', 'Pandas', 'ETL pipelines', 'Data cleaning'] },
];

export const processSteps = [
  { n: '01', title: 'Understand', desc: 'We start by understanding the actual problem — not the AI angle, the problem.' },
  { n: '02', title: 'Research', desc: 'We look at what approach fits: a simple model, a full LLM pipeline, or sometimes no AI at all.' },
  { n: '03', title: 'Design', desc: 'We design the system and the interface together, so the two never fight each other.' },
  { n: '04', title: 'Build', desc: 'We build in working increments, with something usable at every stage — not one big reveal at the end.' },
  { n: '05', title: 'Evolve', desc: 'We treat launch as a starting point. Real usage is where a product actually gets better.' },
];
