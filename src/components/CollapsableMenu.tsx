import React, { PropsWithChildren } from "react";

export const CollapsableMenu: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className={"CollapsableMenu"}>{children}</section>;
};
export default CollapsableMenu;