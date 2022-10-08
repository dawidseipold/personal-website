import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { render } from '@master/css/render';
import { StyleSheet } from '@master/css';

export const MyDocument = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=outfit@400,900,800,300,500,600,200,100,700&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: 'window.MasterCSSManual=true' }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const { css } = render((await ctx.renderPage()).html, { StyleSheet });
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        <style id="master-css">{css}</style>
        {initialProps.styles}
      </>
    ),
  };
};

export default MyDocument;
