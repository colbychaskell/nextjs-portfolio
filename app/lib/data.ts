import {
  Post,
  Project,
  Experience,
} from './definitions';

import { experienceData, posts, projects, socialLinks } from './placeholder-data';

export async function fetchExperience() {
  return experienceData;
}

export async function fetchPosts() {
  return posts;
}

export async function fetchProjects() {
  return projects;
}

export function fetchSocialLinks() {
  return socialLinks;
}