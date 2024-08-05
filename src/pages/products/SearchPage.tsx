import React from "react";
import { useParams } from "react-router-dom";
import ProductCategoryCard from "../../components/card/ProductCategoryCard";
import { useGetAllSearchData } from "../../hooks/product.hook";

// Define a type or interface for the expected params
// interface RouteParams {
//   searchTerm: string;
//   [key: string]: string | undefined; // Index signature for additional params
// }

const SearchPage: React.FC = () => {
  // Destructure searchTerm from useParams<RouteParams>()
  // const { searchTerm }: RouteParams = useParams<RouteParams>();
  const { searchTerm } = useParams<{ searchTerm: string }>();

  // Ensure searchTerm is defined
  if (!searchTerm) {
    return <div>Loading...</div>; // or handle the case where searchTerm is undefined
  }

  // Use the custom hook to fetch the search data
  const { data: search } = useGetAllSearchData({ searchTerm });

  return (
    <>
      <div className="my-5 px-5 lg:px-20">
        <h1 className="text-xl font-semibold my-2">
          Search Results for: {searchTerm}
        </h1>
        {search == null ? (
          <>
            <span>Search result not found</span>
          </>
        ) : (
          <>
            <ProductCategoryCard data={search} heading="Motors" />
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;
