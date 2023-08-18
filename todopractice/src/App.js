import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [Edititems, setEdititems] = useState({});


  const itemEvent = (event) => {
    setInputText(event.target.value);
  };

  const ListOfItems = () => {
    if (inputText !== "") {
      setItems((oldItems) => [...oldItems, inputText]);
      setInputText("");
    }
  };

// ==========for delete============

  const deleteItem = (index) => {
    setItems((oldItems) => oldItems.filter((item, i) => i !== index));
  };

 

// ==========for delete============



// ==========for edit================


const editItem = () =>  {
  //  console.log("edited");
  //  if (inputText !== "") {
  //   Edititems((oldItems) => [...oldItems, inputText]);
  //   setEdititems(prompt("Enter new value " ));
  // }

  alert("oops its not working")
  
  }

// ==========for edit================


  return (
    <div className="App">
      <div className="parent">
        <div className="child">
          <h1 className="h1">Todos list</h1>

          <input
            className="inp"
            value={inputText}
            placeholder="Enter todos here"
            onChange={itemEvent}
          />
          <button className="btn-add" onClick={ListOfItems}>+ Add items</button>
          <ol className="ol">
            {items.map((itemVal, index) => (
              <li key={index}>
                {itemVal}
                <button className="btn-del" onClick={() => deleteItem(index)}>-Delete</button>
                <button className="btn-edit" onClick={() => editItem(index)}> Edit </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
