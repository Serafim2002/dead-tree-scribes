from pydantic import BaseModel, EmailStr, Field

class Client(BaseModel):
    id: int | None = None
    name: str = Field(..., min_length=3)
    email: EmailStr
    phone: str | None = None
