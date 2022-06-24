import './App.css';
import Form from './Form'
import React, {useState, useEffect} from 'react';
import schema from './validation/schema';
import * as yup from "yup";
import axios from "axios";
import User from './User';


const initialFormVals = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormVals);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormVals))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>User Onboarding</h1></header>

    <Form 
      values={formValues}
      change={inputChange}
      submit={handleSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} deets={user} />
          )
        })
      }
    </div>
  )
}

export default App;
