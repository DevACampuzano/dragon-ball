import { useState, useEffect } from "react";
import axios from "axios";
//test
export default () => {
  const [data, setData] = useState({
    items: [],
    meta: {
      totalItems: 0,
      itemCount: 0,
      itemsPerPage: 0,
      totalPages: 0,
      currentPage: 1,
    },
    links: {
      first: "",
      previous: "",
      next: "https://dragonball-api.com/api/characters",
      last: "",
    },
  });
  const [loading, setLoading] = useState(true);

  const obtenerData = async (back = false) => {
    let url = data.links.next;
    if (back) {
      url = data.links.previous;
    }
    console.log(url);
    setLoading(true);
    const res = await axios(url);
    setData(res.data);
  };

  useEffect(() => {
    if (data.items.length === 0) {
      obtenerData();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [data]);
  return {
    loading,
    data,
    obtenerData,
  };
};
