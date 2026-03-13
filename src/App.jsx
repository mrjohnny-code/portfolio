import Profile from './components/profile/Profile';
import Portfolio from './components/portfolio/Portfolio';
import { profile } from './data/profileData';

export default function App() {
	return (
		<>
			<div className="wrapper">
				<Profile {...profile} />
				<Portfolio />
			</div>
		</>
	)
}