import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

function Layout({ children}) {
    return (
        <>
        <Head>
            <title>Starbacks Coffee App(test)</title>
            <meta name="description" content='This is test website' />
            <meta name="keywords" content='Coffee' />
        </Head>
            <Header />
                {children}  
            <Footer />
        </>
    )
}

export default Layout
