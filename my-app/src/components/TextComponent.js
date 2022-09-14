import React from 'react';
import '../App.js';

export default function TextComponent({name, 
    repo, 
    youtube, 
    slides}){
    return (
        <>
        <h3 className='HeaderText'>{name}</h3>
        <a href={slides}>
            <button className="buttonName" type='button'>
                slides
            </button>
        </a>

        <a href={youtube}>
            <button className="buttonName" type='button'>
                youtube
            </button>
        </a>

        <a href={repo}>
            <button className="buttonName" type='button'>
                {name} repo
            </button>
        </a>
        </>


    );
}