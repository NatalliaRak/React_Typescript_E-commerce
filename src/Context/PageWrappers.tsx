import React from 'react'
import { ReactNode } from 'react';


type PageWrapperProps = {
    name: string | any
    children: ReactNode

}


const PageWrapper = ({name, children}:PageWrapperProps) => {
  return (
    <div className='container'>
        <h1>{name}</h1>
        {children}
    </div>
  )
}

export default PageWrapper;