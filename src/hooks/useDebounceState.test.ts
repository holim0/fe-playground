import { afterEach, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import useDebounceState from './useDebounceState';

describe('useDebounceState test', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })
  it('should return same value with input.', () => {
    const { result } = renderHook(() => useDebounceState({value: 42, time: 1000}))

    expect(result.current.debouncedState).toBe(42)
  })


  it("should change debouncedState after time", async () => {
    const { result, rerender } = renderHook(({value}) => useDebounceState({value, time: 2000}), {
      initialProps: {value: 50}
    })

    rerender({ value: 100 })
    expect(result.current.debouncedState).toBe(50)


    act(() => {
      vi.advanceTimersByTime(2000);
    });

    expect(result.current.debouncedState).toBe(100);
  })

  it("should clear debounce", async () => {
    const { result, rerender } = renderHook(({value}) => useDebounceState({value, time: 500}), {
      initialProps: {value: 50}
    })

    rerender({value: 100})

    expect(result.current.debouncedState).toBe(50)

    act(() => {
      vi.advanceTimersByTime(100);
    });
    result.current.clearDebounce()

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.current.debouncedState).toBe(50)

  })
})
