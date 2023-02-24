import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  console.log(data);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Something went wrong</p>;
  return <div>{!loading && !error && <h1>Clients</h1>}</div>;
}
