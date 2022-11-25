import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

function CustomModal({ open, setOpen, title, customLable, content }) {
  return (
    <Pane>
      <Dialog
        isShown={open}
        title={title}
        onCloseComplete={() => setOpen(!open)}
        confirmLabel={customLable}
      >
        Dialog content
      </Dialog>
    </Pane>
  );
}

export default CustomModal;
