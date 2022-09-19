import React from 'react'
import styles from './MainLayout.module.css'
import Head from 'next/head'
import { Navbar } from '../Navbar'
import { FC, PropsWithChildren } from 'react';

export const MainLayout: FC<PropsWithChildren> = ({children}) => {

    return (
        <div className={styles.container}>
    
          <Head>
            <title>Home - Leonardo</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />      
          
          <main className={styles.main}>

            {children}
              
          </main>

        </div>
      )

}
