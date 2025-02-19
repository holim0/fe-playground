import { describe, expect, it } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import useDebounceState from './useDebounceState';

describe('useDebounceState test', () => {
  it('should return same value with input.', () => {
    const { result } = renderHook(() => useDebounceState({value: 42, time: 1000}))

    expect(result.current.debouncedState).toBe(42)
  })


  it("should change debouncedState after time", async () => {
    const { result, rerender } = renderHook(({value}) => useDebounceState({value, time: 2000}), {
      initialProps: {value: 50}
    })

    rerender({value: 100})
    expect(result.current.debouncedState).toBe(50)


    await waitFor(() => {
      expect(result.current.debouncedState).toBe(100);
    }, { timeout: 3000 }); // 여유 시간을 두어 debounce 시간이 충분히 지나도록 설정

  })

  it("should clear debounce", async () => {
    const { result, rerender } = renderHook(({value}) => useDebounceState({value, time: 500}), {
      initialProps: {value: 50}
    })

    rerender({value: 100})

    expect(result.current.debouncedState).toBe(50)

    await act(() => new Promise((resolve) => setTimeout(resolve, 200)))

    result.current.clearDebounce()

    await waitFor(() => {
      expect(result.current.debouncedState).toBe(50);
    }, { timeout: 200 }); // 여유 시간을 두어 debounce 시간이 충분히 지나도록 설정

  })
})
