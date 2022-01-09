/** @format */

import { useEffect, useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { createItem, getItem, updateItem } from "../InventoryUtils";
import { Link, withRouter } from "react-router-dom";

const ItemEdit = (props) => {
  const [item, setItem] = useState();
  const [isAdding, setIsAdding] = useState(false);

  const fetchItem = () => {
    getItem(props.match.params.id).then((response) => {
      setItem(response.data);
    });
  };

  const initItem = () => {
    const newItem = {
      productName: "",
      quantity: 0,
      price: 0,
      createdAt: "",
    };
    setItem(newItem);
  };

  useEffect(() => {
    if (props.match.params.id !== "new") {
      fetchItem();
      setIsAdding(false);
    } else {
      initItem();
      setIsAdding(true);
    }
    console.log(props);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isAdding) {
      createItem(item).then((response) => {
        props.history.push("/inventory");
      });
    } else {
      updateItem(props.match.params.id, item).then((response) => {
        props.history.push("/inventory");
      });
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let updatedItem = { ...item };
    updatedItem[name] = value;
    setItem(updatedItem);
  };

  return (
    <div>
      <Container>
        {item && item.id ? (
          <h2>{item.id ? "Edit Inventory Item" : "Add Inventory Item"}</h2>
        ) : (
          <></>
        )}
        {item ? (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="productName">Product Name</Label>
              <Input
                type="text"
                name="productName"
                id="productName"
                defaultValue={item.productName || ""}
                onChange={handleChange}
                autoComplete="productName"
              />
            </FormGroup>
            <FormGroup>
              <Label for="quantity">Quantity</Label>
              <Input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={item.quantity || ""}
                onChange={handleChange}
                autoComplete="quantity"
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                type="number"
                name="price"
                id="price"
                defaultValue={item.price || ""}
                onChange={handleChange}
                autoComplete="price"
              />
            </FormGroup>
            <FormGroup>
              <Label for="createdAt">Created At</Label>
              <Input
                type="text"
                name="createdAt"
                id="createdAt"
                defaultValue={item.createdAt || ""}
                onChange={handleChange}
                autoComplete="createdAt"
              />
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">
                {isAdding ? "Add" : "Save"}
              </Button>{" "}
              <Button color="secondary" tag={Link} to="/inventory">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default withRouter(ItemEdit);
