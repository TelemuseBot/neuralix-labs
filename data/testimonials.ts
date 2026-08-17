export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string; // path under /public, e.g. '/clients/acme.svg'
}

// Add real client testimonials here as they come in. The section that
// renders this (components/sections/Testimonials.tsx) automatically
// hides itself when this array is empty, so it's safe to ship now.
export const testimonials: Testimonial[] = [];
