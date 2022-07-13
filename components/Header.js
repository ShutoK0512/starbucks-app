import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../public/images/starbucks-logo.svg'

import {NEXT_URL} from '../config/index'


function Header() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.wrapper}>
                <li className={styles.logo}>
                    <Link href="/">
                     <Image src={Logo} width={30} height={30}/>
                    </Link>
                </li>
                <div className={styles.menu}>
                    <ul>
                            <li>
                            <Link href="/">TOP</Link></li>
                        <li>
                            <Link href={`${NEXT_URL}/page/beverage`}>ビバレッジ メニュー</Link></li>
                        <li>
                            <Link href={`${NEXT_URL}/page/food`}>フードメニュー</Link></li>
                        <li>
                            <Link href={`${NEXT_URL}/page/beans`}>コーヒー豆</Link></li>
                        <li>
                            <Link href={`${NEXT_URL}/page/goods`}>タンブラー＆グッズ</Link></li>
                    </ul>
                </div>
            </ul>
        </nav>
    )
}

export default Header
