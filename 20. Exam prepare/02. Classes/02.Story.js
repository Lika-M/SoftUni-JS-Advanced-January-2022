class Story {
    #comments = [];
    #likes = [];
    
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }
    get likes() {
        if (this.#likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if (this.#likes.length == 1) {
            return `${this.#likes[0]} likes this story!`
        } else {
            return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
        }
    }
    like(username) {
        if (this.#likes.includes(username)) {
            throw `You can't like the same story twice!`
        } else if (username == this.creator) {
            throw `You can't like your own story!`
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this.#likes.includes(username)) {
            throw Error`You can't dislike this story!`
        } else {
            let index = this.#likes.findIndex(x => x == username);
            this.#likes.splice(index, 1);
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {

        if (id == undefined || !this.#comments.find(c => c.id == id)) {
            const comment = {
                id: this.#comments.length + 1,
                username: username,
                content: content,
                replies: []
            };
            this.#comments.push(comment);
            return `${username} commented on ${this.title}`
        } else {
            let finded = this.#comments.find(c => c.id == id)
            finded.replies.push({
                id: `${id}.${finded.replies.length + 1}`,
                username: username,
                content: content
            });
            return `You replied successfully`;
        }
    }
    toString(type) {
        let sorted;
        if (type == 'asc') {
            sorted = this.#comments.sort((a, b) => a.id - b.id);
        } else if (type == 'desc') {
            sorted = this.#comments.sort((a, b) => b.id - a.id);
        } else if (type == 'username') {
            sorted = this.#comments.sort((a, b) => a.username.localeCompare(b.username));
        }

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\nComments:`;

        if (this.#comments.length !== 0) {
            sorted.forEach(c => {
                result += `\n-- ${c.id}. ${c.username}: ${c.content}`;
                if (c.replies) {
                    let sortedReplays
                    if (type == 'asc') {
                        sortedReplays = c.replies.sort((a, b) => a.id - b.id);
                    } else if (type == 'desc') {
                        sortedReplays = c.replies.sort((a, b) => b.id - a.id);
                    } else if (type == 'username') {
                        sortedReplays = c.replies.sort((a, b) => a.username.localeCompare(b.username));
                    }
                    sortedReplays.forEach(r => result += `\n--- ${r.id}. ${r.username}: ${r.content}`)
                }
            });
        }
        return result;
    }
}


let art = new Story("My Story", "Anny")
console.log(art.like("John"))
console.log(art.likes)
// console.log(art.dislike("Sally"))
console.log(art.like("Ivan"))
console.log(art.like("Steven"))
console.log(art.likes)
console.log(art.comment("Anny", "Some Content"))
console.log(art.comment("Ammy", "New Content", 1))
console.log(art.comment("Zane", "Reply", 2))
console.log(art.comment("Jessy", "Nice :)"))
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.toString('asc'));

