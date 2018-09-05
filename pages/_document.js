import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { JssProvider, SheetsRegistry } from 'react-jss';

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry();

    sheets.add(jss.createStyleSheet({
        '@global': {
            '*': {
                border: '1px solid red' // everything should be boxed in red
            }
        }
    }))

    const decoratePage = Page => props =>
      <JssProvider registry={sheets}>
        <Page {...props} />
      </JssProvider>;

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style type="text/css" data-meta="jss-ssr" dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
    );

    return { ...renderedPage, styles };
  }
}
