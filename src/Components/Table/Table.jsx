import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import "./Table.css";

export const Table = () => {
  const products = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1003",
      code: "f430fh0g3",
      name: "Bamboo Clock",
      description: "Product Description",
      image: "bamboo-watch.jpg",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
  ];
  return (
    <div className="table ">
      <Card className="table-card">
        <DataTable className="data-table" value={products}>
          <Column
            field="code"
            header="Code"
            sortable
            // style={{ width: "20%" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            // style={{ width: "20%" }}
          ></Column>
          <Column
            field="category"
            header="Category"
            sortable
            // style={{ width: "20%" }}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            sortable
            // style={{ width: "20%" }}
          ></Column>
        </DataTable>
      </Card>
    </div>
  );
};
