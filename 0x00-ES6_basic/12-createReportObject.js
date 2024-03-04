export default function createReportObject(employeesList) {
  const report = {
    allEmployees: {},
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    }
  };

  // Assuming each employee object has a 'department' property
  for (const employee of Object.values(employeesList)) {
    const { name, department } = employee;

    if (!report.allEmployees[department]) {
      report.allEmployees[department] = [];
    }

    report.allEmployees[department].push(name);
  }

  return report;
}
