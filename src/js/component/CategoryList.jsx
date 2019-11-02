import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';
import Category from './category';
import { Consumer } from '../store/appContext';

import { getIconByCode, listCategories } from '../constants/categories';

const CategoryList = () => {
	let myActions = null;

	const [ categorySelected, setCategorySelected ] = useState(listCategories.all);

	useEffect(() => {
		// COMPONENT DID MOUNT
		if (myActions !== null) {
			myActions.getTasks();
			myActions.getCategories();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="row centered border-bottom">
			<section className="category-list">
				<Consumer>
					{({ store, actions }) => {
						myActions = actions;
						return store.categories.map((category, i) => {
							let classNameCat = 'category-list__icon';
							classNameCat += categorySelected === category.code ? ' active' : '';

							return (
								<div
									icon={category.icon}
									className={classNameCat}
									key={i}
									onClick={(e) => {
										actions.getTasks(category.id);
										setCategorySelected(category.code);
									}}
								>
									<Category category={category.id} icon={getIconByCode(category.code)} />
									<h5>{category.name}</h5>
								</div>
							);
						});
					}}
				</Consumer>
			</section>
		</div>
	);
};

export default CategoryList;
