import './globals.css'
import Navbar from '../components/UI/navbar'
import Footer from '../components/UI/footer'
import Head from 'next/head'


export const metadata = {
  title: 'Homeopatia larrosa',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
