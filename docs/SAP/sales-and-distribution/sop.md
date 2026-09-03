---
title: "Procedimientos Operativos Estándar para la creación de ordenes"
sidebar_position: 5
---

Estas son las reglas que necesitamos seguir para prevenir errores de sincronización entre SAP y SFDC: 
## Modificación de Materiales en SAP
En el caso que tengamos que cambiar un material en una orden por otro, tenemos entonces que: 
1. **Rechazar la línea del material que queremos cambiar por otro**. ![image 20260128170439](/img/Pasted image 20260128170439.png) 
2. Crear una nueva línea con el material y la cantidad apropiada. ![Pasted image 20260128170646](/img/Pasted image 20260128170646.png) 
## Rechazo de línea en SAP
**Cuando un línea es rechazada en una orden es necesario que se complete con alguna planta** la línea para que migré correctamente a SFDC, si es que no tenia una planta asignada. 

*Generalmente la planta se asigna automáticamente, pero encontramos muchas ordenes que no tienen planta.*
## Eliminación de línea
En el caso que queramos anular una línea por que existe un error, **es importante que no la eliminemos**. En esos casos rechazamos la línea y la dejamos en la orden. ![Pasted image 20260128171121](/img/Pasted image 20260128171121.png) 
*Si la orden no migro a SFDC no pasa nada, se puede eliminar y no va a haber problema, pero si migro la línea no se va a eliminar en SFDC.*

## Despachos no realizados
Si se generó un despacho pero nunca se realizo, tenemos que cerrar el despacho para que en SFDC el total de la orden conocida con el total en SAP. **Se puede cerrar como incompleto pero es importante que no quede en estado abierto.**

*Se pueden cerrar con la TX VL_COMPLETE. *

---
# Configuraciones e implementaciones
Estas son las configuraciones que realizamos, o que queremos realizar para prevenir problemas de integridad:
## Realizadas: 
### Comisiones
Las comisiones están limitadas a 30%, de esta manera prevenimos posibles errores cuando se completan las comisiones.  

*En los casos en los que en SFDC se introduzca una comisión mayor a 30% la orden va a ser cargada pero va a mostrar un error al migrar a SAP y no va a sincronizar. Queda pendiente aplicar este limite en SFDC.* 


## Analizando si se puede hacer con SAP estándar: 
#### Descuentos duplicados aplican una sola vez en el precio final 
Estamos hablando con Nakul y el equipo de CPI para ver de hacer que los descuentos se apliquen una sola vez si quedan duplicados, la idea es hacerlo a traves del estándar pero tenemos que analizar que no rompa ninguna integración con SFDC. De esta manera si hay dos líneas con condición ZK19, una sola va a ser aplicada y la otra va a quedar marcada pero no va a aplicar. 