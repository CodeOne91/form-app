import React, { useState } from "react";
import postUser from "../services/api/users/postUser";
import { EMAIL_REGEX } from "../constants/regex/regex";
import TextInput from "../components/Input/TextInput";
import RadioInput from "../components/Input/RadioInput";
import Button from "../components/Button/Button";
import {
  BaseForm,
  BaseFormControl,
  ButtonsContainer,
  SwitchContainer,
} from "../styles/wrapper";
import { FormLabel, Subtitle, TitleText } from "../styles/text";
import { useTranslation } from "react-i18next";
import CheckboxInput from "../components/Input/CheckboxInput";

function Form() {
  const { t } = useTranslation();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailBlur, setIsEmailBlur] = useState(false);
  const [isNameBlur, setIsNameBlur] = useState(false);
  const initialFormState = {
    name: "",
    email: "",
    gender: "",
    status: "",
  };

  const [form, setForm] = useState(initialFormState);

  //controlled form
  const onChange = (event) => {
    const { value, name } = event.target;
    //check checkbox state and set value
    if (event.target.type == "checkbox") {
      if (event.target.checked == true) {
        setForm((state) => ({
          ...state,

          [name]: "active",
        }));
      } else if (event.target.checked == false) {
        setForm((state) => ({
          ...state,

          [name]: "inactive",
        }));
      }
    }
    //default set of values
    else {
      setForm((state) => ({
        ...state,

        [name]: value,
      }));
    }
    //check email regex
    if (name == "email") {
      if (EMAIL_REGEX.test(value)) {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    }
  };

  //clear form
  const resetData = () => {
    setForm(initialFormState);
  };
  //send post request on submit
  const onSubmit = (e) => {
    e.preventDefault();
    postUser(form);
  };

  return (
    <BaseForm onSubmit={onSubmit}>
      <TitleText> {t("form.title")}</TitleText>
      <BaseFormControl>
        <TextInput
          required
          minLength={3}
          type="text"
          value={form.name}
          placeholder={t("user.name-placeholder")}
          label={t("user.name")}
          name="name"
          onBlur={setIsNameBlur}
          onChange={onChange}
        />
        {isNameBlur && form.name.length < 3 && (
          <Subtitle>{t("user.field-mandatory")}</Subtitle>
        )}
      </BaseFormControl>
      <BaseFormControl>
        <TextInput
          required
          type="text"
          value={form.email}
          placeholder={t("user.email-placeholder")}
          label={t("user.email")}
          name="email"
          onBlur={setIsEmailBlur}
          onChange={onChange}
        />
        {!isEmailValid && isEmailBlur && (
          <Subtitle>{t("user.email-invalid")}</Subtitle>
        )}
      </BaseFormControl>
      <SwitchContainer>
        <BaseFormControl>
          <FormLabel>{t("user.gender")}</FormLabel>
          <ButtonsContainer>
            <RadioInput
              type="radio"
              value="male"
              label={t("user.male")}
              name="gender"
              onChange={onChange}
            />
            <RadioInput
              type="radio"
              value="female"
              label={t("user.female")}
              name="gender"
              onChange={onChange}
            />
          </ButtonsContainer>
        </BaseFormControl>
        <BaseFormControl>
          <FormLabel>{t("user.status")}</FormLabel>
          <CheckboxInput
            name={"status"}
            label={t("user.active")}
            onChange={onChange}
          />
        </BaseFormControl>
      </SwitchContainer>
      <ButtonsContainer>
        <Button type="submit" text={t("button.submit")} />
        <Button type="reset" onClick={resetData} text={t("button.clear")} />
      </ButtonsContainer>
    </BaseForm>
  );
}
export default Form;
