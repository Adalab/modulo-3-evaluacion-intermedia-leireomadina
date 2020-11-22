#Ejercicio de evaluación intermedia con React - Módulo 3 de Adalab

## Enunciado

Este ejercicio forma parte de la evaluación intermedia del módulo 3 de Adalab. Consiste en desarrollar una página web sencilla con el framework **React**.

La web consiste en un listado de pokemon, con una tarjeta para cada uno con información relevante, como el nombre, tipos y una imagen. La información de los pokemon la obtenemos de un array de datos guardado en un fichero de tipo json que incluiremos en el estado del componente App.

## Resumen

## Jerarquía de componentes

Para realizar el ejercicio y trabajar de manera más cómoda y productiva se han creado tres componentes diferentes:

1. **App**: componente raíz del proyecto.
2. **PokeList**: componente hija de App. 
3. **Pokemon**: componente nieto de App e hija de PokeList. Se encarga de pintar la tarjeta de cada Pokemon.


## Pasos realizados

- [x] 1. Plantear en papel la estructura de componentes para la web.
- [x] 2. Crear una nueva aplicación React
- [x] 3. Pintar 1 tarjeta, recogiendo la información de las props.
- [x] 4. Pintar todas las tarjetas.
- [x] Crear dos componentes, PokeList y Pokemon, respectivamente para el listado y para la card de cada Pokemon.
- [x] 6. BONUS: ajustar la maquetación al diseño y/o implementar mejoras visuales.

## Nuevas funcionalidades

Próximamente implementaré las siguientes nuevas funcionalidades en la página: 

- [ ] Añadir un click a Pokemon que marca o desmarca el pokemon como favorito en el array del estado de App.
- [ ] Pasar este dato al componente Pokemon por props.
- [ ] Pintar Pokemon con otros estilos cuando por props nos llegue la info de que el pokemon es favorito.

