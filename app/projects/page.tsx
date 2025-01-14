import ProjectsFeed from '../ui/projects/projects-feed';
import { fetchProjects } from '@/app/lib/data';
import { EmptyState } from '../ui/empty-state'

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8">projects</h1>
      <ProjectsFeed initialProjects={projects} />
    </div>
  );
}
