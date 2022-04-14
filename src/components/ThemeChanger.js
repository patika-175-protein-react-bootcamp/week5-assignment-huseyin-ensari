import React, { useState } from 'react';
import { useEffect } from "react";
import { DarkThemeIcon, LightThemeIcon } from '../constants/icons';

const ThemeChanger = ({ theme, handleChange }) => {

    return (
        <div id='theme__changer' onClick={handleChange}>
            {
                theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />
            }
        </div>
    );
};

export default ThemeChanger;