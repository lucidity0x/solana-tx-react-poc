import { FC } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic';
const WalletMultiButtonDynamic = dynamic(
    async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    { ssr: false }
);

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/solanaLogo.png" height={50} width={80} />
            <span className={styles.somethingElse}>exch.ag </span>
            <WalletMultiButtonDynamic />
        </div>
    )
}