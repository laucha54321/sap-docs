
:::caution
Este proceso involucra la lectura de Ordenes, Deliveries y Facturas. Por eso es importante que este proceso se realice cuando no haya nadie operando sobre el BP o los BPs a los que se les va a re calcular la exposición. 
:::

1. Ejecutar la TX `UKM_COMMITMENTS` para **ADAR** marcando "Delete Line Items".
![UKM_COMMITMENTS](/img/1a1cc394-1266-46c2-a5ef-b20577178be4.png)

2. Entrar en la TX `SA38`.


3. Correr el programa `UKM_COMMITMENT_REBUILD`.
![SA38](/img/7b632779-00b0-40c6-a094-402d01283216.png)

4. Ejecutar el programa para el segmento de credito **ADAR**. 
![UKM_COMMITMENT_REBUILD](/img/UKM_COMMITMENT_REBUILD.png)
    :::note
    Tiene una restricción de 2000 BPs, hay que correrlo varias veces segmentando los BPs en el caso en que necesitemos actualizar mas de 2000. 
    :::

5. Revisar el resultado. 
![Resultado_Esperado](/img/Resultado_esperado.png)
    Resultado esperado: todo en verde

6. Volver a ejecutar TX `UKM_COMMITMENTS` para **ADAR** (Paso 1), pero **sin marcar "Delete Line Items"**.

Una vez ejecutados todos los pasos anteriores el sistema va a haber calculado nuevamente la exposición crediticia de todos los clientes seleccionados. 