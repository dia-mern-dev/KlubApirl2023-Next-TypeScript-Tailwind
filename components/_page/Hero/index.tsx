import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import background from "../../../public/images/hero_bg.png";
import Container from "../../_ui/Container";

const Hero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.background} alt="hero_background" src={background} />
      <Container className={styles.content}>
        <h1 className={styles.heroTitle}>No-nonsense funding for tech companies in food and energy</h1>
      </Container>
    </div>
  );
};

export default Hero;
