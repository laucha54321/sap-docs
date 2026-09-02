---
title: Percepciones
description: Al momento de la venta. 
sidebar_position: 1
---
## Transacciones relevantes

### Reportes de Percepciones
| TX         | Descripción | 
|------------|------------------|
| [zfi_percp_arba](/SAP/tx&programas/transactions/zfi_percp_arba) | Reporte TXT Percepciones ARBA |

### Programas de Padrones
| TX         | Descripción | 
|------------|------------------|
| ZIIBB_SANTA_FE | Programa de padrones de Santa Fe. |
| ZIIBB_CABA | Programa de padrones de CABA. |
| ZIIBB_ER | Programa de padrones de Entre Ríos. |
| ZPADRONES | Programa de padrones de ARBA. |


## Cuentas contables - G/L accounts
Las cuentas contables (G/L accounts) para Percepciones son las siguientes.

|Nombre      | Número de Cuenta | 
|------------|------------------|
| CABA        | 161598           | 
| ARBA        | 161512           | 
| API         | 161599           | 
| Entre Ríos  | 161521           | 
| Salta       | 161931           |
| San Luis | 160360 |

## Tipos de documentos FI
Los tipos de documentos FI relevantes para percepciones son los siguientes:
| Tipo de documento | Significado            | Tipo de documento                                                               |
| ----------------- | ---------------------- | ------------------------------------------------------------------------------- |
| R1 | Factura Clientes SD        | Factura                                                                         |
| RV | Factura Clientes SD | Factura                                                                                |
| CX | Factura registrada de manera externa a SAP. Casos excepcionales. | Factura                                   |
| R3 | Nota de Crédito Cliente SD | Nota  de crédito                                                                |
| R4 | Nota de Crédito Devolución Cliente SD | Nota de crédito                                                     |
| RS | Nota de Crédito Devolución Cliente SD | Nota de Crédito                                                      |
| RG | N/Crédito Cliente SD | Nota de Crédito                                                                       |
| R5 | Nota de Débito Clientes SD | Nota de Débito                                                                         |
| RR | Nota de Débito Clientes SD | Nota de Débito                                                                 |
| LQ | Liquidación Cuenta y Orden  | Factura (puede ser una nota de crédito también)                                |
 