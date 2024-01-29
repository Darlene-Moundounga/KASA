import Banner from "../../Components/Banner/Banner"
import Collapse from "../../Components/Collapse/Collapse"
import aboutBanner from '../../assets/aboutBanner.png'
import dataAbout from '../../Data/about.json'

function About(){
    return (
       <div className="aboutContent">
            <Banner image={aboutBanner}/>
            <div className="collapseSection">
                {dataAbout.map((collapse) =>
                    <Collapse 
                        key={collapse.title}
                        title={collapse.title}
                        description={collapse.description}
                    />
                )}
            </div>
       </div>
    )
}

export default About