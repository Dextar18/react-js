import React, { useState } from "react";

export default function Filter() {
  const [filtered, setFiltered] = useState("all");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const data = [
    { id: 1, name: "iPhone", category: "mobile", price: 999 },
    { id: 2, name: "MacBook", category: "laptop", price: 1299 },
    { id: 3, name: "Samsung Galaxy", category: "mobile", price: 799 },
    { id: 4, name: "Dell XPS", category: "laptop", price: 1099 },
    { id: 5, name: "OnePlus", category: "mobile", price: 699 },
    { id: 6, name: "HP Pavilion", category: "laptop", price: 899 },
  ];

  const filteredData =
    filtered === "all" ? data : data.filter((item) => item.category === filtered);

  const searchedData = filteredData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...searchedData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div>
      <div>
        <label>
          Search:
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Filter by category:
          <select value={filtered} onChange={(e) => setFiltered(e.target.value)}>
            <option value="all">All</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Sort by price:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
      <ul>
        {sortedData.map((item) => (
          <li key={item.id}>
            {item.name} 
             {item.category}  
             ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
