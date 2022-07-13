import styles from '../styles/ItemsList.module.css'

function ItemsList({ item }) {

    const image = `https://product.starbucks.co.jp${item.image1}`
    
    return (
        <div className={styles.wrapper}>
            <img src={image} alt="product-image"/>
            <h3>{item.product_name}</h3>    
            <h4>{item.catchcopy}</h4>
            <p className={styles.note}>{item.product_note}</p>
            <p className={styles.price}>¥ {item.price}- (税込み)</p>
            
        </div>
    )
}

export default ItemsList
