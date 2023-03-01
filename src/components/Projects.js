import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "./queries/projectQueries";
import Spinner from "./Spinner";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <div>{data.projects.length > 0 ? <div>
        {
          data.projects.map((project)=>(
            <div></div>
          ))  
        }
    </div> : <p>No Projects</p>}</div>
  );
}
