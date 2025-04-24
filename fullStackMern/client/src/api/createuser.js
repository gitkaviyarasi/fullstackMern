// Used for creating a new user account
// import CreateAccount from "../interfaces/CreateAccount";

const createUser = async (body) => {
    try {
        const response = await fetch("/auth/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = response.json();

        if (!response.ok) {
            throw new Error("invalid API response while creating account, check network tab!");
        }

        return data;
    } catch (err) {
        console.log("Error from user Creation: ", err);
        return Promise.reject("Could not create User");
    }
};

export { createUser };
