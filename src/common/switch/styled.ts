import styled from 'styled-components';

import { ISwitchStyledProps } from './interfaces/switch-styled-props.interface';

export const SwitchStyled = styled.div<ISwitchStyledProps>`
  width: 46px;
  padding: 3px;
  border-radius: 13px;
  background-color: ${props => props.checked ? '#87C778' : '#BFBFBF'};
  display: flex;
  justify-content: ${props => props.checked ? 'flex-end' : 'flex-start'};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
`;

export const SwitchCircle = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  line-height: 24px;
  color: #BFBFBF;
  img {
    height: 15px;
  }
`;

export const SwitchActiveLabel = styled.div`
  margin-left: 7px;
  font-size: 12px;
  color: #5A5A5A;
`;

export const SwitchInactiveLabel = styled.div`
  margin-left: 7px;
  font-size: 12px;
  color: #939393;
`;
