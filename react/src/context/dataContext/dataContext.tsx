import {
  createContext,
  useState,
  useEffect,
  FC,
  ReactNode,
  useMemo,
} from 'react'

interface Project {
  id: number
  type: string
  name: string
  live_link: string
  code_link: string
  image: string
  tools: Array<string>
  blurhash: string
  description: string
}

interface Blog {
  id: number
  name: string
  link: string
  image: string
  blurhash: string
}

interface SkillData {
  title?: string
  data: string | string[]
}

interface Skill {
  name: string
  data: SkillData[]
}

interface About {
  name: string
  surname: string
  email: string
  cv: string
  tel: string
  skills: Skill[]
}

interface IData {
  projects: Project[]
  blogs: Blog[]
  about: About
}

interface IDataContext {
  data: IData
  loading: boolean
  isError: Error | null
}

type MyError = Error | null

export const DataContext = createContext<IDataContext>({
  data: {
    projects: [],
    blogs: [],
    about: {
      name: '',
      surname: '',
      email: '',
      cv: '',
      tel: '',
      skills: [],
    },
  },
  loading: false,
  isError: null,
})

// eslint-disable-next-line react/function-component-definition
const DataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<IData>({
    projects: [],
    blogs: [],
    about: {
      name: '',
      surname: '',
      email: '',
      cv: '',
      tel: '',
      skills: [],
    },
  })

  const [loading, setLoading] = useState<boolean>(true)
  const [isError, setError] = useState<MyError>(null)

  const API_URL = 'https://personal-website-backend-five.vercel.app/data'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Could not fetch data from API')
        const jsonData = await response.json()

        setData(jsonData.record)
        setLoading(false)
      } catch (error) {
        setError(error as Error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  const contextValue = useMemo(
    () => ({ data, loading, isError }),
    [data, loading, isError]
  )

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}

export default DataProvider
