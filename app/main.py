from fastapi import FastAPI
import psycopg2
from psycopg2 import OperationalError

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI in Docker!"}

@app.get("/db-check")
def db_check():
    try:
        conn = psycopg2.connect(
            dbname="postgres",
            user="postgres",
            password="postgres",
            host="db",
            port="5432",
            connect_timeout=2
        )
        conn.close()
        return {"status": "ok", "db": "connected"}
    except OperationalError as e:
        return {"status": "error", "db": "unreachable", "detail": str(e)}
