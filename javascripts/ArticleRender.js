class ArticleTemplate {
    static heading(text) {
        return `<h1 class="text-2xl border-b-2 border-violet-900 sm:w-max mt-8 scroll-m-16 break-words" id="${String(text).replaceAll(" ", "-")}">${text}</h1>`;
    }

    static text(text) {
        return `<p class="text-xl">${text}</p>`;
    }

    static li(items) {
        return items.map((e) => `<li class="list-inside">${e}</li>`);
    }

    static ul(items = []) {
        let template = '<ul class="list-disc indent-4 text-xl">';
        ArticleTemplate.li(items).forEach((e) => (template += e));
        template += "</ul>";
        return template;
    }

    static ol(items = []) {
        let template = '<ol class="list-decimal indent-4 text-xl">';
        ArticleTemplate.li(items).forEach((e) => (template += e));
        template += "</ol>";
        return template;
    }

    static image(src, alt) {
        return /*html*/`<img src="${src}" alt="${alt}" class="object-contain w-full">`;
    }
}


async function RenderArticle(
    content_path,
    elements = {
        banner: Object,
        publicDate: Object,
        title: Object,
        content: Object,
    },
) {
    const article = await fetcher(content_path, {}, true);
    if (!article) return redirect('/404.html');

    elements.banner.src = article.banner;
    elements.publicDate.innerHTML = formatDate(new Date(article.publicAt));
    elements.title.innerHTML = article.title;
    document.title = article.title + " | สภานักเรียนโรงเรียนพังเคนพิทยา";


    article.content
        .map((e) => {
            if (e?.type == "heading") return ArticleTemplate.heading(e.text);
            else if (e?.type == "image") return ArticleTemplate.image(e.src, e?.alt);
            else if (e?.type == "ul") return ArticleTemplate.ul(e.items);
            else if (e?.type == "ol") return ArticleTemplate.ol(e.items);
            else return ArticleTemplate.text(e.text);
        })
        .forEach((e) => elements.content.insertAdjacentHTML("beforeend", e));
}
