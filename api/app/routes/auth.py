from fastapi import APIRouter, HTTPException
from app.auth_models import UserLogin, UserRegister, UserResponse, PasswordReset
from app.database import supabase

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login")
def login(credentials: UserLogin):
    """Authenticate user and return session token"""
    try:
        response = supabase.auth.sign_in_with_password({
            "email": credentials.username,
            "password": credentials.password
        })
        
        if response.user:
            return {
                "access_token": response.session.access_token,
                "user": {
                    "id": response.user.id,
                    "email": response.user.email,
                    "username": response.user.user_metadata.get("username", "")
                }
            }
        else:
            raise HTTPException(status_code=401, detail="Invalid credentials")
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))

@router.post("/register", response_model=UserResponse)
def register(user_data: UserRegister):
    """Register a new user"""
    try:
        response = supabase.auth.sign_up({
            "email": user_data.email,
            "password": user_data.password,
            "options": {
                "data": {
                    "username": user_data.username
                }
            }
        })
        
        if response.user:
            return UserResponse(
                id=response.user.id,
                username=user_data.username,
                email=user_data.email,
                created_at=response.user.created_at
            )
        else:
            raise HTTPException(status_code=400, detail="Registration failed")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/forgot-password")
def forgot_password(reset_data: PasswordReset):
    """Send password reset email"""
    try:
        supabase.auth.reset_password_for_email(reset_data.email)
        return {"message": "Password reset email sent successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/logout")
def logout():
    """Logout user"""
    try:
        supabase.auth.sign_out()
        return {"message": "Logged out successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/me")
def get_current_user():
    """Get current authenticated user"""
    try:
        user = supabase.auth.get_user()
        if user:
            return {
                "id": user.user.id,
                "email": user.user.email,
                "username": user.user.user_metadata.get("username", "")
            }
        else:
            raise HTTPException(status_code=401, detail="Not authenticated")
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))
