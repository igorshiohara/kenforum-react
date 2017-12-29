import React from 'react';
import {Container, Header, Image, Divider} from 'semantic-ui-react';

const HeaderTemplate = ({title}) => {
	return (
		<div>
			<div className="header">
				<Container textAlign='center'>
					<h1>{title}</h1>
				</Container>
				<Container textAlign='right'>
					<Header as='h4'>
						<Image circular src='/assets/images/user.png' />
						{' '}Igor
					</Header>
				</Container>
				<Divider />
			</div>

		</div>
	)
};

export default HeaderTemplate;