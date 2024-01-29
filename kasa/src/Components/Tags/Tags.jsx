import homes from'../../Data/homes.json'

export default function Tags(home){
   const tags = homes.tags
    const firstTag = tags[0]
    return <p>{firstTag} </p>
}