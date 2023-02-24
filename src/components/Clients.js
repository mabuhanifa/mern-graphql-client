import { gql } from "@apollo/client";
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
  return <div>Clients</div>;
}
