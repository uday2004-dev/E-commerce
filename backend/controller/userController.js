
    export const getCurrentUser = async (req, res) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: userId missing" });
    }

    const user = await User
      .findById(req.userId)
      .select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ VERY IMPORTANT
    return res.status(200).json({
      success: true,
      user
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "getCurrentUser error" });
  }
    }