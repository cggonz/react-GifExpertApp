import React/*, { useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);  

    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         //.then ( imgs => setImages( imgs ));
    //         .then( setImages );
    // }, [ category ] );
    
    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>

            {/* { loading ? 'Cargando...' : 'Data cargada' } */}

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {/* <ol> */}
                    {
                        images.map( img => (
                            //<li key={ img.id }> { img.title }</li>
                            <GifGridItem 
                                key={ img.id }
                                //img={ img }
                                { ...img } //pasamos todos los argumentos de img de manera más legible
                            />
                        ))
                        // images.map( {id, title} => (
                        //     <li key={ id }> { title }</li>
                        // ))
                    }
                {/* </ol> */}
                {/* <h3>{ count }</h3>
                <button onClick={ ()=> setCount(count + 1)}></button> */}
            </div>
        </>
    )
}
