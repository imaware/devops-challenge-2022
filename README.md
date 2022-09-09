# imaware DevOps Techical Challenge

Welcome to the imaware DevOps tech challenge! This is going to be a pretty open ended challenge that you can be as creative as you would like to to solve the problem within the constraints. You can use any tools or tech you want to accomplish this.

## Scenario

The development team has a new API they are going to deploy (the code in this repo). They need to deploy it to the Kubernetes environment, but the team is largely unfamiliar with Kubernetes and needs some DevOps help. The more diagrams the better, devs love a good diagram!

Here are the requirements:
- The API must be Dockerized and deployable to Kubernetes
- The API will be available via a public endpoint
- The API will only be accessible to authorized users (the consumers of this API will be machine clients, not human users in a web browser)

## Outputs/Success Criteria
- A working Docker file that follows best practices for production-ready containerized applications
- `yarn docker:build` should succeed in building a working container that runs the API on startup
- A set of Kubernetes resources used to deploy the API to a cluster in a production-ready fashion*
- A diagram showing important components of the deployment and what they do
- Diagram a deployment pipeline for the API and describe what tools you would use

## Bonus Points
- If instead the `GET /ping` endpoint was going to be made available publicly (no auth), with the other routes still requiring authorization, what would you change?
- Describe how you would instrument this application (logging, monitoring/alerting, etc.)
- Working deployment pipeline file
- Anything else you think would be relevant if this were a real world scenario

### Notes
*Don't worry about getting valid TLS certs working as we'll be testing these locally anyway, but please do create example resources of what you think would be necessary to generate valid certs.
