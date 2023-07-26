import React from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TodoForm() {
    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');  // fuera de context para que sea privado

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false)
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Pon tu nuevo evento</label>
            <textarea 
                placeholder='Hacer cosas'
                className='textarea'
                value={newTodoValue}
                onChange={onChange}
            />
            <Calendar /> {/* https://medium.com/how-to-react/create-a-calendar-in-react-js-e48e43ab3a19 */}
            <div className='TodoForm-buttonContainer'>
                <button 
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel' 
                    onClick={onCancel}
                    >Cancelar
                </button>
                <button 
                    type="submit"
                    className='TodoForm-button TodoForm-button--add'
                    >Guardar
                </button>
            </div>
            <AddToCalendarButton
                name={(newTodoValue)}
                startDate="2023-05-22"
                options={['Apple','Google','Yahoo','iCal']}
            />
        </form>
    )
}

export {TodoForm};