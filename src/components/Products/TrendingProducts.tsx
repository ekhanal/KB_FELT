import React from "react";
import ProductCard from "../card/ProductCard";

import { dummyData } from "../data/Data";
const TrendingProducts: React.FC = () => {
  return <ProductCard data={dummyData} heading="Trending Products" />;
};

export default TrendingProducts;
