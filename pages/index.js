
import Image from 'next/image'
import Hero from '../public/images/SBX092021-Starbucks-Sustainability-Commitment-Greener-Stores.jpeg'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import {useState, useEffect} from 'react'
import Link from 'next/link'

import Beverage from '../components/Beverage'
import Beans from '../components/Beans'
import Food from '../components/Food'
import Goods from '../components/Goods'

import {NEXT_URL} from '../config/index'

import {FaAngleRight} from 'react-icons/fa'

export default function Home({ dataT, foodData, beansData, goodsData }) {

  return (
    <Layout>
        <div className={styles.hero}>
          <Image src={Hero} layout='fill' objectFit="cover"/>
        </div>


        <div className={styles.heading02}>
          <h2>メニュー</h2>
        </div>

        <div className={styles.item_wrapper}>
          <div className={styles.h3Wrapper}>
          <h3 className={styles.bev}>ビバレッジ　メニュー</h3>
          </div>
          
          <ul className="flex justify-center flex-wrap md:flex-nowrap">
          {dataT.map((data) => (
            <Beverage key={data.id} data={data} />
          ))}
          </ul>

            <div className="flex justify-end">
              <button className={styles.btn}>
              <Link href={`menu/beverage`}>More </Link><FaAngleRight />
              </button>
            </div>

        
        </div>

        <div className={styles.item_wrapper}>
          <div className={styles.h3Wrapper}>
          <h3 className={styles.food}>フード　メニュー</h3>
          </div>
          
          <ul className="flex justify-center flex-wrap md:flex-nowrap">
          {foodData.map((data) => (
            <Food key={data.id} data={data} />
          ))}
          </ul>

            <div className="flex justify-end">
              <button className={styles.btn}>
              <Link href={`menu/food`}>More </Link><FaAngleRight />
              </button>
            </div>
        
        </div>

        <div className={styles.item_wrapper}>
          <div className={styles.h3Wrapper}>
          <h3 className={styles.coffee}>コーヒー豆</h3>
          </div>
          
          <ul className="flex justify-center flex-wrap md:flex-nowrap">
          {beansData.map((data) => (
            <Beans key={data.id} data={data} />
          ))}
          </ul>

            <div className="flex justify-end">
              <button className={styles.btn}>
              <Link href={`menu/beans`}>More </Link><FaAngleRight />
              </button>
            </div>
        
        </div>

        <div className={styles.item_wrapper}>
          <div className={styles.h3Wrapper}>
          <h3 className={styles.goods}>グッズ</h3>
          </div>
          
          <ul className="flex justify-center flex-wrap md:flex-nowrap">
          {goodsData.map((data) => (
            <Goods key={data.id} data={data} />
          ))}
          </ul>

            <div className="flex justify-end">
              <button className={styles.btn}>
              <Link href={`menu/goods`}>More </Link><FaAngleRight />
              </button>
            </div>
        
        </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://product.starbucks.co.jp/api/category-product-list/beverage/index.json')
  const resTwo = await fetch('https://product.starbucks.co.jp/api/category-product-list/food/index.json')
  const resThree = await fetch('https://product.starbucks.co.jp/api/category-product-list/beans/index.json')
  const resFour = await fetch('https://product.starbucks.co.jp/api/category-product-list/goods/index.json')

  const datas = await res.json()
  const dataT = await datas.slice(0, 3)
  const datasTwo = await resTwo.json()
  const foodData = await datasTwo.slice(0, 3)
  const dataThree = await resThree.json()
  const beansData = await dataThree.slice(0, 3)

  const dataFour = await resFour.json()
  const goodsData = await dataFour.slice(0, 3)



  return {
    props: {
      dataT,
      foodData,
      beansData,
      goodsData
    }
  }
}


