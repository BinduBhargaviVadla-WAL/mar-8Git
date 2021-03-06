import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';

const Pagination = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Price",
      selector: (row) => row.price,
    },
  ];
  return (<div>
    <h1>Pagination</h1>
    <DataTable columns={columns} data={data} pagination />
    </div>);
};
export default Pagination;