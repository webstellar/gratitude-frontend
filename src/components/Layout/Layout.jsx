import { Fragment } from "react"
import CookieConsent from "react-cookie-consent"
import Header from "./../Header/Header"
import Footer from "./../Footer/Footer"


const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </Fragment>
    )
}

export default Layout   