import React from "react";
import { useTranslation } from "react-i18next";
import {
  CardStatWrapper,
  CardTextWrapper,
  CardWrapper,
} from "../../styles/wrapper";
import { CardTextBody, CardTextTitle } from "../../styles/text";

const Card = ({ name, status, gender, email }) => {
  const { t, i18n } = useTranslation();

  return (
    <CardWrapper>
      <CardTextWrapper>
        <CardTextTitle>{name}</CardTextTitle>
        <CardTextBody>
          {t("email")}: {email}
        </CardTextBody>
        <CardTextBody>
          {" "}
          {t("gender")}: {t(gender)}
        </CardTextBody>
        <CardTextBody>
          {t("status")}: {t(status)}
        </CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper></CardStatWrapper>
    </CardWrapper>
  );
};

export default Card;
