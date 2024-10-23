import React, { useState } from 'react';

export default function P3() {
  const [cat, setCat] = useState("");
  const [Cname, setCname] = useState("");
  const [price, setPrice] = useState("");
  const [prodactdetail, setPd] = useState("");
  const [name, setname] = useState("");
  const [rating, setRating] = useState("");
  const [error, setError] = useState("");

  const handleRatingChange = (e) => {
    const value = e.target.value;
    if (value > 5) {
      setError("Rating must be between 1 and 5");
    } else {
      setError(""); 
    }
    setRating(value);
  };

  return (
    <div>
      <h1 style={{ color: 'black' }}>DaynamicFormCom</h1>
      <form>
        <input
          type="text"
          placeholder="Enter a company name"
          onChange={(e) => setCname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter a price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter a detail of product"
          onChange={(e) => setPd(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter a name"
          onChange={(e) => setname(e.target.value)}
          required
        />

        <select onClick={(e) => setCat(e.target.value)}>
          <option hidden>Category</option>
          <option value="Mobile">Mobile</option>
          <option value="Leptop">Leptop</option>
          <option value="TebLate">TebLate</option>
          <option value="Air-Phone">Air-Phone</option>
        </select>

        {cat === "Mobile" && (
          <div>
            <input type="text" placeholder="Enter a company" required />
            <input type="text" placeholder="Enter a storage" required />
            <input
              type="text"
              placeholder="Enter a rating out of 5"
              value={rating}
              onChange={handleRatingChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" placeholder="Enter a warranty" required />
          </div>
        )}
        {cat === "Leptop" && (
          <div>
            <input type="text" placeholder="Enter a company" required />
            <input type="text" placeholder="Enter a storage" required />
            <input type="text" placeholder="Enter a processor" required />
            <input type="text" placeholder="Enter a processor generation" required />
            <input
              type="text"
              placeholder="Enter a rating out of 5"
              value={rating}
              onChange={handleRatingChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" placeholder="Enter a warranty" required />
          </div>
        )}
        {cat === "TebLate" && (
          <div>
            <input type="text" placeholder="Enter a company" required />
            <input type="text" placeholder="Enter a storage" required />
            <input
              type="text"
              placeholder="Enter a rating out of 5"
              value={rating}
              onChange={handleRatingChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input type="text" placeholder="Enter a warranty" required />
          </div>
        )}
        {cat === "Air-Phone" && (
          <div>
            <input type="text" placeholder="Enter a company" required />
            <input type="text" placeholder="Enter a color" required />
            <input  type="text" placeholder="Enter a warranty"  required />
            <input  type="text"
              placeholder="Enter a rating out of 5"
              value={rating}
              onChange={handleRatingChange}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
