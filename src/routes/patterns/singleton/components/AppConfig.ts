export class AppConfig {
	private static instance: AppConfig;

	private constructor() {
		console.log('Config instance created');
	}

	static getInstance(): AppConfig {
		if (!AppConfig.instance) {
			AppConfig.instance = new AppConfig();
		}
		return AppConfig.instance;
	}

	get appTheme(): string {
		return 'light';
	}
	set appTheme(appTheme: string) {
		this.appTheme = appTheme;
	}
}

export default AppConfig;
