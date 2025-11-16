from pydantic import BaseModel, EmailStr, Field

class User(BaseModel):
    id: int | None = None
    name: str = Field(..., min_length=3)
    email: EmailStr
    password: str | None = None

class ADM(BaseModel):
    id: int | None=None
    user_id: int

class Normal(BaseModel):
    id: int | None=None
    user_id: int

class LoginInput(BaseModel):
    username: str
    password: str

class LoginOutput(BaseModel):
    message: str
    user: dict