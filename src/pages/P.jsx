import React, { useState, useMemo, useEffect, useRef } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import Pagination from "./pagination";
// import data from "./ mock-data.json";

let PageSize = 10;

const P = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  const totalCount = useRef(0);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        PageSize - 10
      }&_end=${currentPage * PageSize}`
    )
      .then((res) => {
        totalCount.current = res.headers.get("x-total-count");
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, [currentPage]);

  console.log(totalCount.current);
  return (
    <div className="bg-info vh-100">
      <Container>
        {currentTableData?.map((item) => {
          return (
            <>
              <Row className="mb-2 bg-success">
                <Col>{item.title}</Col>
              </Row>
              <Row>
                <Col>{item.body}</Col>
              </Row>
            </>
          );
        })}
        <Pagination
          currentPage={currentPage}
          totalCount={totalCount?.current}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    </div>
  );
};

export default P;
