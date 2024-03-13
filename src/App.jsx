import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDelete, addTodo } from "./todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [newTodo, setNewTodo] = useState("");

  const deleteBtn = (id) => {
    dispatch(addDelete(id));
  };

  const change = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1 className="text-center m-6 text-2xl font-bold ">ToDoList</h1>
      <div className="flex items-center justify-center ">
        <input
          type="text"
          className="border-2 border-black m-6 text-center"
          placeholder="Birşeyler yazın..."
          onChange={change}
          value={newTodo}
        />
        <button
          onClick={() => {
            dispatch(addTodo(newTodo));
            setNewTodo("");
          }}
          className="border-2  border-black bg-slate-400 w-[75px] cursor-pointer"
        >
          Ekle
        </button>
      </div>
      <div className="flex items-center justify-center m-12  ">
        <ul className="text-2xl ">
          {todos.map((item, key) => {
            return (
              <li key={key} className="mb-2">
                <span className="   ">{item.text}</span>
                <button
                  className=" ml-12 border-purple-20 bg-lime-300 w-[75px] cursor-pointer"
                  onClick={() => deleteBtn(item.id)}
                >
                  Sil
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
