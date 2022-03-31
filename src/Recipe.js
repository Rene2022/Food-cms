import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "./client";
import React from "react";

export default function Recipe() {
  const [foodItem, setFoodItem] = useState({});
  const { recipeid } = useParams();

  useEffect(() => {
    client
      .getEntry(recipeid)
      .then((entry) => setFoodItem(entry))
      .catch(console.error);
  }, [recipeid]);

  return (
    <div className="container">
      {foodItem.fields ? <h1>{foodItem.fields.title}</h1> : ""}
      {foodItem.fields ? <h5>{foodItem.fields.ingredients1}</h5> : ""}
      {foodItem.fields ? <h5>{foodItem.fields.instructions}</h5> : ""}
      {foodItem.fields ? <img
        src={`https://${foodItem.fields.picture.fields.file.url}`}
        alt="item"
      /> : ""}

    </div>
  );
}