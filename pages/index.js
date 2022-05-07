import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
export default function Home() {
    return (
        <>
            <Head>
                <title>Ten App</title>
                <meta name="description" content="We create your online presence" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div id="home">
                <Hero/>
                <Features/>
            </div>
        </>
    )
}
