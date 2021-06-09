import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import Input from './Input';
import Button, { ButtonProps } from './Button';

interface InputGroupButtonProps {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  buttonProps: ButtonProps;
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputGroupButton = (props: InputGroupButtonProps): React.ReactElement => {
  const { inputProps, buttonProps } = props;

  return (
    <FlexContainer>
      <Input {...inputProps} />
      <Button icon {...buttonProps} />
    </FlexContainer>
  );
};

export default InputGroupButton;
