import { useQuery } from "@apollo/client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "./queries/projectQueries";
import Spinner from "./Spinner";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>
      {data.projects.length > 0 ? (
        <div>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </div>
  );
}
