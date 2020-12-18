import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import getGifs from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);



  const { data: images, loading } = useFetchGifs(category)

  const gridStyles = {
    width: "100",
    display: "grid",
    gridTemplateColumns: "auto auto auto",
  };

  return (
    <div style={gridStyles}>
      { loading && '...Cargando'}
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};

export default GifGrid;
