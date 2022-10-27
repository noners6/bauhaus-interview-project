# Team Bauhaus Technical Interview

## Getting Started

1. Fork this repo
2. Create a web app based on the provided Figma wireframe; https://www.figma.com/file/prwc5wnVsizQqodL9juIss/Wireframe-(Community)?node-id=0%3A1
3. Use the following API url to retrieve the data; https://guileless-sopapillas-50e236.netlify.app/articles.json
4. Display all the `description` and `image` fields from the provided data
5. Implement a filter mechanism to filter the data based on the `category` field from the provided data
6. Push all your work up to github
7. Come to the next interview ready to show and talk about the work you did 🙂

## Available Scripts

This boilerplate is built upon Create React App and supports the following scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Final product:
<img width="700" alt="Screen Shot 2022-10-27 at 1 48 51 PM" src="https://user-images.githubusercontent.com/52838675/198362500-24d4c294-b000-43a3-9732-ca6a200e8a17.png">

Thought proccess:

1. I implemented a 2xX grid, where X is based on the number of total cards.
2. I opted to use MUI for the entire project. The cards, dropdown menu, grid are all imported from MUI. I felt that MUI provided an elegant solution.
3. Some things are not perfect and I would improve given more time: I would modularize the code further, currently only 1 componenet stands entirely on its own (CustomCard) by making the filter/dropdown menu its own componenet, and improve the use of layout, integrate proper css, etc.
