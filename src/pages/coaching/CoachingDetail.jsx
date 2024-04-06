import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';


export default function CoachingDetail() {
  const { id } = useParams();

  return (
    <ResponsiveDrawer> 

      <div>CoachingDetail for ID: {id}</div>
    </ResponsiveDrawer>
  )
}
