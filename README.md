# Technical Assessment - GovTech Internship Programme

## **About**

This repository is part of the Technical Assessment for the GovTech Internship Programme. It includes a frontend application, a backend server located in the **`./backend`** directory, and end-to-end (E2E) tests using Playwright located in the **`/tests`** folder.

## **Prerequisites**

Before you begin, ensure you have the following installed on your system:

- Node.js (Recommended version: 14.x or newer)
- npm (Node Package Manager)

You can check if they are installed by running **`node -v`** and **`npm -v`** in your terminal.

## **Installation**

Follow these steps to set up the project environment:

### **1. Clone the Repository**

Start by cloning this repository to your local machine:

``` sh
git clone https://github.com/nicholasohjj/govtech-oa/git
cd govtech-oa
```

### **2. Install Frontend Dependencies**

To install the dependencies required for the frontend application, run the following command from the root directory of the project:

``` sh
npm install
```

### **3. Install Backend Dependencies**

Navigate to the **`backend`** directory and install its dependencies:

``` sh
cd backend
npm install
```

### **4. Install Test Dependencies**

Navigate to the **`tests`** directory to install the dependencies required for E2E testing:

``` sh
cd ../tests
npm install
```

## **Running the Application**

To start both the frontend and backend concurrently from the root of the project, execute:

``` sh
npm start
```

This command uses a pre-configured script to launch both parts of the application, allowing them to work together seamlessly.

## **Testing**

After you have the application running, you can execute the E2E tests to ensure everything is working as expected. Navigate to the **`/tests`** directory and run:

``` sh
npm test
```

This will initiate the Playwright tests, running through predefined scenarios to test the application's end-to-end functionality.

Alternatively, you can execute backend unit tests by navigating to the **`/backend`** directory and run


``` sh
npm test
```
