import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';


function TodoItem(props) {
  return (
    <div className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <h1 className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </h1>
      <h1 className="TodoItem-d">
         {props.day} {props.month} {props.year}
      </h1>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </div>
  );
}

export { TodoItem };