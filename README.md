
# Works to Do in Main Page (Dezainahub.com)

<!-- Login/SignUp -->
*SignUp Page, where the user can create account with the email otp verification or direct with the "Sign up with google"

*Don't Want Header and Footer in <LoginPage /> , <SignupPage /> , <VerifyPage /> and Error Page

*When User Not Logged in than instead of "cart" and "Logout" button on "Login" Button will be visible, and vice versa 

<!-- In Home Page (<LandingPage/>) under Featured Servie Section <FeaturedServieSec> -->
*The Category Bar(Advertising content , design rendering , Coorporate Designs) Should be updated on the basis of admin Page Products, on toggling from one category to another the products should change accordingly 

*According to different categories, only product having "featured" value as "True" should be displayed here 


<!-- In Gallery Page (<GalleryPage/>)  -->

***under Gallery Landing Section <GalleryLandingSec />***

*the categories should change according to the categories we add/edit in the admin page

***under Gallery Img Section <GalleryImgSec />***

*The Products in the gray strip should add/edit according to the admin page

*According to the toggling of the Categories in Gallery Landing Section the products should change, acc according to the products there image protfolio/collection should change

*The images of Gallery Page (Inside Admin web App) should be updated here under the products of the particular category


<!-- In Service Page (<ServicePage/>)  -->

***under Product Service Section <ServiceProductSec />***

*The Category Strip (Advertising content , design rendering , Coorporate Designs) should Add/Edit according to the admin page 

*between both the category strip, the <ServiceProductCategory1/> the strip heading should be according to the category under which all the product items should be listed which were updated from the admin web app

<!-- In Contact Us Page (<ContactUsPage/>)  -->

***under contact us landing page <ContactLandingSec/>***

*All the feild of contact form is required except the service feild

*The details of contact form will be displayed in the contact request section in Admin web app

*After Clicking on Submit, the form stage 1 (<ContactForm1/>) will change to the final stage (<ContactFormFinal/>) with a transition

<!-- In Cart Page (<CartPage/>)  -->

*Onclicking of the plus "+" button , Products Should be added to the cart from the service page or from the featured section(of home page) and onclick of "remove" button the same product should be deleted from the cart

*After the product is added their should be an empty input box with the product , where the client have to fill the description of the service they need (Which will be pass to the order page in Admin web app)
*On Click of cancel the input box disappers if more thn one input box in the list else the product is removed from the cart

*Onclick of the "Add more" button or on increasing the counter of the product the same number of input box should appear each having different set of input description from the client , and without filling the previous input box the client not be able to add more input box or increase the counter

*Only After Filling all the selected input boxes than only client can proceed to the next stage(Review Your Cart) with the total estimated price , quantity and the product description the written by the client

*In the second Stage (Review Cart) after reviewing the cart, client can also go back to edit details by clicking on "Edit Details".  Only after the client clicks on Proceed than the order will be placed, which will display in the our order Tab (in Admin Web app)







# Works to Do in Admin web APP

*Have to create a role/flag in the login API only for the admin login


<!-- In Order Page (<OrdersPage/>)--> 
*The ordered Items From the cart page in the main website(Dezainhub.com) should be displayed here

*On click of particular Category section (Total, Active, Complete), inside which orders with the same status should be displayed

*If the order status is Completed, the container of Order should be grayout (As per the UI ) ,on click of which we can still see the conversation update without being able to edit anything of that particular order.

*On click of the "Create CX order" Button A new ADD BOX will be displayed to fill up the details for the new order , and on selection of more than one service, the same number of description box should be generated to fill up the description of each order, and on update the each description should get updated with their particular product name and its price under same client name, as shown in the UI (Kindly Focus on the UI with Ordr Having Multiple Product Description in Order Page) with the date of creating the order

*On opening of the admin page if any new order comes thn The Order Tab should have a Notification dot or anything , same if the total should have the same notification dot and the new order should be in blue color in first seen (Kindly refer to the UI)  

*Inside  <OrderListPage/>, On click of the particlular order description wala part , the next order Status stage (<OrderStatusPage/>) should be displayed 

***Inside order Status stage***
*Only after updating atleast one conversation,On click of "Update Conversation" button , An update Inbox Should Open from Which we'll update the Order conversation Status with the date of update 

*Only after updating atleast one conversation, On click of "mark As Completed" Button , the order status should be change from Active to Completed after an confirmation box(Pop up Box) .

*On update of the converstation a mail should go to the client on the order conversation status we updated (maybe already done by backend, please confirm), or else we can have a order status page in the main website where we can display the order status details, whichever is more convininent 




<!-- In Contact Request Page (<ContactReqPage/>)--> 

*The details of contact From filled in the contact us page in the main website(Dezainhub.com) should be displayed here

*On click of particular Category section (All, Remaining , Reconnect, Connected), inside which Contact Request with the same status should be displayed

*If the Contact status is Connected, the container of Order should be grayout (As per the UI ) , in which we can still see the conversation update without being able to edit anything of that particular order.

*On click of the "Create CX Req" Button A new ADD BOX will be displayed to fill up the details for the new contact request, with the date on which contact request is created

*On opening of the admin page if any new contact request comes thn The contact request Tab should have a Notification dot or anything , same if the "All" should have the same notification dot and the new contact request should be in blue color in first seen (Kindly refer to the UI)

*On click of "Update Conversation" button , An update Inbox Should Open from Which we'll update the Order conversation Status with the date of update 

*Only after updating atleast one conversation, On click of "mark Contacted" Button , the contact request status should change from Remaining to Connected after an confirmation box(Pop up Box) .

*Only after updating atleast one conversation, On click of "Need to Re-Contacted" Button , the contact request status should change from Remaining to Re-Connect.




<!-- In Products Page (<ProductPage/>)--> 
*In Different Catergories Section(Advertising content , design rendering , Coorporate Designs) different products should be displayed, under different category

*Onclick of "Add/Edit Category", we'll be able to add or edit category name in Pop up Box (or anything fits better to add or edit the category)

*On click of the "Add A Product" Box/Button an ADD BOX should be diplayed instead if the "Add a Product" box

*Only After filling each of the details and uploading the product image, On click of the "Update" Button the new product details should be updated , Onclick of the "Delete" button the filled details should vanish and normal product page should open without the ADD BOX

***In existing products***
*Onclick of the "Edit" button each field of the product should be editable like the previous ADD BOX just with the pre-filled order details from the current product which we can edit and than update it

*Onclick of the "remove" button the product should be removed from the list and all its details after a confirmation box (Pop up Box).

*Onclick of the "Update Page" button at the top right than only the Products should be changed/updated in the main site.




<!-- In Gallery Page (<GalleryPage/>)--> 
*In Different Catergories Section(Advertising content , design rendering , Coorporate Designs) different different products should be displayed in the below bar as per the Product Page (<ProductPage/>) acording to which product is updated under which category

*On click of the "Upload new Image" Box/Button our local files should open to select the image from the local device to update gallery 

*On click of the "Replace" button again the local file explorer should open to replace the image from the local device storage

*Onclick of "Delete" button the image should be removed from the gallery page

*Onclick of the "Update Page" button at the top right than only the gallery page should be update in the main site




# How to clone the repository in your PC



This guide will help you clone this repository to your local machine step by step.

## Step 1: Install Git

<!-- Make sure Git is installed on your machine before attempting to clone the repository. -->

- For **Windows**, download and install Git from

- For **macOS**, run the following command in the terminal:
  
  ```bash
  brew install git

- For Linux, install Git using the following command:

- Wite in terminal:- sudo apt-get install git

## Step 4: Open a Terminal or Command Prompt

<!-- Open a terminal (Linux/macOS) or Command Prompt (Windows). This is where you will run Git commands. -->

## Step 3: Navigate to the Desired Directory

- Write in your terminal :- cd path/to/your/directory

## Step 4: Get the Repository URL

<!-- Visit the repository on GitHub, click on the green 'Code' button, and copy the HTTPS or SSH URL. -->

##  Clone the Repository

- Write in your terminal :- git clone https://github.com/username/repository-name.git

<!-- Use the `git clone` command followed by the repository URL to clone it. -->

## Step 6: Navigate into the Cloned Repository

<!-- After cloning, use the `cd` command to enter the cloned repository directory. -->

- Write in your terminal :- cd repository-name

## Step 7: Verify the Clone

- ls   # For Linux/macOS
- dir  # For Windows

