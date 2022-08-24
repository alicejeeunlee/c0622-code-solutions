select
  "customers"."firstName",
  "customers"."lastName",
  "films"."title" as "film"
  from "customers"
  join "rentals" using ("customerId")
  join "inventory" using ("inventoryId")
  join "films" using ("filmId")
 where "title" = 'Magic Mallrats';
