import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

// const ImageGallery = ({ images }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard image={image} />
//         </li>
//       ))}
//     </ul>
//   );
// };

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
