```mermaid
graph LR
A((home))--->B{registrado? }
B--->|si|C[login]-->E[Producto]
B--->|no|D[registro]-->E[Producto]
E[Producto]-->F[Carrito]-->G((salida))
```
