import React from 'react';
import { PatikaLogo } from '../constants/icons';
import DoubleBand from './DoubleBand';

const IntroductionPanel = () => {
    return (
        <div id='introduction__panel' className='flex col'>
            <div id='patika__logo'>
                <PatikaLogo size={270} />
            </div>
            <div id='content'>
                <h2>Yazılım Patikaları</h2>
                <p>Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.</p>
            </div>
            <div id="double__band">
                <DoubleBand />
            </div>
        </div>
    );
};

export default IntroductionPanel;