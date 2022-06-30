import React, { useState } from "react";
import { IDropDownMenuProps } from "../../contracts/Components/DropDownMenu";
import Button from "../Button";
import { MoreIcon } from "../Icons/MoreIcon";
import DropDownMenuContext from "./Context";
import MenuList from "./MenuList";

const DropDownMenu = (props: IDropDownMenuProps) => {
  const { content, align } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (state?: boolean) => {
    setIsOpen((prev) => {
      return state ?? !prev;
    });
  };

  return (
    <>
      <DropDownMenuContext.Provider
        value={{ contextValue: content, toggleMenu }}
      >
        <Button onClick={() => toggleMenu()}>
          <MoreIcon size="2rem" color="#fff" style={{ cursor: "pointer" }} />
        </Button>

        {isOpen ? <MenuList align={align} /> : null}
      </DropDownMenuContext.Provider>
    </>
  );
};

export default DropDownMenu;
