export type InsightCategory =
  | 'AI'
  | 'Engineering'
  | 'Product'
  | 'Research'
  | 'Tutorials'
  | 'Company';

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  date: string; // ISO
  content: string[]; // paragraphs
  tags: string[];
}

export const insights: Insight[] = [
  {
    slug: 'why-we-didnt-reach-for-an-llm',
    title: 'Why we didn\u2019t reach for an LLM',
    excerpt:
      'For Verity, a classical NLP pipeline outperformed the obvious choice \u2014 on speed, cost, and interpretability.',
    category: 'Engineering',
    author: 'Neuralix Labs',
    date: '2026-03-04',
    tags: ['NLP', 'Verity', 'Model selection'],
    content: [
      'When we started building Verity, a tool to score the credibility of news text, the default instinct was to reach for a large language model. It would have worked. It also would have been the wrong call.',
      'The task was a well-defined binary classification problem: given a piece of text, is it more consistent with reliable reporting or with misinformation patterns. That kind of problem doesn\u2019t need billions of parameters. It needs good features and a clean training set.',
      'We ended up with TF-IDF vectorization feeding a logistic regression classifier. It trains in seconds, runs in milliseconds, costs nothing per request, and \u2014 unlike a black-box model \u2014 we can inspect exactly which terms are driving a prediction.',
      'The lesson we keep relearning: the model should match the problem\u2019s actual shape, not the most impressive tool available. An LLM is the right choice for open-ended reasoning. It\u2019s often the wrong choice for a task that a simpler model already solves well.',
    ],
  },
  {
    slug: 'building-for-code-mixed-languages',
    title: 'Building for code-mixed languages',
    excerpt:
      'Most NLP tooling assumes clean, single-language text. Real conversation in India rarely works that way.',
    category: 'Research',
    author: 'Neuralix Labs',
    date: '2026-02-18',
    tags: ['NLP', 'Hinglish', 'Low-resource'],
    content: [
      'A huge amount of everyday text in India \u2014 chats, comments, captions \u2014 mixes Hindi and English in the same sentence, often in the same word. Most off-the-shelf NLP tooling is trained on clean, single-language text and quietly breaks on this.',
      'This isn\u2019t a niche problem. It\u2019s the default way a large population actually writes. Treating it as an edge case means building tools that don\u2019t work for the people who\u2019d use them most.',
      'We think this is one of the more practical, underexplored directions in applied NLP right now: not chasing bigger models, but building tokenization, sentiment, and intent-classification approaches that take code-mixed text seriously as its own thing, rather than a broken version of English.',
      'It\u2019s slower, less glamorous work than fine-tuning the latest model on a benchmark. It\u2019s also the kind of work that actually changes whether a tool is usable for the person it was supposedly built for.',
    ],
  },
  {
    slug: 'the-case-for-visible-reasoning-in-rag',
    title: 'The case for visible reasoning in RAG',
    excerpt:
      'A retrieval-augmented system is only as trustworthy as your ability to check its work.',
    category: 'AI',
    author: 'Neuralix Labs',
    date: '2026-01-22',
    tags: ['RAG', 'Agents', 'Signal Graph'],
    content: [
      'Most retrieval-augmented generation demos show you a question and an answer. What they hide is the part that actually matters: how the system got from one to the other.',
      'That gap is fine for a demo. It\u2019s a real problem the moment someone needs to act on the answer. If a support assistant cites a policy, someone should be able to check the exact source without re-doing the research themselves.',
      'This is the idea behind Signal Graph, a framework we\u2019re building for composing agents that keep their retrieval and reasoning steps visible and source-attributed, instead of collapsing them into a single confident-sounding paragraph.',
      'It\u2019s more work to build a system that shows its steps than one that hides them. We think it\u2019s the difference between a tool people use once out of curiosity and one they actually rely on.',
    ],
  },
  {
    slug: 'our-five-step-process-in-practice',
    title: 'Our five-step process, in practice',
    excerpt:
      'Understand, research, design, build, evolve \u2014 what each step actually looks like on a real project.',
    category: 'Company',
    author: 'Neuralix Labs',
    date: '2025-12-10',
    tags: ['Process', 'Engineering culture'],
    content: [
      'We describe our process in five words \u2014 understand, research, design, build, evolve \u2014 because that\u2019s genuinely the order problems get solved in, not because it makes a tidy diagram.',
      'Understand means resisting the urge to start with a solution. Most of the times a project has gone sideways for us, it\u2019s because we jumped to "let\u2019s use a model for this" before we\u2019d actually pinned down what was broken.',
      'Research and design happen together more than the list suggests. The right architecture and the right interface tend to inform each other; designing one without the other usually means redoing both.',
      'Build happens in increments with something working at every stage, not one long sprint toward a single reveal. And evolve is the step people skip \u2014 treating launch as the finish line instead of the point where you actually start learning whether the thing works.',
    ],
  },
];
