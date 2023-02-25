import { ConnectWallet, useAddress, useNetwork, useNetworkMismatch, ChainId } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { useEffect } from "react";

import styles from "../styles/Home.module.css";


const Home: NextPage = () => {

  const address = useAddress();
  const [, switchNetwork] = useNetwork();
  const isWrongNetwork = useNetworkMismatch();

  useEffect(() => {
    if (isWrongNetwork && switchNetwork) {
      setTimeout(() => {
        switchNetwork(ChainId.Mumbai);
      }, 2000);
    }
  }, [address, isWrongNetwork, switchNetwork]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.connect}>
          <ConnectWallet accentColor={isWrongNetwork ? 'black' : 'grey'} />
          {isWrongNetwork ? <p>Wrong network</p> : null}
        </div>
        <div>My wallet address is {address}</div>;
      </main>
    </div>
  );
};

export default Home;
