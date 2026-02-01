import React from "react";
import ProductGrid from "./ProductGrid";

function Grid({ products }) {
  return (
    <>
      <div className="mt-8 p-7">
        {products.map((product) => (
          <ProductGrid product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Grid;
