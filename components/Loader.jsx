import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <InfinitySpin
        visible={true}
        width="200"
        color="#191D29"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
