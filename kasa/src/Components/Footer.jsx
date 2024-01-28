import footer from '../assets/Footer.png' 
import footerResponsive from '../assets/FooterResponsive.png'


function Footer(){
    return (
        <footer>
            <img src={footer} alt="Pied de page" className='desktop'/>
            <img src={footerResponsive} alt="Pied de Page version mobile" className='mobile'/>
        </footer>
    )
 }
 
 export default Footer