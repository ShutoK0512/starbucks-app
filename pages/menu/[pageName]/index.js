import {NEXT_URL} from '../../../config/index'
import Layout from '../../../components/Layout'
import styles from '../../../styles/Detail.module.css'
import ItemsList from '../../../components/ItemsList'

function DetailPage({ pgs }) {


    return (
        <Layout>
        <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1>{pgs[0].category1_name}</h1>
                </div>

                <div className={styles.itemWrapper}>
                {pgs.map((item) => (
                        <ItemsList key={item.id} item={item} />
                    ))}
                </div>
                   

            </div>
        </Layout>

    )
}

export default DetailPage

// export async function getStaticPaths() {
//     const res = await fetch("https://product.starbucks.co.jp/api/category-product-list/index.json")
//     const datas = await res.json()

//     const paths = datas.map((data) => ({
//         params: { pageName: data.category1_list_path}
//     }))

//     return {
//         paths,
//         fallback: true
        
//     }
// }

// export async function getStaticProps({ params: {pageName}}) {
//     const res = await fetch(`https://product.starbucks.co.jp/api/category-product-list/${pageName}/index.json`)
//     const pages = await res.json()

//     return {
//         props: {
//             pgs: pages
//         }
//     }
// }


export async function getServerSideProps({ query: {slug}}) {
    const res = await fetch(`https://product.starbucks.co.jp/api/category-product-list/${slug}/index.json`)
    const datas = await res.json()

    return {
        props: {
            pgs: datas[0]
        }
    }
}



