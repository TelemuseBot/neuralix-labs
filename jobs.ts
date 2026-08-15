export interface Job {
  role: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  description: string;
}

// No open roles right now. The structure below is ready to populate
// whenever a real position opens — the Careers page renders an honest
// empty state when this array is empty, rather than fabricating listings.
export const jobs: Job[] = [];
