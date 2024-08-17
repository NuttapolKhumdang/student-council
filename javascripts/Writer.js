function parseContent(text) {
    let content = [], v = {};
    text.split("\n").forEach(e => {
        let r = {};
        if (e) {
            if (e.startsWith('[ul]') || e.startsWith('[ol]')) {
                v["list"] = true;
                v["list-type"] = e.startsWith('[ul]') ? 'ul' : 'ol';
                v["list-items"] = [];
            }

            else if (e.startsWith('[/ul]') || e.startsWith('[/ol]')) {
                content.push({
                    type: v["list-type"],
                    items: v["list-items"]
                });

                v["list"] = false;
                v["list-type"] = null
                v["list-items"] = [];
            }

            else if (v?.list) {
                v["list-items"].push(e);
            }

            else if (!v?.list) {
                if (e.startsWith('[h]')) r = {
                    type: "heading",
                    text: e.split("[h]")[0] ? e.split("[h]")[0].trim() : e.split("[h]")[1].trim()
                };
                else if (e.startsWith('[img]')) r = {
                    type: "image",
                    src: e.split("(")[1].split(")")[0],
                    alt: e.split("(")[2].split(")")[0],
                }
                else if (e.startsWith("[link]")) r = {
                    type: "link",
                    href: e.split("(")[1].split(")")[0],
                    label: e.split("(")[2].split(")")[0],
                }
                else r = { text: e };

                content.push(r);
            }
        }
    });

    return content;
}