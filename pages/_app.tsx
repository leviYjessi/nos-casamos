import { Footer } from '@/modules/components/Footer';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-grey-bg min-h-screen">
                <Component  {...pageProps} /> <Footer/>
        </div>
    )
}
