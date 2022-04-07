import React from "react";
import { useState } from 'react';
import { useLocation } from "wouter";
export default function Search()
{
const [searchWord,SetsearchWord ]= useState()
const [searchPath, SetSearchPath ]= useLocation()

function HandleSubmit(e)
{
    e.preventDefault()
    SetSearchPath(`/gif/${searchWord}`)
}

function OnchangeSearch(e)
{
    
    // e.preventDefault()
//    console.log(e.target.value);
SetsearchWord(e.target.value)
}
    return(
          <div>
            <form onSubmit={HandleSubmit}>
                <input type="text" onChange={OnchangeSearch} placeholder={"Gif name"} value={searchWord} /> 
            </form>              
          </div>
    )

}