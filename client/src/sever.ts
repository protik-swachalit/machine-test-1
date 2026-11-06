import axios from 'axios';

const API_URL = 'http://localhost:5000/task';

const createTask = async (title: string, content: string) => {
  try {
    const response = await axios.post(`${API_URL}/create`, { title, content });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

const getTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

const deleteTask = async (taskId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

const updateTask = async (taskId: string, title: string, content: string) => {
  try {
    const response = await axios.put(`${API_URL}/${taskId}`, {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export { createTask, getTasks, deleteTask, updateTask };
