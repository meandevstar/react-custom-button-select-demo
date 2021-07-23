import { FC, ReactElement } from 'react';

import { IToursBlockItem, IToursBlockProps } from './interfaces/tours-block-props.interface';
import { ToursBlockLabel, ToursBlockStyled, ToursBlockGrid, ToursBlockItem } from './styled';

const ToursBlock: FC<IToursBlockProps> = ({ label, items, selectedItems, onItemSelect }): ReactElement => {
  const isItemSelected = (item: IToursBlockItem): boolean => {
    const selectedItem: IToursBlockItem | undefined = selectedItems.find(
      (blockItem: IToursBlockItem): boolean => blockItem.id === item.id
    );
    return !!selectedItem;
  };
  return (
    <ToursBlockStyled>
      {label && (
        <ToursBlockLabel>{label}</ToursBlockLabel>
      )}
      <ToursBlockGrid>
        {items.map((item: IToursBlockItem): ReactElement => (
          <ToursBlockItem
            key={item.id}
            fullWidth={item.fullWidth}
            selected={isItemSelected(item)}
            onClick={() => {onItemSelect(item)}}
          >
            {item.title}
          </ToursBlockItem>
        ))}
      </ToursBlockGrid>
    </ToursBlockStyled>
  );
};

export default ToursBlock;
