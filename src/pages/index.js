import Head from 'next/head'
import Navbar from '@/components/navbar/navbar'

export default function Home() {
    return (
        <>
            <Head>
                <title>DevSteam: A sua loja online de games</title>
                <meta name="description" content="DevSteam: A sua loja online de games" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Navbar />
            </div>
        </>
    )
}
