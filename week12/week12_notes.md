# Database design, part 1
## Developing dynamic web application
![alt text](image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)

## Entity relationship diagrams and junction tables
- Designing a relational database
- 1. Identify  entities or tables
    - What is the purpose of the database?
        - Start from requirement list
        - One table for each entity
    - Identify properties (columns or fields) of each table
    - Decide on data types for each field
- 2. Decide on Primary keys
- 3. Decide on relationships between tables and foreign keys
- 4. Identify relationship cardinalities
- 5. Refine database design
- ![alt text](image-4.png)

### Entity relationship diagrams
- Graphical representation, displaying entities in database and the relations between them
    - ![alt text](image-5.png)
    - ![alt text](image-6.png)
    - ![alt text](image-7.png)
    - ![alt text](image-8.png)

## Aproach of creating ERD (Entity Relationship Diagram)
- 1. Identify objects/entitie and fields/atributes in the requirements, that will make up the tables in our database.   
    - To identify object and fields, you can highlight all the nouns in requirements, these will usually indicate objects and fields we need to model:   
        - ![alt text](image-9.png)
    - Create unique list of these nouns:
        - ![alt text](image-10.png)
- 2. Take the unique list of nouns and organize into related terms: 
    - Like so:
        - ![alt text](image-12.png)
    - Add relations between them:
        - ![alt text](image-13.png)
    - After some tidying up, we get start of the data model:
        - ![alt text](image-14.png)
- 3. Refine the model:
    - Each object needs primary key for identification, and relation to other objects:
        - ![alt text](image-15.png)
    - Then start looking at cardinality of relationships:
        - In this case we'll use 'one-to-many' for artist to song relationship (one artist per song, but many songs per artist), we also need to add artist_id to song object, to link it to artist object: 
            - ![alt text](image-16.png)
        - Next, relationship between song and playlist. Playlist can have many songs, and song can be on many playlists, so we use 'many-to-many' for this relationship. But for this we need to introduce junction table, like such:
            - ![alt text](image-17.png)
        - Finally, relationship between playlist and user. User can have many playlists, but in this case we'll use it as personal playlist, so playlist can have only one user, therefore 'one-to-many', and we add user_id to playlist:
            - ![alt text](image-18.png)
- And here is the final model we can use to create tables in our database:
    - ![alt text](image-19.png)