const leadValidations = {
    name: {
        required: true,
        minLength: 2,
        maxLength: 50,
        notEmpty:true
        },
        email: {
            required: true,
            email: true
            },
}