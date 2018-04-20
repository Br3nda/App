# Whare Hauora App

PWA for the Whare Hauora sensor system. See [Whare Hauora website](http://www.wharehauora.nz/) for more information. 

## Kaupapa

Our purpose is to measure the housing environments for New Zealanders.

With this information we hope to empower and educate residents on how they can make changes to their environment for a healthier home.

## Deployed production version

You can check out the state of the PWA [here](https://whare-hauora-tqqtijywdg.now.sh/). NOTE: the service workers and push manager registration are set up and working, but they have been commented out for the duration of development. This means some main features of a PWA - being prompted to add a shortcut to your homescreen and get push notifications - are not active on this deploy. Coding with active service workers is hard work! Instructions on how to activate the service workers are found in the files ``server.js`` ``service-worker.js`` ``Dashboard.js``.

## Stack overview

This project is built in React with Next.js, and connects to a Ruby server and api created by Whare Hauora [see the repo](https://github.com/WhareHauora/wharehauora-server)

### Prerequisites

To make a local copy of this project you will need to have Node v 8.0 installed.

### Installing

To clone the project:

```
git clone https://github.com/WhareHauora/App.git
```
```
npm i
```
### Run 

```
npm run dev
```

## Running the tests

Tests are run with AVA. 
```npm i``` to install AVA
```npm run test``` to run tests

## Deployment
TODO set up Heroku deploy

## License

This project is licensed under the GNU - see the [LICENSE.md](LICENSE.md) file for details
