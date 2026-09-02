---
title: Bot Creditos
sidebar_position: 2
---
## Intro
El bot de créditos usa varios flujos. Los flujos se comunican entre si a través de APIs. 
:::info
 ⚠️ El flujo de Bot de créditos utiliza dos APIs con credenciales externas. Estas APIs son Nosis, y SFDC. Es posible que en algún momento estas credenciales tengan modificaciones de permisos y haya que actualizarlas. Por esta razón están contenidas en los siguientes flujos `SFDC Validator` y `Nosis Validatior`. 
:::
## Flujo de flujos (sí, vale la redundancia)
El flujo principal es **`Llegada de mail`**. A partir de ahí, se disparan una serie de validaciones y llamadas a otros flujos,

Cada rectángulo en el diagrama representa un **flujo**, mientras que los rombos y círculos representan **decisiones o eventos** que ocurren dentro de esos flujos.

> 📌 Los nombres de los flujos se mantuvieron tal cual están en el código (sin versión ni comentarios), para que sea fácil rastrearlos.

```mermaid
flowchart TD
    A[Llegada de mail] --> B[Validar mail]
    B --> Decision{es de advanta, o existe como distrbuidor en SFDC?}
    Decision -->|Sí| C[Get CUITs from HTML]
    Decision -->|No| Error((mail de no autorizacion))
    C --> H{Le queda cupo de consultas?}
    H --> |SI|D[API CUIT Analysis]
    H --> |No|Error
    D --> E[SFDC Validator]
    D --> F[Nosis Validatior]
    E --> g((envia mail))
    F --> g((envia mail))
```
:::note
Realmente nunca se sale del flujo original, los demás flujos se llaman dentro del flujo principal `Llegada de mail` y devuelven datos a este flujo que luego arma el email de salida. 
:::