import React, { useContext, useCallback, useState } from 'react';

import { TextButton } from 'components/Button';
import {
  Loader,
  LoaderCircular,
  InderteminateCircle,
} from 'components/Loading';

import Dragons from 'model/Dragons';

import Modal from 'pages/components/Modal';
import {
  ModalHeader,
  ModalTitle,
  ModalMessage,
  ModalActions,
} from 'pages/components/Modal/style';

import HomeContext from './HomeContext';

interface Props {
  isOpen: boolean;
  onConfirm: () => void;
}

export default function ({ isOpen, onConfirm }: Props) {
  const { dragonToDelete, closeModal } = useContext(HomeContext);
  const [deleting, setDeleting] = useState<boolean>(false);

  const confirm = useCallback(async () => {
    if (!dragonToDelete) return;
    setDeleting(true);
    const success = await Dragons.remove(dragonToDelete.id);
    setDeleting(false);
    if (success) {
      closeModal();
      onConfirm();
    }
  }, [dragonToDelete, closeModal, onConfirm]);

  return (
    <Modal closeModal={() => !deleting && closeModal()} isOpen={isOpen}>
      <ModalHeader>
        <ModalTitle>
          Delete {dragonToDelete ? dragonToDelete.name : 'dragon'}
        </ModalTitle>
      </ModalHeader>
      {!deleting && (
        <ModalMessage>
          Do you really want to delete{' '}
          {dragonToDelete ? dragonToDelete.name : 'this dragon'}?
        </ModalMessage>
      )}
      {deleting && (
        <Loader>
          <LoaderCircular>
            <InderteminateCircle />
          </LoaderCircular>
        </Loader>
      )}
      <ModalActions>
        <TextButton onClick={closeModal} disabled={deleting}>
          Cancel
        </TextButton>
        <TextButton onClick={confirm} disabled={deleting}>
          Yes
        </TextButton>
      </ModalActions>
    </Modal>
  );
}
