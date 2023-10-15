import React, { memo } from "react";

import FormRegister from "components/formRegister";
import RegisterStep from "components/registerStep";

function Register(props) {
  return (
    <div className="cover_content">
      <FormRegister />

      <RegisterStep />
    </div>
  );
}

export default memo(Register);
