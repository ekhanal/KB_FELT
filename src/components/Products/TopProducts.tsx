// src/App.tsx
import React from "react";
import ProductCard from "../card/ProductCard";

import { dummyData } from "../data/Data";

const TopProducts: React.FC = () => {
  return <ProductCard data={dummyData} heading="Top products" />;
};

export default TopProducts;
