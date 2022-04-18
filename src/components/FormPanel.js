import { useFormik } from 'formik';
import React, { useState } from 'react';
import { LightThemeIcon, DarkThemeIcon } from '../constants/icons';
import InputBox from './InputBox';
import registerValidation from '../constants/inputValidation/registerValidation';
import alertify from 'alertifyjs';
import ThemeChanger from './ThemeChanger';

const FormPanel = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            username: "",
            email: "",
            password: "",
            rePassword: "",
            contract: false
        },
        validationSchema: registerValidation,
        onSubmit: inputDatas => {
            setLoading(true);

            setTimeout(() => {
                alertify.set('notifier', 'position', 'top-right');

                alertify.success(`
                KAYIT BAŞARILI
                ${inputDatas.email}
                `);
                setLoading(false);
            }, 1000);
        },
    });


    return (
        <div id='form__panel' className='flex col'>
            <form onSubmit={formik.handleSubmit}>
                <div >
                    <span id='title'>Kayıt</span>
                    <div className='divider'></div>
                </div>
                <div className="flex" id='double__input'>
                    <InputBox text="İSİM" placeholder="İsmini gir"
                        error={formik.errors.name}
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        touched={formik.touched.name}
                    />
                    <InputBox text="SOYİSİM" placeholder="Soyismini gir"
                        error={formik.errors.lastname}
                        name="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        touched={formik.touched.lastname}
                    />
                </div>
                <InputBox text="E-POSTA" placeholder="E-posta adresini gir" isRequired
                    error={formik.errors.email}
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    touched={formik.touched.email}
                />
                <InputBox text="KULLANICI ADI" placeholder="Kullanıcı adını gir" isRequired
                    error={formik.errors.username}
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    touched={formik.touched.username}
                />
                <InputBox text="ŞİFRE" placeholder="Şifreni gir" isRequired
                    error={formik.errors.password}
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    touched={formik.touched.password}
                />
                <InputBox text="ŞİFRENİ TEKRAR GİR" placeholder="Şifreni doğrula" isRequired
                    error={formik.errors.rePassword}
                    name="rePassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.rePassword}
                    touched={formik.touched.rePassword}
                />
                <label className="checkbox__label">
                    <input
                        type="checkbox"
                        name="contract"
                        id="contract"
                        checked={formik.values.contract}
                        onChange={formik.handleChange} />Sözleşmeyi kabul ediyorum.
                    {
                        formik.touched.contract && formik.errors.contract && (
                            <span className='input__error'>{formik.errors.contract}</span>
                        )
                    }

                </label>
                <button id='submit__button' type='submit' disabled={loading}><span>Kayıt Ol </span></button>
            </form>
        </div >
    );
};

export default FormPanel;