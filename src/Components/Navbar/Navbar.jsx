import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import "./Navbar.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "/node_modules/primeflex/primeflex.css";

export const Navbar = () => {
  const itemRenderer = (item) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items = [
    {
      label: "Projects",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://img.logoipsum.com/296.svg"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2 ">
      <Button
        icon=" pi pi-search"
        style={{
          color: "black",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
        }}
      />
      <Button
        icon=" pi pi-bell"
        style={{
          color: "black",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
        }}
      />
      <Button
        icon=" pi pi-ellipsis-v"
        style={{
          color: "black",
          background: "none",
          border: "none",
          fontSize: "1.5rem",
        }}
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar className="h-20" model={items} start={start} end={end} />
    </div>
  );
};
