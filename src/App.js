import './App.css';
import { useState } from "react";
function App() {
  const [item, setItem] = useState("");
  const [itemArray, setItemArray] = useState([]);
  const addItem = (e) => {
   if(e !== "") setItemArray((itemArray)=>[...itemArray, e])
  };
  const deleteItem = (item) => {
    let newArr = itemArray.filter((x) => {
      return x !== item;
    });
    setItemArray(newArr);
  };
  return (
    <div className="App">
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    {" "}
                    <input 
                    type="text"
                    className='form-control'
                      onChange={(e)=>{
                        setItem(e.target.value);
                      }}
                     /> {" "}

                  </div>
                  <div className="col-md-4">
                    <button className='btn btn-success' 
                    onClick={()=>addItem(item)}>
                      Add
                    </button>
                  </div>
                </div>

                <div className="card mt-4 text-start">
                  <ul className="list-group list-group-flush">
                    {itemArray.map((x, i) => {
                      return (
                        <li className="list-group-item" key={i}>
                          {x}{" "}
                          <button
                            className="btn btn-sm btn-danger float-end"
                            onClick={() => deleteItem(x)}
                          >
                            X
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
