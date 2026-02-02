import React from "react";
import Hero from "../components/Hero";
import Grid from "../components/Grid";
import productsFace from "../data";
import { useGetProductsQuery } from "../slices/productSlice";

function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  // High-end Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-zinc-800 border-t-orange-500 rounded-full animate-spin"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-black animate-pulse">
            Loading Collection
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-10">
        <div className="text-center border border-red-500/20 bg-red-500/5 p-10">
          <p className="text-red-500 uppercase tracking-widest text-xs font-bold">
            Error Accessing Archive
          </p>
          <p className="text-zinc-500 text-[10px] mt-2">{error.message}</p>
        </div>
      </div>
    );
  }
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
          <Grid products={products} />
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl capitalize mt-5">
            legends never die
          </h1>
          <Grid products={products} />
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-3xl capitalize mt-5">
            legends never die
          </h1>
          <Grid products={products} />
        </div>
      </div>
    </>
  );
}

export default Home;
