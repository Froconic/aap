export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const allArtworks = await $content("artworks").fetch();
  
  const totalCategory = allArtworks.length;
  
  const perPage = totalCategory;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalCategory / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = totalCategory % perPage;

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    if (currentPage === lastPage) {
      return totalCategory - lastPageCount;
    }
    return (currentPage - 1) * perPage;
  };

  const paginatedArtworks = await $content("artworks")
  .where({'category': params.category})
    .only(["title", "description", "img","cover", "slug", "createdAt, updatedAt",'category'])
    .sortBy("createdAt", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArtworks.length) {
    return error({ statusCode: 404, message: "No art found!" });
  }

  return {
    allArtworks,
    paginatedArtworks,
  };

};