import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postUser from "../services/api/users/postUser";
import { EMAIL_REGEX } from "../constants/regex/regex";
import TextInput from "../components/Input/TextInput";
import RadioInput from "../components/Input/RadioInput";
import Button from "../components/Button/Button";
import { BaseForm, BaseFormControl, ButtonsContainer } from "../styles/wrapper";
import { FormLabel, Subtitle, TitleText } from "../styles/text";
import { useTranslation } from "react-i18next";

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
        {isNameBlur && <Subtitle>{t("user.field-mandatory")}</Subtitle>}
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
      <BaseFormControl>
        <FormLabel>{t("user.status")}</FormLabel>
        <RadioInput
          type="radio"
          value="active"
          label={t("user.active")}
          name="status"
          onChange={onChange}
        />
        <RadioInput
          type="radio"
          value="inactive"
          label={t("user.inactive")}
          name="status"
          onChange={onChange}
        />
      </BaseFormControl>
      <BaseFormControl>
        <FormLabel>{t("user.gender")}</FormLabel>

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
      </BaseFormControl>
      <ButtonsContainer>
        <Button type="submit" onClick={showData} text={t("button.submit")} />
        <Button type="reset" onClick={resetData} text={t("button.clear")} />
      </ButtonsContainer>
    </BaseForm>
  );
}
export default Form;
