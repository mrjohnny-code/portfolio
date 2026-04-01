import Tabs from './tabs/Tabs.jsx'

import './Portfolio.scss'
import { useEffect, useRef, useState } from 'react'

export default function Portfolio() {
	const [visibleCount, setVisibleCount] = useState(6);
	const [showScrollBtn, setShowScrollBtn] = useState(false)

	const portfolioTopRef = useRef(null)

	// клик по кнопке "вверх"
	const handleScrollTop = () => {

		if(window.innerWidth >= 993) {
			portfolioTopRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	// контроллируем состояния кнопки "вверх"
	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.innerWidth >= 993
				? portfolioTopRef.current?.scrollTop || 0
				: window.scrollY
			
			setShowScrollBtn(visibleCount > 4 && scrollPos > 500)
		}

		const target = window.innerWidth >= 993 ? portfolioTopRef.current : window
		if(!target) return

		target.addEventListener('scroll', handleScroll)
		handleScroll()

		return() => target.removeEventListener('scroll', handleScroll)
	}, [visibleCount])

	return (
		<section className="portfolio" ref={portfolioTopRef}>
			<div className="container">

				<div className="portfolio__about">
					<strong className="portfolio__experience">Более 2 лет коммерческого опыта во frontend-разработке.</strong>
					<p className="portfolio__description">Разрабатываю <strong>адаптивные</strong> и <strong>кроссбраузерные интерфейсы</strong>, поддерживаю и дорабатываю существующие проекты, реализую <strong>кастомную JavaScript-логику</strong> по ТЗ и умею быстро разбираться в чужом коде.</p>
					<p className="portfolio__description">Уделяю внимание <strong>производительности</strong> (Google PageSpeed), <strong>семантике</strong>, валидности и чистоте архитектуры.</p>
					<p className="portfolio__description">Использую <strong>инструменты AI</strong> для ускорения разработки, генерации кода и прототипирования интерфейсов.</p>
					<p className="portfolio__description">Часть проектов выполнялась в рамках NDA: отвечал за архитектуру фронтенда, разработку с нуля и поддержку существующих компонентов интерфейса, интеграцию с API и оптимизацию производительности.</p>
					<p className="portfolio__description note">В настоящее время изучаю <strong>React</strong> и <strong>WordPress</strong>. <br/> <a href="https://github.com/mrjohnny-code/portfolio" target='_blank'>Данное портфолио</a> реализовано на React, при разработке использовались AI-инструменты для ускорения работы и поиска оптимальных решений.</p>
				</div>

				<Tabs visibleCount={visibleCount} setVisibleCount={setVisibleCount} />

				<button
					className={`scrolltop_btn ${showScrollBtn ? 'visible' : ''}`}
					onClick={handleScrollTop} 
					aria-label="Scroll top"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z" fill="#000000"/></svg>
				</button>
			</div>
		</section>
	)
}