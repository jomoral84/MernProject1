import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existUser.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json({ message: "Password Incorrecto!" });
    }

    const token = jwt.sign(
      { email: existUser.email, id: existUser._id },
      secret,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existUser, token });
  } catch (error) {
    res.status(500).json({ message: "Hubo un problema" });
  }
};

export const signup = async (req, res) => {
  const { firstName, email, password } = req.body;

  try {
    const existUser = await User.findOne({ email });

    if (existUser)
      return res.status(400).json({ message: "El usuario ya existe" });

    // if (password !== confirmPassword)
    //   return res.status(400).json({ message: "Los passwords no coinciden" });

    const hashedPassword = await bcrypt.hash(password, 12); // Encripta el password ingresado

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}`
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).json({ message: "Hubo un problema" });
    console.log(error);
  }
};
