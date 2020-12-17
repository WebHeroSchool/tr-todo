import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
	}
	
	componentDidMount() {
		octokit.repos.listForUser({
			username: 'stasokulov',
		}).then(({data}) => console.log(data));
	}
	
	render() {
		const {isLoading} = this.state;
		
		return (
			<h1>{isLoading ? <CircularProgress color="secondary" /> : 'Обо мне'}</h1>
		)
	}
}

export default About;
