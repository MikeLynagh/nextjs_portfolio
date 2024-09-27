---
title: "An SQL cheat sheet"
date: "25-09-2024"
---
---

Having been studying databases for the past while, I figured that it would be handy to have a resource for the common query words and how to use them. What better way to learn this than to create one.<br />  
I decided I would share it here on my website as a point of reference. If you find this cheat sheet helpful, feel free to copy and paste it or bookmark the page.

## Basic Queries

- **SELECT** col1, col2 … **FROM** table (Filter a column)
- **WHERE** col2 = 1 **AND** col5 = 3 (Filter the row)
- **GROUP** BY … (Aggregate the data)
- **HAVING** COUNT(*) > 1 (Limit aggregated data)
- **ORDER BY** col2 (Order results)
- **SELECT** COUNT(*) (Count an amount)

### Handy keywords for **SELECT**
- **DISTINCT** - returns unique results
- **BETWEEN** a **AND** b - limit the range, values can be numbers, texts, dates
- **LIKE** - pattern search within column text

#### See an example:
- Words starting with "car" — **LIKE 'Car%'**
- Words ending with "car" — **LIKE '%Car'**

- **IN** (a, b, c) - check if the value is contained among the given options


## Want to see some number functions? Use aggregation functions:

- **COUNT** - return the number of rows
- **SUM** - add the values
- **AVG** - calculate the average
- **MIN** / **MAX** - smallest / largest values


## Views

A view is a virtual table that is the result of a query.  
You can use a view to create a virtual table of a complex query.

```sql
CREATE VIEW view1 AS  
SELECT col1, col2  
FROM table1  
WHERE …

