# Safe space server😎

This repository represents server-side implementation of Safe space (a cloud storage platform).
It utilizes technologies like Node JS, Express and Typescript and is expected to be deployed
to a worker node of a kubernetes cluster served from AWS.

## Getting this project to work🚀🧑‍🚀

### Using docker👍👌😉

1. Clone this repo.
2. Ensure you have docker installed locally.
3. Open up your terminal and cd into the project's root directory. (ie where the docker file is)
4. Build a docker image with the following command

```
docker build -t <yourname>/safe-space-server:1.0 .
```

5. Run the application in a container using port forwarding with the following command.

```
docker run -p 8080: 8000 <yourname>/safe-space-server:1.0
```

6. The application should be running on http://localhost:8080

### Using npm😒

1. Clone this repo
2. Ensure you have npm installed locally.
3. Open up your terminal and cd into the project's root directory.
4. Install yarn globally with the following command.

```
npm install -g yarn
```

5. Install of the project's dependencies with the following command.

```
yarn
```

6. Build the application with the following command.

```
yarn build
```

7. Start the application with the following command.

```
yarn dev
```

8. The application should be running on http://localhost:8000

## Sidenotes😁

1. Tests will run as part of a CI/CD pipeline.
