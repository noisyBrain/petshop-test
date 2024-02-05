### Prueba técnica
Se busca crear una aplicación que sirva para administrar la venta de una veterinaria que ofrece combos de alimento para gatos y perros.

##### El combo
- Para gatos:
  - Cantidad de alimento igual a 0.5 su peso.
  - 1 complemento dietario si el gato tiene **más** de 5 años.
  - 1 complemento dietario extra si el gato está **castrado**.
- Para perros:
  - Cantidad de alimento igual a 0.8 su peso.
  - 1 complemento dietario por cada 3 años de edad.
  - 1 complemento dietario extra si perro está **castrado** y tiene **más** de 5 años.


#### Se pide
1. Tener, *al menos*, dos niveles de acceso: **Cliente** y **User** (La entidad **User** tendrá un rol (*vendedor*, *admin* o *dueño* de la veterinaria).
2. Los clientes pueden:
    1. Registrarse creando una cuenta. (entidad **Cliente** en la db).
    2. Registrar a sus mascotas. (entidad **Mascota** en la db).
    3. Realizar pedidos de combos. (entidad **Combos** en la db).
    4. Ver el histórico de sus pedidos. (entidad **Pedidos** en la db).
3. Los usuarios pueden:
    1. Ver el listado de pedidos recibidos. (entidad **Pedidos** en la db previamente definido).
    2. Marcar los pedidos recibidos como "despachados". (la entidad **Pedidos** va a tener una prop que sea "despachado")
    3. Ver el listado de vendedores. (entidad ***User** de rol *Vendedor* en la db).
    4. Ver el listado de mascotas y dueños. (entidades **Mascota** y **Dueño** en la db previamente definidos).
    5. Crear otros usuarios vendedores. (un usuario *admin* o el *owner* de la veterinaria que tenga la potestad de crear usuarios vendedores).


#### UH
##### User PetShop
1. *Como* usuario no registrado
   *quiero* registrarme en la aplicación
   *para* vender productos.

2. *Como* usuario **vendedor** o **admin** del PetShop
   *quiero* poder ver el listado de pedidos recibidos
   *para* saber lo que hay que despachar.

3. **admin**
   *quiero* poder ver el listado de las mascotas del PetShop
   *para* saber si ya estaba registrada a la hora de una venta.

4. *Como* usuario **admin** del PetShop
   *quiero* poder ver el lista de vendedores
   *para* llevar un control.

5. *Como* usuario **vendedor** o **admin**
   *quiero* poder marcar los pedidos recibidos como "despachados"
   *para* saber que ese pedido ya salió.

##### Cliente
1. *Como* cliente
   *quiero* poder registrarme en el petshop
   *para* crear una cuenta.

2. *Como* cliente ya registrado del PetShop
   *quiero* poder registrar a mi mascota
   *para* facilitar la compra.

3. *Como* cliente ya registrado del PetShop
   *quiero* poder hacer un pedido de combo
   *para* mi mascota

3. *Como* cliente ya registrado del PetShop
   *quiero* poder ver el histórico de pedidos
   *para* llevar un control.
