import React, { useEffect, useState } from 'react';
import FilterBtn from '../components/FilterBtn';

const FilterData = () => {
  const [products, setProducts] = useState([]);
  const [isTrue, setIsTrue] = useState(true)
  const [filterProducts, setFilterProducts] = useState([])
  const [filterInputs, setFilterInputs] = useState([])

  async function fetchData() {
    try {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <div>
      <div>Filter App</div>
      <FilterBtn products={products} setFilterProducts={setFilterProducts} setIsTrue={setIsTrue} setFilterInputs={setFilterInputs} />
      <div>
        {isTrue ? (
          <div className="grid grid-cols-4 gap-4">
            {products.map((item) => (
              <div key={item.id} className="p-4 border">
                <img src={item.image} alt={item.title} className="w-24 h-24" />
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {filterProducts.map((RenderFilterItems) => (
              <div key={RenderFilterItems.id} className="p-4 border">
                <img src={RenderFilterItems.image} alt={RenderFilterItems.title} className="w-24 h-24" />
                <div>{RenderFilterItems.title}</div>
              </div>
            ))}
          </div>
        )
        }
        {isTrue && (
          <div className="grid grid-cols-4 gap-4">
            {filterInputs.map((RenderFilterInput) => (
              <div key={RenderFilterInput.id} className="p-4 border">
                <img src={RenderFilterInput.image} alt={RenderFilterInput.title} className="w-24 h-24" />
                <div>{RenderFilterInput.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterData;
