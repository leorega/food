export const validate = (input) => {
    const errors = {};
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    //NAME
    if (!input.name) errors.name = 'You must add a name';
    if (input.name.length > 50) errors.name = 'The name is too long';
    if (nums.some(num => input.name.includes(num))) errors.name = 'The name must not include numbers';
    //IMAGE
    if (!input.image) errors.image = 'You must add an image';
    //HEALTH SCORE
    if(input.healthScore > 100 || input.healthScore < 0) errors.healthScore = 'Value must be between 0 and 100';
    return errors;
}
