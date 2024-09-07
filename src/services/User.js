import Api from "./Api"

export const getCountUsers = async() => {
    try {
        const result = Api.get('/users-count')
        return result || null
    } catch (error) {
        console.error("Error fetching user count:", error)
        throw error
    }
}