app.controller('internsCtrl', function () {
	let vm = this;

	vm.students = [
		{
			id: 1,
			firstName: 'Yurii',
			knowledge: 'Basic'
		}, {
			id: 2,
			firstName: 'Andrii',
			knowledge: 'Upper'
		}, {
			id: 3,
			firstName: 'Anton',
			knowledge: 'Basic'
		}, {
			id: 4,
			firstName: 'Stepan',
			knowledge: 'Upper'
		}, {
			id: 5,
			firstName: 'Volodymyr',
			knowledge: 'Upper'
		}, {
			id: 6,
			firstName: 'Victoria',
			knowledge: 'Upper'
		}, {
			id: 8,
			firstName: 'Pavlo',
			knowledge: 'Basic'
		}, {
			id: 9,
			firstName: 'Vitalii',
			knowledge: 'Upper'
		}, {
			id: 11,
			firstName: 'Orest',
			knowledge: 'Basic'
		}, {
			id: 12,
			firstName: 'Iryna',
			knowledge: 'Upper'
		}, {
			id: 13,
			firstName: 'Orest',
			knowledge: 'Basic'
		}
	];
	vm.removeStudent = function (index) {
		vm.students.splice(index, 1);
	}
})
