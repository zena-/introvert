import Head from 'next/head'
import Image from 'next/image'
import Steps from "/components/Steps"


export default function Home() {
  return (
    <>
      <Head>
        <title>Teamway test</title>
        <meta name="description" content="Teamway test: zena" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <h2 className="main-h1">Are you an introvert or an extrovert?</h2>
        <p className="main-p">Play this short quiz to find out.</p>
        <div className="thesteps">
         <Steps />
        </div>
      </main>
    </>
  )
}
