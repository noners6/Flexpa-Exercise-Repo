# Explanation of Benefits from Flexpa

This is a simple one page app that goes through a similar proccess that the `quickstart` repo goes through.

1. Authenticate. Simply click on the authenticate button and use one of the test users that includes Explanation of Benefits. In my trials, not all of them worked, but Kaiser Permanente did work.

2. After confirming it worked, you will get a vertical list of cards. Each card contains some vital information from an Explanation of Benefit, and allows you to expand the full details, as the record is quite big, and needs its own space. I run this on Chrome. 

3. I have been having issues with CORS errors. The page still loads properly.

Working version of the app:

<img width="526" alt="Screen Shot 2022-11-13 at 8 23 44 PM" src="https://user-images.githubusercontent.com/52838675/201557010-327a5cdc-433f-462b-88b8-e91372ab712c.png">


## Available Scripts

In the project director, after running the server, run:

### `npm start`


## Design decision, proccess etc:

In terms of design, I opted for a very simple one that mimicks the structure of the quickstart, albit not as intricate. My app uses MUI cards as containers for each EOB, and a combination of native MUI styling and css styling. 

The main two components are App.tsx and eobCard.tsx. The App houses the API call, the useEffect, and takes care of some styling that happens outside the card. It is then responsible for calling eobCard for each individual entry within a list of EoBs. eobCard.tsx is responsible for rendering and styling each individual card.
