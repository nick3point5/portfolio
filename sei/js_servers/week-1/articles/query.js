require('./db')
const Article = require('./article.js');

// Article.create({
// 	title: 'Awe Title',
// 	author: 'Jon Doe',
// }, (err, createdArticle) => {
// 	if(err) { //if there's an error, log it
// 		console.log(err);
// 	} else { //else log the created article
// 		console.log(createdArticle);
// 	}
// });

// Article.find(
// 	{},
// 	(err, allArticles) => {
// 		console.log(allArticles); // an array of all articles
// 	}
// );

// Article.find(
// 	{ author: 'John Doe' },
// 	(err, articles) => {
// 		console.log(articles); // an array of articles where author = John Doe
//     }
//     process.exit()
// );

// Article.findByIdAndUpdate(
//     "5ff8d843bf8aaa9360d714e7",
//     {
//         title: "article three",
//         author: "ssssssnake"
//     },
//     {new: true},
// 	(err, articles) => {
//         console.log(articles); // an array of articles where author = John Doe

//        process.exit()
//     }

// )

Article.updateOne(
    {author: "ssssssnake"},
    {
        title: "article three",
        // author: "ssssssnake"
    },
    {new: true},
	(err, articles) => {
        console.log(articles); // an array of articles where author = John Doe

       process.exit()
    }

)