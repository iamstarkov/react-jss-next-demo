import {Component} from 'react';
import App, {Container} from 'next/app';
import withStyle, { JssProvider } from 'react-jss';
import {getSheetsRegistry} from '../SheetsRegistry';

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
    const {Component: Page, pageProps} = this.props;

    return (
      <JssProvider registry={getSheetsRegistry()}>
        <Container>
          <Layout>
            <Page {...pageProps} />
          </Layout>
        </Container>
      </JssProvider>
    );
  }

}
