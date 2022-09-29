import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { FormControl, FormLabel, RadioGroup,FormControlLabel, Radio } from "@mui/material";

const Navbar = () => {
    const [dark , setDark] = useState(true)
  return (
    <nav className={`${dark ? "bg-light" : "bg-dark"} p-3`}>
      <div className="row">
        <div className="col-md-12 d-flex gap-4 justify-content-end pt-2">
          <Link>Gmail</Link>
          <Link>Images</Link>
          <Link>
            <AppsIcon />
          </Link>

          <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" onChange={() => setDark(!dark)} role="switch" id="flexSwitchCheckChecked"  />
  <label className={` ${dark ? "text-dark" : "text-light"}  form-check-label `} for="flexSwitchCheckChecked">
  {
                        dark ? "Dark Mode" : "Light Mode"
                }
  </label>
</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
