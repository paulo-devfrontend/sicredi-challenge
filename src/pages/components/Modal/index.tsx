import React from 'react';

import { ModalBackDrop, ModalCard } from './style';

interface Props {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen?: boolean;
}

export default function ({ children, closeModal, isOpen }: Props) {
  return (
    <ModalBackDrop isOpen={isOpen} onClick={() => closeModal()}>
      <ModalCard isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {children}
      </ModalCard>
    </ModalBackDrop>
  );
}
