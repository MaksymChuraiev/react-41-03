import { useEffect, useState } from 'react';
import { ModalWrap, ModalImage } from './Modal.styled';

export const Modal = ({ image, onClose }) => {
  const [loaded, setLoaded] = useState(false);
  const handleCloseModal = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);

    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  const onLoad = () => {
    setLoaded(true);
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <ModalWrap onClick={handleBackdropClick}>
      <ModalImage
        onLoad={onLoad}
        src={`https://image.tmdb.org/t/p/w780${image}`}
        alt=""
        style={{ display: loaded ? 'block' : 'none' }}
      />
      {!loaded && <h2 style={{ fontSize: 50, color: 'white' }}>Loading</h2>}
    </ModalWrap>
  );
};
