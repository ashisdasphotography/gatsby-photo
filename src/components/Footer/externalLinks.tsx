import React from 'react'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FiMail } from '@react-icons/all-files/fi/FiMail'

const ExternalLinks = () => {
  return (
    <div className='flex justify-center'>
      <a
        href='https://www.instagram.com/ashis_das_pht/'
        target={"_blank"}
        rel='noreferrer'
        aria-label='Instagram'>

        <FiInstagram className='mx-1' />
      </a>
      <a
        href='mailto:contact@ashisdas.com'>

        <FiMail className='mx-1' />
      </a>
    </div>
  )
}

export default ExternalLinks
