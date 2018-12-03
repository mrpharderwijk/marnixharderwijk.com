import createBrowserHistory from 'history/createBrowserHistory';

const applicationHistory = createBrowserHistory();

// Listen for changes to the current location.
const unlisten = applicationHistory.listen((location, action) => {
  console.log(action, location.pathname, location.state);
});

// To stop listening, call the function returned from listen().
unlisten();

export default applicationHistory;
