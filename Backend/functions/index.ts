import bcrypt from 'bcryptjs';

interface User {
  name: string;
  password: string;
}

const users: User[] = [];

const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://davids-car-rental-site.vercel.app', 
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': 'true',
  };

export async function handler(event: any) {
  if (event.httpMethod === 'GET' && event.path === '/') {
    return {
      statusCode: 200,
      body: JSON.stringify('Welcome to the Car Rental'),
      headers:corsHeaders
    };
  }

  if (event.httpMethod === 'GET' && event.path === '/users') {
    const userNames = users.map((user) => user.name);
    return {
      statusCode: 200,
      body: JSON.stringify(userNames),
      headers:corsHeaders
    };
  }

  if (event.httpMethod === 'POST' && event.path === '/users') {
    const requestBody = JSON.parse(event.body || '{}');

    // Check if the user already exists
    const existingUser = users.find((user) => user.name === requestBody.name);
    if (existingUser) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: 'Username taken' }),
        headers:corsHeaders
      };
    }

    // Hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(requestBody.password, salt);

    // Insert the new user
    const newUser = { name: requestBody.name, password: hashedPassword };
    users.push(newUser);

    return {
      statusCode: 201,
      body: 'User created successfully',
    };
  }

  if (event.httpMethod === 'POST' && event.path === '/users/login') {
    const requestBody = JSON.parse(event.body || '{}');
    const { name, password } = requestBody;

    const user = users.find((user) => user.name === name);
    if (!user) {
      return {
        statusCode: 404,
        body: 'User not found',
        headers:corsHeaders
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return {
        statusCode: 200,
        body: 'Login successful',
        headers:corsHeaders
      };
    } else {
      return {
        statusCode: 401,
        body: 'Incorrect password',
        headers:corsHeaders
      };
    }
  }

  return {
    statusCode: 404,
    body: 'Not Found',
    headers:corsHeaders
  };
}
