import React, { memo } from "react";

const _Modal = () => {
  return (
    <div id="div-zoom-area" className="modal">
      <img id="img-zoom-area-content" />
    </div>
  );
};

export const Modal = memo(_Modal);
