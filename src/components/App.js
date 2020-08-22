import React from "react";

import { useBreeds } from "../catalog";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function App() {
  const { breeds, loading } = useBreeds();
  return loading ? ( <p>Loading...</p>) : (
    <>
      <Header />
      <Main breeds={breeds} />
      <Footer />
    </>
  );
}
