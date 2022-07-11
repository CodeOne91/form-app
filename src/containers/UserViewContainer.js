import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import getUser from "../services/api/users/getUser";

import Button from "../components/Button/Button";

import { useTranslation } from "react-i18next";

import Card from "../components/Card/Card";
import { UserViewWrapper } from "../styles/wrapper";

function UserViewContainer() {
  const MAX_RANDOM_NUM = 1000;
  const user = useSelector((state) => state.user?.user);
  const { t, i18n } = useTranslation();
  const [tryRandom, setTryRandom] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);

  const dispatch = useDispatch();

  const generateRandomInt = () => {
    return Math.floor(Math.random() * MAX_RANDOM_NUM);
  };
  const retrieveAnUser = (id) => {
    getUser(id, dispatch)
      .then()
      .catch((reason) => {
        let random = generateRandomInt();
        console.log(random);
        setRandomNumber(random);
        setTryRandom(true);
      });
  };

  return (
    <UserViewWrapper>
      <Button
        type={"submit"}
        text={t("button.find")}
        onClick={() => retrieveAnUser(100)}
      ></Button>
      {user ? (
        <Card
          name={user.name}
          email={user.email}
          status={user.status}
          gender={user.gender}
          date={2}
        />
      ) : null}
      {tryRandom && !user ? (
        <Button
          type={"submit"}
          text={t("button.try") + " " + randomNumber}
          onClick={() => retrieveAnUser(randomNumber)}
        ></Button>
      ) : null}
    </UserViewWrapper>
  );
}
export default UserViewContainer;
