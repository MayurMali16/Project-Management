import { useState } from "react"

export default function NewTask({onAdd}) {
 const [enteredTask, setEnteredTask] = useState();
   
function handlechange(event) {
      setEnteredTask(event.target.value);
}

function handleClick() {
    onAdd(enteredTask);
         setEnteredTask('');
}
   return <div className="flex items-center gap-4">
        <input type="text" className="w-64 py-1 px-2 rounded-sm bg-stone-200" 
        onChange={handlechange}
        value={enteredTask} />
        <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
}