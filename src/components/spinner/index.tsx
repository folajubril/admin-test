import React from 'react'

export default function Spinner() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
    <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"/>
    </div>
  )
}
