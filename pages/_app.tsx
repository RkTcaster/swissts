import MainLayout from '@/src/components/Layout/MainLayout'
import { TournamentProvider } from '@/src/providers/tournament'
import '@/src/styles/index.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Swiss</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TournamentProvider>
        <main className={`${inter.className}`}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </main>
      </TournamentProvider>
    </>
  )
}
