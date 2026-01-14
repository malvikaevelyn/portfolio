import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Project = {
  id: string;
  title: string;
  description?: string;
  youtube?: string;
  instagram?: string;
  audio?: string;
  video?: string;
  slides?: string[];
  content?: string;
};

const projectsDir = path.join(process.cwd(), 'content', 'commercial-projects');

export function getAllCommercialProjects(): Project[] {
  const files = fs.readdirSync(projectsDir);
  const projects: Project[] = files
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const fullPath = path.join(projectsDir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(raw);
      return { ...(data as any), content } as Project;
    });
  console.log('Loaded commercial projects:', projects.length, projects.map(p => p.id));
  return projects;
}

export function getCommercialProjectById(id: string): Project | undefined {
  const projects = getAllCommercialProjects();
  return projects.find((p) => p.id === id);
}
