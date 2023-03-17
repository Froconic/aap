export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);

  const perPage = 6;

  const allCategory = await $content("articles").fetch();

  const totalCategory = allCategory.length;

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

  const paginatedArticles = await $content("articles")
  .where({'category': params.category})
    .only(["title", "description", "img","cover", "slug", "createdAt", "updatedAt", "author", "icon", 'category'])
    .sortBy("createdAt", "desc")
    .limit(perPage)
    .skip(skipNumber())
    .fetch();

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: "No articles found!" });
  }

  return {
    allCategory,
    paginatedArticles,
  };

};