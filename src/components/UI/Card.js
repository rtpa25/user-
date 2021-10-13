import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  //className propmpt is only defined for default jsx elements
  // for adding any such things to non default elements they have to specified via props
  // in this case the styles come via props and are added as class name
  // so that not only the div gets styled but as a global style
  // everything inside that div get styled
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
