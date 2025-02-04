import { FC } from "react";
import { Noto_Sans} from 'next/font/google'
import { baskervville, noto_sans } from "@/styles/fonts";
import Head from "next/head";
import styles from './index.module.css'


const GoogleMain: FC = () => {
  return (
    <main>
      {/* <p style={{ fontSize:50 }}>FONT : DEFAULT</p>
      <p>CLS TEST</p>
      <hr />
      <p className={noto_sans.className} style={{ fontSize: 50}}>
        FONT : NOTO SANS
      </p>
      <p>CLS TEST</p>
      <hr /> */}

      <p className={baskervville.className} style={{ fontSize:50 }}>
        FONT : NEXT
      </p>
      <p>CLS TEST</p>
      <hr />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <p className={styles.baskerville} style={{ fontSize: 50}}>
        FONT : REMOTE
      </p>
      <p>CLS TEST</p>


    </main>
  );
};


export { GoogleMain };