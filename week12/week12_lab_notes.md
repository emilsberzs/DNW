# Entity Relationship diagram for BookShop web app

## Application concept
- Bookshop application where
    - Admins: 
        - read, add, update, delete books
    - Users:
        - browse, search, add to basket, order, leave a review

## Define user interactions:
- Display list of available books in alphabetical order. Authors name will appear next to name and price of the book.
- Books can appear in other orders as well, listed by author name, price, rating, all ascending and descending.
- Browse different categories of books. Categories will be as a dropdown menu on top of the list page
- Search books by name, author, publisher, price.
- Users can see summary page for each book that includes all details of the book, and reviews.

## 1. Indentify objects from requirements
- We want **users** of the app to be able to search for **books**, **publishers** and **authors** that
contain specific words
- We want **users** of the app to be able to search for **books** based on their **publication
dates**
- We would like the most recent books to appear highest in the list by default, but for
the user to be able to change the sort criteria
- We would like at least two types of users for the app:
    - customers to search for reading data related to books from the database
    - admin users to create, update and delete data as well as reading data from
the database.
- We would like a user to be able to click on a book to see all data relevant to that book
as well as its stock availability
- We would like admin users to be able to update stock availability when new books
arrive in the store or when customers buy books
- 
- 
- 
-

## 2. Create unique list of nouns, add missing things if there any
- user
- book
- publisher
- author
- publication date
- sort by date
- customer
- admin
- availability


## 3. Organise nouns into groups of related nouns, add used field types while at it

- Book:
    - Book id 
    - Category VARCHAR(L) 
    - Publisher VARCHAR(L) 
    - Author VARCHAR(L) 
    - Publication date VARCHAR(L) 
    - Availability BOOLEAN
    - ISBN VARCHAR(L) 
    - Price DECIMAL
    - Pages INT
    - Rating INT
- User: 
    - Name VARCHAR(L)
    - Address VARCHAR(L)
    - Email VARCHAR(L)
    - Phone number VARCHAR(L)
    - Admin BOOLEAN
    - Customer BOOLEAN
- Order
    - Date VARCHAR(L)
    - Books VARCHAR(L)
    - Delivery address VARCHAR(L)
    - Value DECIMAL
    - Paid BOOLEAN
    - Processed BOOLEAN
    - Shipped BOOLEAN
    - Delivered BOOLEAN
    - Review left BOOLEAN
- Review
    - Date VARCHAR(L)
    - Book VARCHAR(L)
    - Rating INT
    - User INT

## 4.  


