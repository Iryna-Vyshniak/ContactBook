import Modal from 'react-modal';

import { MdOutlineClose } from 'react-icons/md';
import Avatar from 'assets/avatar.png';
import {
  Button,
  CloseBtn,
  // ModalPicture,
  ModalPictureWrapper,
  PictureDescr,
} from './Modal.styled';
import { customStyles } from 'styles/modalStyles';
import { useState } from 'react';

import { Tooltip } from '@chakra-ui/react';

import { TfiPencil } from 'react-icons/tfi';
import { ChangeContactModal } from 'components/ChangeContactModal/ChangeContactModal';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import { abbrevName } from 'utils/abbrevName';

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

  function stringAvatar(name) {
    //console.log(name);
    return {
      sx: {
        bgcolor: getRandomHexColor(),
      },
      children: abbrevName(name),
    };
  }

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
      <ModalPictureWrapper>
        <Avatar {...stringAvatar(Object.values(data?.name).join(''))} />
      </ModalPictureWrapper>
      <PictureDescr>
        <p>{data?.name}</p>
        <Tooltip label="Call" hasArrow bg="gray.300" color="#000" fontSize="xs">
          <p>
            <a href={'tel:' + data?.phone}>{data?.phone}</a>
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
