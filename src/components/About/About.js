import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		userInfo: [],
	}
	
	componentDidMount() {

		octokit.repos.listForUser({
			username: 'MadMike80',
		}).then(({data}) => {
			this.setState({
				isLoading: false,
				repoList: data,
			})
			// console.log(data);
		});

		octokit.users.getByUsername({
			username: 'MadMike80',
		}).then(({data}) => {
			this.setState({
				isLoading: false,
				userInfo: data,
			})
			console.log(data);
		});

	}
	
	render() {
		const { isLoading, repoList } = this.state;
		
		return (
			<div>
				<h1>{isLoading ? <CircularProgress color="secondary" /> : 'Обо мне'}</h1>
				<ul>
					{ repoList.map( repo => (
						<li key={repo.id}>
							<a href={repo.html_url}>{repo.name}</a>
						</li>))}
				</ul>
			</div>
		)
	}
}

export default About;
