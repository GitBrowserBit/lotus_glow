'use client'
import Image from "next/image";
import Logo from '@/public/Logo-Vector.svg'
import HamburgerIcon from '@/public/HaburgerIcon.svg'
import closedIcon from '@/public/cross.svg'
import styles from '@/app/ui/styles/header.module.css'
import { useState } from "react";

const Header = () => {


    const [open, setOpen] = useState(false);

    const lists = [
        { content: 'ABOUT THE LOTUS GLOW', link: '/' },
        { content: 'THE LOTUS YOGA TYPES', link: '/' },
        { content: 'LOTOS INSTRUCTORS', link: '/' },
        { content: 'BOOK A SESSION', link: '/' },
    ]
    return (
        <header className={styles.header}>
            <span className={styles.containerLogo}>
                <a href="/"><Image className={styles.logo} alt="Lotus Glow" src={Logo} /></a>
            </span>
            <div className={styles.containerButton}>
                <button onClick={() => setOpen(true)} className={styles.buttom}>
                    <span className={styles.icon}>
                        <Image className={styles.iconImg} alt="Buttom" src={HamburgerIcon} />
                    </span>
                </button>
            </div>
            <div className={`${styles.containerSidebar}  ${open ? styles.active : ""}`}>
                <aside className={`${styles.sidebar}`}  >
                    <div className={styles.containerClosedButtom}>
                        <button onClick={() => setOpen(false)} className={styles.closedButtom}>
                            <span >
                                <Image className={styles.closedIcon} alt="Buttom" src={closedIcon} />
                            </span>
                        </button>
                    </div>
                    <nav>
                        <ul className={styles.list}>
                            {lists.map((item, index) => (
                                <li key={index} className={`${styles.li} ${index === lists.length - 1 ? styles.listItemLast : ''}`}>
                                    <a className={`${styles.link}`} href={item.link}>{item.content}</a>
                                    <hr className={`${styles.line} ${index === lists.length - 1 ? styles.lineLast : ''}`} />
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
            </div>
        </header>
    )
}

export default Header;