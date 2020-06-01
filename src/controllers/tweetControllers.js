const createTweet = (req, res) => {
    let name = req.body.name.toString()
    let content = req.body.content.toString()

    console.log(name + ' ' + content)
}

  exports.createTweet = createTweet;