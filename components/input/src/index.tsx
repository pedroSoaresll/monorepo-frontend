import React from "react";

import { InputStyled } from "./styles";

export default function Input() {
  return <InputStyled onChangeCapture={console.log} />;
}
