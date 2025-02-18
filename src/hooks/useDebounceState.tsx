import { useEffect, useRef, useState } from 'react'

type UseDebounceState = <T, >({ value, time }: {value: T, time: number}) => {debouncedState: T, clearDebounce: () => void}

const useDebounceState: UseDebounceState = ({ value, time }) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [debouncedState, setDebouncedState] = useState(value)

  const clearDebounce = () => {
    const currentTimerId = timer.current

    if (currentTimerId) {
      clearTimeout(currentTimerId)
      timer.current = null
    }

  }

  useEffect(() => {

    const curTimerId = setTimeout(() => {
      setDebouncedState(value)
    }, time)

    timer.current = curTimerId

    return () => {
      clearTimeout(curTimerId)
      timer.current = null
    }

  }, [value, time])



  return { debouncedState, clearDebounce }
}


export default  useDebounceState
