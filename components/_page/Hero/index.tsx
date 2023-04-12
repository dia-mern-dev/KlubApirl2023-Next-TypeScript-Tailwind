import React from "react";
import Image from "next/image";

import styles from "./styles.module.scss";
import background from "../../../public/images/hero_bg.png";
import Container from "../../_ui/Container";
import Button from "../../_ui/Button";
import Icon from "../../_ui/Icon";
import { bottomBarTextList } from "../../../utils/constants";

const Hero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.background} alt="hero_background" src={background} />
      <Container className={styles.content}>
        <h1 className={styles.heroTitle}>
          No-nonsense funding for tech companies in <span className={styles.underLine}>food</span> and{" "}
          <span className={styles.underLine}>energy</span>
        </h1>
        <div className={styles.main}>
          <p className={styles.heroDescription}>
            We partner with high-tech companies that drive sustainable transitions in food and energy, by providing
            funds, knowledge and network.
          </p>
          <Button>OUR INVESTMENT</Button>
        </div>
      </Container>
      <div className={styles.bottomBar}>
        <Container className={styles.barWrapper}>
          {bottomBarTextList.map((item) => (
            <div key={item.label} className="flex items-center space-x-8">
              <p className={styles.text}>{item.label}</p>
              <div className={styles.icon}>
                <Icon name="ArrowRight" />
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Hero;
