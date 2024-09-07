import Api from "./Api";

export const fetchTransactions = async () => {
    try {
        const response = await Api.get("/transactions");
        return response.data || [];
    } catch (error) {
        console.error("Error fetching transactions:", error);
        throw error;
    }
}

export const createTransaction = async (data) => {
    try {
        const response = await Api.post("/transactions", data);
        return response;
    } catch (error) {
        console.error("Error creating transaction:", error);
        throw error;
    }
}

export const checkStatusTransaction = async (user_id, course_id) => {
    try {
        console.log("user_id", user_id);
        console.log("course_id", course_id);
        const response = await Api.get(`/transactions/check-status?user_id=${user_id}&course_id=${course_id}`);
        return response.data || [];
    } catch (error) {
        console.error("Error checking transaction status:", error);
        throw error;
    }
}