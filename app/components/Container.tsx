import React, { ReactNode } from 'react';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container = (props: ContainerProps) => {
  return (
    <div
      className={`p-10 mx-auto xl:px-0 bg-gray-800 ${
        props.className ? props.className : ''
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
