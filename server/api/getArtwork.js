async function getArtworks(number)  {
  const allPosts = await queryContent('/art').find()
  const posts = []
  for(var i = 0; i < number; i++)
    posts.push(allPosts[i])

  return posts
}

export default getArtworks
// const getArtworks = (number) =>{
//     let posts = queryContent('/art').limit(number).find()
//     let temp = []
//     // for (var i = 0; i < number; i++) {
//     //   posts.push( queryContent('/art').limit(number).find())
//     // for (var i = 0; i < number; i++) {
//     //   temp.push( queryContent('/art').limit(number).find())
//     //   posts.push(temp[i].value)
//     }

//     return posts