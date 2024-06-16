import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'




const URL_HABIL = "https://pokeapi.co/api/v2/pokemon/"



function Pokemon() {
    const { name } = useParams();
    const [dataNamePoke, setDataNamePoke] = useState();
    

    const getData2 = async () => {
        try {
            
            const response = await fetch(URL_HABIL + name)
            const results = await response.json()
            setDataNamePoke(results)

            

        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
        getData2();
        console.log(dataNamePoke)
    }, [name]);

    return (



<div className='detalle'>
      <h1>{dataNamePoke?.name}</h1>
      <img
        src={dataNamePoke?.sprites?.front_default}
        alt={dataNamePoke?.name}
        style={{ width: "300px", height: "300px" }} />
      <p>Altura: {dataNamePoke?.height}</p>
      <p>Peso: {dataNamePoke?.weight}</p>
      <p>Tipo: {dataNamePoke?.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
      
</div>

       
    )
}

export default Pokemon