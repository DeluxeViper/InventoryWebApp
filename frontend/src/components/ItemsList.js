/** @format */

import { useEffect, useState } from "react";
import { ButtonGroup, Button, Table } from "reactstrap";
import { getItems, deleteItem } from "../InventoryUtils";
import { Link } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import { CSVLink } from "react-csv";

const ItemsList = () => {
  const [items, setItems] = new useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    getItems().then((response) => {
      setItems(response.data);
    });
  };

  const removeItem = (id) => {
    deleteItem(id).then((response) => {
      let updatedItems = [...items].filter((item) => item.id !== id);
      setItems(updatedItems);
    });
  };

  return (
    <div>
      <AppNavBar />
      <Button color="success" tag={Link} to="/items/new">
        Add Inventory Item
      </Button>
      <CSVLink data={items}>Export to CSV</CSVLink>
      <Table>
        <thead>
          <tr>
            <th width="30%">Product Name</th>
            <th width="10%">Quantity</th>
            <th width="10%">Price</th>
            <th width="50%">Created At</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.productName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.createdAt}</td>
              <td>
                <ButtonGroup>
                  <Button
                    size="sm"
                    color="primary"
                    tag={Link}
                    to={"/items/" + item.id}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemsList;
