
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
    const field = [
      { name: 'name', type: 'text', label: 'Name'},
      { name: 'email', type: 'email', label: 'Email' },
      { name: 'password', type: 'password', label: 'Password'},
    ]

    function handleSubmit(formValue){
        console.log(formValue);
    }

    return (
      <div id="main">
          <h1>Form Example</h1>
          <Form field={field} onSubmit={handleSubmit}/>
      </div>
    )
}

const Form = ({field, onSubmit}) => {
    const [formValue, setFormValue] = useState({});

    const onChangeValue = (e) =>{
        const {name, value} = e.target;
        setFormValue((preValue) => ({ ...preValue, [name]: value}));
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formValue);
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
        {field.map((fields, index) =>(
          <div key={index}>
            <label htmlFor={fields.name}>{fields.label} : </label>
            <input type={fields.type} name={fields.name} id={fields.name} value={formValue[fields.name] || ''} onChange={onChangeValue}/>
          </div>
        ))}
        <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default App
