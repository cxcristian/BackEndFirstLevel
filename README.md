# Proyecto Librería con CRUD

## Objetivo
Profundizar en los conocimientos de **análisis**, **requerimientos**, **diseño de endpoints** y un **desarrollo ordenado**.

---

## Planeación

### Descripción
Este es un sistema que permite registrar libros con **título**, **autor**, **categoría** y **año de publicación** (datos obligatorios).  
El usuario, autenticado mediante **JWT**, puede realizar un **CRUD completo**.

---

## Requerimientos del Sistema

- El sistema debe autenticar al usuario.
- El sistema debe registrar los libros con datos obligatorios.
- Se pueden listar todos los libros.
- Se puede buscar libros por **categoría** o **autor**.
- El sistema debe permitir **editar datos del libro**.
- El sistema debe permitir **borrar un libro seleccionado**.
- El sistema debe validar que **nunca falten campos obligatorios**.

---

## Estructura de la Tabla `libros`

| Campo     | Tipo                   | Obligatorio |
|-----------|------------------------|-------------|
| Id        | int (auto incremental) | Sí          |
| titulo    | string                 | Sí          |
| autor     | string                 | Sí          |
| categoria | string                 | Sí          |
| año       | int                    | Opcional    |

---

## Endpoints REST

| Método | Ruta          | Descripción  |
|--------|---------------|--------------|
| POST   | /libros       | Crear libro  |
| GET    | /libros       | Listar todos |
| GET    | /libros/:id   | Obtener uno  |
| PUT    | /libros/:id   | Editar libro |
| DELETE | /libros/:id   | Eliminar     |

