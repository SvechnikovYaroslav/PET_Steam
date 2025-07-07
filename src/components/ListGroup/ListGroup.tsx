import { useState } from "react";
import './ListGroup.css';
import { BiSolidCity } from "react-icons/bi";
import Like from "../Like/Like";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No items found </p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <>
          <li
            className={
              selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            >
            {item} 
          <BiSolidCity />
          <Like onClick={()=> {console.log("Clicked")}}/>
          </li>
            </>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
