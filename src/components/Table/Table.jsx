import React, { useState } from "react";

import "./table.css";

const Table = ({ limit, headData, renderHead, bodyData, renderBody }) => {
  const initialData =
    limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;

  const [dataShow, setDataShow] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(0);

  let noOfPages = 1;
  let range = [];

  if (limit !== undefined) {
    let pages = Math.floor(bodyData.length / Number(limit));
    noOfPages = bodyData.length % Number(limit) === 0 ? pages : pages + 1;
    range = [...Array(noOfPages).keys()];
  }

  const selectPage = (page) => {
    let start = Number(limit) * page;
    let end = start + Number(limit);

    setDataShow(bodyData.slice(start, end));
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          {bodyData && renderBody ? (
            <tbody>
              {dataShow.map((item, index) => renderBody(item, index))}
            </tbody>
          ) : null}
        </table>
      </div>
      {noOfPages > 1 ? (
        <div className="table-pagination">
          {range.map((item, index) => (
            <div
              key={index}
              className={`table-pagination-item ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Table;
