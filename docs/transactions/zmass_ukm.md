---
title: ZMASS_UKM
sidebar_position: 2
---
## Función 
Actualización masiva de información crediticia utilizando un archivo de Excel. Puede ser utilizada para cambiar la [clase de riesgo](/credit-managment/credit-limit).

## Pasos para realizar el cambio masivo

### 1. Acceso a la transacción
- Ingresar a la transacción `ZMASS_UKM` en SAP.

### 2. Selección del tipo de actualización
- En la pestaña `Select Radio Button`, seleccionar la opción:
  - **`Update credit segment data`** (Actualizar datos del segmento de crédito).

### 3. Descarga del template
- Hacer clic en el botón **`Download template`** en la barra superior.
- El sistema descargará un archivo Excel con el formato requerido.

:::caution Formato del archivo
El template utiliza un formato de Excel antiguo (.xls) por lo que puede mostrar advertencias al abrirlo. Es seguro ignorar estas advertencias y proceder a editar el archivo.
:::

### 5. Completar la información en el template

#### Campos Obligatorios:
| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **S.No** | Número secuencial (1, 2, 3, ...) | `1`, `2`, `3` |
| **Business Partner** | Número de BP del cliente | `12345`, `67890` |
| **Credit Segment** | Segmento crediticio (Argentina: `ADAR`) | `ADAR` |

#### Campos Opcionales:
| Campo | Descripción |
|-------|-------------|
| **Credit Limit** | Límite de crédito actual |
| **Recommended Credit Limit** | Límite de crédito recomendado |
| **Total Credit Limit** | Límite de crédito total |

### 6. Cargar el archivo completado
- Regresar a la transacción `ZMASS_UKM`.
- Seleccionar la ruta del archivo completado usando el botón de selección de archivo en la pestaña `Enter Path`.
- Hacer clic en **`Execute`** para procesar los cambios.

### 7. Verificación de resultados
- El sistema mostrará un log con los resultados de la actualización.
- Revisar que no haya errores en el procesamiento.

---

:::tip
**Recomendación:** Después de ejecutar la actualización masiva, verificar que los cambios se hayan aplicado correctamente revisando algunos clientes en la transacción `BP` y confirmando que la [clase de riesgo](/credit-managment/credit-limit) se haya actualizado según lo esperado.
:::