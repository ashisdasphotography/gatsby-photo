import React from 'react'
import { GoMail } from '@react-icons/all-files/go/GoMail'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'

const ExternalLinks = () => {
  return (
    <div className='flex justify-center'>
      <a href='https://www.instagram.com/ashis_das_pht/' target={"_blank"} rel='noreferrer'>
        <FiInstagram className='mx-1'/>
      </a>
      <a href='mailto:contact@ashisdas.com'>
        <GoMail className='mx-1'/>
      </a>
    </div>
  )
}

export default ExternalLinks
