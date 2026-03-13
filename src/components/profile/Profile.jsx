import './Profile.scss';
import avatarImg from '@/assets/images/avatar.webp';

export default function Profile({ avatar = avatarImg, name, role, contacts, skills }) {
	return (
		<aside className="profile">
			<div className="container">

				<div className="profile__avatar">
					<img src={avatar} alt={`${name} - ${role}`} width={120} height={120} fetchPriority='hight'/>
				</div>

				<div className="profile__content">
					<h2 className="profile__title">{name}</h2>
          			<p className="profile__role">{role}</p>

					<ul className="profile__contacts">
						{contacts.map((c, i) => (
							<li className="profile__contact" key={i}>
								<span className={`profile__contact-label ${c.type}`}>{c.label}</span>
								<a 
									className="profile__contact-link"
									href={c.link}
									target='_blank'
									rel="noopener noreferrer"
								>
									{c.text}
								</a>
							</li>
						))}
					</ul>
					
					<div className="profile__skills">
						<span className="profile__subtitle">Навыки:</span>

						<ul className="profile__skills-list">
							{skills.map((s, i) => (
								<li key={i} className="profile__skill">
									<img 
										className='profile__skill-icon'
										src={s.icon}
										alt={s.name}
										loading='lazy'
										width={25}
										height={25}
									/>
									<span className="profile__skill-name">{s.name}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</aside>
	)
}