// Configuration object containing endpoints and api keys
const fetchConfig = {
    omdbAPI: {
        baseURL: "http://www.omdbapi.com/?",
        apiKey: "apikey=c4961d1f"
    },
    commentsAPI: {
        baseURL: "https://striveschool-api.herokuapp.com/api/comments/",
        authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw",
        contentType: "application/json"
    }
}


// Function that crafts the url for Film fetching
const fetchFilms = (queryUrl) => {
    const omdbConf = fetchConfig.omdbAPI
    const fetchUrl = omdbConf.baseURL + omdbConf.apiKey
    const finalUrl = fetchUrl + queryUrl
    return [finalUrl]
}


// Function that crafts an object containing the endpoint url and the option object
const fetchComments = (filmId, method='GET', body=null) => {
    const commConf = fetchConfig.commentsAPI
    const finalUrl = commConf.baseURL + filmId

    const options = {
        method: method,
        headers: {
            "Content-type": commConf.contentType,
            "Authorization": "Bearer " + commConf.authToken
        },
        body: body ? JSON.stringify(body) : null
    }
    return [finalUrl, options]
}


// The main fetch function that accepts the endpoint and options, and returns the result object
const fetchData = async (fetchContents) => {
    let result = {error: false, data: []}
    try {
        const response = await fetch(...fetchContents)
        if (response.ok) {
          const data = await response.json()
          result.data = data
        } else {
          result.error = true
        }
    } catch (error) {
        result.error = true
    }
    return result
}


// function to get films
export const getFilms = async (searchQuery, type="", page=1) => {
    type = type === 'home' ? '' : type 
    const queryUrl = `&s=${searchQuery}` + (type ? `&type=${type}` : '') + `&page=${page}`
    const result = await fetchData(fetchFilms(queryUrl))
    return result
}


// function to get comments
export const getComments = async (filmId) => {
    const result = await fetchData(fetchComments(filmId))
    return result
}


// function to delete a comment
export const deleteComment = async (commentId) => {
    const result = await fetchData(fetchComments(commentId, "DELETE"))
    return result
}

// function to post a comment
export const postComment = async (comment) => {
    const result = await fetchData(fetchComments("", "POST", comment))
    return result
}