# Usar la imagen base de AWS Lambda para Python
FROM public.ecr.aws/lambda/python:3.9

# Copiar el archivo de la función Lambda al contenedor
COPY app.py ${LAMBDA_TASK_ROOT}

# Establecer el manejador de la función Lambda (en este caso, app.lambda_handler)
CMD ["app.lambda_handler"]