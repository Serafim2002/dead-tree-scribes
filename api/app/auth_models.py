from pydantic import BaseModel, EmailStr, Field

class UserLogin(BaseModel):
    username: str = Field(..., min_length=3)
    password: str = Field(..., min_length=6)

class UserRegister(BaseModel):
    username: str = Field(..., min_length=3)
    email: EmailStr
    password: str = Field(..., min_length=6)

class UserResponse(BaseModel):
    id: str
    username: str
    email: str
    created_at: str

class PasswordReset(BaseModel):
    email: EmailStr
    new_password: str = Field(..., min_length=6)
