import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <div className="h-80 bg-gray-400">
      <div className="relative h-full">
        <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default Spinner;
