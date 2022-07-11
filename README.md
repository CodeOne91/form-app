##### Table of Contents
[Project goal](#project_goal)

[How to start the project](#how_to)

- [Clone the repo](#clone)

- [Go to project dir](#go_to)

- [Install dependencies](#install)

- [Set environment variable](#set_env)

[Start project](#start)



<a name="project_goal"></a>
# Project goal
- App must be developed in React (no version has been requested, the latest available will be used: `18.2.0`)
- App must be able to perform `GET` and `POST` requests on given endpoints;
- App must provide a form in order to perform new user creation.


<a name="how_to"></a>
# How to start the project
To start this project, you have to follow these steps:

<a name="clone"></a>
## Clone the repo
To clone the repo, open a shell and type:

``` shell
git clone https://github.com/CodeOne91/form-app.git`
```

 or 
``` shell
git clone git@github.com:CodeOne91/form-app.git
```
<a name="go_to"></a>
## Go to project dir
``` shell
cd form-app
``` 
<a name="install"></a>
## Install dependencies
``` shell
npm install
```
<a name="set_env"></a>
## Set environment variable: 
To make the project fully workable, you have to set environment variables doing the following:
1. create a .env file in project root folder;
2. put your authorization token taken from https://gorest.co.in/
``` shell
REACT_APP_GOREST_AUTHORIZATION_TOKEN = "YOUR_TOKEN"
```
This set is important for use POST request.

<a name="start"></a>
## Start project:
``` shell
npm start
```

