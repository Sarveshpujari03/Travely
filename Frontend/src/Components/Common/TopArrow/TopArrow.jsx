import { ChevronUpCircle } from 'lucide-react'

import React from 'react'

function TopArrow() {
  return (
    <div>
      <ChevronUpCircle size={40} className="fixed bottom-4 right-2 cursor-pointer text-gray-800" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  )
}

export default TopArrow
