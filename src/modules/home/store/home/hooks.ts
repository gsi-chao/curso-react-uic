import { useContext } from 'react'
import HomeContext from './context'

const useHomeContext = () => {
  return useContext(HomeContext)
}

export default useHomeContext