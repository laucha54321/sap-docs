---
title: Documentos Contables
sidebar_position: 3
---

# Documentos Contables

## Tipos de Documentos Contables SAP

Esta tabla referencia los principales tipos de documento utilizados en el sistema SAP para procesos contables y de negocio. 

| Código | Descripción | Tipo |
|--------|-------------|------|
| **AA** | Factura de Activo | |
| **AB** | Documento contable | |
| **AF** | Dotación Amortización | |
| **BP** | Pagos | |
| **DA** | Factura Clientes FI | Factura |
| **DP** | Contabilización cuentas mayor | |
| **DZ** | Recibo Clientes | |
| **EG** | Nota de Crédito Exportación - SD | |
| **ES** | Nota de Crédito Devolución Exportación SD | |
| **EV** | Factura Exportación - SD | |
| **KA** | Documento Del Vendedor | |
| **KG** | Nota de Débito Proveedores | |
| **KH** | Nota de Crédito Proveedores | |
| **KI** | Factura Proveedor FCE | |
| **KJ** | Nota de Crédito Proveedor FCE | |
| **KK** | Nota de Débito Proveedor FCE | |
| **KP** | Actualización cuentas | |
| **KR** | Factura Proveedor | |
| **KZ** | Pago del proveedor | |
| **LQ** | Liquidación Cuenta y Orden | Factura |
| **PR** | Corrección costes | |
| **R1** | Factura Clientes SD | Factura |
| **R3** | Nota de Crédito Cliente SD | Nota de Crédito |
| **R4** | Nota de Crédito Devolución Cliente SD | Nota de Crédito |
| **R5** | Nota de Débito Clientes SD | Nota de Débito |
| **RE** | Factura Proveedor MM | |
| **RR** | Nota de Débito Clientes SD | |
| **RS** | Nota de Crédito Devolución Cliente SD | Factura |
| **RV** | Factura Clientes SD | Factura |
| **RY** | Factura Clientes SD | |
| **SA** | Contabilización cuentas mayor | |
| **SB** | Contabilización cuentas mayor | |
| **SC** | Salary Document Argentina | |
| **WA** | Material Despachado | |
| **WE** | Recepción de Material | |
| **WL** | Salida mercancía/entrega | |
| **Y0** | Contabilización cuentas mayor | |
| **Y3** | Contabilización cuentas mayor | |
| **ZP** | Registro de Pago | |

## Uso en Transacciones

### Transacciones Comunes:

| Transacción | Descripción | Módulo |
|-------------|-------------|---------|
| **FB03** | Visualizar documento contable | FI |
| **FBL1N** | Extracto de proveedores | FI |
| **FBL3N** | Extracto de cuentas generales | FI |
| **FBL5N** | Extracto de clientes | FI |


## Consideraciones Importantes

- Los tipos de documento determinan el comportamiento del documento en el sistema
- Cada tipo puede tener diferentes validaciones y campos obligatorios
- La configuración de tipos de documento se realiza en la transacción **OBA7**

:::note
Algunos tipos de documento pueden estar personalizados según la implementación específica de cada compañía.
:::

:::tip
Utilice la transacción **OBA7** para ver la configuración completa de cada tipo de documento en su sistema.
:::