import React, { memo } from "react";

import "./contents.css";
import FormRegister from "components/formRegister";
import RegisterStep from "components/registerStep";
import BtnRegister from "components/btnRegister";
import Procedure from "components/procedure";
import PartnerComment from "components/partnerComment";
import Question from "components/question";

function Contents(props) {
  const { items } = props;

  return (
      <div className="cover_content">
        <FormRegister />

        <RegisterStep />

        <BtnRegister />

        <Procedure />

        <PartnerComment />

        <Question items={items} />
      </div>
  );
}

export default memo(Contents);
