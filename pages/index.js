import Head from 'next/head'
import { GraphQLClient, gql } from 'graphql-request'
import Section from '../components/Section';
import NavBar from '../components/NavBar';
import Link from 'next/link';

export const getStaticProps = async () => {

  const url = "https://api-eu-central-1.graphcms.com/v2/cl3kcl26j9yxq01xp3effae70/master";
  const client = new GraphQLClient(url, {
    headers: {
      authorization : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTM0MjMyNzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsM2tjbDI2ajl5eHEwMXhwM2VmZmFlNzAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjcyOGUzZWQtZjQxNC00NWQ5LWFlZTktNGRiNzA1OTdiYWE2IiwianRpIjoiY2wza2xpeTZhYXBvbTAxemQ1dDV0M3IxNyJ9.qRNLVObhps7GDP2Y4FaIoAS5LU0wtNc6J3rORLCpJCWDBPR-VBedGgfvpt4U6YbUW5IQChykungovf1kCNEI-_F4T8A7Ne6APAPPauYHJ4pdX-pU5yQPqfc735795Kfb9kQSDX6zy5zE0b_Nu9BxrR6m7ySGcXmN0pz--la5LFxFUk64q4H6maoDI1nKqDgE4t6UPJ_4IphZUdE3RyYDwMSPbWuwBhD-Zr_vRGtiAMCM1hK_OxrOIU2DwdpfgJMiBC5m4FB81-0P_z4Dhuh4CIfwPhifzV85GkDF13sdCcvDZxnn8I3BWE_61lmrb0pQae_mch3rszbwZqaE_G22XeI-II-D8aToVi0BZgtsGOK3ypHNYhQWYtJdWpK3WJr0mENEfFGTWrs5StgrhWh4e9US-fQFTDG0QFT-3mTcqT5K5ezA9nR8MIyRyaTrLJ_Uv8RwLNWOt8BOq1allZSzQkpFZ3ndeEtPzGSPba-jcuIzdDtZF1E0Oj-Pt1AjWxGAu1fP5UqJeHPJpW03eEanj9vLllTgJwApgFc1vAOKYPGxrIR8GpQf1cnsfXS_rqI9HNIVw6Dd_QIXmVW3QsqmZ-uREn82fBN8UTO19G4vAnvHbRDRNlxUJ3UnFJP7xX20zYsSGmm2Eq6Ec2TvP5eKeVICi2xGhRHp2NAHEs3_63Y"
    }
  }) 

const videosQuery = gql`
  query {
    videos {
      id,
      title,
      description,
      seen,
      slug,
      tags,
      thumbnail {
        url
      },
      mp4 {
        url
      },
      backgroundImage {
        url
      }
    }
  }
`
const accountQuery = gql`
  query {
    account(where: {
      id: "cl3kdhutocj6b0dup1k9nbeun"
    }) {
      username,
      avatar {
        url
      }
    }
  }
`

const data = await client.request(videosQuery)
const videos = data.videos;

const accountData = await client.request(accountQuery)
const account = accountData.account

return {
  props: {
    videos,
    account
  }
}
}

export default function Home({ videos, account }) {
  return (
    <>
      <Head>
        <title>Disney Clone - Nemanja Radivojevic</title>
        <meta name="description" content="Simple Disney Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar account={account} />

      <div className="app">
        <div className="main-video" style={{ backgroundImage: "url(" + videos[4].backgroundImage.url + ")" }}>
          <div className="main-video-wrapper">
            <div className='main-video-info'>
              <span>POPULAR DISNEY MOVIE!</span>
              <h2 className='video-title'>{videos[4]?.title}</h2>
              <p className='video-tags'>{videos[4]?.tags.join(", ")}</p>
              <p className='video-description'>{videos[4]?.description}</p>
              <Link href={`/video/${videos[4].slug}`} className="watch-now">MOVIE DETAILS</Link>
            </div>
          </div>
        </div>
        <div className="video-feed">
          <Section genre={"Movies"} videos={videos} />
        </div>
      </div>
    </>
  )
}
