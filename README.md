# ejbaker-codetest
Forked from [NG6-starter](https://github.com/AngularClass/NG6-starter), because it provided a sensible directory structure and tests. It has some dated dependencies (Jade instead of Pug, for example), but is only generating warnings on install and seems very appropriate for this project. (Plus, minimal initial dependencies; this is a nicely unopinionated starter.) The npm/yarn script "generator" struck me as especially handy.

Previously, I had used a `/tests` directory and collected all tests there, but placing tests beside their component especially makes sense for a language like Angular, where there will be a lot of local dependencies, so I am very happy to make the switch for this project.

Immediate changes:
* Installed with yarn instead of NPM. Running `yarn clean` after install removed ~12.8 MB. (Had to remove .yml extension from the .yarnclean, though, to avoid breaking a dependency of css-loader.)
* For some reason the NG6-starter code contained numerous instances of `let` instead of `const` for unchanging variables (for example, when exporting angular.modules), and even some uses of `var`. Will be making a PR.
* Added eslint and relevant plugins.

## Design
For easily-portable data permanance with no browser version restrictions, and to avoid having to add a server back-end, I opted to use localstorage. By applying a UUID to resources as the user adds them, I can easily update and delete the desired resources. (On additions, the app enforces unique resource names on additions, giving the user an error if they've tried to add a "duplicate".) Bootstrap provides quick and clean CSS styling across the app.

May have gotten slightly carried away on the design of this, as it definitely took more in the range of ~10 hours than 4...

## Features
* Data persistence in localStorage
* Paginated, sortable data in multiple views (the home view displays the 5 most recently active, the list view displays all in more detail)
* Reactive forms with different fields for different types of resources.
* Errors presented in a reusable modal service, also used for confirming deletion of resources
* Tests

There are hidden fields to keep track of when resources were added/updated; it would be easy to also implement a filter on the data set to filter it down to a given date range, if users only wanted to see the resources they'd added within a range.

**NOTE:** Had I created a server backend, it would likely be a barebones Node.js Express REST API with a mongoose/mongo underpining. The front-end app would then prompt users to create accounts in order to let them keep their own resources separate. This would have somewhat simplified error-handling, as I could have decorated the $http service instead of making the manual calls that I did, but hey, I avoided polluting the $rootScope with error objects!

### AngularJS Plugins
* ui-router: for nested views
* angular-formly: for dynamic forms
* angular-utils-pagination: paginates the data
* angular-uuid: for data querying
* angular-ui-bootstrap: to reinvent the wheel sparingly (more of a general statement in this case, but I often imported this module when I was using AngularJS regularly :) )

## Live Demo
On [Github Pages](https://ejbaker.github.io/ejbaker-codetest/#!/)!