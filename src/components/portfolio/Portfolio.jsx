import Tabs from './tabs/Tabs.jsx'

import './Portfolio.scss'

export default function Portfolio() {
	return (
		<section className="portfolio">
			<div className="container">

				<div className="portfolio__about">
					<strong className="portfolio__experience">Более 2 лет коммерческого опыта во frontend-разработке.</strong>
					<p className="portfolio__description">Разрабатываю <strong>адаптивные</strong> и <strong>кроссбраузерные интерфейсы</strong>, поддерживаю и дорабатываю существующие проекты, реализую <strong>кастомную JavaScript-логику</strong> по ТЗ и умею быстро разбираться в чужом коде.</p>
					<p className="portfolio__description">Уделяю внимание <strong>производительности</strong> (Google PageSpeed), <strong>семантике</strong>, валидности и чистоте архитектуры.</p>
					<p className="portfolio__description">Использую <strong>инструменты AI</strong> для ускорения разработки, генерации кода и прототипирования интерфейсов.</p>
					<p className="portfolio__description">Часть проектов выполнялась в рамках NDA: отвечал за архитектуру фронтенда, разработку и поддержку ключевых компонентов интерфейса, интеграцию с API и оптимизацию производительности.</p>
					<p className="portfolio__description note">В настоящее время изучаю React (hooks, state, components, базовый routing). Данное портфолио реализовано на React, при разработке использовались AI-инструменты для ускорения работы и поиска оптимальных решений.</p>
				</div>

				<Tabs />
			</div>
		</section>
	)
}