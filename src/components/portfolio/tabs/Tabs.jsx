import { useEffect, useState } from "react";

import './Tabs.scss'
import { projects } from "../../../data/projects";
import PortfolioCard from "../portfolioCard/PortfolioCard";

export default function Tabs({visibleCount, setVisibleCount}) {
	const [ tab, setTab ] = useState('all');

	const tabs = [
		{ id: 'all', label: 'Все проекты'},
		{ id: 'work', label: 'Коммерческие проекты'},
		{ id: 'train', label: 'Учебные работы'},
		{ id: 'test', label: 'Тестовые задания'},
	];

	// фильтрация проектов
	const filteredProjects = 
		tab === 'all'
		? projects
		: projects.filter(p => p.type === tab);

	// сортировка проектов по priority/id
	const sortedProjects = [...filteredProjects].sort((a, b) => {
		const pa = a.priority ?? -1
		const pb = b.priority ?? -1

		if(pa !== pb) return pb - pa

		return a.id - b.id
	})

	// количество проектов для таба
	const getCount = (type) => {
		if(type === 'all') return projects.length
		return projects.filter(p => p.type === type).length
	}

	// сброс видимых проектов при смене таба
	useEffect(() => {
		setVisibleCount(4);
	}, [tab])

	// кнопка подгрузки проектов
	const handleLoadMore = () => {
		setVisibleCount(prev => Math.min(prev + 4, projects.length))
	}

	return (
		<>
			<h2 className="portfolio__title">Работы</h2>

			<div className="portfolio__tabs">
				{tabs.map(t => (
					<button
						key={t.id}
						className={`portfolio__tab ${tab === t.id ? 'active' : ''}`} 
						onClick={() => setTab(t.id)}
					>
						{t.label} 
						<span>{getCount(t.id)}</span>
					</button>
				))}
			</div>

			<div className="portfolio__list">
				{sortedProjects.slice(0, visibleCount).map(project => (
					<PortfolioCard key={project.id} project={project} />
				))}

				{visibleCount < sortedProjects.length && (
					<button className="portfolio__load-more" onClick={handleLoadMore}>Загрузить еще</button>
				)}
			</div>
		</>
	)
}