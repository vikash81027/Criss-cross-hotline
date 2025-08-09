import { useState } from "react";
import styles from "./Faq.module.css";

function Faq({ item }) {
  const [open, setIsOpen] = useState(false);
  return (
    <li className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <div>
        <h2>{item.question}</h2>
        <button onClick={() => setIsOpen((state) => !state)}>
          {open ? "-" : "+"}
        </button>
      </div>
      {open && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi
          autem quis beatae inventore ratione porro. Sequi ullam, optio
          repellendus quisquam architecto cumque sunt magni id vitae autem,
          suscipit magnam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Exercitationem incidunt cumque quam similique error optio veniam
          commodi a ipsa, sed dolores molestias dolorem temporibus eaque eius
          dolor soluta! Reiciendis, quasi.
        </p>
      )}
    </li>
  );
}

export default Faq;
