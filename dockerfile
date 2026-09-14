FROM python:3.8-alpine

WORKDIR /tree

ADD . .

RUN echo Hiii my name is Honey singh munariya

CMD ["python", "honey.py"]

