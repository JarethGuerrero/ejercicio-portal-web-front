
# Ejercicio Web

Este proyecto es un sistema de registro y gestión de clientes para un portal bancario. Permite registrar nuevos clientes con sus datos personales y proporciona funcionalidades para manejar sus cuentas.

## Características Principales

- **Registro de Clientes:** Permite registrar nuevos clientes con información personal como nombre, apellidos, fecha de nacimiento, correo electrónico, etc.
- **Gestión de Cuentas:** Proporciona la capacidad de gestionar las cuentas de los clientes, incluida la creación y almacenamiento de números de cuenta.
- **Validaciones de Formulario:** Ofrece validaciones de formulario para asegurar que los datos ingresados sean correctos antes de ser enviados al servidor.
- **Notificaciones al Usuario:** Utiliza notificaciones (toasts) para informar al usuario sobre el resultado de las acciones, como la creación exitosa de un cliente o cuenta.

## Tecnologías Utilizadas

- **Frontend:** React.js, React Router Dom, sonner
- **Backend:** Node.js, Express.js
- **Base de Datos:** MariaDB

## Configuración del Proyecto

1. **Clonar el Repositorio:**
   ```
   git clone https://github.com/JarethGuerrero/ejercicio-portal-web-front
   ```
2. **Instalar Dependencias:**
   ```
   npm install
   ```
3. **Ejecutar la Aplicación:**
   ```
   npm run dev
   ```

## Uso

1. **Registro de Cliente:**
   - Accede a la sección de registro.
   - Completa el formulario con los datos del cliente.
   - Haz clic en "Registrar Cliente".
   - Se mostrará una notificación sobre el resultado.

2. **Gestión de Cuentas:**
   - Una vez registrado el cliente, podrás acceder a la gestión de cuentas.
   - Al crear una cuenta para un cliente, se generará un número de cuenta y se almacenará en el backend.
