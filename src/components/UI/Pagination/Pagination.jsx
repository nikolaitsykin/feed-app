import React from "react";

const Pagination = ({ page, changePage, pages }) => {

  return (
    <div className="page__wrapper">
      {pages.map((p) => (
        <span
          onClick={() => changePage(p)}
          className={page === p ? "page page__current" : "page"}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
