import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
    const name = 'Иван-Царевич';
    return (
        <>
            <div className="mainTest">
                <h3>etc ... ... {name}</h3>
              <p>Hola, {FormatUser(user)}</p>
              {setInterval(Tick, 1000)}
            </div>

        </>
    )
}

//
function Tick() {
    const element = (
        <div className="clock-block">
            <h2>Hello, world!</h2>
            <h3>It is {new Date().toLocaleTimeString()}.</h3>
        </div>
    );
    ReactDOM.render(element, document.getElementById('clockBlock'));
}

//
function FormatUser(name: any) {
    return user.firstName + ' ' + user.secondName;
}
const user = {
    firstName: 'Ivan',
    secondName: 'Petrov'
};

// test props and type
const element2 = (
    <h2 className='greeting'>
        Привет, мир! ogo
    </h2>
);
console.log(element2.type + ' ' + element2.props.className + ' ' + element2.props.children);

export default Test;