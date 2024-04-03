## Project Overview

This project focuses on showcasing upcoming events and recommended shows retrieved through an API. Built using React.js, it offers a dynamic user experience through custom-built hooks and scroll functionalities.

### Features:

- **Upcoming Events Display**: Utilizes a vertical scroll feature for showcasing upcoming events. The scroll action triggers a change in page number, prompting the custom hooks to fetch data from the API accordingly.

- **Recommendation Showcase**: Implemented a horizontal scroll feature to showcase recommended shows. This feature cyclically repeats after displaying the entire dataset, enhancing user engagement.

- **Custom Hooks**: Designed two custom hooks, `useRecommendShows` and `useEvents`, to seamlessly fetch data from APIs. These hooks streamline the process, improving code readability and maintainability.

- **Loader Component**: Incorporated a loader component to handle delayed API responses. When data retrieval takes longer than expected, the loader component ensures a smooth user experience by indicating ongoing data retrieval processes.

### Technical Details:

- **React.js Framework**: Leveraged the React.js framework to build a dynamic and responsive user interface. React's component-based architecture facilitates modular development and simplifies state management.

- **Efficient Data Fetching**: Implemented data fetching logic within custom hooks (`useRecommendShows` and `useEvents`) using the useEffect hook. This ensures optimal performance by avoiding unnecessary renders and efficiently managing dependencies.

- **Lazy Loading and Suspense**: The project employs React's lazy loading and Suspense features to optimize performance by dynamically loading components only when needed. This enhances user experience by reducing initial load times.

- **Scroll Event Handling**: Integrated scroll event listeners to detect user interactions, such as scrolling to the bottom of the page. This triggers page navigation and data fetching, enhancing the application's usability.

- **State Management**: Utilized React's useState hook to manage component state, enabling dynamic content updates in response to user actions. By storing previous data in state variables, redundant data retrieval is minimized, optimizing performance.


## Setup and Local Run Instructions

To set up and run the project locally, follow these steps:

### Prerequisites

Ensure you have the following software installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn
   ```

### Local Run

To run the project locally, execute the following command:

```bash
npm start
# or
yarn start
```

This will start a development server and open the project in your default web browser.

### Build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

   ```bash
   npm run build
   # or
   yarn build
   ```

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!