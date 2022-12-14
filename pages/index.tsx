import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let [counter,setCounter]=useState(0);
  const inc = () =>{
    setCounter(counter =counter+1);

  }
  const dec = () =>{
    setCounter(counter=counter-1)


  }
  if(counter<=0){
    counter=0
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='total'>
        <div className='A'>
          <h1 className='B'>Counter App</h1>

        </div>
        <div className='count'>
          <h1 className='C'>{counter}</h1>

        </div>
        <div className='Mar'>
        <button type="button" className="btn btn-primary"  onClick={inc}>Increament</button>
        <button type="button" className="btn btn-warning side" onClick={dec}>Decreament</button>
        </div>
       
      </div>


      </div>

    
  )
}

export default Home
