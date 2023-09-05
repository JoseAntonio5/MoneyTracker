import '../styles/globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Montserrat, Roboto } from '@next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
});

export const metadata = {
    title: 'Money Tracker App',
    description: 'Your money track app',
    // icons: {
    //     icon: '../public/favicon.svg'
    // }
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${roboto.variable}`}>
                <Nav />
                <div className='font-roboto'>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}