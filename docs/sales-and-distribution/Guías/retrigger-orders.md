---
title: Retrigger masivo de ordenes 
sidebar_position: 1
---

## Descripción
Proceso para hacer retrigger de ordenes de SAP hacia SFDC.

## Proceso Implementado

:::tip
- Utilizar la transacción **[ZMASS_UKM](/transactions/zmass_ukm)** para modificar temporalmente las clases de riesgo de clientes "D-Advance Payment".
- Los clientes con esta categoría están bloqueados para modificación de órdenes (incluyendo los territorios de sus ordenes).
- Este paso desbloquea temporalmente los clientes para permitir modificaciones a sus ordenes.
:::

### Paso 1: Actualización Masiva de Territorios
- Ejecutar la transacción **[LSMW](/transactions/lsmw)** para realizar la actualización masiva
- Completar en la pantalla de `Project selection`: 
    - Project: `ARG ORD TRIGGER`
    - Subproject: `ARG ORD TRIGGER`
    - Object: `ARG ORD TRIGGER`
- Procesar el archivo como un `.txt` con los datos de territorios a actualizar, utilizar el siguiente formato:
    ```txt
    6051495652
    6051495654
    6051495655
    ```
- Cada orden en el archivo `.txt` va a volver a sincronizarse hacia SFDC.

### Paso 2: Verificación de Resultados
- Revisar los logs de ejecución en `SM35`.
- Confirmar que las actualizaciones se aplicaron correctamente.
- Validar que los territorios se hayan actualizado según lo esperado.

## Transacciones Utilizadas

| Transacción | Propósito |
|-------------|-----------|
| **LSMW** | Actualización masiva de datos de territorios. |
| **SM35** | Revisión de logs y resultados del proceso. |