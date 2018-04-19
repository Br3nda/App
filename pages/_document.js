import Document, { Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
      <Head>
        <link rel='manifest' href='static/manifest.json' />
        <link href='https://fonts.googleapis.com/css?family=Merriweather:700|Roboto:300,400,700&amp;subset=latin-ext' rel='stylesheet' />
        <link rel='shortcut icon' href='./favicon.ico' />
        <meta name='mobile-web-app-capable' content='yes' key='viewport' />
        <meta name='apple-mobile-web-app-capable' content='yes' key='viewport' />
        <meta name='msapplication-starturl' content='/' key='viewport' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
