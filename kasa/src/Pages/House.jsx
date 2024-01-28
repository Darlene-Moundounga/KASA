import Collapse from '../Components/Collapse'
import houses from '../Data/homes.json'
import Rating from '../Components/Rating/GenerateStars'
import Carousel from '../Components/Carousel/Carousel'


export default function House({id}){
    const house = houses.find((house)=> house.id === id )
    if(house==null){
        window.location.href= "/error"
    }
    return (
        <div className="house">
            <Carousel pictures={house.pictures} />
            <div className='houseContent'>
                <div className='allInfo'>
                    <div className='hostDetails'>
                        <div className='hostInfo'>
                            <img src={house.host.picture} alt="profil" />
                            <p>{house.host.name} </p>
                        </div>
                        <Rating rating={house.rating}/>
                    </div>
                    <div className='houseInfo'>
                        <div className='titleHouse'>
                            <p className='title'> {house.title} </p>
                            <p className='subtitle'>{house.location} </p>
                        </div>
                        <ul className='tagHouse'>
                            {house.tags.map((tag, index) => <li key={index}>{tag}</li>)}
                        </ul>
                    </div>
                </div>
                
                    <div className='collapseHouse'>
                        <div>
                        <Collapse title="Description" description={house.description} />
                        </div>
                        <div>
                        <Collapse title="Equipements" description={
                            house.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)} />
                        </div>
                </div>
            </div>
            
        </div>
    )
 }
