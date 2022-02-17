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
      const request = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/task/${id}`,{complete}, config)
      console.log(request)
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
          {todos.map((todo) =>
          todo.complete ? 
            <div key={todo.id} className="task__card-container">
              <Checkbox id={todo.id} checked={true} />
              <p className="task__card-complete">{todo.task}</p>
              <Delete onClick={() => deleteTask(todo.id)}/>
            </div> 
          :
            <div key={todo.id} className="task__card-container">
              <Checkbox id={todo.id} checked={true} onChange={() => updateTask(todo.id)}/>
              <p className="task__card-incomplete">{todo.task}</p>
              <Delete onClick={() => deleteTask(todo.id)}/>
             </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default TaskPage;
