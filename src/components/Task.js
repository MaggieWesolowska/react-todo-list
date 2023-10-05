import React from 'react';

const Task = props => {
  const style = {
    color: '#61dafb',
    fontWeight: 900,
    textShadow: '2px 2px 10px darkred',
  };
  const { text, date, id, active, important, finishDate } =
    props.task;

  if (active) {
    return (
      <div className='task'>
        <h4>
          <strong style={important ? style : null}>
            {text}
          </strong>
        </h4>
        <div>
          {text ? (
            <p>
              <span>until: {date} </span>
              <button onClick={() => props.change(id)}>
                DONE
              </button>
              <button onClick={() => props.delete(id)}>
                X
              </button>
            </p>
          ) : null}
        </div>
      </div>
    );
  } else {
    const finish = new Date(
      finishDate
    ).toLocaleDateString();
    return (
      <div className='task'>
        <h4>
          <strong>{text}</strong>
        </h4>
        <p>
          <em>(todo by: {date})</em> completed on:{' '}
          <span>{finish}</span>
          <button onClick={() => props.delete(id)}>
            X
          </button>
        </p>
      </div>
    );
  }
};

export default Task;
