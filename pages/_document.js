import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {getSheetsRegistry, destroySheetsRegistry} from '../SheetsRegistry';

export default class AppDocument extends Document {
  static getInitialProps({ renderPage }) {

    // flush the singleton if it exists
    destroySheetsRegistry();

    const renderedPage = renderPage();

    // get the singleton registry which is was created by the App component
    const sheets = getSheetsRegistry();

    const styles = (
      <style type="text/css" data-meta="jss-ssr" dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
    );

    return { ...renderedPage, styles };
  }
}
