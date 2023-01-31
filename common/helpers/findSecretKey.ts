const findSecretKey = (): string => {
    if (!process.env.SECRET_KEY) {
		console.warn(
			'Missing environment variable: "SECRET_KEY". Default value used'
		);
	}
	return process.env.SECRET_KEY || 'Default';
}

export default findSecretKey;