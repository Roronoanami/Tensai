// const API_URL = "http://localhost:8081/api/comments";
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/comments`;

const getToken = () => localStorage.getItem("token");

// =====================
// Get Comments
// =====================
export async function getComments(activityId) {
  const res = await fetch(`${API_URL}/${activityId}`);

  if (!res.ok) {
    throw new Error("Failed to fetch comments");
  }

  return res.json();
}

// =====================
// Comment Count
// =====================
export async function getCommentCount(activityId) {
  const res = await fetch(`${API_URL}/${activityId}/count`);

  if (!res.ok) {
    throw new Error("Failed to fetch comment count");
  }

  const count = await res.json();

  return { count };
}

// =====================
// Add Comment
// =====================
export async function addComment(activityId, content) {
  const token = getToken();

  const res = await fetch(`${API_URL}/${activityId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content,
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to add comment");
  }

  return res.json();
}

// =====================
// Delete Comment
// =====================
export async function deleteComment(commentId) {
  const token = getToken();

  const res = await fetch(`${API_URL}/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to delete comment");
  }

  return res.text();
}