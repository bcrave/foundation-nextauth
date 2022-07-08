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

export const useOrgsList = () => {
  const { data, error } = useSWR("/organizations/all", fetcher)

  return {
    organizations: data || [],
    isLoading: !data && !error,
    isError: error,
  }
}
