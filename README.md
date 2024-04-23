DJANGO REACT RECIPE BOOK

This is a full-stack web application using Django for backend development and React for frontend development, which main goal is creating a simple recipe book.

For the backend it was used Django in order to create a simple database model and also to create API endpoints for CRUD operations.
Also, it was used React to connect the frontend with the backend of the application, display the recipes and create a user-friendly interface.
In order to make API calls from the frontend to the backend it was used Axios.
Finally, the database is handled by the Django's default SQLite database.

In order to test/use the app you should start both frontend and backend.

The following instructions/commands are for windows. If you are using a different operating system you should check the compatibility of the commands in the respective system.

BACKEND

To start the backend you should open a terminal and run the following commands :

▷ cd path/to/RecipeBook 

With this command you will navigate to the main project's directory.

▷ script/activate 

Before running the server, activate the virtual environment using the command above.

▷ python manage.py runserver

Finally, start the Django server.

FRONTEND 

To start the backend you should open a new terminal and run the following commands :

▷ cd path/to/RecipeBook/frontend

First, you should navigate to the frontend project's directory 

▷ npm run dev 

Now, starting the React server.
Your frontend server should now run and and you are able to access the application through your web browser.

Keep in mind that you should have both frontend and backend running in order to both access the application and also store the changes in the backend server.
