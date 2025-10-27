from supabase import create_client
'''SUPABASE_URL = "https://ecjgviyhgttbxsfomukc.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjamd2aXloZ3R0YnhzZm9tdWtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY4MzY2MTAsImV4cCI6MjA3MjQxMjYxMH0.Pgou0FBlCFIshiQ42UvW9PbbfF9MDkVYQGHs6no7PZA"'''
from app.config import SUPABASE_URL, SUPABASE_KEY
supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
