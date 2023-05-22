import React from "react";
import { useRouteError } from "react-router-dom";

function Error(props) {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}

export default Error;
