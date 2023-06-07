Hi,

Please check the new notes below for a better collaboration works.

**Thanks & regards,**

**~~ DANZEST ~~**

- Landing page that will show 

      - banner pictures
          - Stunning landscape images of nature
          - An engaging image featuring people using the company's product or services
          - A high quality photograph representing the main theme or purpose of the website 

      - disclaimers 
          - Notes about the purpose of the website
          - Provide information about the website
      - login and and signup button
          - Locate and and tell the users to login/ signup 
          
=============================================================

STORY 1: Landing Page
          - Contains 
               - Banners
               - Disclaimers
               - Login/ Signup buttons
               - Logo
          - Admin can able to change/ update the landing page looks at anytime 

STORY 2: Login/ Signup
        - With unique Admin Signup account ONLY 
        - If One Admin account is exist, and trying to signup as an Admin, should throw error - "Admin account should be unique and signup as a user ONLY"

STORY 3: Create Budget
       - router.post('/budget', createBudget);
       - router.get('/budget', getBudgetDetails);
       - router.post('/expense', createExpense);
       - router.get('/expenses', getAllExpenses);  

createBudget: This function is responsible for creating a new budget. It is a controller function that handles the logic for creating a budget record in the database. It is associated with the /budget route and is typically used when you want to create a new budget for your application. The implementation of this function may involve validating the input data, creating a new budget object based on the input, and saving it to the database.

getBudgetDetails: This function retrieves the budget details, total expenses, remaining balance, and original budget amount. It is a controller function associated with the /budget route and is used when you want to retrieve the budget information. The implementation of this function involves querying the database to fetch the budget record, calculating the total expenses by aggregating the expense records, and determining the remaining balance by subtracting the total expenses from the original budget amount.

createExpense: This function is responsible for creating a new expense. It is a controller function that handles the logic for creating an expense record in the database. It is associated with the /expense route and is typically used when you want to add a new expense to your application. The implementation of this function may involve validating the input data, creating a new expense object based on the input, and saving it to the database.

getAllExpenses: This function retrieves all the expenses stored in the database. It is a controller function associated with the /expenses route and is used when you want to retrieve a list of all expenses. The implementation of this function involves querying the database to fetch all expense records and returning them in the response.

These functions are part of the controller layer in a typical MVC (Model-View-Controller) architecture. They handle the business logic and data manipulation for the respective routes and interact with the database (via the models) to perform CRUD operations (Create, Read, Update, Delete) on budget and expense records.     
