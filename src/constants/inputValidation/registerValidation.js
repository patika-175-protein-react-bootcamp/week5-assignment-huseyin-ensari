import * as yup from "yup";

let schema = yup.object().shape({
    name: yup.string(),
    lastname: yup.string(),
    username: yup
        .string()
        .min(3, "Kullanıcı adı minumum 3 karakter olmalı.")
        .required("Kullanıcı adı zorunlu bir alandır"),
    email: yup
        .string()
        .email("Geçirli bir email giriniz.")
        .required("Email zorunlu bir alandır."),
    password: yup
        .string()
        .required("Şifre zorunlu bir alandır")
        .min(6, "Şifre en az 6 karakterli olmalı."),
    rePassword: yup.string()
        .required("Şifreyi tekrar girmeniz gerekli.")
        .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor'),
    contract: yup.boolean()
        .oneOf([true], "Sözleşmeyi kabul etmeniz gerekli.")
});

export default schema;