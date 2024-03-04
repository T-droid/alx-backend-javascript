export default function createEmployeesObject(departmentName, employees) {
	const depObject = {
		[`${departmentName}`]: [employees],
	}
	return depObject;
}
