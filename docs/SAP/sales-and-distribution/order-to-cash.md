---
title: Orden a cobro (order to cash)
sidebar_position: 5
---

El proceso mas común de ventas simplificado sigue el siguiente flujo.

```mermaid
    flowchart TD
        subgraph Créditos ["👮🏻‍♂️🚨 Créditos"]
            B1[Aprobación de delivery<br>TX VKM4]
        end
        subgraph Logística ["🚚 Logística"]
            B[Creación de Delivery<br>TX VLO1N]
            C[Despachar delivery<br>TX VLO2N]
        end
        subgraph Ventas ["💰 Ventas"]
            A[Creación de Orden<br>TX VA01]
            D[Creación de Factura SD<br>TX VF01]
            E[Envió a ARCA<br>TX J1AMONITOR<br>&<br>Creación de doc. FI automática<br>TX FB03]
        end


        A --> B
        B --> B1
        B1 --> C
        C --> D
        D --> E
```

Sin embargo hay algunas excepciones son: 
- [Anticipos](/SAP/sales-and-distribution/Procesos/anticipo)
- [Servicios](/SAP/sales-and-distribution/Procesos/servicio)
- [Consignaciones](/SAP/sales-and-distribution/Procesos/consignacion)