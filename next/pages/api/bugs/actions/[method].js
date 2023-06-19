import {gql, request} from "graphql-request";
import {stringFormatter} from "@/app/helpers/stringFormatter";



export default async function bugActions(req, res) {
  const method = req.query.method;

  switch (method) {
    case 'add':

      const {title, description, playbackSteps, expectedResult, actualResult, screenshot, bugStatus, seriousness, priority, project_id} = JSON.parse(req.body);
      const query = gql `
                mutation {
                  createBug(
                  title: "${stringFormatter(title)}",
                  description: "${stringFormatter(description)}",
                  playbackSteps: "${stringFormatter(playbackSteps)}",
                  expectedResult: "${stringFormatter(expectedResult)}",
                  actualResult: "${stringFormatter(actualResult)}",
                  screenshot: "${stringFormatter(screenshot)}",
                  bugStatus: "${bugStatus}",
                  seriousness: "${seriousness}",
                  priority: "${priority}",
                  project_id: ${project_id}){
                    id
                  }
                }
            `;

      const response = await request(process.env.BACKEND_URL, query);
      res.json(response);
  }

}



