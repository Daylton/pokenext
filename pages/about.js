import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
        doloremque minus nam expedita aperiam incidunt voluptatem repellendus,
        saepe voluptatibus deserunt, itaque magnam, laborum ducimus alias. Saepe
        fugiat eligendi hic esse?
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
