import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CLIENTS } from "./clientQueries";
import ClientRow from "./ClientRow";



export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <p>Loading</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="container">
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
    </div>
  );
}
