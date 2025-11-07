---
title: Actualización masiva de territorios
sidebar_position: 10
---

## Descripción
Proceso para actualizar masivamente la información de territorios de las órdenes mediante la combinación de herramientas de gestión crediticia y migración de datos.

## Proceso Implementado

:::tip
- Utilizar la transacción **[ZMASS_UKM](/transactions/zmass_ukm)** para modificar temporalmente las clases de riesgo de clientes "D-Advance Payment".
- Los clientes con esta categoría están bloqueados para modificación de órdenes (incluyendo los territorios de sus ordenes).
- Este paso desbloquea temporalmente los clientes para permitir modificaciones a sus ordenes.
:::

### Paso 1: Actualización Masiva de Territorios
- Ejecutar la transacción **[LSMW](/transactions/lsmw)** para realizar la actualización masiva
- Completar en la pantalla de `Project selection`: 
    - Project: `ADV_ARG`
    - Subproject: `ADV_ARG`
    - Object: `ADV_ARG_CGII`
- Procesar el archivo con los datos de territorios a actualizar.

### Paso 2: Verificación de Resultados
- Revisar los logs de ejecución en **[SM35](/transactions/sm35)**.
- Confirmar que las actualizaciones se aplicaron correctamente.
- Validar que los territorios se hayan actualizado según lo esperado.

### Paso 3: Restauración de Clases de Riesgo
- Utilizar nuevamente **ZMASS_UKM** para restablecer las clases de riesgo originales.
- Esto vuelve a bloquear los territorios según las políticas de crédito.
- Verificar que los clientes vuelvan a su estado de riesgo original.

## Transacciones Utilizadas

| Transacción | Propósito |
|-------------|-----------|
| **LSMW** | Actualización masiva de datos de territorios |
| **SM35** | Revisión de logs y resultados del proceso |
| **ZMASS_UKM** | Gestión temporal de clases de riesgo |


---

:::tip
**Recomendación:** Realizar una prueba con un subconjunto pequeño de clientes antes de la ejecución masiva.
:::