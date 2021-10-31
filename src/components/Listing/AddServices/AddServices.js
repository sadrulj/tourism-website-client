import React, { useRef } from "react";

const AddService = () => {
  const imageRef = useRef();
  const titleRef = useRef();
  const typeRef = useRef();
  const ratingRef = useRef();
  const priceRef = useRef();

  const handleItems = async (e) => {
    const image = imageRef.current.value;
    const title = titleRef.current.value;
    const type = typeRef.current.value;
    const rating = ratingRef.current.value;
    const price = priceRef.current.value;

    const newItem = { image, title, type, rating, price };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    e.preventDefult();
  };

  return (
    <div>
      <form onSubmit={handleItems}>
        <div className="d-flex justify-content-center">
          <input
            ref={imageRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Image URL"
          />
          <input
            ref={titleRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Title"
          />
          <input
            ref={typeRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Type"
          />
          <input
            ref={ratingRef}
            className="form-control  w-25 mx-2"
            type="number"
            placeholder="Rating"
          />
          <input
            ref={priceRef}
            className="form-control  w-25 mx-2"
            type="number"
            placeholder="price"
          />
          <input
            className="btn btn-primary mx-2"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
