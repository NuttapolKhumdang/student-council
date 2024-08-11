function redirect(v) {
    return window.location.href = v;
}

function getLocalStorage(k, json = false) {
    return json
        ? JSON.parse(window.localStorage.getItem(k))
        : window.localStorage.getItem(k);
}

function setLocalStorage(k, v, json = false) {
    return json
        ? window.localStorage.setItem(k, JSON.stringify(v))
        : window.localStorage.setItem(k, v);
}

async function fetcher(url, options = {}, json = true) {
    console.log("fetcher", url, options);

    try {
        const res = await fetch(url, options);
        if (json) return await res.json();
        else return await res.text();
    } catch (e) {
        console.error(e);
        return null;
    }
}

const urlParams = new URLSearchParams(window.location.search);
function getQuery(k) {
    return urlParams.get(k);
}

const MONTH = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];

function formatDate(dateObject) {
    return `${dateObject.getDate()} ${MONTH[dateObject.getMonth()]} ${dateObject.getFullYear() + 543}`;
}
