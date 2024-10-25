import { useEffect, useState } from "react";
import getUsers, { User } from "./mockAPI";
import { Table } from "./Table";

function getKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [cols, setCols] = useState<(keyof User)[]>([]);
  const [page, setPage] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(5);

  useEffect(() => {
    const { data: users } = getUsers(page, itemCount);
    setUsers(users);
    const cols = getKeys(users[0]).filter(
      (key) => key !== "id" && key !== "address"
    );
    setCols(cols);
  }, [page, itemCount]);

  const updatePageNumber = (page: number): void => {
    setPage(page);
  };

  const updateItemCount = (count: number): void => {
    console.log({ count });
    setItemCount(count);
  };

  return (
    <div>
      <Table<User>
        cols={cols}
        rows={users}
        updatePageNumber={updatePageNumber}
        updateItemCount={updateItemCount}
      />
    </div>
  );
}
export default App;
