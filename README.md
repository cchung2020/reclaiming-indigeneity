# What is this project?

This project is a proposed redesign of https://reclaimingindigeneity.com/, designed by a team of students at the University of Massachusetts Lowell. 

# Setup Instructions

Nothing yet, probably will be hosted on Github Pages. 



# Wiggle Room Requirements:

### Database & Authentication 

### API integration
API integration meets or exceeds expectations by using a fetch API call to dynamically load weather data and display it in the footer of the page.  Error handling is implemented for the API call, and the current temperature data in Colombia is displayed as part of the footer

### Form Handling

### Security Best Practices
The security for our website goes above the bare minimum in order to protect users.  Form inputs such as passwords are validated using regular expressions to prevent users from setting weak passwords.   Passwords are salted and hashed using bcrypt, and only the hashed versions are stored.  We made sure not to store any keys in GitHub

### Internationalization

