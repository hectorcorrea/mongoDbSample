mongoDbSample
=============

A very simple example on how to use the **mongodb client for Node.js**
to add, query, and update documents in a simple mongoDB database. 

The documents are stored with the following structure:

    {
        key: 100, 
        title: 'the title of the book'
    }

The key is expected to be an integer.


Getting started
---------------
These examples assume that you have installed mongoDB in your machine and that it is up and running (even if you manually lanched it). 

Clone this repository, cd to it, and install the mongodb client for Node.js:

    $ git clone https://github.com/hectorcorrea/mongoDbSample.git
    $ cd mongoDbSample
    $ npm install mongodb

The examples are hard-coded to point to mongoDB in your local host at the following URL **mongodb://localhost:27017/books** (port 27017 is the default port) You can change this URL in the dbCode.js file if you are running with different settings.


dbAdd.js
--------
An example on how to add documents to the database. The following commans will add two new documents: 

    node dbAdd 100 'a book on node.js'
    node dbAdd 200 'a book on mongoDB'


dbGet.js
--------
An example on how to fetch documents from the database. The following line will fetch all documents in the database: 

    node dbGet

you can also pass a key to fetch only one document:

    node dbGet 200


dbUpdate.js
-----------
An example on how to update documents in the database. The following line will update the title of document with key 200:  

    node dbUpdate 200 'an updated book on mongoDB'


dbCore.js
---------
Contains the "core" functions to read, insert, and update documents.

You won't be running this file directly, but keep in mind that all other examples reference this file. 

