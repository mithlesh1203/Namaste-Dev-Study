// ...existing code...
import React, { useEffect } from "react";

const foodItemExample = [
  {
    id: "12345",
    name: "Sample Food Item",
    imageId: "sample-image-id",
    price: 2500,
    rating: 4.4,
    description: "This is a sample description of the food item.",
  },
  {
    id: "67890",
    name: "Another Food Item",
    imageId: "another-image-id",
    price: 1500,
    rating: 4.5,
    description: "This is another sample description of a different food item.",
  },
  {
    id: "11223",
    name: "Third Food Item",
    imageId: "third-image-id",
    price: 3000,
    rating: 4.7,
    description: "This is the third sample description of a food item.",
  },
  {
    id: "44556",
    name: "Fourth Food Item",
    imageId: "fourth-image-id",
    price: 1800,
    rating: 3.9,
    description: "This is the fourth sample description of a food item.",
  },
  {
    id: "77889",
    name: "Fifth Food Item",
    imageId: "fifth-image-id",
    price: 2200,
    rating: 4.2,
    description: "This is the fifth sample description of a food item.",
  },
  {
    id: "99001",
    name: "Sixth Food Item",
    imageId: "sixth-image-id",
    price: 2700,
    rating: 4.5,
    description: "This is the sixth sample description of a food item.",
  },
  {
    id: "22334",
    name: "Seventh Food Item",
    imageId: "seventh-image-id",
    price: 3200,
    rating: 4.8,
    description: "This is the seventh sample description of a food item.",
  },
  {
    id: "55667",
    name: "Eighth Food Item",
    imageId: "eighth-image-id",
    price: 2000,
    rating: 4.1,
    description: "This is the eighth sample description of a food item.",
  },
];

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "10px",
  overflow: "hidden",
  background: "#fff",
  margin: "10px",
  width: "220px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
};

const imageStyle = {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  display: "block",
};

const contentStyle = {
  padding: "10px",
};

const footerRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "8px",
};

const ratingStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  background: "#f2f8f2",
  color: "#2e7d32",
  padding: "4px 6px",
  borderRadius: "6px",
  fontWeight: 600,
  fontSize: "0.9rem",
};

const BodyTemplate = () => {
  const [foodItems, setFoodItems] = React.useState([]);
  useEffect(() => {
    setFoodItems(foodItemExample);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responce = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await responce.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Body Component</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {foodItems.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img
              src={`https://picsum.photos/536/354`}
              alt={item.name}
              style={imageStyle}
            />
            <div style={contentStyle}>
              <h3 style={{ margin: 0, fontSize: "1rem" }}>{item.name}</h3>
              <p style={{ margin: "6px 0", color: "#555", fontSize: "0.9rem" }}>
                {item.description}
              </p>

              <div style={footerRow}>
                <div style={{ fontWeight: 700 }}>
                  ₹{(item.price / 100).toFixed(2)}
                </div>
                <div style={ratingStyle}>
                  <span style={{ color: "#f2b01e" }}>★</span>
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyTemplate;
// ...existing code...
