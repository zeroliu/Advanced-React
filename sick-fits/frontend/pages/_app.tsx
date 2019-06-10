import App, { Container, NextAppContext } from 'next/app';
import { Page } from 'components/page';
import { ApolloProvider } from 'react-apollo';
import { withData } from 'lib/withData';
import { ApolloClient } from 'apollo-boost';

interface Props {
  apollo: ApolloClient<{}>;
}

interface PageProps {
  query?: any;
}

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps: PageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
