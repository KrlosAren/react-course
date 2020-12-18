import React, { useState } from "react";
import AddCategories from "./components/AddCategories";
import GifGrid from "./components/GifGrid";

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategories setCategories={setCategories} />
      <hr />

      <ol >
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};

export default GiftExpertApp;
