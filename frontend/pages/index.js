import Link from "next/link"
import Layout from "../components/Layout"
import GalleryGrid from "../components/galleryGrid"
import axios from "axios"

const IndexPage = ({ postsInformation }) => {
  return (
    <Layout title="KittyBox">
      <GalleryGrid posts={postsInformation?.posts} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const req = await axios.get(`${process.env.BACKEND_URL}/list/posts`)
  if (req.status === 200) {
    return {
      props: {
        postsInformation: req.data,
      },
    }
  }

  return {
    props: {
      postsInformation: {},
    },
  }
}

export default IndexPage
