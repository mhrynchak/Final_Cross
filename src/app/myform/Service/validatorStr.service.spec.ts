import { ValidatorStrService } from "./validatorStr.service";

describe('ValidatorStrService', () => {
    let validator: ValidatorStrService;

    beforeEach(() => {
        validator = new ValidatorStrService();
    });

    describe('validate_str', () => {
        it('повинен валідувати рядки з однаковою довжиною', () => {
        const str1 = 'I am Lord Voldemort';
        const str2 = 'tom marVoLo rIddle';

        const isValid = validator.validate_str(str1, str2);

        expect(isValid).toBe(true);
        });

        it('повинен валідувати рядки з різною довжиною', () => {
        const str1 = 'Hello';
        const str2 = 'World!';

        const isValid = validator.validate_str(str1, str2);

        expect(isValid).toBe(false);
        });
    });

    describe('validate_anagram', () => {
        it('повинен валідувати анаграми', () => {
        validator.formattedStr1 = 'anagram';
        validator.formattedStr2 = 'margana';

        const isAnagram = validator.validate_anagram();

        expect(isAnagram).toBe(true);
        });

        it('повинен валідувати не анаграми', () => {
        validator.formattedStr1 = 'hello';
        validator.formattedStr2 = 'world';

        const isAnagram = validator.validate_anagram();

        expect(isAnagram).toBe(false);
        });
    });
});
