import { useEffect, useState } from 'react';
import { createTask, getTasks } from './sever';

function Task() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [tasks, setTasks] = useState<any[]>([]);

  const submitTask = async () => {
    const res = await createTask(title, content);
    if (!res) {
      setErrorMsg('Failed to create task');
    }
  };

  useEffect(() => {
    const getAllTask = async () => {
      const res = await getTasks();
      if (res) {
        setTasks(res);
      }
    };
    getAllTask();
  }, []);

  return (
    <>
      <p className="text-3xl font-bold underline">Make your UI here.</p>

      <div>
        <h1>Task creation Board</h1>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button onClick={submitTask}>Create Task</button>
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Task;
