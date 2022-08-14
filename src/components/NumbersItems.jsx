import { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

export default function Pagination({ totalItems, showItems }) {
  return (
    <div>
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to{' '}
        <span className="font-medium">{showItems}</span> of{' '}
        <span className="font-medium">{totalItems}</span> results
      </p>
    </div>
  )
}
