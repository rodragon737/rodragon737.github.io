import './TodoList.css';

function TodoList({ children }) {
  return (
    <div className='DivTodoList'>
      <ul className="TodoList">
        {children}
      </ul>
    </div>
  );
}

export { TodoList };

