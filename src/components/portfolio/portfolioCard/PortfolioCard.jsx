import { useEffect, useRef } from 'react';
import 'photoswipe/style.css'
import PhotoSwipeLightbox from "photoswipe/lightbox";

import './PortfolioCard.scss';

export default function PortfolioCard({ project }) {
	const { title, link, status, role, gallery } = project;
	const galleryRef = useRef(null)
	const lightboxRef = useRef(null)

	const statusMap = {
		online: "Online",
		wp: "Offline (WP-theme backup)",
		gh: "Offline (GitHub backup)"
	}

	useEffect(() => {
		if(!galleryRef.current || lightboxRef.current) return

		const lightbox = new PhotoSwipeLightbox({
			gallery: galleryRef.current,
			children: 'a.pswp-item',
			wheelToZoom: true,
			showAnimationDuration: 250,
			hideAnimationDuration: 250,
			padding: { top: 20, bottom: 20, left: 40, right: 40 },
			pswpModule: () => import('photoswipe')
		})

		lightbox.init()

		return () => lightbox.destroy()
	}, [gallery])

	return (
		<article className="portfolio__card">
			<div className="portfolio__card-gallery pswp-gallery" ref={galleryRef}>
				{gallery.map((img, i) => (
					<a
						key={i}
						className='portfolio__card_image-link pswp-item'
						href={img.full}
						data-pswp-width={img.width}
						data-pswp-height={img.height}
						target='_blank'
					>
						<img
							className='portfolio__card-image'
							src={img.thumb}
							alt={title}
							loading='lazy'
							width={127}
							height={150}
						/>
					</a>
				))}
			</div>

			<a
				className={`portfolio__card-title ${!link ? "no-link" : ""}`}
				href={link || '#'}
				target='_blank'
			>
				{title}
			</a>

			<div className="portfolio__card-meta">
				<span className={`portfolio__card-status ${status !== "online" ? "offline" : ""}`}>
					{statusMap[project.status]}
				</span>

				<span className="portfolio__card-role">
					{role}
					{project.repo && (
						<>
							{" - "}
							<a href={project.repo} target='_blank' rel='noopener noreferrer'>репозиторий</a>
						</>
					)}
				</span>
			</div>
		</article>
	)
}