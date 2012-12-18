mongoDbSample
=============

A very simple example on how to use mongoDB from node.js. The code in this files add, update, and read documents with the following structure 

    {
        key: 100, 
        title: 'the title of the book'
    }

The key is expected to be an integer.


dbCore.js
---------
Contains the "core" functions to read, insert, and update documents.

This file is hard-coded to point to mongoDB in your local host at the following URL **mongodb://localhost:27017/books**

You won't be running this file directly, but keep in mind that all other examples reference this file. 


dbAdd.js
--------
An example on how to add documents to the database. For example, the following line will add a new document: 

    node dbAdd 100 'a book on node.js'
    node dbAdd 200 'a book on mongoDB'


dbGet.js
--------
An example on how to fetch documents from the database. For example, the following line will fetch all documents in the database: 

    node dbGet

you can also pass a key and fetch only that one document:

    node dbGet 200

dbUpdate.js
-----------
An example on how to update documents in the database. For example, the following line update the title of document with key 200:  

    node dbUpdate 200 'an updated book on mongoDB'


