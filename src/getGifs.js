
const api_key = `EdRcNVUz3txLyRX3E6dKi9FvdipL85FY`

export default function getGifs ({keyword = "Morty"} ={}){
    const Url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=5&offset=1&rating=g&lang=en`;
    
    return fetch(Url).then(res=> res.json())
    .then(response=>{
             const{data} = response
              if(Array.isArray(data)){
                const gifs = data.map(
                    
                    image => {
                    const {images, title, id} = image
                    const {url} = image.images.downsized_medium
                    return{title, id , url}       
                    
                             }
                      )
                return gifs   
                                     }
                    }
          )

}