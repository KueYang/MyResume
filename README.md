# MyResume
**MyResume** is an Angular SPA resume site.
The design implements a simple responsive bootstrap site for a resume site. The site overall design is inspired from the start bootstrap theme https://github.com/startbootstrap/startbootstrap-resume.
Data and design are decoupled into seperate angular components.

## Project Requirements & Setup
- Install Nodejs (https://nodejs.org/en/)
- Install Angular CLI npm package, the command below will install the package globally.
```
npm install -g @angular/cli
```

## Running Locally
Running **MyResume** on your local machine is simple. After cloning the project, open a terminal and change directory to the app directory then run the commands below:
- Install the node_modules required for the project, run the command below.
``` nodejs
npm install
```  
- Run the project locally
``` nodejs
ng serve
``` 
- Open your browser to http://localhost:4200.

This will render the site with the default information in this project. To make updates to the site, update the Angular components with your information and save the file(s).

## Creating a static resume site on Github
Build the project in production
- After filling in and updating the site to your liking, run the following command to build a Production site with the your resume.
  ``` nodejs
  ng build --prod
  ```
- The command above will build the production site into a dist directory above the app directory.

Create Github Repo for resume site.
- Create a static resume site repo with the specific repo name, "{yourgithubname}.github.io".
- After creating the repo, clone the project down locally and copy the files in the dist project above into the root directory of this project.
- After copying the files over, push the files up to your repo.

Update Github resume site settings
- In the github settings tab for the repo above, go to the pages tab in the left column under "Code and automation"
- Change the "Source" dropdown to the "main" branch and save your settings.

View Your Site
- To view your static site, go to "http://{yourgithubname}.github.io", and your static site should be shown. 
- A side note, the site may take a minute to load in your new site, refresh the page occasionally if your site hasn't shown up yet.

