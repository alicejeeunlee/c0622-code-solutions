SELECT "countries"."name" AS "country",
      COUNT("cities".*) AS "numOfCities"
  FROM "countries"
  JOIN "cities" USING ("countryId")
 GROUP BY "country";
