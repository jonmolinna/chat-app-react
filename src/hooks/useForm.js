import { useState } from "react";

const useForm = (initialForm, initialFormFocus) => {
    const [form, setForm] = useState(initialForm);
    const [formFocus, setFormFocus] = useState(initialFormFocus)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setFormFocus({
            ...formFocus,
            [name]: true,
        })
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setFormFocus({
            ...formFocus,
            [name]: false
        })
    }

    return {
        form,
        handleChange,
        handleFocus,
        handleBlur,
        formFocus
    }

}

export default useForm;