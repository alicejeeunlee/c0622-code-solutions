SELECT "genres"."name" AS "genre",
      COUNT("films".*) AS "numOfFilms"
  FROM "genres"
  JOIN "filmGenre" USING ("genreId")
  JOIN "films" USING ("filmId")
  JOIN "castMembers" USING ("filmId")
  JOIN "actors" USING ("actorId")
 WHERE "firstName" = 'Lisa' AND "lastName" = 'Monroe'
 GROUP BY "genre";
