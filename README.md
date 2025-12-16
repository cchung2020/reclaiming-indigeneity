# What is this project?

This project is a proposed redesign of https://reclaimingindigeneity.com/, designed by a team of students at the University of Massachusetts Lowell. 

# Setup Instructions

Download the packages with `npm install`. Run the project with `npm run dev`.

# Wiggle Room Requirements

We have chosen to go for at least partial credit on all of the wiggle room requirements, although some of them we believe may read full credit status.

### Database & Authentication 

### API integration
API integration meets or exceeds expectations by using a fetch API call to dynamically load weather data and display it in the footer of the page.  Error handling is implemented for the API call, and the current temperature data in Colombia is displayed as part of the footer

### Form Handling
The form handling has been designed with a serverless backend API, with changes to ensure that only valid data is sent through. For instance, in the calendar designed from scratch, past dates or unavailable session times are not able to be selected, and once booked, immediately become unbookable. The 

### Security Best Practices
The security for our website goes above the bare minimum in order to protect users.  Form inputs such as passwords are validated using regular expressions to prevent users from setting weak passwords.   Passwords are salted and hashed using bcrypt, and only the hashed versions are stored.  We made sure not to store any keys in GitHub

### Internationalization
The site works in three separate languages: English, Spanish, and Hebrew. The messages and popups have been customized to be translated in each language, although there are some minor areas that are still defaulted to English. The language is selected via a dropdown in the top right. Implementation wise, the i18n package manages a central dictionary for the langauges located in src/public/locales, stored in common.js in the en/es/he folders.
