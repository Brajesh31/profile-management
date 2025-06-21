const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000"; // Default to localhost if env variable is not found

const mockApi = {
  postProfile: async (data: any) => {
    try {
      // Replace this with a real API call in production
      const response = await fetch(`${BASE_URL}/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to save profile");
      }

      return await response.json();
    } catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(`Error: ${error.message}`);
  } else {
    throw new Error("An unknown error occurred");
  }
}
  },

  getProfile: async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile`);
      if (!response.ok) {
        throw new Error("Profile not found");
      }
      return await response.json();
    } catch (error: unknown) {
  if (error instanceof Error) {
    throw new Error(`Error: ${error.message}`);
  } else {
    throw new Error("An unknown error occurred");
  }
}
  },
};

export default mockApi;
