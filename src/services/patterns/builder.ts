interface UserProfileBuilder {
	withAvatar(avatar: string): UserProfileBuilder;
	withName(name: string): UserProfileBuilder;
	withLastName(lastName: string): UserProfileBuilder;
	withJobTitle(jobTitle: string): UserProfileBuilder;
	withPhone(phone: string): UserProfileBuilder;
	withWebsite(website: string): UserProfileBuilder;
	withEmail(email: string): UserProfileBuilder;
}

class UserProfile {
	public avatar = '';
	public name = '';
	public lastName = '';
	public jobTitle = '';
	public phone = '';
	public website = '';
	public email = '';
}

export class UserProfileBuiler implements UserProfileBuilder {
	private userProfile: UserProfile;

	constructor() {
		this.userProfile = new UserProfile();
	}
	reset(): void {
		this.userProfile = new UserProfile();
	}

	withAvatar(avatar: string): UserProfileBuilder {
		this.userProfile.avatar = avatar;
		return this;
	}
	withName(name: string): UserProfileBuilder {
		this.userProfile.name = name;
		return this;
	}
	withLastName(lastName: string): UserProfileBuilder {
		this.userProfile.lastName = lastName;
		return this;
	}
	withJobTitle(jobTitle: string): UserProfileBuilder {
		this.userProfile.jobTitle = jobTitle;
		return this;
	}
	withPhone(phone: string): UserProfileBuilder {
		this.userProfile.phone = phone;
		return this;
	}
	withWebsite(website: string): UserProfileBuilder {
		this.userProfile.website = website;
		return this;
	}
	withEmail(email: string): UserProfileBuilder {
		this.userProfile.email = email;
		return this;
	}

	getProfile(): UserProfile {
		const profile = this.userProfile;
		this.reset();
		return profile;
	}
}
