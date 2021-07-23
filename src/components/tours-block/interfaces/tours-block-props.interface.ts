export interface IToursBlockItem {
  id: string,
  title?: string,
  fullWidth?: boolean,
};

export interface IToursBlockProps {
  label?: string,
  items: IToursBlockItem[],
  selectedItems: IToursBlockItem[],
  onItemSelect: (item: IToursBlockItem) => void,
};
