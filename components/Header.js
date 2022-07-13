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
                            <Link href={`/menu/beverage`}>ビバレッジ メニュー</Link></li>
                        <li>
                            <Link href={`/menu/food`}>フードメニュー</Link></li>
                        <li>
                            <Link href={`/menu/beans`}>コーヒー豆</Link></li>
                        <li>
                            <Link href={`/menu/goods`}>タンブラー＆グッズ</Link></li>
                    </ul>
                </div>
            </ul>
        </nav>
    )
}

export default Header
