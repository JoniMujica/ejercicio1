import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/comp">Comp</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
