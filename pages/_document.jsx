import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en' className='scroll-smooth'>
            <Head>
                <meta name="theme-color" content="#1b8520" />
            </Head>
            <body className='bg-bgn text-white'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}