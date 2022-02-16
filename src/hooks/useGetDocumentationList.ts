import { useCallback, useState } from 'react'

import { getDocumentationList } from 'src/utils/api/documentation'

type Documentation = {
  label: string
  url: string
}

type UseGetDocumentationListResponse = [
  { isLoading: boolean; apiDocList: Documentation[] },
  () => void
]

const useGetDocumentationList = (): UseGetDocumentationListResponse => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiDocList, setApiDocList] = useState<Documentation[]>([])

  const getApiDocList = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await getDocumentationList()
      setApiDocList(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }, [])

  return [{ isLoading, apiDocList }, getApiDocList]
}

export default useGetDocumentationList
