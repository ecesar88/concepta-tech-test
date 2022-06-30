import React, { useContext, useRef } from "react";
import { useTheme } from "styled-components";
import {
  IMenuListProps,
  MenuItem as MenuItemType,
} from "../../../contracts/Components/DropDownMenu";
import ICustomTheme from "../../../contracts/ICustomTheme";
import useClickAwayListener from "../../../hooks/useClickAwayListener";
import UnorderedList from "../../UnorderedList";
import DropDownMenuContext from "../Context";
import MenuItem from "../MenuItem";

const MenuList = (props: IMenuListProps) => {
  const { align } = props;

  const theme = useTheme() as ICustomTheme;
  const { contextValue, toggleMenu } = useContext(DropDownMenuContext);

  const ref = useRef(null);
  useClickAwayListener(ref, () => {
    toggleMenu?.(false);
  });

  return (
    <UnorderedList
      ref={ref}
      styles={{
        listStyleType: "none",
        borderRadius: "0.5rem",
        marginLeft: 0,
        padding: 0,
        backgroundColor: `${theme.colors.black600}`,
        width: "fit-content",

        position: "relative",
        right: "10px",
        top: "5px",
        zIndex: 99999,
      }}
    >
      {contextValue?.map((menuItem: MenuItemType) =>
        menuItem?.render ? (
          <MenuItem key={Math.random()} align={align}>
            {menuItem?.render?.()}
          </MenuItem>
        ) : (
          <MenuItem
            key={menuItem.value}
            align={align}
            onClick={() => {
              console.log(menuItem.value);
              toggleMenu?.(false);
            }}
          >
            {menuItem?.name}
          </MenuItem>
        )
      )}
    </UnorderedList>
  );
};

export default MenuList;
