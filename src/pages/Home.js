import React from "react";
import AddClientModal from "../components/AddClientModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div>
      <div className="d-flex gap-3 mb-3">
        <AddClientModal />
      </div>
      <Projects />
      <Clients />
    </div>
  );
}
