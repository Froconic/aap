  const getArtworks = (number) =>{
    let posts = []
    for (var i = 0; i < number; i++) {
      posts.push( queryContent('/art').limit(number).findOne())
    }

    return posts
  }

  export default getArtworks
