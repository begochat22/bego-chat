import User from "../../models/user.js";
class UserController {
    static async getUserById(userId) {
        try {
            const res = await User.findById(userId)
                .select("-password -__v")
                .lean()
                .exec();
            return res;
        }
        catch (error) {
            throw new Error("Error fetching user data");
        }
    }
}
export default UserController;
