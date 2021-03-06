# Club Manager
### Jared Luedtke 07.14.17

## Description


## Specs
| Spec | Input | Output | Description |
| :------------- | :------------- | :------------- | :------------- |
| Program can display a list of all available users. | "View All" | User 1, User2 | Program must be able to display users before any editing or adding can be made. |
| Program can edit users. | User 1, User2 --> User3 | User 1, User3 | It's easier to change existing users than adding new ones completely. |
| Program can add a new user to the list. | User3 | User 1, User2, User3 | Basic functionality of adding and editing must be completed before implementing the filter. |
| Program can delete users | "Delete User1" | User2, User3, User4 | Full CRUD ops initiated. |


## Setup/Installation Requirements
1. Go to the <a href="https://github.com/jluedtke/club-manager">GitHub Repository</a>
2. Clone repository on to your machine
3. In the Terminal (Powershell for Windows), navigate to the project directory. (Usually /Users/User_Name/Desktop/club-manager)
4. Use the commands in order, "npm install", "bower install"
5. Create "api-keys.ts" inside of the src/app/ folder
6. Navigate to Firebase inside of your internet browser.
7. Create your firebase database, and in the top left corner of the screen, click "Overview".
8. Click "Add Firebase to my Web App".
9. Inside of api-keys.ts, copy this text: "
export var masterFirebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
  projectId: "XXXX",
  storageBucket: "XXXX",
  messagingSenderId: "XXXX"
}
10. Replace "XXXX" with the information you obtained from Firebase.
11. Run "ng serve"
12. Follow on-screen instructions.

## Known Bugs
None at this time

## Technologies Used
* JavaScript
  * Angular
  * Node.js

* CSS
  * SCSS

* HTML

## Legal
Copyright (c) 2017 **_Jared Luedtke_** All Rights Reserved.
Licensed under the MIT license.
