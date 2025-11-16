from app.database import supabase
from app.models import User

TABLE_NAME = "Users"

def get_all_users():
    response = supabase.table(TABLE_NAME).select("*").execute()
    return response.data

def create_users(user_data: dict):
    response = supabase.table(TABLE_NAME).insert(user_data(exclude_unset=True)).execute()
    return response.data

def update_user(user_id: int, user: User):
    response = (
        supabase.table(TABLE_NAME)
        .update(user.dict(exclude_unset=True))
        .eq("id", user_id)
        .execute()
    )
    return response.data

def delete_user(user_id):
    response = supabase.table(TABLE_NAME).delete().eq("id", user_id).execute()
    return response.data

def login_user(email: str, password: str):
    response=(
        supabase.table(TABLE_NAME)
        .select("*")
        .eq("email", email)
        .single()
        .execute()
    )
    return response.data 