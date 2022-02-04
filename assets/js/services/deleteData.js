
const deleteData = async (url) => {
    let res = await fetch(url, {
        method: 'DELETE',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        }
        })
    return await res.json;
}
export {deleteData}

//функиця асинхронная