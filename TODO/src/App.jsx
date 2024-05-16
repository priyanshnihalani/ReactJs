import './App.css'
import { FaPlus, FaPenAlt } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { db } from './firebase';
import { collection, doc, onSnapshot, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import  images from './assets/leave.png'
function App() {


  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(-1);
  const [del, setDel] = useState([]);

  useEffect(() => {
    const unsubsribe = onSnapshot(collection(db, 'ToDo'), (snapshot) => {
      setTodos(snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().text })))
    });
    return () => unsubsribe()
  }, [])

  async function addTodo() {
    try {

      if (input === "") {
        alert("Please enter a todo")
      } else {
        await addDoc(collection(db, 'ToDo'), { text: input })
        setInput('');
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  function editTodo(index) {
    setInput(todos[index].text);
    setEdit(index);
  }
  async function updateTodo() {
    try {
      if (input === "") {
        alert("Please enter a todo")
      }
      else {
        const docref = doc(db, 'ToDo', todos[edit].id)
        await updateDoc(docref, { text: input })
        setEdit(-1);
        setInput('');
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  function selectdelete(id) {
    const updatedDel = del.includes(id) ? del.filter(item => item !== id) : [...del, id]
    setDel(updatedDel)
    console.log(del)
  }
  useEffect(() => {
    console.log(del)
  }, [del])

  async function deleteItem() {
    del.map(async (items) => {
      await deleteDoc(doc(db, "ToDo", items))
    })
    setDel([])
  }
  return (

    <>
      <div className='w-full h-full bg-[#FFFFF0] text-black min-h-screen flex flex-col justify-center items-center'>

    <img src={images} alt="" width={700} height={700} style={{ backgroundColor: 'transparent' }} className=' absolute -z-3 bottom-0 left-0'/>
        <h1 className='text-[36px] font-semibold m-5 poetsen-one-regular'>To Do List</h1>

        <div className="bg-gray-100 shadow-md p-5 rounded-md w-1/2   justify-center z-0">
          <div className="flex items-center space-x-5 z-20 ">
            <button className="bg-blue-600 text-white p-3 rounded-full focus:outline-none focus:ring focus:ring-blue-500" onClick={edit === -1 ? addTodo : updateTodo}>{edit === -1 ? <FaPlus /> : <FaPenAlt />}</button>
            <input type="text" className="w-full bg-transparent max-w-md rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500" placeholder='Create a new todo...' value={input} onChange={(e) => setInput(e.target.value)} />

          </div>
        </div>
        {todos.length === 0 ? (
          <div className="bg-gray-100 shadow-md p-5 rounded-md max-w-lg mt-3 w-1/2 z-10">
            <p className="text-center text-gray-800">No todos yet. Start adding!</p>
          </div>
        ) : (
          <div className="bg-gray-100 shadow-md p-5 rounded-md max-w-full mt-3 w-1/2 z-10">
            <ul className="space-y-4">
              {todos.map((todo, index) => (
                <li key={index} className="flex items-center justify-between bg-none px-3 pb-1 pt-3 border-b-[5px] border-gray-200 w-full space-x-3" >
                  <div>
                    <input type="checkbox" className='peer relative appearance-none w-5 h-5 
                          border-2 rounded-full  border-black-400 
                          cursor-pointer  
                          checked:border-blue-400 checked:border-4' onChange={() => {
                        selectdelete(todo.id)
                      }}
                      checked={del.includes(todo.id)}
                    />

                  </div>
                  <div className="flex-1">
                    <span className="text-lg text-gray-800" >{todo.text}</span>
                  </div>
                  <div className="space-x-2 flex items-center">
                    <button className="bg-green-600 text-white p-2 rounded-md focus:outline-none focus:ring focus:ring-green-500" onClick={() => editTodo(index)}>
                      <FaPenAlt />
                    </button>

                  </div>
                </li>
              ))}
            </ul>
            <div className='text-black mt-5 flex justify-between items-center' >
              <span>{todos.length} items left</span>
              <span><button onClick={deleteItem} className='bg-red-400 p-2 rounded-md font-bold text-white'>Clear Selected</button></span>
            </div>
          </div>
        )}

      </div>
    </>

  );
}

export default App
