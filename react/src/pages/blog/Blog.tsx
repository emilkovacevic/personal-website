import { useContext } from 'react'
import Card from '../../components/card/Card'
import Headline from '../../components/headline/Headline'
import Main from './blog_styles'

import { DataContext } from '../../context/dataContext/dataContext'
import LoadingAnimation from '../../components/loading/LoadingAnimation'
import ErrorCard from '../../components/error/ErrorCard'

function Blog() {
  const { data, loading, isError } = useContext(DataContext)

  if (loading) return <LoadingAnimation />
  if (isError) return <ErrorCard error="server error" />
  return (
    <Main data-aos="zoom-out-down">
      <Headline title="My Blogs" />
      <div className="blogs">
        {data?.blogs?.length &&
          data.blogs
            .sort((a, b) => b.id - a.id)
            .map((blog) => (
              <Card
                key={blog.id}
                title={blog.name}
                image={blog.image}
                link={blog.link}
              />
            ))}
      </div>
    </Main>
  )
}

export default Blog
