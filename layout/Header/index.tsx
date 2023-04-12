import React from "react";

import styles from "./styles.module.scss";
import Container from "../../components/_ui/Container";
import Icon from "../../components/_ui/Icon";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.content}>
        <div className={styles.logoWrapper}>
          <Icon name="Logo" />
        </div>
        <div className="flex space-x-34">
          <p className="text-16">Investment</p>
          <p className="text-16">News</p>
          <p className="text-16">About</p>
          <p className="text-16">Contact</p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
