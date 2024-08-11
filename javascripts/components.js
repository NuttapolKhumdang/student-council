async function loadComponents() {
    const components = await fetcher("/config/components.json");
    console.log(components);

    components.forEach(async e => {
        const template = await fetcher(e.path, {}, false);
        if (template) document.body.insertAdjacentHTML(e.target, template);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponents();
});