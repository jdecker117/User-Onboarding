export default function Form(props){
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
      }

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>
            </div>

            <div className='errors'>
            
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
            </div>

            <div className='form-group inputs'>
                <h4>General information</h4>
                <label>First Name;
                <input
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                />
                </label>

                <label>Last Name;
                <input
                    value={values.last_name}
                    onChange={onChange}
                    name='last_name'
                    type='text'
                />
                </label>

                <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
                </label>
                <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
                </label>
            </div>
            <div className='form-group checkboxes'>
                <h4>Terms Of Service</h4>
                <label>Accept
                <input
                    type="checkbox"
                    name="tos"
                    checked={values.tos}
                    onChange={onChange}
                />
                </label>
                <button disabled={disabled}>submit</button>
      </div>
    </form>
        
      )
}