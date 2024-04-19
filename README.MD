Esto es una plantilla de NodeJS con un modelo de datos básico para poder editar
según nuestras necesidades.

La plantilla incluye:

- gestión de usurios (user.model, controller y routes)
- autenticacion (auth.middleware, utils.jwt)
- conexión a base de datos no relacional con mongoose (data.mongo)
- manejo de cors (en index)
- validación de datos (utils.validator)
- manejo de errores básico (utils.error)

ver package.json para la lista completa de librerías.

# INSTALACIÓN

1. Descargar el repositorio a local

2. Instalar dependencias con: npm i

3. Revisar si esta la carpeta .env

4. Hacer un npm run dev

# PASSWORD

1. Contiene al menos una letra minúscula ('s').
2. Contiene al menos una letra mayúscula ('P').
3. Contiene al menos un dígito ('0').
4. Contiene al menos un carácter especial de la lista proporcionada ('@').
5. Tiene una longitud de entre 8 y 12 caracteres (8 caracteres en total).
6. Ejemplo: P@ssw0rd

# ENLACES

- npmjs.com

Es la lista de todas las librerías que podemos utilizar en entornos NodeJS, si no
conocemos una librería es conveniente comprobarla aquí para asegurarnos de que no
estamos instalando algo erroneo o peligroso.
