# InventoryWebApp
A full stack Web application for the Shopify Backend Intern Challenge!

### Technologies Used
- Backend: Spring Boot (Java, Maven, XML)
- Frontend: React (Javascript)
- Database: H2 (in-memory storage)

### Set up
1. Install Java 11 (Java versions earlier than 11 don't seem to work, Java versions after 11 such as Java 17 might or might not work without some changes to the pom.xml file)
2. Install Maven:<br/>
    1. Go to `maven.apache.org/download.cgi`, download the binary zip archive link and unzip it
    2. Then go to `maven.apache.org/install.html` and follow the rest of the installation setup instructions
4. Open the Terminal to the root folder of this Git Repository 
5. Run `mvn spring-boot:run`
6. Acccess the application on `localhost:8080`!
     - You should be able to access all REST endpoints as well as all frontend endpoints through `localhost:8080`

### REST Documentation
- Create Inventory Item: `/api/inventory`
- Get All Inventory Items: `/api/inventory`
- Get Inventory Item: `/api/inventory/{id}`
- Update Inventory Item: `/api/inventory/{id}`
- Delete Inventory Item: `/api/inventory/{id}`

###### Feel free to check out this Postman collection for the REST Endpoints I created here: 
https://www.getpostman.com/collections/75aa11c779ffd45b7d52

### Extra feature added: Export data to CSV

### Why this application is very Scalable + Modular

When architecting the code for the Spring Boot backend, I chose to use a 3-layered architecture pattern. Specifically speaking, I used a data access layer (which consists of the model and repository packages and communicates with the H2 database), the business layer (which includes the service classes), and the presentation layer (which includes the REST controllers). This allows code maintenance to be very organized as well as allows the codebase to be very modular with the separated logic between layers.


