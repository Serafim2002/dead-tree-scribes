from fastapi import FastAPI
from app.routes import users

app = FastAPI(title="Dead Tree Scribes API")

app.include_router(clients.router)

@app.get("/")
def root():
    return {"message": "API is running 🚀"}
