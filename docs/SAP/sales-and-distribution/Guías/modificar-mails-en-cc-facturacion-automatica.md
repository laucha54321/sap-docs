---
title: Modificar mails en CC de Facturación Automática o de Remitos automáticos
sidebar_position: 2
---

## Descripción
<!-- Modificar, agregar o quitar emails del programa de envió automático de mail de facturación.  -->
## Facturación
Este email sale del mensaje automático ZZFA para los documentos SD y de un job automático diario para los documentos FI.

Para facturacion la variable que hay que modificar es la ZSD_FC_MAIL_ADIC.

## Remitos
En el caso de remito el email es enviado al momento en el que se realiza la primera impresión del formulario de remito (TX ZARSD03).

En el caso de remito la variable que hay que modificar es ZSD_REM_MAIL_ADIC.

## Pasos
### 1. Ingresar en la TX `STVARV` y buscar la variable correspondiente al proceso.\
### 2. Seleccionar el modo edición
![tvarvc1](/img/tvarvc1.png)
### 3. Seleccionar la opción `individual mantainace`.
Esto nos llevara a otra pantalla:
![tvarvc1](/img/tvarvc2.png)
### 4. Entrar en el menu de modificación de la variable.
En la nueva pantalla hay que chequear en la variable este el nombre correcto `ZSD_FC_MAIL_ADIC` o `ZSD_REM_MAIL_ADIC`. Y ahi seleccionamos en Type la opción que dice "Select Option". Y le hacemos click al botón de lápiz. 
![tvarvc1](/img/tvarvc3.png)
Esto nos va a abrir la siguiente pestaña. Le hacemos click al botón de selección múltiple.
![tvarvc1](/img/tvarvc4.png)
### 6. Modificar la variable
Se nos va a abrir otra nueva pestaña con la lista de mails que se ponen en CC en el envió automático hoy en dia. Podemos en esta lista agregar, sacar o modificar los mails. Una vez hecha la modificación guardamos y desde ese momento en adelante la modificación va a tener impacto. 
![tvarvc1](/img/tvarvc5.png)


## Transacciones Utilizadas

| Transacción | Propósito |
|-------------|-----------|
| **STVARV** | Display de tabla TVARVC. |