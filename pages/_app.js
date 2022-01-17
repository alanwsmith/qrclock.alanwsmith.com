import '../styles/globals.css'
import LayoutMain from '../components/LayoutMain'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutMain>
      <Component {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
