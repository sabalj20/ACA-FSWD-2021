# ACA-FSWD-2021

## ASSIGNMENT: 1

### 1. CMD COMMANDS

>  _**CMD.xe**_ is a command line interpreter application available in most Windows operating systems. It's used to execute entered commands. 


- **CHANGE DIRECTORY**

  - This command enables you to change the current directory, meaning navigate to another folder in your PC.

- **CHANGE DRIVE**

  - This command enables you to access another drive. Type the drive’s letter, followed by *“:”*. For instance, if you wanted to change the drive from *“C:”* to _“D:”_, you should type _“d:”_ and then press Enter on your keyboard.

- **VIEW CONTENTS OF A DIRECTORY**

  - The command *'DIR'* enables you to view the content of a folder.

- **CREATE NEW DIRECTORY**

  - The command _'MKDIR Folder'_ or _'MD'_ enables you to create a  new folder. If you want to create a folder in a folder you are not working in: Suppose yoou are in the _“D:”_ drive and you want to create a new folder in _“C:”_ called _New_dir_, type: _"md c:\New_dir”_ and then press Enter.

- **RENAME FILES**

  - To rename files and folders, you need to use the REN (Rename) command. To rename folders, type “ren Folder NewFolderName.” For example, if we wanted to rename the _"NEW"_ folder to _"BRAND_NEW"_, we should run _“ren NEW BRAND_NEW"_ and press Enter.

- **COPY FILES**

  - The Copy command allows you to copy files from one location to another. To use this command, type _“copy location\filename.extension newlocation\newname.extension”_.

- **COPY FOLDERS**

  - To copy a folder and its content from a location to another, use the XCOPY command followed by the “/s /i” operators. Let's say that we need to copy a folder from _“D:\Test”_ to *“C:\Backup_Test”*. To do that, we have to run the command _“xcopy /s /i d:\Test c:\Backup_Test”_.

- **DELETE FILES**

  - The DEL (Delete) is used to delete files from the folders you have created. To delete all the files from a folder, you can run the command _“del folder.”_ For instance, from the directory, _Test_ found on the _“D:”_ drive if we want to delete all the files from the Test_HELP folder, type the command “del Test_HELP.” You need to confirm the delete process by typing the letter _“y”_ from Yes, and then press Enter.

- **DELETE FOLDERS**

  - The DEL command cannot be used to delete folders. Therefore we must use another command to remove any empty folder: _RD (Remove Directory)_. We have previously deleted all the files from the _Test_ folder. It is now time to delete the directory too, by typing “RD Test.”

- **LAUNCH APPLICATION**

  - To run a program from the Command Prompt, you need only to navigate to the folder that contains the executable and type the program’s name. For example, if you want to launch _Paint_ using Command Prompt, go to _“C:\Windows\System32”_, where its executable is: mspaint.exe. First of all, change the working directory to the application’s folder by typing _“cd /d c:\windows\System32”_. Then write _"mspaint.exe"_ or mspaint and press Enter.

- **GET HELP**

  - To access help in the Command Prompt, you have to type _"help"_ command and then press Enter. A list with all available commands is displayed.


### 2. SOME IMPORTANT TERMINOLOGIES

#### CLIENTSIDE _vs_ SERVERSIDE

CLIENTSIDE | SERVERSIDE
---------- | ----------
Client-side means that the action takes place on the user’s (the client’s) computer | Server-side means that the action takes place on a web server.
Generally JavaScript is used to accomplish clientside tasks, as mostly all computers understand understand JavaScript and hence doesnt require connection to the Internet. | On the other hand, Ruby, PHP, and Python, etc are used to do serverside tasks. This requires Internet connectivity.
Traditionally, client-side scripting is used for page navigation, data validation and formatting | Data storage and Management of database is usually handled server-side.


#### HTTP _vs_ HTTPS

HTTP | HTTPS
---- | -----
HTTP is unsecured | HTTPS is secured
HTTP sends data over port 80 | HTTPS uses port 443
HTTP operates at application layer | HTTPS operates at transport layer.
No SSL certificates are required for HTTP | HTTPS requireS an SSL certificate signed by a CA.
HTTP doesn't require domain validation |  HTTPS requires domain validation and certain certificates even require legal document validation.
No encryption in HTTP | With HTTPS the data is encrypted before sending


#### LIBRARIES _vs_ FRAMEWORKS

LIBRARIES | FRAMEWORKS
--------- | ----------
A file containing re-usable code, basically a collection of objects/functions/methods | Framework can be a library, a collection of many libraries, a collection of scripts, or any piece of software you need to create your application.
A library performs specific, well-defined operations. | Framework is a Skeleton, application fills up the skeleton (With meat; sort of xD). The skeleton still has code to link up the parts but the most important work is done by the application.
Examples of libraries: Network protocols, compression, image manipulation, string utilities, regular expression evaluation, math. Operations are self-contained. | Examples of frameworks: Web application system, Plug-in manager, GUI system. The framework defines the concept but the application defines the fundamental functionality that end-users care about.


#### HTTP PROTOCOLS
- **WHAT IS HTTP?**
  - HTTP stands for hypertext transfer protocol and is used to transfer data across the Web. It is a critical protocol for web developers to understand and because of it widespread use it is also used in transferring data and commands in IOT applications. 

- **HOW IT WORKS?**
  - Like most of the Internet protocols http it is a command and response text based protocol using a client server communications model. The client makes a request and the server responds. The HTTP protocol is also a stateless protocol meaning that the server isn’t required to store session information, and each request is independent of the other. This means:

    - All requests originate at the client ( your browser)

    - The server responds to a request.

    - The requests(commands) and responses are in readable text.

    - The requests are independent of each other and the server doesn’t need to track the requests.


## THANK YOU!

### THE END...

### THIS CODE WAS ADDED TO THE _ALTERNATIVE_ BRANCH
- We used the _Git Branch_, _Git checkout_ and _Git merge_ feature to use the feature of branching.



