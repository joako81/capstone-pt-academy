// netlify/functions/addEmailToMailerLite.js

const axios = require("axios");

exports.handler = async (event, context) => {
  try {
    const email = event.queryStringParameters.email;
    const response = await axios.post(
      `https://api.mailerlite.com/api/v2/groups/108004927724324789/subscribers`,
      {
        email: email,
      },
      {
        headers: {
          "X-MailerLite-ApiKey":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDMyZGVjMThhM2Y2YjZiZWFmZGUzOTUyZGJjMjYxYzc0YzFmNWFhNWFlMjEyODEzMzdlNmIyMDg0MzJkOTcxYmFmNTE0MjIwNmJiOGU0OTciLCJpYXQiOjE3MDMwMDA2MTQuMTk1NTYsIm5iZiI6MTcwMzAwMDYxNC4xOTU1NjIsImV4cCI6NDg1ODY3NDIxNC4xOTE5MjIsInN1YiI6Ijc1ODQ2MCIsInNjb3BlcyI6W119.gZ4urWAACJZVffjEpe1YIpasMCwvjJ5bNkPacPtKLZz-_IIuM7SzT_2H7NFBmepgSlI_5VfrOAvtFTW5d6Da-JPpbiIi8JLbsK_3uUJ1G4ipnxTGCTfWJgzRGxKq4tsQgdTJL01SFZY1TY7kyer4BAomtDNQDiI3npPZ_SAKNIoYu1RNZyWPxhyx0hqTZVkyEuW500Kh_sSMQ1lM9MccyoNC-u3jCYsbD-HWi4qhaDZDTfWOhENkuzGvHxtlRI-6AeM11X1k3QBZ0lTvAllBXHZ7gMbktXkWTqbWb1arvg0lOm8VJIiwnvpeNRsY4MzLaaPOPTNWvOZjyI0KzvWh8D2Cana2JvakE85da4jNwhfVXChgt80uyZSnF4akc6Sa9i0vXSYlPxL6G6dDJ41DO2Qa6dAEfJCvzL6xovAh-1hdbcmYhzVTvaKtlUJ0VGxS2Q0giz2-n0i3mGnJTXcNT1t_eLDgBgEPSxZamtqU7foou0VPHh-ag6fMp6jSAkDZk0lrG5F4e3NJ2SymO0zEoIarJ48hdetS0ts2TiMx1ImNru0z5L5JTfkFoxqpXm1JUqpAf9qF-DX3ax4v7JdpPHjALH6732K2Q1dFK8z-cEZ-oSiZr1IbIgnXCOG8zDxpBSN7tsoF4oF9GydjofIbV9sKzrd1SCMU4pCx-Oh_fCs",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify(error.response.data),
    };
  }
};
