import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export interface Document {
  id: string
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  filename: string;
  glow: string;
  gradient: string;
  icon: LucideIcon | IconType;
  meta: string[];
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export interface Project {
  title: string,
  desc: string,
  impact: string,
  tags: string[],
  features: string[],
  icon: IconType | LucideIcon,
  gradient: string,
  glow: string,
  githubUrl?: string,
  liveUrl?: string,
}

export interface ContactDetails {
  icon: IconType | LucideIcon,
  label: string,
  value: string,
  href: string,
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export type TimelineType =
  | "education"
  | "work"
  | "milestone";

export interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  type: TimelineType;
}