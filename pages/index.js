import Head from 'next/head'
import Home from '../components/Home'
export default function Welcome() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Profile Website</title>
      </Head>

      <Home/>
    </div>
  )
}
