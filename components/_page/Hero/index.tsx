import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import background from "../../../public/images/hero_bg.png";

const Hero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.background} alt="hero_background" src={background} />
    </div>
  );
};

export default Hero;
