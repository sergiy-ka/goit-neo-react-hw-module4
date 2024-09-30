import css from "./ErrorMessage.module.css";
// import { useToaster } from "react-hot-toast/headless";

// const ErrorMessage = () => {
//   const { toasts, handlers } = useToaster();
//   const { startPause, endPause } = handlers;

//   return (
//     <div
//       className={css.ErrorMessage}
//       onMouseEnter={startPause}
//       onMouseLeave={endPause}
//     >
//       {toasts
//         .filter((toast) => toast.visible)
//         .map((toast) => (
//           <div key={toast.id} {...toast.ariaProps}>
//             {toast.message}
//           </div>
//         ))}
//     </div>
//   );
// };
const ErrorMessage = ({ message }) => (
  <div className={css.ErrorMessage}>
    <p>{message}</p>
  </div>
);

export default ErrorMessage;
