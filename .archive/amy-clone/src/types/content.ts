/** Content shapes for the amyfoodjournal.com homepage clone. */

export interface ResponsiveImage {
  /** Default `src` (the 800w variant on the target where one exists). */
  src: string;
  /** Candidate list exactly as served by the target, or undefined for single-size assets. */
  srcSet?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface FeatureCard {
  image: ResponsiveImage;
  title: string;
}

export interface YouTubeVideo {
  /** Watch URL, including any `t` parameter used on the target. */
  href: string;
  /** Locally rehosted hqdefault thumbnail. */
  thumbnail: string;
  alt: string;
}

export interface InstagramPost {
  href: string;
  image: ResponsiveImage;
  /** Inline `max-width` the target applies to each post, in px. */
  maxWidth: number;
}

export interface CatPhoto {
  image: ResponsiveImage;
  /** Absolute position within the 350×502 collage, as Tailwind classes. */
  position: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface NavLink {
  label: string;
  href: string;
}
