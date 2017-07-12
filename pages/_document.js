import Document, { Head, Main, NextScript } from 'next/document'
import { SheetsRegistry, SheetsRegistryProvider } from 'react-jss'

export default class EnhancedDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheets = new SheetsRegistry()

    const decoratedPage = Page => props => (
      <SheetsRegistryProvider registry={sheets}>
        <Page {...props} />
      </SheetsRegistryProvider>
    )

    const page = renderPage(decoratedPage)
    const ssrCss = sheets.toString();
    return { ...page, ssrCss }
  }

  render () {
    console.log(this.props)
    return (
      <html>
        <Head>
          <style data-jss dangerouslySetInnerHTML={{ __html: this.props.ssrCss }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
