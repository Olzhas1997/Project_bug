import {gql, request} from "graphql-request";


export default async function getProjects (req, res) {
  const querySchema = gql `
              {
                 projects {
                    id
                    name
                 }
              }
            `;
  const response = await request(process.env.BACKEND_URL, querySchema);
  const projects = await response.projects;
  res.json(projects);
}
