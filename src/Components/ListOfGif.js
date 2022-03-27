import  React , {useEffect , useState} from 'react';
import getGifs from "../getGifs";
import Gif from './Gif';

export default function ListOfGif({params})
{
    const {keyword} = params
    const[gifs, gifsSet] = useState([]);
    const[load, LoadSet] = useState(false);
    useEffect(function(){

        LoadSet(true);

        getGifs({keyword}).then(gifs=>{
            
            LoadSet(false);
            return gifsSet(gifs)
 
        })
        
              


},[keyword])
    
if(load)
{
return <div> cargando pagina </div>
}


return <div> 
            {

     gifs.map(
    ({id, title, url})=><Gif 
    id={id}
    key={id}
    title={title}
    url={url}/>
           )

           }
           </div>

}