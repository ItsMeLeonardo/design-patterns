interface ValidationRule {
	validate: (value: string) => string | null;
}

export class RequiredValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (!value) {
			return 'This field is required';
		}
		return null;
	}
}

export class EmailValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (!value.includes('@')) {
			return 'Please enter a valid email address';
		}
		return null;
	}
}

export class PasswordValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (value.length < 8) {
			return 'Password must be at least 8 characters long';
		}
		return null;
	}
}

export class Validator {
	private rules: ValidationRule[] = [];

	addRule(rule: ValidationRule): void {
		this.rules.push(rule);
	}

	validate(value: string): string[] {
		const errors: string[] = [];
		this.rules.forEach((rule) => {
			const error = rule.validate(value);
			if (error) {
				errors.push(error);
			}
		});
		return errors;
	}
}

export const requiredRule = new RequiredValidationRule();
export const emailRule = new EmailValidationRule();
export const passwordRule = new PasswordValidationRule();
