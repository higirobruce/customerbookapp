import React, { useState } from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

function CustomModal({ open, setOpen }) {
  return (
    <Pane>
      <Dialog
        isShown={open}
        title="Dialog title"
        onCancel={() => setOpen(open)}
        onCloseComplete={() => setOpen(open)}
        confirmLabel="Custom Label"
      >
        Dialog content
      </Dialog>
    </Pane>
  );
}

export default CustomModal;
