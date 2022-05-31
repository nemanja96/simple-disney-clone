import { GraphQLClient } from "graphql-request";

export default async ({body}, res) => {

    const url = "https://api-eu-central-1.graphcms.com/v2/cl3kcl26j9yxq01xp3effae70/master";
    const graphcms = new GraphQLClient(url, {
        headers: { "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTM0MjMyNzIsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NsM2tjbDI2ajl5eHEwMXhwM2VmZmFlNzAvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYjcyOGUzZWQtZjQxNC00NWQ5LWFlZTktNGRiNzA1OTdiYWE2IiwianRpIjoiY2wza2xpeTZhYXBvbTAxemQ1dDV0M3IxNyJ9.qRNLVObhps7GDP2Y4FaIoAS5LU0wtNc6J3rORLCpJCWDBPR-VBedGgfvpt4U6YbUW5IQChykungovf1kCNEI-_F4T8A7Ne6APAPPauYHJ4pdX-pU5yQPqfc735795Kfb9kQSDX6zy5zE0b_Nu9BxrR6m7ySGcXmN0pz--la5LFxFUk64q4H6maoDI1nKqDgE4t6UPJ_4IphZUdE3RyYDwMSPbWuwBhD-Zr_vRGtiAMCM1hK_OxrOIU2DwdpfgJMiBC5m4FB81-0P_z4Dhuh4CIfwPhifzV85GkDF13sdCcvDZxnn8I3BWE_61lmrb0pQae_mch3rszbwZqaE_G22XeI-II-D8aToVi0BZgtsGOK3ypHNYhQWYtJdWpK3WJr0mENEfFGTWrs5StgrhWh4e9US-fQFTDG0QFT-3mTcqT5K5ezA9nR8MIyRyaTrLJ_Uv8RwLNWOt8BOq1allZSzQkpFZ3ndeEtPzGSPba-jcuIzdDtZF1E0Oj-Pt1AjWxGAu1fP5UqJeHPJpW03eEanj9vLllTgJwApgFc1vAOKYPGxrIR8GpQf1cnsfXS_rqI9HNIVw6Dd_QIXmVW3QsqmZ-uREn82fBN8UTO19G4vAnvHbRDRNlxUJ3UnFJP7xX20zYsSGmm2Eq6Ec2TvP5eKeVICi2xGhRHp2NAHEs3_63Y"}
    })

    await graphcms.request(
        `
            mutation($slug: String!) {
                updateVideo(where: { slug: $slug }, data: { seen: true }) {
                    id,
                    title,
                    seen
                }
            }
        `,
        { slug: body.slug }
    )

    await graphcms.request(
        `
        mutation publishVideo($slug: String) {
            publishVideo(where: { slug : $slug }, to: PUBLISHED) {
                slug
            }
        }
        `,
        { slug: body.slug }
    )

    res.status(201).json({ slug: body.slug })
}