const express = require('express');
const app = express();
const port = 3000;

// Route for HTTP Status Code API
app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code);
  const messages = {
    200: 'OK: The request has succeeded.',
    201: 'Created: A resource has been successfully created.',
    204: 'No Content: Request processed successfully, no content returned.',
    400: 'Bad Request: The request is invalid due to client-side errors.',
    401: 'Unauthorized: Authentication is required to access the resource.',
    403: 'Forbidden: Server refuses to authorize the request.',
    404: 'Not Found: The resource does not exist.',
    405: 'Method Not Allowed: HTTP method not supported for this resource.',
    429: 'Too Many Requests: User has exceeded rate limits.',
    500: 'Internal Server Error: The server encountered an unexpected condition.',
    502: 'Bad Gateway: The server received an invalid response.',
    503: 'Service Unavailable: Server temporarily overloaded or under maintenance.',
    504: 'Gateway Timeout: The server did not receive a timely response.'
  };

  if (messages[code]) {
    res.json({ status: code, message: messages[code] });
  } else {
    res.status(400).json({ status: 400, message: 'Invalid status code' });
  }
});

// Route for Virtual Assistant API
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ status: 200, message: `Hello, ${name}! Welcome to our Virtual Assistant API.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});