import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./contact-block.scss";

export default function ContactBlock() {
    const { t } = useTranslation();

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all?fields=cca2,name,flags")
            .then((res) => res.json())
            .then((data) => {
                const result = data
                    .map((c) => ({
                        code: c.cca2,
                        name: c.name.common,
                        flag: c.flags?.svg || c.flags?.png || ""
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));
                setCountries(result);
                setLoading(false);
            })
            .catch(() => {
                setFetchError(t("contact.fetchError"));
                setLoading(false);
            });
    }, [t]);

    const onSubmit = async (data) => {
        try {
            const formatedData = {
                name: data.name + " " + data.surname,
                phone: data.phone,
                email: data.email,
                amount: "more 5000",
                issue_category: "socarinvest",
                message: "0.0.0.0scscscs",
                country: data.country
            };

            await fetch(
                `${process.env.REACT_APP_PROXY_URL}/lead/register-lead-from-brand`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formatedData)
                }
            );

            reset();
        } catch (e) {
            alert(e);
        }
    };

    return (
        <motion.div
            className="contact-block"
            id="contact"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.35 }}
        >
            <h3 className="contact-block__title">{t("contact.title")}</h3>

            <form
                className="contact-block__form"
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <h3 className="contact-block__subtitle">{t("contact.subtitle")}</h3>
                <span className="contact-block__text">{t("contact.text")}</span>

                <Controller
                    name="name"
                    control={control}
                    rules={{ required: t("contact.errors.name") }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={t("contact.fields.name")}
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />

                <Controller
                    name="surname"
                    control={control}
                    rules={{ required: t("contact.errors.surname") }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={t("contact.fields.surname")}
                            variant="outlined"
                            error={!!errors.surname}
                            helperText={errors.surname?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: t("contact.errors.emailRequired"),
                        pattern: { value: /\S+@\S+\.\S+/, message: t("contact.errors.emailInvalid") }
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={t("contact.fields.email")}
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />

                <Controller
                    name="country"
                    control={control}
                    rules={{ required: t("contact.errors.country") }}
                    render={({ field }) => (
                        <Autocomplete
                            {...field}
                            options={countries}
                            loading={loading}
                            getOptionLabel={(option) => option?.name || ""}
                            onChange={(_, value) => field.onChange(value)}
                            isOptionEqualToValue={(opt, val) => opt.code === val.code}
                            renderOption={(props, option) => (
                                <li {...props} key={option.code}>
                                    {option.flag && (
                                        <img
                                            src={option.flag}
                                            alt={option.code}
                                            style={{
                                                width: 18,
                                                marginRight: 7,
                                                borderRadius: 2,
                                                verticalAlign: "middle"
                                            }}
                                        />
                                    )}
                                    {option.name}
                                </li>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={t("contact.fields.country")}
                                    variant="outlined"
                                    error={!!errors.country}
                                    helperText={errors.country?.message}
                                    sx={muiInputStyle}
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {loading ? <CircularProgress color="inherit" size={18} /> : null}
                                                {params.InputProps.endAdornment}
                                            </>
                                        )
                                    }}
                                />
                            )}
                            fullWidth
                            disabled={loading || !!fetchError}
                        />
                    )}
                />
                {fetchError && (
                    <div style={{ color: "#ff4c4c", marginBottom: 10, marginTop: -8 }}>
                        {fetchError}
                    </div>
                )}

                <Controller
                    name="phone"
                    control={control}
                    rules={{ required: t("contact.errors.phone") }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label={t("contact.fields.phone")}
                            variant="outlined"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            fullWidth
                            sx={muiInputStyle}
                        />
                    )}
                />

                <Button
                    type="submit"
                    className="contact-block__submit button"
                    fullWidth
                    sx={{
                        color: "#fff",
                        textTransform: "none",
                        fontSize: 16,
                        background: "#1E59EB",
                        borderRadius: "20px",
                        border: "1px solid #FF71D1"
                    }}
                    disabled={loading || !!fetchError}
                >
                    {t("contact.submit")}
                </Button>

                {isSubmitSuccessful && (
                    <div className="contact-block__success">{t("contact.success")}</div>
                )}
            </form>
        </motion.div>
    );
}

const muiInputStyle = {
    input: {
        color: "#000",
        background: "#FFFFFF33",
        borderRadius: "20px"
    },
    label: { color: "#000" },
    "& .MuiOutlinedInput-root": {
        borderRadius: "20px",
        "& fieldset": {
            borderColor: "#D6D6D6",
            borderWidth: "1.5px"
        },
        "&:hover fieldset": {
            borderColor: "#D6D6D6"
        },
        "&.Mui-focused fieldset": {
            borderColor: "#D6D6D6"
        }
    },
    "& .MuiInputLabel-root": { color: "#000" },
    "& .MuiFormHelperText-root": { color: "#fd532f" },
    borderRadius: "20px",
    mb: 1.2
};
