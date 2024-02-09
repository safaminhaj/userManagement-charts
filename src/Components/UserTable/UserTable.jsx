import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";

import "primeicons/primeicons.css";
import "./UserTable.css";

export const UserTable = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 3,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 4,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 5,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 6,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 7,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 8,
      name: "Jane Doe",
      username: "janedoe",
      email: "janedoe@example.com",
      profilePicture: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
  ];

  const usernameBodyTemplate = (rowData) => {
    return (
      <div className="user-info">
        <img
          src={rowData.profilePicture}
          alt={rowData.username}
          style={{
            width: "50px",
            marginRight: "10px",
            verticalAlign: "middle",
            borderRadius: "50px",
          }}
        />
        <span>{rowData.username}</span>
      </div>
    );
  };
  const startContent = (
    <React.Fragment>
      <Button icon="pi pi-plus" className="mr-2" />
    </React.Fragment>
  );

  const endContent = (
    <span>
      <InputText type="search" placeholder="Search" />
    </span>
  );
  return (
    <div className="user-table">
      <Toolbar start={startContent} end={endContent} />
      <DataTable value={users}>
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Name" sortable></Column>
        <Column header="Username" body={usernameBodyTemplate} sortable></Column>
        <Column field="email" header="Email" sortable></Column>
      </DataTable>
    </div>
  );
};
