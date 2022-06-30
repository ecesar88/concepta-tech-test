import React, { createContext } from "react";
import { MenuItem } from "../../../contracts/Components/DropDownMenu";

interface IContextType {
  contextValue: MenuItem[] | never[];
  toggleMenu?: (state?: boolean) => void;
}

const DropDownMenuContext = createContext<IContextType>({
  contextValue: [],
});

export default DropDownMenuContext;
