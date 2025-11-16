from fastapi import APIRouter, HTTPException
from app.models import User, LoginInput, LoginOutput
from app.services import clients_service

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/")
def list_users():
    return clients_service.get_all_users()

@router.post("/")
def add_user(user: dict):
    return clients_service.create_user(user)

@router.put("/{user_id}")
def edit_user(user_id: int, user: User):
    updated = clients_service.update_user(user_id, user)
    if not updated:
        raise HTTPException(status_code=404, detail="User not found")
    return updated

@router.delete("/{user_id}")
def remove_user(user_id: int):
    deleted = clients_service.delete_user(user_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="User not found")
    return deleted

@router.post("/login")
def login(credentials: LoginInput):
    user = clients_service.login_user(credentials.username, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="Usuario ou senha incorretos")
    return {"message": "Login bem-sucedido", "user": user}