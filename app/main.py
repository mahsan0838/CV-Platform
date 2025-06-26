import os
import psycopg2
from fastapi import FastAPI

app = FastAPI()

@app.get("/db-check")
def db_check():
    conn = psycopg2.connect(os.getenv("DATABASE_URL"))
    cur = conn.cursor()
    cur.execute("SELECT version();")
    version = cur.fetchone()
    cur.close()
    conn.close()
    return {"db_version": version}
