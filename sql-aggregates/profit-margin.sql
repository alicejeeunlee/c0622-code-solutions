WITH "cost" AS (
  SELECT "i"."filmId",
      SUM("f"."replacementCost") AS "totalCost"
  FROM "inventory" AS "i"
  JOIN "films" AS "f" USING ("filmId")
 GROUP BY "i"."filmId"
 ORDER BY "i"."filmId"
), "revenue" AS (
  SELECT "i"."filmId",
      SUM("p"."amount") AS "totalRevenue"
  FROM "inventory" AS "i"
  JOIN "rentals" USING ("inventoryId")
  JOIN "payments" AS "p" USING ("rentalId")
 GROUP BY "i"."filmId"
 ORDER BY "i"."filmId"
)
SELECT
  "films"."title",
  "films"."description",
  "films"."rating",
  "revenue"."totalRevenue" - "cost"."totalCost" AS "totalProfit"
  FROM "revenue"
  JOIN "cost" USING ("filmId")
  JOIN "films" USING ("filmId")
  ORDER BY "totalProfit" DESC
  LIMIT 5;
