import axios from "axios";

function get_apis() {
    return axios.get("")
        .then(response => {})
        .catch(err => {})
        .finally(() => {})
}

// async걸리면 어차피 event loop돌면서 해당 function task는 call stack에 쌓임 js상에서는 (python이랑 겉보기에 비슷하지만, 내부적으로는 좀 다름)
async function get_apis_await() {
    try {
        return await axios.get("");

    } catch (err) {

    } finally {

    }
}