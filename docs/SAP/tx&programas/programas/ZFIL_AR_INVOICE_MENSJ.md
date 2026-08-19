---
title: ZFIL_AR_INVOICE_MENSJ
description: Mails automaticos FI.
sidebar_position: 2
---
## Función
Este programa es el encargado de generar los mails automáticos para los documentos FI. 

![ZFIL_AR_INVOICE_MENSJ](/img/zfil_ar_invoice_mensj.png)

## Mails automaticos FI
Se ejecuta a través de un job automático una vez por hora. 
Todos los documentos que no están registrados en la tabla de envíos son enviados al momento de la ejecución del job. 

Una vez enviados son registrados en la tabla para que no vuelvan a ser enviados. 

