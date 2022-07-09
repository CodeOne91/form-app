import React, {useState} from 'react';
import postUser from "../services/api/users/postUser";

import {EMAIL_REGEX} from "../constants/regex/regex";
import Button from "./Button/Button";
import TextInput from "./Input/TextInput";
import RadioInput from "./Input/RadioInput";


const Form = () => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    const initialFormState = {
        name: '',
        email: '',
        gender: '',
        status: ''
    }

    const [form, setForm] = useState(initialFormState);

    const onChange = event => {
        const {value, name} = event.target
        setForm((state) => ({
            ...state,

            [name]: value
        }))
        if (name == 'email') {
            if (EMAIL_REGEX.test(value)) {
                setIsEmailValid(true);
                console.log('Email valid!');

            } else {
                setIsEmailValid(false);
                console.log('Email not valid');
            }
        }

    };

    const showData = () => {
        console.log(form)
    }

    const resetData = () =>{
        setForm(initialFormState)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // postUser(form).then(res => console.log(res))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <TextInput
                    required={true}
                    minLength={3}
                    type="text"
                    value={form.name}
                    placeholder="Enter name"
                    label="Name"
                    name="name"
                    onChange={onChange}
                />
                <TextInput
                    required={true}
                    type="text"
                    value={form.email}
                    placeholder="Enter email"
                    label="email"
                    name="email"
                    onChange={onChange}
                />
                <RadioInput
                    type="radio"
                    value={'active'}
                    label="active"
                    name="status"
                    onChange={onChange}
                />
                <RadioInput
                    type="radio"
                    value={'inactive'}
                    label="inactive"
                    name="status"
                    onChange={onChange}
                />
                <RadioInput
                    type="radio"
                    value={'male'}
                    label="male"
                    name="gender"
                    onChange={onChange}
                />
                <RadioInput
                    type="radio"
                    value={'female'}
                    label="female"
                    name="gender"
                    onChange={onChange}
                />
                <Button type="submit" onClick={showData} text={'Submit'}></Button>
                <Button type="reset" onClick={resetData} text={'Clear'}></Button>
            </form>
        </div>
    );
};
export default Form
