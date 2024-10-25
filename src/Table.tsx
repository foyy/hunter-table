import React, { useEffect, useState } from "react";

export function Table<T>({
  cols,
  rows,
  updatePageNumber,
  updateItemCount,
}: {
  cols: (keyof T)[];
  rows: T[];
  updatePageNumber: (page: number) => void;
  updateItemCount: (itemCount: number) => void;
}): React.ReactElement {
  const [sortColumn, setSortColumn] = useState<keyof T>(cols[0]);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [sortedRows, setSortedRows] = useState<T[]>(rows);

  const TableHeader = (): JSX.Element => {
    return (
      <tr>
        {cols.map((headerKey) => {
          const headerString = String(headerKey);
          return (
            <th
              key={headerString}
              onClick={() => {
                setSortColumn(headerKey);
                setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
              }}
            >
              {headerString}
            </th>
          );
        })}
      </tr>
    );
  };

  const TableRow = (row: T): JSX.Element => {
    return (
      <tr>
        {cols.map((headerKey) => {
          const rowVal = row[headerKey];
          return <td key={String(headerKey)}>{String(rowVal)}</td>;
        })}
      </tr>
    );
  };

  useEffect(() => {
    const sortedRows = [...rows].sort((a, b) => {
      const aVal = String(a[sortColumn]).toLowerCase();
      const bVal = String(b[sortColumn]).toLowerCase();
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
    setSortedRows(sortedRows);
  }, [sortColumn, sortDirection, rows]);

  const cleanInput = (val: string | null): number => {
    if (val === null) return 1;
    const num = Number(val);
    return num > 0 ? num : 1;
  };

  return (
    <div className="table-display">
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <TableRow key={index} {...row} />
          ))}
        </tbody>
      </table>
      <div className="table-buttons">
        <div className="table-input">
          <span>Page Number</span>
          <input
            type="number"
            onChange={(e) => updatePageNumber(cleanInput(e?.target?.value))}
          />
        </div>
        <div className="table-input">
          <span>Item Count</span>
          <input
            type="number"
            onChange={(e) => updateItemCount(cleanInput(e?.target?.value))}
          />
        </div>
      </div>
    </div>
  );
}
