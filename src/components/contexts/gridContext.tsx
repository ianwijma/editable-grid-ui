import React, {createContext, useState, FunctionComponent, useEffect} from 'react';

export enum GridActionTypes {
  alert = 'ALERT',
  log = 'LOG',
}

export interface GridContextDataType {
  label: string;
  action: GridActionTypes;
  colour: string;
}

export interface GridContextType {
  name: string;
  data: GridContextDataType[];
  updateName: (name: string) => void;
  updateData: (data: GridContextDataType[]) => void;
}

const defaultContext:GridContextType = {
  name: '',
  data: [],
  updateName: () => {},
  updateData: () => {},
};

export const GridContext = createContext<GridContextType>(defaultContext);

export const GridContextProvider:FunctionComponent = ({ children }) => {

  const [context, updateContext] = useState<GridContextType>(defaultContext);

  useEffect(() => {
    updateContext({
      ...context,
      updateName: (name: string): void => {
        updateContext({ ...context, name });
      },
      updateData: (data: GridContextDataType[]): void => {
        updateContext({ ...context, data });
      },
    });
  }, [context.name, context.data])

  return (
      <GridContext.Provider value={context}>
        {children}
      </GridContext.Provider>
    )
}
