<p align="center">
  <img src="notes/homer.gif" alt="homer" />
</p>

# Technical Test
We aim to create an application to manage the sale of pet food combos for a veterinary business.

```ts
// TODO: instructios to run the server
```

## Requirements
- Have at least two access levels: Client and User (The User entity will have a role (seller, admin, or owner of the veterinary).
- Clients can:
    - Register by creating an account (entity Client in the database).
    - Register their pets (entity Pet in the database).
    - Place orders for combos (entity Combos in the database).
    - View the history of their orders (entity Orders in the database).

- Users can:
    - View the list of received orders (entity Orders in the pre-defined database).
    - Mark received orders as "dispatched" (the Orders entity will have a property called "dispatched").
    - View the list of sellers (entity User with the role Seller in the database).
    - View the list of pets and owners (entities Pet and Owner in the pre-defined database).
    - Create other user sellers (an admin user or the owner of the veterinary with the authority to create seller users).

### The Combo
#### For cats:
- Quantity of food equal to 0.5 times their weight.
- 1 dietary supplement if the cat is older than 5 years.
- 1 extra dietary supplement if the cat is neutered.

#### For dogs:
- Quantity of food equal to 0.8 times their weight.
- 1 dietary supplement for every 3 years of age.
- 1 extra dietary supplement if the dog is neutered and older than 5 years.

