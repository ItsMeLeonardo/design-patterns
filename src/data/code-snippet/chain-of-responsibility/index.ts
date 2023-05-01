// Validator.ts

interface ValidationRule {
	validate: (value: string) => string | null;
}

class RequiredValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (!value) {
			return 'This field is required';
		}
		return null;
	}
}

class EmailValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (!value.includes('@')) {
			return 'Please enter a valid email address';
		}
		return null;
	}
}

class PasswordValidationRule implements ValidationRule {
	validate(value: string): string | null {
		if (value.length < 8) {
			return 'Password must be at least 8 characters long';
		}
		return null;
	}
}

class Validator {
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

// index.ts

const emailInput = document.createElement('input');

const passwordInput = document.createElement('input');

const submitButton = document.createElement('button');

const requiredRule = new RequiredValidationRule();
const emailRule = new EmailValidationRule();
const passwordRule = new PasswordValidationRule();

const validatorEmail = new Validator();
validatorEmail.addRule(requiredRule);
validatorEmail.addRule(emailRule);

const validatorPassword = new Validator();
validatorPassword.addRule(requiredRule);
validatorPassword.addRule(passwordRule);

submitButton.onclick = () => {
	const emailErrors = validatorEmail.validate(emailInput.value);
	const passwordErrors = validatorPassword.validate(passwordInput.value);
	const errors = [...emailErrors, ...passwordErrors];

	console.log({ errors });
};
