import styled from 'styled-components';
import { IToursBlockItemProps } from './interfaces/tours-block-item-props.interface';

export const ToursBlockStyled = styled.div`
  margin-bottom: 42px;
`;

export const ToursBlockLabel = styled.div`
  font-size: 13px;
  color: #484848;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const ToursBlockGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 6px;
  row-gap: 8px;
`;

export const ToursBlockItem = styled.div<IToursBlockItemProps>`
  border-radius: 6px;
  border: 1px solid #E2E2E2;
  background: ${props => props.selected ? '#F5F5F5' : 'transparent'};
  grid-column: ${props => props.fullWidth ? '1 / 3' : 'initial'};
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #5A5A5A;
`;
