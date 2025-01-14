// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type Post = {
  title: string;
  date: string;
  preview: string;
  slug: string;
};

export type Project = {
  title: string;
  status: string;
  tech: string[];
  description: string;
  link: string;
  preview: string;
};

export type Experience = {
  title: string;
  subtitle: string;
  date: string;
  children: string[];
  link: string;
};

export type SocialLink = {
  href: string;
  ariaLabel: string;
  icon: string;
};
