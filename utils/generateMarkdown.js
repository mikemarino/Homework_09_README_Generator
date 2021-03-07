// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   switch (license) {
    case "MIT":
      return "![License](https://img.shields.io/badge/License-MIT-informational)";
      
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache-informational)";
      
    case "Mozilla":
      
      return "![License](https://img.shields.io/badge/License-Mozilla-informational)";
      
    case "GNU GPLv3":
      return "![License](https://img.shields.io/badge/License-GNU_GPLv3-informational)";
    
    default:
      return "DID NOT WORK";    

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
      case "MIT":
        return "https://opensource.org/licenses/MIT";
        
      case "Apache":
        return "https://opensource.org/licenses/Apache-2.0";
        
      case "Mozilla":
        return "https://opensource.org/licenses/MPL-2.0";
        
      case "GNU GPLv3":
        return "https://opensource.org/licenses/GPL-3.0";
        
      default:
        return "Link did not work";
}}

//  TODO: Create a function that returns the license section of README
//  If there is no license, return an empty string
function renderLicenseSection(license, project, name) {
switch (license) {
case "MIT":
return `<strong>
Copyright 2020 ` + name + 
`
</strong>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and     associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

case "Apache":
return `
Copyright 2020 ` + name +
`

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;

case "Mozilla":
return `
This Source Code Form is subject to the terms of the Mozilla PublicLicense, v. 2.0. If a copy of the MPL was not distributed with this file, You canobtain one at https://mozilla.org/MPL/2.0/.
`;

case "GNU GPLv3":
return project + `<strong>Copyright(C) 2020 `  + name + 
`</strong>

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.
` 

default:
return "";

}
}

// TODO: Create a function to generate markdown for README
const generateReadMe = (answers) => {
  return `
# ${answers.title}

## Table of Contents 
- [Description](#description) 
- [Installation](#installation) 
- [Usage](#usage)
- [Testing](#testing)
- [Contribute](#contribute)
- [Credits](#credits) 
- [License](#license) 
- [Questions](#questions) 

## Description
${renderLicenseBadge(answers.license)}

${answers.description}

![picture alt](http: //via.placeholder.com/200x150 "Title is optional")

This project may have some requeriments you need to meet in order to compile it. 
You may need NodeJS in order to run javascript on the console and install dependecnies. You can go to the NodeJS site and follow trough the installation process.  After you get the node command on the console, you will have the node package manager npm as well. Please read the package instruction section below.

## Installation:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

${answers.install}

## Usage:
${answers.usage}

In order to start using the project you need to clone it to your computer. Or you can download the the zip version.
After you have it on you pc, you need to go in the console to the project folder and execute the following command to gather all the dependencies.

> npm install

## Testing:
${answers.test}

## Contributing: 
${answers.contribute}

To contribute to < strong > Big Bad Readme generator < /strong>, follow these steps:

Create a branch:
>git checkout - b <branch_name>

Make your changes and commit them:
>git commit - m '<commit_message>'

Push to the original branch:
>git push origin <project_name>/<location>

Create the pull request. Alternatively see the GitHub documentation on creating a pull request.

## Credits:
${answers.credit}
## License:
This project uses the following license: 

${renderLicenseBadge(answers.license)}

${renderLicenseLink(answers.license)}

${renderLicenseSection(answers.license, answers.title, answers.userName)}
## Questions:
For all questions about this project, please email ${answers.email}

Copyright(c) 2021 ${answers.userName}
`;
}


module.exports = generateReadMe;


