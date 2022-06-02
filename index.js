const employee ={
    name: 'bob',
    streetAddress: '1234 highroad st'
}


function updateEmployeeWithKeyAndValue (employee,key,value) {
    const newObject = {...employee}
      newObject[key] = value
      return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue (obj,key,value) {
     obj[key] = value
     return obj
}

function deleteFromEmployeeByKey (employee, key){
const newEmployee = {...employee}
delete newEmployee[key]
return newEmployee

}

function destructivelyDeleteFromEmployeeByKey (employee, key){
   delete employee[key]
   return employee
    
    }