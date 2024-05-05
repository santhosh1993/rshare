import React, {ReactNode, memo, useMemo} from 'react';
import {
  NewProjectFabContext,
  NewProjectFabContextInterface,
} from './new-project-fab.context';
import {NewProjectFab} from './new-project-fab';

interface NewProjectFabProviderInterface {
  children?: ReactNode;
}

export const NewProjectFabProvider = memo(
  (props: NewProjectFabProviderInterface) => {
    const contextProps = useMemo<NewProjectFabContextInterface>(() => {
      return {};
    }, []);
    return (
      <NewProjectFabContext.Provider value={contextProps}>
        {props.children}
        <NewProjectFab source={'CREATE_PROJECT'} />
      </NewProjectFabContext.Provider>
    );
  },
);
