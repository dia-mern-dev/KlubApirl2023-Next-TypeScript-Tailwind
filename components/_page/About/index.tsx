import React from "react";

import styles from "./styles.module.scss";
import Container from "../../_ui/Container";

const About: React.FC = () => {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.block}>
        <h3 className={styles.lineTitle}>About</h3>
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Long term vision</h3>
        <p className={styles.description}>
          As a family-funded VC, NV invests both in typical VC setup as well as for longer holding periods. That means
          we can easily adapt to changing business- and market developments, supporting the long-term development of
          sustainable businesses.
        </p>
      </div>
      <div className={styles.block}>
        <h3 className={styles.title}>Active support</h3>
        <p className={styles.description}>
          As active shareholders we support our portfolio companies by sharing knowledge, network and experience. We
          draw on the family’s longstanding history in high-tech product development and successful market entry of
          innovations.
        </p>
      </div>
    </Container>
  );
};

export default About;
