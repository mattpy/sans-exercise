# SANS Exercise

### API Access

The API is accessible at 

`ec2-34-230-30-149.compute-1.amazonaws.com/movies`

To perform any HTTP requests (`GET`, `POST`, etc.), you will have authenticate by sending a `POST` request to 

`ec2-34-230-30-149.compute-1.amazonaws.com/login`

The returned token can then be attached to an `Authorization` header in the form of a Bearer token. This will allow you to access other routes.

### Client Access

The client is accessible at

`ec2-54-83-175-214.compute-1.amazonaws.com`

## Running the project locally

First clone the repo, then run

`docker-compose up`

from the root folder.

