import React from 'react';

interface Props {}

export const Modal: React.FC<Props> = (props) => {
  return (
    <div>
      {/* Your component implementation here */}
    </div>
  );
};

export default Modal;
// src/context/ModalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import { useModal } from '../context/ModalContext';
import { css } from '@emotion/react';

const modalStyles = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
});

const overlayStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
});

export const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <>
      <div css={overlayStyles} onClick={closeModal} />
      <div css={modalStyles}>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </>
  );
};

// src/App.tsx
import React from 'react';
import { ModalProvider, useModal } from './context/ModalContext';
import { Modal } from './components/Modal';

const App = () => {
  const { openModal } = useModal();

  return (
    <ModalProvider>
      <div>
        <h1>My App</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal>
          <h2>Modal Content</h2>
          <p>This is the content of the modal</p>
        </Modal>
      </div>
    </ModalProvider>
  );
};

export default App;


// src/components/Modal.tsx
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { useModal } from '../context/ModalContext';
import { css } from '@emotion/react';

const modalStyles = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
});

const overlayStyles = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
});

export const Modal = ({ children }: { children: ReactNode }) => {
  const { isOpen, closeModal } = useModal();

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div css={overlayStyles} onClick={closeModal} />
      <div css={modalStyles}>
        {children}
        <button onClick={closeModal}>Close</button>
      </div>
    </>,
    document.getElementById('modal-root')!
  );
};
