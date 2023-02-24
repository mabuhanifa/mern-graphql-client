import { gql, useQuery } from "@apollo/client";
import React from "react";
import ClientRow from "./ClientRow";

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
  if (loading) return <p>Loading</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
                data.clients.map(client =>(
                    <ClientRow key={client.id} client={client}/>
                ))
            }
          </tbody>
        </table>
      )}
    </>
  );
}
