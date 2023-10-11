import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const totalWorkers = 1000;
const workersPerPage = 9;

const generateWorkers = () => {
  const workers = [];
  for (let i = 1; i <= totalWorkers; i++) {
    workers.push({
      id: i,
      name: `Worker ${i}`,
      country: `Country ${i}`,
      lastname: `Lastname ${i}`,
      email: `worker${i}@example.com`,
      phone: `123456789${i}`,
    });
  }
  return workers;
};

const AssistantsTableHead = [
  "Name",
  "Country",
  "Lastname",
  "Email",
  "Phone Number"
];

const renderAssistantsTableHead = (item, index) => <th key={index}>{item}</th>;

const renderAssistantsTableBody = (item) => (
  <tr key={item.id}>
    <td><Link to="/profile">{item.name}</Link></td>
    <td>
      <Link to="/profile">{item.country}</Link>
    </td>
    <td>
      <Link to="/profile">{item.lastname}</Link>
    </td>

    <td>
      <Link to="/profile">{item.email}</Link>

    </td>

    <td>
      <Link to="/profile">{item.phone}</Link>
    </td>
    <Outlet />
  </tr>
);

const Assistants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const generatedWorkers = generateWorkers();
      setWorkers(generatedWorkers);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const totalPageCount = Math.ceil(totalWorkers / workersPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * workersPerPage;
  const endIndex = Math.min(startIndex + workersPerPage, totalWorkers);
  const visibleWorkers = workers.slice(startIndex, endIndex);

  return (
    <section>
      <h2 className="page-header">Assistants</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <main>
              <div className="user-table">
                <table>
                  <thead>
                    <tr>
                      {AssistantsTableHead.map((item, index) => renderAssistantsTableHead(item, index))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleWorkers.map((user) => renderAssistantsTableBody(user))}
                  </tbody>
                </table>
                <div className="pagination">
                  <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPageCount}
                  </span>
                  <button onClick={handleNextPage} disabled={currentPage === totalPageCount}>
                    Next
                  </button>
                </div>
                <div className="total-length">Total Workers: {totalWorkers}</div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistants;
