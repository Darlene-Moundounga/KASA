import Banner from "../Components/Banner"
import Card from "../Components/Card"
import dataHomes from '../Data/homes.json'


import homeBanner from "../assets/homeBanner.png"
function Home(){
   return (
      <div className="homeContent">
         <Banner text={"Chez vous, partout et ailleurs"} image={homeBanner}/>
         <div className="cardContainer">
            {
            dataHomes.map((home) =>
               <Card
               key= {home.id} 
               title={home.title} 
               cover={home.cover}
               id={home.id}
               />
            )}

         </div>
         
      </div>
      
   )
}

export default Home

/*Intégration des titres des locations
{dataHomes.map((home) =>
<Card 
key= {home.id} 
title={home.title}/>
)}*/