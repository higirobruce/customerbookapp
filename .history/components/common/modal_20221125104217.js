import {Pane, Dialog, Button} from 'evergreen-ui'

function CustomModal(open) {
    const [isShown, setIsShown] = React.useState(open)
  
    return (
      <Pane>
        <Dialog
          isShown={isShown}
          title="Dialog title"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Custom Label"
        >
          Dialog content
        </Dialog>
      </Pane>
    )
  }