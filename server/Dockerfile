FROM python:3.8-slim

COPY wait-for-it.sh /usr/bin/
COPY requirements.txt .

WORKDIR /app
RUN pip install -U pip setuptools wheel && pip install -r /requirements.txt

CMD python run.py runserver --noreload 0.0.0.0:80
