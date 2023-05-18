import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import Av from 'assets/avatar.png';
import {
  BorderInside,
  BorderOutside,
  Button,
  CloseBtn,
  ModalPicture,
  PhotoThumb,
  PhotoWrap,
  PictureDescr,
} from './Modal.styled';
import { customStyles } from 'styles/modalStyles';
import { useState } from 'react';

import { Tooltip } from '@chakra-ui/react';

import { TfiPencil } from 'react-icons/tfi';
import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';

Modal.setAppElement('#root');

export const ContactModal = ({ isOpen, data, onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openChangeModal = () => {
    setModalIsOpen(true);
  };

  const closeChangeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Inline Styles Modal Example"
      style={customStyles}
    >
      <CloseBtn onClick={onClose}>
        <MdOutlineClose />
      </CloseBtn>
      <PhotoWrap>
        <BorderOutside>
          <BorderInside>
            <PhotoThumb>
              <ModalPicture src={Av} alt="photo" width="260" />
            </PhotoThumb>
          </BorderInside>
        </BorderOutside>
      </PhotoWrap>
      <PictureDescr>
        <p>{data?.name}</p>
        <Tooltip label="Call" hasArrow bg="gray.300" color="#000" fontSize="xs">
          <p>
            <a href={'tel:' + data?.phone}>{data?.number}</a>
          </p>
        </Tooltip>
      </PictureDescr>
      <Button onClick={openChangeModal}>
        <TfiPencil size="16" />
      </Button>
      <ChangeContactModal
        isOpen={modalIsOpen}
        onClose={closeChangeModal}
        data={data}
        setModalIsOpen={setModalIsOpen}
      />
    </Modal>
  );
};
