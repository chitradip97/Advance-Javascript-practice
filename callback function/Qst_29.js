// You have an array of strings representing email addresses. Write a function called filterValidEmails that takes an array of email addresses as input and returns a new array containing only valid email addresses (assume a valid email address contains an "@" symbol).

const emails = ['user1@example.com', 'invalid_email', 'user2@example.com', 'another_invalid'];
let filterValidEmails=emails.filter(email=>email.includes('@'))
console.log(filterValidEmails);