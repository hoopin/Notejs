# Notejs

The note taking app for developers.

## API:
### Getting Started:
All data can be accessed from the https://api.notejs.io. All data is sent and received as JSON.

### Requests:
#### Users:
| Request | Endpoint              | Description                     | Required data                                                 |
| ------- |:---------------------:| :-------------------------------|:--------------------------------------------------------------|
| POST    | /api/signup           | Post a user to the database.    | Required: name (String), password (String), password (String) |


  ```javascript
  $.ajax({
    url: '/api/signup',
    data: {
      name: "Joe Bones",
      email: "exampleEmail@gmail.com",
      password: "password123"
    },
    success: function (response) {
      console.log("Successful signup!")
    },
    dataType: 'JSON'
  });
  ```


| Request | Endpoint              | Description                           | Required data                                    |
| ------- |:---------------------:| :-------------------------------------|:-------------------------------------------------|
| POST    | /api/login            | Login a user to the application       | Required: email (String), password (String)      |
| POST    | /api/logout           | Post a user to the database.          | Required: None                                   |


#### Notes:
| Request | Endpoint              | Description                           | Required data                                    |
| ------- |:---------------------:| :-------------------------------------|:-------------------------------------------------|
| POST    | /api/note             | Add note to user's list of notes      | Required: note (String)                          |
| GET     | /api/note/:noteId     | Get specific note data                | Required: None                                   |
| DELETE  | /api/note/:noteId     | Delete note from user's note list     | Required: note (String)                          |

#### Folders:
| Request | Endpoint              | Description                           | Required data                                    |
| ------- |:---------------------:| :-------------------------------------|:-------------------------------------------------|
| GET     | /api/folder           | Get a list of all user's folders      | Required: None                                   |
| GET     | /api/folder/:folderId | Get one folder with all notes         | Required: Folder (String)                        |

### Errors:
Sometimes your API call will generate an error. Every response to an API call that generates an error will include an error code, the reason for the error, and an error message to help you debug your request.

| Code  | Response Text   | Description                                                                                      |
| ----- |:---------------:| :------------------------------------------------------------------------------------------------|
| 400   | Bad Request     |                                                                                                  |
| 401   | Unauthorized    | You do not have authorization to make the request.                                               |
| 403   | Forbidden       |                                                                                                  |
| 404   | Not Found       | The resource you tried to locate could not be found or does not exist.                           |
| 500   | Server Error    | An error occurred on our server.                                                                 |


## Team:
- [Michel Mitrakos](https://www.michaelmitrakos.com) - Scrum Master & Full-Stack Engineer
- [Mike Yang](https://github.com/micyang) - Product Lead & Full-Stack Engineer
- [David Kim](https://github.com/davidkim310) - Full-Stack Engineer
- [Chris Phan](https://github.com/cpp6d) - Full-Stack Engineer


## Built With:
| Front-End      | Back-End     | Modules         | Testing Frameworks  |
| -------------- |:------------:| :---------------|:--------------------|
| React          | Node JS      | Babel           | Mocha               |
| Redux          | Express      | BodyParser      | Chai                |
| Webpack        | Mongo Db     | Morgan          |                     |
| React Material |              | SQL             |                     |
|                |              | Request         |                     |
