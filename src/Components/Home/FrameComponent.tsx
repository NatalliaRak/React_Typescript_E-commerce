import React from 'react'
import Filrering from '../Home/filtering/Filtering'
import PageWrapper from '../../Context/PageWrappers'
import '../../App.css';

const FrameComponent = () => {
  return (
    
       <PageWrapper name={'Home'} >
          <Filrering />
       </PageWrapper>
    
  )
}

export default FrameComponent