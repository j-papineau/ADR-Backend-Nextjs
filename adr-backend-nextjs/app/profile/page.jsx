'use client'
import React, {useEffect, useState} from 'react'
import { UserAuth } from '../context/AuthContext'
import LoadingSpinner from '../components/LoadingSpinner'

const page = () => {
  const {user} = UserAuth()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50))
        setLoading(false)
    }
    checkAuth()
  }, [user]);

  return (
    <div className='p-4'>
      {loading ? (
        <div className='p-4'>
          <LoadingSpinner />
          <p>Loading...</p>
        </div>
      ) : user ? (
        //logged in case
        <p>Hello, {user.displayName}</p>
      ) : (
        //not logged in
        <p>You must be logged in to view this page</p>
      )}
    </div>
  )
}

export default page
