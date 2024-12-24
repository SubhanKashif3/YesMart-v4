import { IUser } from "../models/user.model";

export const generateTokens = (user  : IUser) => {
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    return {
        accessToken,
        refreshToken
    }
}