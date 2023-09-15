import {createContext} from 'react';

export interface NewProjectFabContextInterface {}

export const NewProjectFabContext =
  createContext<NewProjectFabContextInterface>({});
