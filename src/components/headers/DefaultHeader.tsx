import React, { FunctionComponent, useContext, useRef } from 'react';
import { GridContext } from '../contexts/gridContext';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  display: flex;
`

export const DefaultHeader: FunctionComponent = () => {
  const gridContext = useContext(GridContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonClicked = () => {
    const inputEl = inputRef.current;
    if (inputEl) {
      gridContext.updateName(inputEl.value ?? '');
    }
  };

  return (
    <Header>
      <GridContext.Consumer>
        {(context) => <h1>{context.name}</h1>}
      </GridContext.Consumer>

      <InputContainer>
        <input type="text" ref={inputRef} />
        <button onClick={buttonClicked}>Update title</button>
      </InputContainer>
    </Header>
  );
};
