import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; 


// Path not Found Page componet
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
