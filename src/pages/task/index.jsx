import { Navbar, Card, Input, Button, Delete, Checkbox } from "../../components"
import { useEffect, useState } from "react"
import axios from "axios"

const TaskPage = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const token = window.localStorage.getItem('token');
  const config = {
    headers: {Authorization: `Bearer ${token}`}
  } 

  const getTasks = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/task`, config)
      setTodos(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  
  useEffect(() => {
    getTasks()
  },[])
  
  const addTask = async (e) => {
    try {
      e.preventDefault()
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/task`, {task}, config)
      await getTasks()
      setTask('');
    } catch (err) {
      console.log(err)
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/task/${id}`, config)
      getTasks()
    } catch (err) {
      console.log(err)
    }
  }
  
  const updateTask = async (complete ,id) => {
    try {
      await axios.put(`${process.env.REACT_APP_BACKEND_URL}/task/${id}`,{complete}, config)
      getTasks()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="task bg-aqua-dark">
      <Navbar />
      <div className="task__card">
        <Card className="task__card-content" title="To Do" >
          <form onSubmit={addTask} className="task__card-form">
            <Input 
              className="task__card-form-input" 
              value={task} 
              type ="text" 
              placeholder="Write new task" 
              onChange={(e)=>setTask(e.target.value)} 
            />
            <Button onClick={addTask}>Add</Button>
          </form>
          <div className="task__card-todos">
          {todos.map((todo) =>
            <div key={todo.id} className="task__card-container">
              <div className="task__card-input"> 
              <Checkbox id={todo.id} onChange={() => updateTask(!todo.complete, todo.id)} checked={todo.complete ? true : false}/>
              <p className={todo.complete ? "task__card-complete" : "task__card-incomplete" }>{todo.task}</p>
              </div>
              <div className="task__card-btn">
                <Delete onClick={() => deleteTask(todo.id)}/> 
              </div>
            </div> 
          )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default TaskPage;
