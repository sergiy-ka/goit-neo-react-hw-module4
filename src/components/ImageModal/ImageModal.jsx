import css from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.ImageModal}
      overlayClassName={css.ImageModalOverlay}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <div className={css.ImageModalContent}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.ImageModalImage}
          onClick={onClose}
        />
        <div className={css.ImageModalDetails}>
          <p>
            <strong>Author:</strong> {image.user.name}
          </p>
          <p>
            <strong>Likes:</strong> {image.likes}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {image.description || "No description available"}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
