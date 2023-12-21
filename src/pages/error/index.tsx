import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/login')
    }, [])
  return (
    <div>ErrorPage</div>
  )
}

export default ErrorPage