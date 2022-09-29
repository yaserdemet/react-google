import React from "react";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark text-white text-center p-2 container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex  gap-3">
          <div href="">About</div>
          <div href="">Commercial</div>
          <div href="">How to Work</div>
        </div>
        <div className="col-md-6 d-flex  justify-content-end gap-3">
          <div>Privacy</div>
          <div>Terms</div>
          <div>Settings</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
