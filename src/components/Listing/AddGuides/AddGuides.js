import React, { useRef } from "react";

const AddService = () => {
  const imageRef = useRef();
  const titleRef = useRef();
  const sub_titleRef = useRef();

  const handleItems = async (e) => {
    const image = imageRef.current.value;
    const title = titleRef.current.value;
    const sub_title = sub_titleRef.current.value;

    const newItem = { image, title, sub_title };
    fetch("https://grisly-fangs-84788.herokuapp.com/guides", {
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
            ref={sub_titleRef}
            className="form-control  w-25 mx-2"
            type="text"
            placeholder="Sub-Title"
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
