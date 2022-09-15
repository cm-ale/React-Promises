let is_ok = true

let ProducFetch = (time, array) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(array)
            } else {
                reject("error reading data")
            }
        }, time)
    })
}


export default ProducFetch;