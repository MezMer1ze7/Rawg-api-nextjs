import Layout from '../components/Layout'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  return (
    < >

    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
    </>
  )
}

export default MyApp
