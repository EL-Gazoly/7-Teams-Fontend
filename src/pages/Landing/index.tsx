import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/headsets')
    }, [])
  return (
    <div>Landing</div>
  )
}

export default Landing