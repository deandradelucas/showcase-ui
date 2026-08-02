import * as React from 'react';

function getStrictContext<T>(
  name?: string,
): readonly [
  ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => React.JSX.Element,
  () => T,
] {
  let Context: React.Context<T | undefined> | undefined;
  const getContext = () => {
    if (!Context) {
      Context = React.createContext<T | undefined>(undefined);
    }
    return Context;
  };

  const Provider = ({
    value,
    children,
  }: {
    value: T;
    children?: React.ReactNode;
  }) => {
    const Ctx = getContext();
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
  };

  const useSafeContext = () => {
    const ctx = React.useContext(getContext());
    if (ctx === undefined) {
      throw new Error(`useContext must be used within ${name ?? 'a Provider'}`);
    }
    return ctx;
  };

  return [Provider, useSafeContext] as const;
}

export { getStrictContext };
