import React from 'react';

interface PaginationProps {
  total: number;
  prePage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  total,
  prePage,
  currentPage,
  onPageChange,
}) => {
  const totalPage = Math.ceil(total / prePage);

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled="true"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </a>
      </li>
      {Array.from({ length: totalPage }, (_, index) => index + 1).map(page => (
        <li
          key={page}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`?page=${page}`}
            onClick={e => {
              e.preventDefault();
              onPageChange(page);
            }}
          >
            {page}
          </a>
        </li>
      ))}
      <li className="page-item active">
        <a data-cy="pageLink" className="page-link" href="#1">
          1
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#2">
          2
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#3">
          3
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#4">
          4
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#5">
          5
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#6">
          6
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#7">
          7
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#8">
          8
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#9">
          9
        </a>
      </li>
      <li className="page-item">
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled="false"
        >
          »
        </a>
      </li>
    </ul>
  );
};
