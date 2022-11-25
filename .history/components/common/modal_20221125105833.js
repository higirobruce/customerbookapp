import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

function CustomModal({ open, setOpen, title, customLable, content, handleConfirm }) {
  return (
    <Pane>
      <Dialog
        isShown={open}
        title={title}
        onCloseComplete={() => setOpen(!open)}
        confirmLabel={customLable}
        onConfirm={()=>handleConfirm()}
        intent="danger"
      >
        {content}
      </Dialog>
    </Pane>
  );
}

export default CustomModal;
