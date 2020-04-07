export function deletePost(id) {
    return {
        type: "DELETE_POST",
        id
    };
};