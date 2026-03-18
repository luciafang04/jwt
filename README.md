# JWT Garden

Aplicacion realizada con Next.js, React y TypeScript para practicar:

- formulario de login
- autenticacion con JWT
- proteccion de rutas privadas
- almacenamiento del token en cookie `httpOnly`
- logout
- despliegue en Vercel

## Usuario de prueba

- Email: `admin@tomates.com`
- Password: `1234`

## Funcionalidades implementadas

- `app/login/page.tsx`: pantalla de login con componentes UI estilo shadcn
- `app/api/login/route.ts`: valida credenciales y genera un JWT
- `proxy.ts`: protege `/dashboard` y evita entrar a `/login` si ya hay sesion
- `app/dashboard/page.tsx`: panel privado con bienvenida, datos de usuario y cards pedidas
- `app/api/logout/route.ts`: elimina el token del cliente

## Variables de entorno

Crea un archivo `.env.local` a partir de `.env.example`:

```bash
JWT_SECRET=pon-aqui-un-secreto-largo-para-produccion
```

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicacion quedara disponible en `http://localhost:3000`.

## Verificacion

```bash
npm run lint
npm run build
```

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repositorio en Vercel.
3. Anade la variable de entorno `JWT_SECRET` en el panel de Vercel.
4. Despliega el proyecto.
5. Comprueba que `/login` y `/dashboard` funcionan tambien en produccion.

Tambien puedes desplegar con CLI:

```bash
npm i -g vercel
vercel
```
