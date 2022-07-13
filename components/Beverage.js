import styles from '../styles/List.module.css'

function Beverage({ data }) {

    const image = `https://product.starbucks.co.jp${data.image1}`


    return (
        <>
            <li key={data.id} className={styles.listItem}>
                <img src={image} alt="product-image" />
                {data.product_name}
            </li>
        </>

    )
}

export default Beverage



