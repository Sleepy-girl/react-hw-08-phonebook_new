import React from "react";
import Loader from "react-loader-spinner";

function LoaderComponent() {
  return (
    <div>
      <Loader type="Grid" color="#e095ad" height={50} width={50} />
    </div>
  );
}

export default LoaderComponent;
