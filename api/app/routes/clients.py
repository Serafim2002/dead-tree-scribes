from fastapi import APIRouter, HTTPException
from app.models import Client
from app.services import clients_service

router = APIRouter(prefix="/clients", tags=["Clients"])

@router.get("/")
def list_clients():
    return clients_service.get_all_clients()

@router.post("/")
def add_client(client: Client):
    return clients_service.create_client(client)

@router.put("/{client_id}")
def edit_client(client_id: int, client: Client):
    updated = clients_service.update_client(client_id, client)
    if not updated:
        raise HTTPException(status_code=404, detail="Client not found")
    return updated

@router.delete("/{client_id}")
def remove_client(client_id: int):
    deleted = clients_service.delete_client(client_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Client not found")
    return deleted
