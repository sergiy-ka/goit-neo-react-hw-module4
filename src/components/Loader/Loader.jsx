import css from "./Loader.module.css";
import { Oval } from "react-loader-spinner";

const Loader = () => (
  <div className={css.Loader}>
    <Oval height={50} width={50} color="#00BFFF" ariaLabel="loading" />
  </div>
);

export default Loader;
