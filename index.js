const currentUser = 'Quince Lewis';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const welcomeMessage = currentUser;
const welcomeMessage = 'Welcome to EliteBook, currentUser';
AssertionError: expected 'Welcome to EliteBook, currentUser' to contain 'Quince Lewis'
typeof "const currentUser = 'Quince Lewis';";
//=> "string"

"const currentUser = 'Quince Lewis';".length;
//=> 35

currentUser;
//=> Uncaught ReferenceError: currentUser is not define

const currentUser = 'Quince Lewis';

const welcomeMessage = 'Welcome to EliteBook, ' + currentUser;
...

const shortGreeting = 'Welcome'${currentUser}`;
shortGreeting
  contains "Welcome, "
    AssertionError: expected '' to contain 'Welcome, '
