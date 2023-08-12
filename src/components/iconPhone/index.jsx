import React, { memo, useCallback } from "react";

import "./iconPhone.css"

function IconPhone(props) {
  const { phoneNumber } = props;

  const handleClick = useCallback(() => {
    window.location.href = `tel:${phoneNumber}`;
  }, [phoneNumber]);

  return (
    <div className="phone_icon" onClick={handleClick}>
      <img src={require("assets/logo/phone-icon.gif")} width={"80px"} height={"80px"} alt="Phone Icon" />
    </div>
  );
}

export default memo(IconPhone);
