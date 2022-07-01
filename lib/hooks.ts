import fetcher from "../lib/fetcher"
import useSWR from "swr"

export const useMe = () => {
  const { data, error } = useSWR("/me", fetcher)

  return {
    user: data,
    isLoading: !data && !error,
    isError: error,
  }
}
