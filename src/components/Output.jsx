import React from "react";

function Output(props) {
  return (
    <div>
      <ul>
        {props.tareas.length ? (
          props.tareas.map((tarea) => {
            return (
              <li className={tarea.prioridad}>
                <div
                  className="pContainer"
                  onClick={() => {
                    props.borrarTarea(tarea.id);
                  }}
                >
                  <p>{tarea.tarea}</p>
                </div>
                <button
                  onClick={() => {
                    props.cambiarVerEditar(tarea.id);
                  }}
                >
                  editar
                </button>
              </li>
            );
          })
        ) : (
          <p>¡Parece que no hay nada por aquí!</p>
        )}
      </ul>
    </div>
  );
}

export default Output;
