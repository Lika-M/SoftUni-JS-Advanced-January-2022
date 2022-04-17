// 100/100
class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];

    }
    addArticle(articleModel, articleName, quantity) {
        let variousTypeModel = articleModel.toLowerCase() ||
            articleModel[0].toUpperCase() + variousType.slice(1) ||
            this.possibleArticles[articleModel.toUpperCase()];

        if (!this.possibleArticles[variousTypeModel]) {
            throw Error('This article model is not included in this gallery!');
        }
        let foundArticle = this.listOfArticles.find(a => a.articleName === articleName)
        if (foundArticle) {
            foundArticle.quantity++;
        } else {
            this.listOfArticles.push({
                articleModel: articleModel.toLowerCase(),
                articleName,
                quantity
            });
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };
    inviteGuest(guestName, personality) {
        if (this.guests.find(g => g.guestName === guestName)) {
            throw Error(`${guestName} has already been invited.`);
        } else {
            let points = 0;
            if (personality === 'Vip') {
                points = 500;
            } else if (personality == 'Middle') {
                points = 250;
            } else {
                points = 50;
            }

            this.guests.push({ guestName, points, purchaseArticle: 0 })
        }
        return `You have successfully invited ${guestName}!`
    };
    buyArticle(articleModel, articleName, guestName) {
        let foundArticle = this.listOfArticles.find(n => n.articleName === articleName);
        let foundGuest = this.guests.find(g => g.guestName === guestName)

        if (!foundArticle || foundArticle.articleModel !== articleModel) {
            throw Error("This article is not found.")
        }
        if (foundArticle.quantity === 0) {
            return `The ${articleName} is not available.`
        }
        if (!foundGuest) {
            return `This guest is not invited.`
        }
        if (foundGuest.points < this.possibleArticles[articleModel]) {
            return `You need to more points to purchase the article.`
        } else {
            foundGuest.points -= this.possibleArticles[articleModel];
            foundGuest.purchaseArticle++;
            foundArticle.quantity--;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push("Articles information:");
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        }
        if (criteria == 'guest') {
            result.push("Guests information:");
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`))
        }
        return result.join('\n');
    }
}


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));

// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



