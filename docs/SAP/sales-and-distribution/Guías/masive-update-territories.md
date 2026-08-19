---
title: Actualización masiva de territorios
sidebar_position: 10
---

## Descripción
Proceso para actualizar masivamente la información de territorios de las órdenes.

## Proceso Implementado

:::tip
- Utilizar la transacción **[ZMASS_UKM](/tx&programas/transactions/zmass_ukm)** para modificar temporalmente las clases de riesgo de clientes "D-Advance Payment".
- Los clientes con esta categoría están bloqueados para modificación de órdenes (incluyendo los territorios de sus ordenes).
- Este paso desbloquea temporalmente los clientes para permitir modificaciones a sus ordenes.
:::

### Paso 1: Actualización Masiva de Territorios
- Ejecutar la transacción **[LSMW](/tx&programas/transactions/lsmw)** para realizar la actualización masiva
- Completar en la pantalla de `Project selection`: 
    - Project: `ADV_ARG`
    - Subproject: `ADV_ARG`
    - Object: `ADV_ARG_CGII`
- Procesar el archivo como un `.txt` con los datos de territorios a actualizar, utilizar el siguiente formato:
    ```txt
    6051495652	E43
    6051495654	F29
    6051495655	F26
    ```
- A cada orden se le va a actualizar el territorio de ventas correspondiente.

### Paso 2: Verificación de Resultados
- Revisar los logs de ejecución en `SM35`.
- Confirmar que las actualizaciones se aplicaron correctamente.
- Validar que los territorios se hayan actualizado según lo esperado.

## Transacciones Utilizadas

| Transacción | Propósito |
|-------------|-----------|
| **LSMW** | Actualización masiva de datos de territorios. |
| **SM35** | Revisión de logs y resultados del proceso. |