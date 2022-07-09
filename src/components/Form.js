import React, {useState} from 'react';



const Form = () => {
    const [form, setForm] = useState({
        name:'',
        email:'',
        gender:'',
        status:''
    });

    const onChange = event => {
        const {value,name} = event.target
        setForm((state) => ({
            ...state,

            [name]:value
        }))

    };

    const showData = ()=>{
        console.log(form)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        // postUser(form).then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input
                    required
                    minLength={3}
                    type="text"
                    name="name"
                    placeholder="username"
                    value={form.name}
                    onChange={onChange}
                />

                <label>Email:</label>
                <input
                    required
                    type="text"
                    name="email"
                    placeholder="email"
                    value={form.email}
                    onChange={onChange}
                />

                <label>Gender:</label>
                <input  onChange={onChange} type="radio" value="male" name="gender" checked={form.gender === 'male'}></input>Male
                <input   onChange={onChange}type="radio" value="female" name="gender" checked={form.gender === 'female'}></input>Female

                <label>Status:</label>
                <input  onChange={onChange} type="radio" value="active" name="status" checked={form.status === 'active'}></input>Active
                <input   onChange={onChange}type="radio" value="inactive" name="status" checked={form.status === 'inactive'}></input>Inactive

                <button type="submit" onClick={showData}>Submit</button>
            </form>
        </div>
    );
};
export default Form
