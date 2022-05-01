import { createPortal } from 'react-dom';
import Backdrop from '@mui/material/Backdrop';

interface IProps {
  children?: React.ReactNode;
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Modal: React.FC<IProps> = ({ children, open, handleClose }) => {
  const element = (
    <Backdrop open={open} onClick={handleClose} mountOnEnter unmountOnExit>
      {children}
    </Backdrop>
  );

  return createPortal(element, document.querySelector('#portal')!);
};

export default Modal;
