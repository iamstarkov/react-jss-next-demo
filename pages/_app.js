import {Component} from 'react'
import App, {Container} from 'next/app'
import withStyle from 'react-jss'

@withStyle({
  layout: {
    background: 'pink',
  }
})
class Layout extends Component {
  render() {
    return (
      <div className={this.props.classes.layout}>
        <header> header </header>

        <main>
          {this.props.children}
        </main>

        <footer> footer </footer>
      </div>
    )
  }
}

export default
class MyApp extends App {

  render () {
    const {Component: Page, pageProps} = this.props

    return (
      <Container>
        <Layout>
          <Page {...pageProps} />
        </Layout>
      </Container>
    )
  }

}
