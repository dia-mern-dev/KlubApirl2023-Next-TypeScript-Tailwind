import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import Container from "../../_ui/Container";
import advertiseImage from "../../../public/images/advertise.jpg";

const Advertise: React.FC = () => (
  <Container className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <Image className={styles.image} src={advertiseImage} alt="advertise image" />
    </div>
    <div className={styles.textWrapper}>
      <h3 className={styles.title}>
        We believe technology is at the heart of the transition towards a sustainable future.
      </h3>
      <p className={styles.description}>
        {`That’s why we focus on innovative hardware/software solutions that contribute to the well-being of future
        generations through the transition towards sustainable and efficient food and energy production systems.`}
      </p>
    </div>
  </Container>
);

export default Advertise;
