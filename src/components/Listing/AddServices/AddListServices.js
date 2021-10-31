import React, { useEffect, useState } from "react";
import axios from "axios";
import AddService from "./AddServices";

const Service = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const result = await axios.get(
      "https://grisly-fangs-84788.herokuapp.com/services"
    );
    setItems(result.data);
  };

  const handleDeleteItem = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://grisly-fangs-84788.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Item Deleted Successfully");
            const remainingItems = items.filter((item) => item._id !== id);
            setItems(remainingItems);
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="shadow rounded-3 p-3 my-3 bg-body">
        <AddService></AddService>
      </div>
      <div className="shadow rounded-3 p-3 bg-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">type</th>
              <th scope="col">Rating</th>
              <th scope="col">Price</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <th scope="row">{index + 1}</th>
                <td>{item._id}</td>
                <td>{item.image}</td>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.rating}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Service;
