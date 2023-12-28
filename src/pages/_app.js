import NextAuthProvider from '@/components/Auth/NextAuthProvider'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }) {
  return (
    <NextAuthProvider>
      <section className="mx-2 sm:mx-10 md:mx-16 lg:mx-40">
        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
        <Component {...pageProps} />
      </section>
    </NextAuthProvider>
  )
}
