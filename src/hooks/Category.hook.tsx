import { useQuery } from "@tanstack/react-query";
import { get } from "../api/client";

const TEST_QUERY = {
  test: "test",
};

export const useGetAllCategory = () => {
  return useQuery({
    queryKey: [TEST_QUERY.test],
    queryFn: () => get({ url: "api/v1/product/all/categories/" }),
  });
};
