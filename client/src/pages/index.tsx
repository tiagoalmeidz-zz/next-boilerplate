import Head from 'next/head'

type Props = {
  title: string
}

const foo = 'usahdusahdusa'

export default function   Home({ title = 'WON Games' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hi {title}</div>
    </>
  )
}
