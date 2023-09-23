import React, { useState, useEffect, useCallback } from "react";
import "./InfiniteScroll.css"


const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  

  // Simulate a mock API response with the given data structure
  const mockApiCall = async (page, limit) => {
    const itemsPerPage = 10;
    const start = (page - 1) * itemsPerPage + 1;
    const end = start + itemsPerPage - 1;
    const mockData = [];

    for (let i = start; i <= end; i++) {
      mockData.push({
        id: i,
        name: `Item ${i}`,
        description: `Description for Item ${i}`,
        image: `https://via.placeholder.com/150?text=Item${i}`,
      });
    }

    // Simulate an API delay (you can remove this in production)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return mockData;
  };

  

  

 
  
  
 


  const LoadItem = useCallback(async () => {
    setIsLoading(true);

    try {
      const newItems = await mockApiCall(page, 10);
      setItems([...items, ...newItems]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error loading items:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page, items]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      LoadItem();
    }
  }, [LoadItem]);

  useEffect(() => {
    LoadItem();
  }, [LoadItem]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

 // InfiniteScroll.js

// ... (previous code)

return (
    <div className="infinite-scroll-container">
      <ul className="item-list">
        {items.map((item) => (
          <div
            key={item.id}
            className="item-card"
            
          >
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
          </div>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      <div> {/* Wrap the components within a parent element */}
        
        
      </div>
    </div>
  );
  
};

export default InfiniteScroll;
