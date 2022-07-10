import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postUser from "../services/api/users/postUser";

import { EMAIL_REGEX } from "../constants/regex/regex";

import getUser from "../services/api/users/getUser";
import TextInput from "../components/Input/TextInput";
import RadioInput from "../components/Input/RadioInput";
import Button from "../components/Button/Button";

function Form() {
  const user = useSelector((state) => state.user?.user);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const initialFormState = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialFormState);

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm((state) => ({
      ...state,

      [name]: value,
    }));
    if (name == "email") {
      if (EMAIL_REGEX.test(value)) {
        setIsEmailValid(true);
        console.log("Email valid!");
      } else {
        setIsEmailValid(false);
        console.log("Email not valid");
      }
    }
  };

  const showData = () => {
    console.log(form);
  };

  const resetData = () => {
    setForm(initialFormState);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    postUser(form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name:</label>
        <TextInput
          required
          minLength={3}
          type="text"
          value={form.name}
          placeholder="Enter name"
          label="Name"
          name="name"
          onChange={onChange}
        />
        <TextInput
          required
          type="text"
          value={form.email}
          placeholder="Enter email"
          label="email"
          name="email"
          onChange={onChange}
        />
        <RadioInput
          type="radio"
          value="active"
          label="active"
          name="status"
          onChange={onChange}
        />
        <RadioInput
          type="radio"
          value="inactive"
          label="inactive"
          name="status"
          onChange={onChange}
        />
        <RadioInput
          type="radio"
          value="male"
          label="male"
          name="gender"
          onChange={onChange}
        />
        <RadioInput
          type="radio"
          value="female"
          label="female"
          name="gender"
          onChange={onChange}
        />
        <Button type="submit" onClick={showData} text="Submit" />
        <Button type="reset" onClick={resetData} text="Clear" />
        <Button
          type="button"
          text="Get"
          onClick={() => getUser(100, dispatch)}
        />
        {user && JSON.stringify(user)}
      </form>
    </div>
  );
}
export default Form;
