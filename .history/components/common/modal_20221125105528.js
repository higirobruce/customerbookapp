import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

function CustomModal({ open, setOpen, title, customeLable }) {
  return (
    <Pane>
      <Dialog
        isShown={open}
        title={title}
        onCloseComplete={() => setOpen(!open)}
        confirmLabel={customeLable}
      >
        Dialog content
      </Dialog>
    </Pane>
  );
}

export default CustomModal;
