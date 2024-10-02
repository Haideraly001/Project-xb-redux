import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircle, faChevronLeft, faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import './shopinglist.css';

const ItemCard = () => {
  const [items, setItems] = useState([
    { itemName: "item-1", quantity: 1, isSelected: false },
    { itemName: "item-2", quantity: 2, isSelected: true },
    { itemName: "item-3", quantity: 3, isSelected: false }
  ]);

  return (
    <div className='container'>
      <div className="item-card">
        <div className="add-item">
          <input type="text" placeholder="Add an item..." className="input-item" />
          <button className="add-btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <div className="item-container">
          {items.map((itemdata, index) => (
            itemdata.isSelected ? (
              <div key={index}>
                <div className="item-info">
                  <FontAwesomeIcon icon={faCircle} className="item-icon" />
                  <span>{itemdata.itemName}</span>
                </div>
              </div>
            ) : (
              <div key={index}>
                <div className="item-info">
                  <FontAwesomeIcon icon={faCheck} className="item-icon" />
                  <span>{itemdata.itemName}</span>
                </div>
              </div>
            )
          ))}
          {/* // working on this  */}
          {/* <div className="items-control">
            <button onClick={() => setItems([...items.quantity])}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <span>{items}</span>
            <button onClick={() => setItems([...items.quantity])}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div> */}
        </div>

        <div className="total">Total: 6</div>
      </div>
    </div>
  );
};

export default ItemCard;
