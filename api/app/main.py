from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import clients, auth

app = FastAPI(title="Dead Tree Scribes API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(clients.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "API is running 🚀"}
