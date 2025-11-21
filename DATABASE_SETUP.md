# Database Setup Guide

## Users Table Structure

Create a table named `Users` in your Supabase database with the following columns:

```sql
CREATE TABLE Users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Column Details

- **id**: UUID primary key (auto-generated)
- **email**: User's email address (unique, required)
- **username**: Display name for the user (required)
- **password**: User's password (currently stored as plain text - consider hashing in production)
- **created_at**: Account creation timestamp (auto-set)
- **updated_at**: Last update timestamp (auto-set)

## SQL Command

Copy and paste this into your Supabase SQL editor:

```sql
CREATE TABLE Users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX users_email_idx ON Users(email);
```

## Authentication Flow

1. **Register**: User provides email, username, and password
   - System checks if email already exists
   - If not, inserts new record into Users table
   - Stores user data (except password) in localStorage

2. **Login**: User provides email and password
   - System queries Users table for matching email and password
   - If found, stores user data (except password) in localStorage
   - If not found, displays error message

3. **Protected Routes**: Pages requiring authentication
   - Uses `useUser()` hook to get user from localStorage
   - Redirects to `/login` if user not found

## Security Note

⚠️ **Important**: Storing passwords as plain text is insecure. For production, implement:
- Password hashing (bcrypt, argon2)
- Environment-based API keys
- HTTPS only
- Rate limiting on login attempts

## Logout

- Clears user data from localStorage
- Redirects to login page
