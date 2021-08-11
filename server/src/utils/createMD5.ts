import * as crypto from "crypto"
import * as bcrypt from "bcrypt"

export const generateMD5 = (value: string): string => {
	try {
		return crypto
			.createHash("md5")
			.update(value + process.env.PRIVATE_KEY)
			.digest("hex")
	} catch (error) {
		return error
	}
}

export const generatePass = async (value: string): Promise<string> => {
	const pass: string = value + process.env.PRIVATE_KEY
	return await bcrypt.hash(pass, 10)
}
