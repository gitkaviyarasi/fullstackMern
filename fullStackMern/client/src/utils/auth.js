import { jwtDecode } from 'jwt-decode';

class AuthService {
    getProfile() {
        // Decode the JSON Web Token (JWT) using the jwtDecode function, specifying the expected payload type as UserData.
        // The getToken() method is called to retrieve the JWT, which is then passed to jwtDecode to extract and return its payload.
        return jwtDecode < UserData > (this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            // Attempt to decode the provided token using jwtDecode
            const decoded = jwtDecode(token);

            // Check if the decoded token has an 'exp' (expiration) property and if it is less than the current time in seconds.
            if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
                // If the token is expired, return true indicating that it is expired.
                return true;
            }
        } catch (err) {
            // If decoding fails (e.g., due to an invalid token format), catch the error and return false.
            return false;
        }
    }

    getToken() {
        const loggedUser = localStorage.getItem('id_token') || '';
        return loggedUser;
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/login');
    }
}

export default new AuthService();