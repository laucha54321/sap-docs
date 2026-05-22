---
title: "Direcciones de envió (ship-to)"
sidebar_position: 4
---
 
Las direcciones de envió de cada BP se asocian a través de Partner Functions. 

Tenemos BPs que son clientes, estos tienen asociados otros números de BP que son sus direcciones de envió. 

Cada BP que es una dirección de envió tiene identidad propia y no tiene relación al BP original, es tan solo una copia. 

Esto implica que un cliente podría tener cualquier BP como Ship-to partner function. 

## Porque es asi? 
Si bien la situación ideal seria tener un solo BP con múltiples direcciones y elegir la dirección de ese BP, esto tiene como problema que un BP no puede en SAP tener múltiples maneras distintas de aplicarle impuestos. 

Por esto para poder calcular impuestos en base a las direcciones de envió es necesario que cada dirección de envió sea su propio BP, de esta forma se puede tener un régimen de impuestos por cada dirección de envió. 

Es necesario poder determinar impuestos en base a la dirección de envió para algunas jurisdicciones argentinas.
