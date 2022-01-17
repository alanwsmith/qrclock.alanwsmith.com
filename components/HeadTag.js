import Head from 'next/head'

export default function HeadTag({ description, image, title, type, url }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@theidofalan" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicons/96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicons/128x128.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="196x196"
        href="/favicons/196x196.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="228x228"
        href="/favicons/228x228.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/favicons/152x152.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="167x167"
        href="/favicons/167x167.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="180x180"
        href="/favicons/180x180.png"
      />
    </Head>
  )
}
