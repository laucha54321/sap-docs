---
title: Integridad
description: Integridad de ordenes y facturas entre sistema SFDC and SAP
---

## Intro
Los primeros esfuerzos en sincronizar ambos sistemas estaban relacionados a sincronizar ordenes. Los temas de ordenes ya se cerraron y hoy en dia el enfoque paso exclusivamente a facturas. 

## Ordenes
Hay ordenes que no se lograron sincronizar por que para sincronizarlas implicaría implementar una lógica en SFDC que va en contra de la lógica del negocio (como descuentos duplicados, o porcentajes de comisiones incorrectos),  entre ambos sistemas y se decidieron dejar sin modificar: 
| Número de orden | Reason |
|---|---|
| 6051606557 | Wrong commission, will not consider when comparing |
| 7065606542 | Wrong commission, will not consider when comparing |
| 7069178648 | Price condition(zk21) appears twice, order already invoiced. |
| 6051606638 | Wrong commission, will not consider when comparing |
| 7069181961 | Price conditions appears twice, order already invoiced. |
