---
title: Orden a cobro (order to cash)
sidebar_position: 5
---

El proceso mas común de ventas simplificado sigue el siguiente flujo.

```mermaid
    flowchart LR
        A[Order Creation<br>TX VA03] --> B[Credit Approval<br>TX VKM4]
        B --> C[Delivery Creation and Picking<br>TX VLO3N]
        C --> D[Billing Doc Creation<br>TX VF03]
        D --> E[Post to ARCA<br>TX J1AMONITOR]
        E --> F[Accounting Doc Creation<br>TX FB03]
```


Sin embargo hay algunas excepciones son: 
- [Anticipos](/sales-and-distribution/Procesos/anticipo)
- [Servicios](/sales-and-distribution/Procesos/servicio)
- [Consignaciones](/sales-and-distribution/Procesos/consignacion)