import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-warning shadow-sm p-3 mb-5 ">
      <header>
        <h2><HighlightIcon style={{ fontSize: 30 }}/>Keeper</h2>
      </header>
    </nav>
  );
}

export default Header;
