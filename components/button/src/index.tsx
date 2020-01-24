import React from "react";

import { Button as SButton } from "./styles";

export default function Button({ children }: { children: string }) {
  return <SButton>{children}</SButton>;
}
