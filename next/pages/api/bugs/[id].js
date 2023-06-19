import {gql, request} from "graphql-request";

export default async function getBugsById(req,res) {
  const querySchema = `
              {
                 project(id: ${req.query.id}) {
                    bugs {
                          id
                          title
                          description
                          playbackSteps
                          expectedResult
                          actualResult
                          screenshot
                          bugStatus
                          seriousness
                          priority
                        }
                 }
              }
            `
  const response = await request(process.env.BACKEND_URL, gql `
              ${querySchema}
            `);
  const items = await response.project.bugs
  res.json(items)

}
