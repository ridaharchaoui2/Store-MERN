import React from "react";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import productsFace from "../data";

function Home() {
  return (
    <>
      <div className="m-7">
        <div className="bg-white rounded-[50px] p-6 w-10/12 mx-auto">
          <Hero />
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl capitalize mt-5">
            legends never die
          </h1>
          <Grid products={productsFace} />
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl capitalize mt-5">
            legends never die
          </h1>
          <Grid products={productsFace} />
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl capitalize mt-5">
            legends never die
          </h1>
          <Grid products={productsFace} />
        </div>
      </div>
    </>
  );
}

export default Home;
