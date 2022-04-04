import { Link } from 'gatsby'
import React from 'react'

interface NavigationButtonProps {
  isActive: boolean
  link?: string
  label: string
  className?: string
}

const NavigationButton = (props: NavigationButtonProps) => {
  if (props.isActive) {
    return (
      <Link to={props.link} className={`mt-4 ${props.className}`}>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
          {props.label}
        </button>
      </Link>
    )
  }

  return (
    <div className={`mt-4 ${props.className}`}>
      <button
        className="bg-gray-400 text-gray-200 font-bold py-2 px-4 rounded-md cursor-not-allowed">
        {props.label}
      </button>
    </div>
  )

}

export default NavigationButton
