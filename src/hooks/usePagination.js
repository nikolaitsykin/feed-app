import { useState } from "react";

export const usePagination = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [pagesArray, setPagesArray] = useState([]);

  const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
  };

  const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
  };
  

  return [
    totalPages,
    limit,
    page,
    pagesArray,
    getPageCount,
    getPagesArray,
    setTotalPages,
    setPage,
    setPagesArray,
  ];
};
