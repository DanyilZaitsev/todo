import {useState} from 'react'
import PropTypes from 'prop-types';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'> CHANGE </button>
  </form>
  )
}

EditTodoForm.propTypes = {
  editTodo: PropTypes.string.isRequired,
  task: PropTypes.number.isRequired,
};
