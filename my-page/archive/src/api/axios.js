import axios from "axios";

export function get_apis() {
    return axios.get("http://localhost:9090/coin/data/list", {
        auth: {
            username: 'user',
            password: '1123123wae!!'
        }
    })
        .then(response => {})
        .catch(err => {})
        .finally(() => {})
}

// async걸리면 어차피 event loop돌면서 해당 function task는 call stack에 쌓임 js상에서는 (python이랑 겉보기에 비슷하지만, 내부적으로는 좀 다름)
export async function get_coins() {
    try { // http://localhost:9090
        return await axios.get("http://localhost:9090/coin/data/list", {
        auth: {
            username: 'user',
            password: '468715ca-cfbc-4ee7-a4c3-9f7903897c1f'
        }
    });

    } catch (err) {

    } finally {

    }
}

export async function get_coins_data(marketNm) {
    try {
        const res = await axios.get("http://localhost:9090/coin/data/json/day", {
            auth: {
                username: 'user',
                password: '468715ca-cfbc-4ee7-a4c3-9f7903897c1f'
            },
            params: { market: marketNm }
        });

        return res.data;   // ← 응답 데이터만 반환하는 것이 일반적

    } catch (error) {
        console.error("API Error:", error);
        throw error;      // ← 호출한 쪽에서 처리할 수 있도록 던져줌
    }
}
