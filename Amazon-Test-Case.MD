Amazon Home page

Amazon search product functionality and auth test

Steps:

Step Description						                 Expected Result
1. Navigate to Client site 				                 User should be able to navigate and Verify:
										                 * Amazon Logo is visible
										                 * Greeting message should be visible

2. User search for Sweater using search bar			 	 User should be able to enter message on Search bar
3. User clics on search button					         User should see the Results mesage and Best Seller text is visible
4. User selects Medium/Todays Deal from the results		 	 User should be able to filter those options it is saved
5. User selects first product from the results				 User should be able to select the first product and Add to Chart button should be visible
6. User clicks on Add to Chart button					 User should see Added to chart message
7. User clicks on Proceed to Checkout Button				 User should see Sign in Hear
8. User clicks on Continue button					 User should see "Enter your email or mobile phone number" error
9. User Providers an email address and click Continue	 		 User should see Sign in Button
10. User clicks on Sign in Button without password		 	 User shoud see "Enter your password" error
11. User enters a wrong password and click Sign in       		 User should see auth error message
12. User clicks on Amazon logo						 User should navigates to Home page and Verify:
														 * Amazon Logo is visible
														 * Amazon Greeting message is visible
														 * Amazon chart count is equals to 1
