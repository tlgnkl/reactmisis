// HomePage.js
import React from 'react';
import './HomePage.css'; // Импорт стилей CSS для HomePage

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Добро пожаловать в Университет МИСиС</h1>
            <p>Университет МИСиС - это место, где традиции сливаются с инновациями, предоставляя студентам не только качественное образование, но и возможности для научных исследований, творческого развития и международного обмена.</p>
            <h2>Наши преимущества:</h2>
            <ul>
                <li>Современные образовательные программы, соответствующие мировым стандартам.</li>
                <li>Профессиональный преподавательский состав с международным опытом.</li>
                <li>Широкие возможности для научной работы и практического применения знаний.</li>
                <li>Активная студенческая жизнь и поддержка талантливой молодежи.</li>
                <li>Сотрудничество с ведущими мировыми университетами и научными центрами.</li>
            </ul>
        </div>
    );
};

export default HomePage;
