"use client";

import Pagination from "./pagination/pagination";
import ProductCard from "./product";

const Posts = ({ items, currentPage }) => {
  return (
    <div className="page">
      <ul className="product-list">
        {items.map(({ id, urlImage }) => (
          <li className="product-item" key={id}>
            <ProductCard id={id} urlImage={urlImage} />
          </li>
        ))}
      </ul>

      <Pagination currentPage={currentPage} />
    </div>
  );
};

export default Posts;
