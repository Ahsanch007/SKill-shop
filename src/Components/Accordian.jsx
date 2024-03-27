import React, { createContext, useContext, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";


const AccordianContext = createContext();

export default function Accordian({ children, ...props }) {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const allItemValues = React.Children.map(children, (child) => child.props.value);
    setSelectedItems(allItemValues);
  }, [children]);

  const toggleItem = (value) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(value)) {
        return prevSelectedItems.filter((item) => item !== value);
      } else {
        return [...prevSelectedItems, value];
      }
    });
  };

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selectedItems, toggleItem }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selectedItems, toggleItem } = useContext(AccordianContext);
  const open = selectedItems.includes(value);

  return (
    <li className=" bg-[white] rounded-3xl " {...props}>
      <header
        role="button"
        onClick={() => toggleItem(value)}
        className={`flex justify-between items-center gap-2 p-4 text3 rs4:pl-9 pl-2 hover:bg-[#f0f0f0] `}
      >
        <p className="">{trigger}</p>
        <FaChevronDown
          size={17}
          className={`transition-transform ${open ? "rotate-180" : ""} flex-shrink-0`}
        />
      </header>
      <div className="overflow-y-hidden transition-all" style={{ height: open ? "auto" : 0 }}>
        <div className="pt-1 p-2">{children}</div>
      </div>
    </li>
  );
}
