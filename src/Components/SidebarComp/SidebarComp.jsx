import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "./SidebarComp.css";

export const SidebarComp = () => {
  return (
    <div className="sidebar card flex justify-content-center">
      <h3>Menu</h3>
      <Button
        icon="pi pi-home"
        className="mx-2 my-4"
        style={{
          color: "black",
          background: "none",
          border: "none",
        }}
      />
      <Button
        icon="pi pi-calendar"
        className="mx-2 my-4"
        style={{
          color: "black",
          background: "none",
          border: "none",
        }}
      />
      <Button
        icon="pi pi-envelope"
        className="mx-2 my-4"
        style={{
          color: "black",
          background: "none",
          border: "none",
        }}
      />
      <Button
        icon="pi pi-cog"
        className="mx-2 my-4"
        style={{
          color: "black",
          background: "none",
          border: "none",
        }}
      />
      {/* ...other buttons/icons */}
    </div>
  );
};
