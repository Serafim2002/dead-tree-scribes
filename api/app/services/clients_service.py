from app.database import supabase
from app.models import Client

TABLE_NAME = "clients"

def get_all_clients():
    data = supabase.table(TABLE_NAME).select("*").execute()
    return data.data

def create_client(client: Client):
    response = supabase.table(TABLE_NAME).insert(client.dict(exclude_unset=True)).execute()
    return response.data

def update_client(client_id: int, client: Client):
    response = (
        supabase.table(TABLE_NAME)
        .update(client.dict(exclude_unset=True))
        .eq("id", client_id)
        .execute()
    )
    return response.data

def delete_client(client_id: int):
    response = supabase.table(TABLE_NAME).delete().eq("id", client_id).execute()
    return response.data
