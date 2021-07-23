import styled from 'styled-components';

export const FooterStyled = styled.div`
  padding: 15px 21px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 0 6px 0 #00000029;
`;

const Button = styled.button`
  height: 34px;
  width: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const ResetButton = styled(Button)`
  border: 1px solid #484848;
  color: #484848;
  background-color: white;
`;

export const DoneButton = styled(Button)`
  color: white;
  background-color: #E81515;
  border: none;
`;
