Pet Shelter API
==============

This is Pet Shelter API. It is a web service that manages a data-store of Pets. 

Each Pet has an id, a name, a type, a breed, a location (e.g. “Winnipeg, MB”) and a latitude and longitude.



System Requirements
-------------------

Install the following softwares on your machine:

 * [MySql Database](https://www.mysql.com/downloads/)
 * [npm via Node.js](https://www.npmjs.com/get-npm)
 * [Git](https://git-scm.com/downloads) (optional)


API Installation on a Local Machine
-----------------------------------

  * [Clone this API repository](https://github.com/Mojolagbe2014/petshelterapi.git) 
  
    This can be done via the terminal/command window with 
    ```bash
    $ git clone https://github.com/Mojolagbe2014/petshelterapi.git
    ```
    In order to use command `git`, [Git](https://git-scm.com/downloads) must first be installed on your machine.
    
  * Navigate to the cloned directory, then run the command 
    ```bash 
    $ npm install 
    ```
    to install the API dependencies. [More details on this command..](https://docs.npmjs.com/cli/install) After several   installation steps, directory `node_modules` is created in the cloned directory.
  
  * In order to change the database, server and other parameters, the configuration file `setup.json` located in the `config` folder is used for the purpose and it contains default values that can be changed.
  
  * Before starting the server, create a database with name `pets`.
  
  * Then, run the command `knex migrate:latest` to create the required database tables via the [knex migration](http://knexjs.org/). The migration files are store in `migrations` directory.
  
    **NOTE:** If command `knex` is not recognized, then install `knex` globally thus
    ```bash
    $ sudo npm install knex -g
    ```
    After the installation you should be able use it.
  
  * Now, run the command 
    ```bash 
    $ knex seed:run 
    ``` 
    to seed the database table `pets` with pre-defined data. The seed files are contained in the `seed` directory.
  
  * Having gone through the above steps successfully, then run the command
    ```bash 
    $ npm start 
    ``` 
    to start the server.
  
  * Once the server has started running, the API can be tested by visiting `http://localhost:[insert_the_port]/`. The default port in the `setup.json` file is `8000`, so if the port is left intact you can visit `http://localhost:8000/`

Usage
-----

Here is how you use it:

  * **READ:**   http://localhost:[insert_the_port]/pets/      (method => GET)    - Returns all the stored pets information.
  
  * **READ:**   http://localhost:[insert_the_port]/pets/:id/  (method => GET)    - Returns the details of the pet with `ID = id`.
  
  * **CREATE:** http://localhost:[insert_the_port]/pets/      (method => POST)   - Creates a new pet and returns `message` and `status=0|1` where 1 = success or 0 = failure.
  
  * **UPDATE:** http://localhost:[insert_the_port]/pets/:id/  (method => PUT)    - Updates the pet with `ID=id` and returns returns `message` and `status=0|1` where 1 = success or 0 = failure.
  
  * **DELETE:** http://localhost:[insert_the_port]/pets/:id/  (method => DELETE) - Deletes the pet with `ID=id` and returns returns `message` and `status=0|1` where 1 = success or 0 = failure.

#### For online based server replace the `http://localhost:[insert_the_port]/` with the appropriate address.



# shelterapi