# JOIN and SELECT
- ![alt text](image.png)
- ![alt text](image-1.png)
- ![alt text](image-2.png)
- ![alt text](image-3.png)
- ![alt text](image-4.png)
- ![alt text](image-5.png)
## Left and right joins
- ![alt text](image-6.png)
### Left join
- ![alt text](image-7.png)
- ![alt text](image-8.png)
- ![alt text](image-9.png)
- ![alt text](image-23.png)
### Right join
- ![alt text](image-10.png)
- ![alt text](image-11.png)
- ![alt text](image-12.png)

## LEFT JOIN and RIGHT JOIN lab
- Using myart database(week 16 lab)

### See a list of all the artworks and the museum that they are in. 
- You can achieve this by using a JOIN operation:
    - SELECT Artwork.name, Artwork.artist, Museum.name
    FROM Artwork
    JOIN Museum
    ON Artwork.museum_id = Museum.id;
    - ![alt text](image-13.png)
### Performing a LEFT JOIN operation:
- SELECT Artwork.name, Artwork.artist, Museum.name
FROM Artwork
LEFT JOIN Museum
ON Artwork.museum_id = Museum.id;
- ![alt text](image-14.png)

### Performing a RIGHT JOIN operation:
- SELECT Artwork.name, Artwork.artist, Museum.name
FROM Artwork
RIGHT JOIN Museum
ON Artwork.museum_id = Museum.id;
- ![alt text](image-15.png)

## After Lab video and explanation 
- ![alt text](image-16.png)
- ![alt text](image-17.png)

### Inner join (just JOIN)
- ![alt text](image-18.png)

### Left join
- ![alt text](image-19.png)

### Right join
- ![alt text](image-20.png)

## Nested select LAB
- Using myotherbookshop database
1. Find all the books that are more expensive than ‘Web Architecture’:
    - SELECT name, price FROM Book
WHERE price > (SELECT price FROM Book WHERE name = 'Web
Architecture'); 

- Using myrestaurantmenu, find all dishes that are more expensive than Beer
    -  SELECT name, price FROM dishes WHERE price > (SELECT price FROM dishes WHERE name='Beer');

- Using myotherbookshop, find all books that are cheaper than the cheapest book on computing:
    - SELECT name, price, category FROM book WHERE price<(SELECT min(price) FROM books WHERE category='Computing');
## After lab video and explanation
- ![alt text](image-21.png)
- ![alt text](image-22.png)