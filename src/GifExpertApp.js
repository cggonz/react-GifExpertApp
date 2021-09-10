//snipped rafc
import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Friends']);
    //     //setCategories( cats => [ ...cats, 'Friends']);
    // }

    return (
    <>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories= {setCategories}/>

        <hr/>

        {/* <button onClick={ handleAdd }>Añadir Categoria</button> */}

        <ol>
            {
                categories.map( (category) => (
                     <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>

    </>
    );
} 

export default GifExpertApp;