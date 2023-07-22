import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  const porcentual = (((completedTodos/totalTodos)*100) || '');
  const redondeo = Math.round(porcentual)
  // Fechas
  var today = new Date();
  var day = today.getDate();
  var monthIndex = today.getMonth()+1; //January is 0!
  var monthName = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",];
  var thisMonth = monthName[monthIndex];
  var yearNumbe = today.getFullYear();
  var weeksDays = today.getUTCDay();
  var weekIndex = ["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado",];
  var dayOfWeek = weekIndex[weeksDays];

  return (
    <div>
      <div className='DivProgress'>
        <div className='Percent'>
          <p className='TextPerc'>{redondeo}%</p>
        </div>
        <div>
          <progress className='Progress' max='100' value={redondeo}>{redondeo}%</progress>
        </div>
        <div className="DivDate">
          <p>{dayOfWeek} {day} de {thisMonth} del {yearNumbe}.</p>
        </div>
      </div>
    <h1 className="TodoCounter">
      Has completado <span> {completedTodos} </span> de <span> {totalTodos} </span> pendientes. Porcentaje <span>{redondeo}%</span> realizado.
    </h1>
    </div>
  );
}

export { TodoCounter };
