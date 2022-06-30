export type MenuItem = {
  name: string;
  value: string;

  render?: () => React.ReactNode;
};

export interface IMenuListProps {
  align?: "left" | "right";
}

export interface IDropDownMenuProps {
  content: MenuItem[];
  align?: "left" | "right";
}
