# python languagae
FROM python:3.11-slim

# working dir
WORKDIR /app

# installing dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copying the code of the app
COPY ./app ./app

#exposing the port for FASTAPI to run on
EXPOSE 8000

# run the app using uvicorn
CMD [ "uvicorn","app.main:app","--host", "0.0.0.0", "--port", "8000" ]

