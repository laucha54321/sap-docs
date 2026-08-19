---
title: Agregar comentarios a los formularios de facturas
sidebar_position: 2
---
## Descripción
Agregar comentarios en los formularios de facturación al momento de impresión de la factura. Hoy en día esto solo funciona para la TX de formularios de exportación `ZARSD02FE`. 

## Proceso
### 1. Abrir el documento de facturación en la TX `VF02`.
### 2. Ir a los datos de cabecera del documento a la seccion de textos.
![VF02](/img/agregar_comentarios_formulario_expo1.png)
Buscar la pestaña textos de cabecera, y en esa pestaña seleccionar el texto de cabecera `Observaciones`( `RemarksAr` en Ingles).
### 3. Agregar o modificar un comentario.
Para agregar o modificar un comentario se hace doble click en `Observaciones` y se escribe en la sección que esta a la derecha. Es importante seleccionar el idioma correcto para el texto en el menu dropdown abajo del cuadro de texto. 

![VF02](/img/agregar_comentarios_formulario_expo2.png)


:::note
Se pueden guardar múltiples comentarios. Y cada uno puede tener un idioma distinto. Al momento de impresión se utilizara el comentario del idioma en el que esta siendo impreso el formulario.
:::

## Transacciones Utilizadas

| Transacción | Propósito |
|-------------|-----------|
| **ZARSD02FE** | Impresión de facturas de Exportación. |
| **VF02** | Modificación de factura SD. |