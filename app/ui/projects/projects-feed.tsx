"use client";

import { useState } from "react";
import ProjectCard from "@/app/ui/projects/project-card";
import { EmptyState } from "../empty-state";
import { Project } from "@/app/lib/definitions";

interface SearchAndFilterBarProps {
  searchQuery: any;
  setSearchQuery: any;
  filter: any;
  setFilter: any;
  sort: any;
  setSort: any;
}

function SearchAndFilterBar({ searchQuery, setSearchQuery, filter, setFilter, sort, setSort }: SearchAndFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Bar */}
      <div className="flex-grow basis-1/2">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Dropdown */}
      <div className="w-full sm:w-32">
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Projects</option>
          {/* <option value="recent">Most Recent</option> */}
          {/* <option value="tech">Technology</option> */}
          {/* <option value="category">Category</option> */}
        </select>
      </div>

      {/* Sort Dropdown */}
      <div className="w-full sm:w-32">
        <select
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by</option>
          {/* <option value="recent">Most Recent</option> */}
        </select>
      </div>
    </div>
  );
}

interface ProjectsFeedProps {
  allProjects: Project[];
}

export default function ProjectsFeed({ allProjects }: ProjectsFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  // You can implement filtering logic here
  const filteredProjects = allProjects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchAndFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className="space-y-6">
        {allProjects.length === 0 ? (
          <EmptyState message="No projects featured yet">
            <p className="mt-1 text-sm text-gray-500">View my GitHub at:
              <span className="text-blue-500">
                <a href="https://github.com/colbychaskell"> github.com/colbychaskell</a>
              </span>
            </p>
          </EmptyState>
        ) : (
          filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))
        )}
      </div>
    </>
  );
}
