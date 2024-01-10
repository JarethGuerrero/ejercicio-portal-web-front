import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const updateFormState = (newFormState) => {
        setFormState({
            ...formState,
            ...newFormState
        });

    };

    //Validacion de email
    const validateEmail = (value) => {
        const validate_email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return validate_email.test(value);
    };

    // Validacion de fecha
    const isValidDate = (dateString) => {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regEx)) return false;

        const date = new Date(dateString);
        if (isNaN(date.getTime())) return false;

        return true;
    };

    const validateField = (fieldName, value) => {
        let fieldErrors = '';

        // Lógica de validación para cada campo individual
        if (fieldName === 'name' || fieldName === 'lastNameM' || fieldName === 'lastNameP') {
            if (!value.trim()) {
                fieldErrors = 'Este campo es requerido';
            } else if (value.trim().length < 3) {
                fieldErrors = 'El campo debe tener al menos 3 caracteres';
            } else if (value.trim().length > 16) {
                fieldErrors = 'El campo no debe exceder los 16 caracteres';
            }
        } else if (fieldName === 'birthDate') {
            if (!isValidDate(value)) {
                fieldErrors = 'Ingresa una fecha válida'
            } else {
                const eighteenYears = new Date()
                eighteenYears.setFullYear(eighteenYears.getFullYear() - 18)

                const birthDate = new Date(value)
                if (birthDate > eighteenYears) {
                    fieldErrors = 'Debes tener al menos 18 años de edad'
                }
            }
        } else if (fieldName === 'gender') {
            if (!value) {
                fieldErrors = 'Seleccione un género'
            }
        } else if (fieldName === 'email') {
            if (!validateEmail(value)) {
                fieldErrors = 'Ingresa un correo electrónico válido'
            }
        } else if (fieldName === 'curp') {
            if (!value.trim()) {
                fieldErrors = 'Este campo es requerido';
            } else if (value.trim().length !== 18) {
                fieldErrors = 'El campo debe tener 18 caracteres';
            }
        }

        return fieldErrors;
    };

    const validateForm = () => {
        let errors = {};

        for (const key in formState) {
            const fieldErrors = validateField(key, formState[key]);
            if (fieldErrors) {
                errors[key] = fieldErrors;
            }
        }

        return errors;
    };

    return {
        formState,
        onInputChange,
        updateFormState,
        validateForm,
        isFormSubmitted,
        setIsFormSubmitted,
        setErrors,
        errors
    };
};
