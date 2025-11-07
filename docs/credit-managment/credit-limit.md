---
title: Clase de riesgo
sidebar_position: 3
---
# Clases de Riesgo
Este desarrollo es una implementación custom, ticket del proyecto ADV00234. 

## Cálculo de clase de riesgo
Al cliente se le asigna una clase de riesgo automáticamente basada en su límite crediticio y la cantidad asegurada. Se puede ver la lógica en la siguiente tabla: 

| Clase de Riesgo | Criterio de Asignación | Descripción |
|-----------------|------------------------|-------------|
| **A-Low Risk** | El límite crediticio asegurado recomendado es **≥ 70%** | Cliente con alta cobertura de seguro. |
| **B-Medium Risk** | El límite crediticio asegurado recomendado es **≥ 50% y < 70%** | Cobertura moderada de seguro. |
| **C-High Risk** | El límite crediticio asegurado recomendado es **< 50%** | Baja cobertura de seguro, representa mayor riesgo crediticio. |
| **D-Advance Payment** | El límite es **Cero (0)** | Requiere pago por adelantado, sin exposición crediticia |

### Pasos para modificar la clase de riesgo

1. **Acceder a la vista de crédito del BP**
   - Navegar a la transacción `BP` (Business Partner)
   - Buscar y seleccionar el cliente correspondiente
   - Acceder a la vista de crédito `UKM000`

2. **Seleccionar el segmento de Argentina**
   - Ir a `Datos del segmento de crédito`
   - Seleccionar el segmento `ADAR` (Argentina)

3. **Configurar los límites crediticios**
   - En la pestaña **`Límite de crédito y control`**:
     - Campo `Limit`: Establecer el límite crediticio actual
   
   - En la pestaña **`Additional Data`**:
     - Campo `Recommended credit limit`: Definir la cantidad asegurada

### Cálculo Automático de la Clase de Riesgo

El sistema calcula automáticamente la clase de riesgo usando la siguiente fórmula:

**Porcentaje de Cobertura = (Limit / Recommended Credit Limit) × 100**

Dependiendo del porcentaje de cobertura se le va a asignar la clase correspondiente siguiendo la [tabla anterior](#cálculo-de-clase-de-riesgo).

---

:::note
En el caso de necesitar hacer un update masivo a la información crediticia se puede utilizar la transacción [ZMASS_UKM](/docs/transactions/zmass_ukm.md).
:::