import React from 'react'

export default class Students extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			students: [],
		}
	}

	async componentDidMount() {
		const response = await fetch('/api/students')
		const data = await response.json()
		this.setState({ students: data })
		console.log(data[0])
	}

	render() {
		return (
			<div>
				<ul>
					{this.state.students.map((e) => (
						<li>ID: {Object.values(e).join(' ')}</li>
					))}
				</ul>
			</div>
		)
	}
}
