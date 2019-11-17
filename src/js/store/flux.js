//const baseUrl = 'http://localhost:3000/api';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			account: {
				username: 'coni',
				password: 'unaclave'
			},
			users: [
				{
					id: 1,
					name: 'Constanza',
					lastname: 'Lastra',
					rut: '17.700.391-3',
					email: 'cflastra@uc.cl',
					username: 'coni',
					password: '12345678'
				},
				{
					id: 2,
					name: 'Juan Manuel',
					lastname: 'Palacios',
					rut: '2.125.743-2',
					email: 'juanma@gmail.com',
					username: 'juanma',
					password: '98765432'
				},
				{
					id: 3,
					name: 'Francisco',
					lastname: 'Martinez',
					rut: '12.485.263',
					email: 'anariak@gmail.com',
					username: 'francisco',
					password: '45612398'
				}
			],
			candidates: [
				{
					userId: 1,
					taskId: 1,
					description: 'La que puede, puede y yo puedo'
				},
				{
					userId: 1,
					taskId: 6,
					description: 'La que puede, puede y yo puedo'
				},
				{
					userId: 2,
					taskId: 2,
					description: 'Soy el más veloz del oeste'
				},
				{
					userId: 3,
					taskId: 2,
					description: 'Soy siempre el mejor, mejor que nadie más'
				}
			],
			tasks: [],
			pastTasks: [
				{
					id: 10,
					userId: 1,
					title: 'Una tarea pasada',
					category: 5,
					description: 'Imagina que soy una tarea',
					location: 'Providencia',
					date: '24/09/2019',
					payment: '10.000',
					hasCandidates: false,
					candidates: []
				}
			],
			allTasks: [
				{
					id: 1,
					userId: 2,
					title: 'Ejemplo de tarea',
					category: 1,
					description: 'Imagina que soy una tarea',
					location: 'Providencia',
					date: '24/11/2019',
					payment: '10.000',
					hasCandidates: true,
					asigned: true,
					asignedTo: 1
				},
				{
					id: 2,
					userId: 1,
					title: 'Yo soy otra tarea',
					category: 2,
					description: 'Imagina que soy una tarea',
					location: 'Las Condes',
					date: '12/12/2019',
					payment: '15.000',
					hasCandidates: true,
					asigned: false,
					asignedTo: ''
				},
				{
					id: 3,
					userId: 4,
					title: 'Una tercera tarea',
					category: 4,
					description: 'Imagina que soy una tarea',
					location: 'Santiago',
					date: '20/11/2019',
					payment: '20.000',
					hasCandidates: false,
					candidates: [],
					asigned: false,
					asignedTo: ''
				},
				{
					id: 4,
					userId: 4,
					title: 'Otra más',
					category: 2,
					description: 'Imagina que soy una tarea',
					location: 'Vitacura',
					date: '15/11/2019',
					payment: '50.000',
					hasCandidates: false,
					candidates: [],
					asigned: false,
					asignedTo: ''
				},
				{
					id: 5,
					userId: 1,
					title: 'Soy la penúltima',
					category: 3,
					description: 'Imagina que soy una tarea',
					location: 'Ñuñoa',
					date: '01/12/2019',
					payment: '12.000',
					hasCandidates: false,
					candidates: [],
					asigned: false,
					asignedTo: ''
				},
				{
					id: 6,
					userId: 2,
					title: 'Fin de los datos',
					category: 3,
					description: 'Imagina que soy una tarea',
					location: 'Santiago',
					date: '20/12/2019',
					payment: '10.000',
					hasCandidates: false,
					candidates: [],
					asigned: false,
					asignedTo: ''
				}
			],
			currentTask: {},
			newTask: {
				id: '',
				title: '',
				category: '',
				description: '',
				location: '',
				date: '',
				payment: ''
			},
			offers: [],
			newOffer: {
				description: '',
				payment: ''
			},
			categories: [
				{
					code: 'home',
					name: 'Hogar',
					id: 1
				},
				{
					code: 'events',
					name: 'Eventos',
					id: 2
				},
				{
					code: 'errands',
					name: 'Trámites',
					id: 3
				},
				{
					code: 'paperwork',
					name: 'Papeleo',
					id: 4
				},
				{
					code: 'crafts',
					name: 'A mano',
					id: 5
				},
				{
					code: 'pets',
					name: 'Mascotas',
					id: 6
				},
				{
					code: 'anything',
					name: 'Otras',
					id: 7
				}
			],
			cities: [
				{
					id: 1,
					name: 'Las Condes'
				},
				{
					id: 2,
					name: 'Providencia'
				},
				{
					id: 3,
					name: 'Santiago'
				},
				{
					id: 4,
					name: 'Ñuñoa'
				},
				{
					id: 5,
					name: 'La Reina'
				},
				{
					id: 6,
					name: 'Vitacura'
				},
				{
					id: 7,
					name: 'Lo Barnechea'
				}
			]
		},
		actions: {
			getCategories: () => {
				let store = getStore();
				let categories = [ ...store.categories ];
				if (categories.length < 8) categories = [ { id: 0, code: 'all', name: 'Todas' }, ...store.categories ];
				setStore({ categories });
			},
			getTask: (id) => {
				const store = getStore();
				let tasks = store.tasks;
				let task = tasks.filter((item) => item.id === id);
				setStore({ currentTask: task });
			},
			getTasks: (category) => {
				/* let url = baseUrl + '/task'
				if (category !== undefined) {
					url = baseUrl + '/task/category/' + category
				} 
				
				fetch(url)
				.then(resp => resp.json())
				.then((data) => {
					setStore({ tasks: data });
				}) */

				//let urlEndpoint = 'api/tasks';
				//const dataJson = require('./data/sample.json');
				const store = getStore();
				setStore({ tasks: store.allTasks });
				let tasks = [ ...store.allTasks ];

				if (category > 0) {
					let filtered = store.allTasks.filter((task) => task.category === category);
					setStore({ tasks: filtered });
					//urlEndpoint += '/category/' + category;
				} else {
					setStore({ tasks });
				}

				/*
				fetch(urlEndpoint).then((resp) => resp.json()).then((data) => {
					setStore({ tasks: data });
				});
				*/
			},
			handleLogin: (state) => {
				let account = state;
				setStore({ account });
			},
			handleTaskSubmit: (state) => {
				let newTask = state;
				let store = getStore();
				let tasks = store.tasks;
				let index = tasks.length + 1;

				newTask = {
					id: index,
					...newTask
				};
				tasks = [ ...tasks, newTask ];

				setStore({ tasks });
			},
			handleOffer: (e) => {
				let store = getStore();
				let newOffer = store.newOffer;

				newOffer[e.currentTarget.name] = e.currentTarget.value;

				setStore({ newOffer });
			},

			handleOfferSubmit: (taskId) => {
				let store = getStore();
				let newOffer = store.newOffer;
				let offers = store.offers;
				newOffer.taskId = taskId;

				offers = [ ...offers, newOffer ];
				setStore({ offers });
			}
		}
	};
};

export default getState;
