export const updateObject = (state, updatedObject) => {
    return ({
        state,
        ...updatedObject
    })
}

//export const BACKEND_URL = 'http://127.0.0.1:8000/'
//export const BACKEND_URL = 'https://bluemarket.pythonanywhere.com/'
export const BACKEND_URL = 'https://powerful-woodland-50409.herokuapp.com/'